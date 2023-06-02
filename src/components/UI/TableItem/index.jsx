import { Link } from "react-router-dom";
import down from "../../../assets/icons/down.png";
import up from "../../../assets/icons/lend.png";

import abi from "../../../contracts/contract.json";
import ercAbi from "../../../contracts/erc-20.json";

import { ethers } from "ethers";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/appContext";
import { fiveDecimals } from "../../../utils";

const TableItem = ({ index, name, ticker, address, contractAdd }) => {
  const [inOrd, setInOrd] = useState(0);
  const [pool, setPool] = useState(0);
  const [tsupply, settsupply] = useState(0);

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
    };

    fetchData();
  }, []);

  return (
    <div
      className={
        index % 2 === 0
          ? "bg-gradient-to-r from-[#191919] via-[#181818] to-[#000] hidden lg:flex items-center text-white justify-center py-3 mb-20 max-w-screen-xl px-2"
          : "hidden lg:flex items-center text-white justify-center py-3 mb-20 max-w-screen-xl px-2"
      }
    >
      <span className="px-2 w-[100px] text-[18px] font-normal">{name}</span>
      <span className="px-2 w-[100px] text-[18px] font-normal">${ticker}</span>
      <span className="px-2 w-[150px] text-[18px] font-normal">__,___</span>
      <span className="px-2 w-[120px] text-[18px] font-normal">__%</span>
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
              <div className="w-full h-full text-[#D34253] rounded-[53px] border-2 border-transparent flex justify-center items-center gap-2 bg-black">
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
              <div className="w-full h-full text-[#28FDD7] rounded-[53px] border-2 border-transparent flex justify-center items-center gap-2 bg-black">
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
