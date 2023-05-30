import { Link } from "react-router-dom";
import down from "../../../assets/icons/down.png";
import up from "../../../assets/icons/lend.png";

import abi from "../../../contracts/contract.json";
import ercAbi from "../../../contracts/erc-20.json";

import { ethers } from "ethers";
import { useEffect, useState } from "react";

const TableItem = ({ index, name, ticker, address }) => {
  const [inOrd, setInOrd] = useState(0);
  const [pool, setPool] = useState(0);
  const [tsupply, settsupply] = useState(0);

  const contAdd = "0xc58C3B0C7485E1C8f9fEce6B5361D11b98dB2aDF";
  const statProv = new ethers.providers.JsonRpcProvider(
    "https://rpc.ankr.com/bsc"
  );

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
      settsupply(ethers.utils.formatUnits(tsup, 0));
    };

    fetchData();
  }, []);

  return (
    <tr
      className={
        index % 2 === 0
          ? "bg-black font-semibold text-white"
          : "bg-gradient-to-r from-[#191919] via-[#181818] to-[#000] font-semibold text-white"
      }
    >
      <th
        scope="row"
        className="px-6 py-4"
      >
        {name}
      </th>
      <td className="px-6 py-4 text-center">{ticker}</td>
      <td className="px-6 py-4 text-center">$xx,xxx</td>
      <td className="px-6 py-4 text-end">xx%</td>
      <td className="px-6 py-4 text-end">{pool}</td>
      <td className="px-6 py-4">{inOrd}</td>

      {/* buttons */}
      <td className="px-6 py-4 flex gap-2">
        {/* short */}
        <Link to={`/short/${name}`}>
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
        <Link to={`/lend/${name}`}>
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
      </td>
    </tr>
  );
};

export default TableItem;
