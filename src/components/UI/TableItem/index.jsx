import { Link } from "react-router-dom";
import down from "../../../assets/icons/down.png";
import up from "../../../assets/icons/lend.png";

import abi from "../../../contracts/contract.json";
import ercAbi from "../../../contracts/erc-20.json";

import { ethers } from "ethers";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/appContext";
import { fiveDecimals, formatCommas, twoDecimals } from "../../../utils";
import Tokens from "../../../constants/Tokens.json";
import axios from "axios";

const TableItem = ({ index, name, ticker, address, contractAdd }) => {
  const [inOrd, setInOrd] = useState(0);
  const [pool, setPool] = useState(0);
  const [tsupply, settsupply] = useState(0);
  const [price, setPrice] = useState(0);
  const [priceChange, setPriceChange] = useState(0);

  const { statProv } = useContext(AppContext);

  const contAdd = contractAdd;
  const tokenTest = address;
  const readTokContract = new ethers.Contract(tokenTest, ercAbi, statProv);

  const readContract = new ethers.Contract(contAdd, abi, statProv);

  useEffect(() => {
    const fetchData = async () => {
      const inOrdFt = await readContract.tokensInShorts();
      const poolFt = await readContract.totalLent();

      setInOrd(ethers.utils.formatUnits(inOrdFt, 0));
      setPool(ethers.utils.formatUnits(poolFt, 0));

      const tsup = await readTokContract.totalSupply();
      settsupply(ethers.utils.formatUnits(tsup, 18));

      const info = await axios.get(
        `https://bearbullapi.onrender.com/token/${Tokens[index].address}`
      );

      setPrice(fiveDecimals(info.data.currentPrice));
      setPriceChange(fiveDecimals(info.data.priceChange24));
    };

    fetchData();
  }, []);

  return (
    <div
      className={
        index % 2 === 0
          ? "bg-gradient-to-r from-[#191919] via-[#181818] to-[#000] hidden lg:flex items-center text-white justify-center py-3 max-w-screen-xl px-2"
          : "hidden lg:flex items-center text-white justify-center py-3 max-w-screen-xl px-2"
      }
    >
      <span className="px-2 w-[100px] text-[18px] font-normal">{name}</span>
      <span className="px-2 w-[100px] text-[18px] font-normal">${ticker}</span>
      <span className="px-2 w-[150px] text-[18px] font-normal">
        {price ? formatCommas(price * tsupply) : "Loading"}
      </span>
      <span className="px-2 w-[120px] text-[18px] font-normal">
        {priceChange ? (
          twoDecimals(priceChange * 100)
            .toString()
            .indexOf("-") === -1 ? (
            <span className="text-[#36dd11]">
              {twoDecimals(priceChange * 100)}%
            </span>
          ) : (
            <span className="text-[#dd1f11]">
              {twoDecimals(priceChange * 100)}%
            </span>
          )
        ) : (
          <span>Loading</span>
        )}
      </span>

      <span className="px-2 w-[150px] text-[18px] font-normal">
        {fiveDecimals(pool / tsupply)}%
      </span>
      <span className="px-2 w-[150px] text-[18px] font-normal">
        {fiveDecimals(inOrd / pool)}%
      </span>
      <span className="px-2 w-[300px] text-[18px] font-normal flex justify-end gap-2">
        {/* short */}
        <Link to={`/short/${index}`}>
          <button className="w-[125px] h-[53px] rounded-[53px] bg-gradient-to-br from-[#D34253] to-[#3C1217] p-[2px]">
            <div className="flex h-full w-full items-center rounded-[53px] justify-center bg-black">
              <div className="w-full h-full active:text-white active:bg-[#822e38b3] text-[#D34253] rounded-[53px] border-2 border-transparent flex justify-center items-center gap-2 bg-black">
                <img
                  src={down}
                  alt=""
                />{" "}
                Short
              </div>
            </div>
          </button>
        </Link>

        {/* lend */}
        <Link to={`/lend/${index}`}>
          <button className="w-[125px] h-[53px] rounded-[53px] bg-gradient-to-br from-[#28FDD7] to-[#0B453B] p-[2px]">
            <div className="flex h-full w-full items-center rounded-[53px] justify-center bg-black">
              <div className="w-full h-full active:text-black active:bg-[#1aa38a] text-[#28FDD7] rounded-[53px] border-2 border-transparent flex justify-center items-center gap-2 bg-black">
                <img
                  src={up}
                  alt=""
                />{" "}
                Lend
              </div>
            </div>
          </button>
        </Link>
      </span>
    </div>
  );
};

export default TableItem;
