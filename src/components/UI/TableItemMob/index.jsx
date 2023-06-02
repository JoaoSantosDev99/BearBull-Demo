import { useContext, useEffect, useState } from "react";
import down from "../../../assets/icons/down.png";
import up from "../../../assets/icons/lend.png";
import { Link } from "react-router-dom";
import { ethers } from "ethers";

import abi from "../../../contracts/contract.json";
import ercAbi from "../../../contracts/erc-20.json";
import { AppContext } from "../../../context/appContext";
import { fiveDecimals } from "../../../utils";

const TableItemMob = ({ index, name, ticker, contractAdd, address }) => {
  const [showButtons, setShowButtons] = useState(false);

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
    <div className="flex flex-col w-full">
      <div
        className={
          index % 2 === 0
            ? "w-full py-3 flex bg-gradient-to-r from-[#191919] via-[#181818] to-[#000]"
            : "w-full py-3 flex"
        }
        onClick={() => setShowButtons((prevState) => !prevState)}
      >
        <div className="flex w-full flex-col">
          <span className="px-2 text-[16px] font-bold">{name}</span>
          <span className="px-2 text-[16px] opacity-30 uppercase font-bold">
            {ticker}
          </span>
        </div>
        <div className="flex w-full flex-col">
          <span className="px-2 text-[16px] font-bold">__,___</span>
          <span className="px-2 text-[16px] font-bold">+__%</span>
        </div>
        <div className="flex w-full flex-col text-end">
          <span className="px-2 text-[16px] font-bold">
            {fiveDecimals(pool / tsupply)}%
          </span>
          <span className="px-2 text-[16px] font-bold">
            {fiveDecimals(inOrd / pool)}%
          </span>
        </div>
      </div>

      {showButtons && (
        <div
          className={
            index % 2 !== 0
              ? "bg-black flex justify-center py-3 gap-5 font-semibold text-white"
              : "bg-gradient-to-r py-3 flex justify-center gap-5 from-[#191919] via-[#181818] to-[#000] font-semibold text-white"
          }
        >
          {/* short */}
          <Link to={`/short/${index}`}>
            <div className="w-[180px] h-[53px] rounded-[53px] bg-gradient-to-br from-[#D34253] to-[#3C1217] p-[2px]">
              <div className="flex h-full w-full items-center rounded-[53px] justify-center bg-black">
                <div className="w-full active:text-white active:bg-[#822e38b3] h-full text-[#D34253] rounded-[53px] border-2 border-transparent flex justify-center items-center gap-2 bg-black">
                  <img
                    src={down}
                    alt=""
                  />{" "}
                  Short
                </div>
              </div>
            </div>
          </Link>

          {/* lend */}
          <Link to={`/lend/${index}`}>
            <div className="w-[180px] h-[53px] rounded-[53px] bg-gradient-to-br from-[#28FDD7] to-[#0B453B] p-[2px]">
              <div className="flex h-full w-full items-center rounded-[53px] justify-center bg-black">
                <div className="w-full h-full text-[#28FDD7] active:bg-[#1aa38a] text-[#28FDD7] rounded-[53px] border-2 border-transparent flex justify-center items-center gap-2 bg-black">
                  <img
                    src={up}
                    alt=""
                  />{" "}
                  Lend
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TableItemMob;
