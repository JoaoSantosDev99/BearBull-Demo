import { Link } from "react-router-dom";
import down from "../../../assets/icons/down.png";
import up from "../../../assets/icons/lend.png";

const TableItem = ({ index }) => {
  const data = "test";
  return (
    <tr
      className={`bg-${
        index % 2 !== 0
          ? "black"
          : "gradient-to-r from-[#191919] via-[#181818] to-[#000]"
      } font-semibold text-white`}
    >
      <th
        scope="row"
        className="px-6 py-4"
      >
        Doge Inu
      </th>
      <td className="px-6 py-4">DINU</td>
      <td className="px-6 py-4">$68,346</td>
      <td className="px-6 py-4 text-end">-37%</td>
      <td className="px-6 py-4 text-end">24,45%</td>
      <td className="px-6 py-4">16,49%</td>

      {/* buttons */}
      <td className="px-6 py-4 flex gap-2">
        {/* short */}
        <Link to={`/short/doge`}>
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
        <Link to={`/lend/${data}`}>
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
