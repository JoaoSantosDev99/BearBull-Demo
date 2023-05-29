import { useState } from "react";
import down from "../../../assets/icons/down.png";
import up from "../../../assets/icons/lend.png";

const TableItemMob = ({ index }) => {
  const [showButtons, setShowButtons] = useState(false);

  return (
    <>
      <tr
        onClick={() => setShowButtons((prevState) => !prevState)}
        className={
          index % 2 !== 0
            ? "bg-black font-semibold text-white"
            : "bg-gradient-to-r from-[#191919] via-[#181818] to-[#000] font-semibold text-white"
        }
      >
        <th
          scope="row"
          className="px-4 py-4 text-left min-w-[130px] sm:min-w-[140px] md:min-w-[170px]"
        >
          <div className="flex flex-col">
            <span>Doge Inu</span>
            <span>DINU</span>
          </div>
        </th>

        <th
          scope="row"
          className="px-4 py-4 min-w-[130px] sm:min-w-[140px] md:min-w-[170px]"
        >
          <div className="flex flex-col items-end">
            <span>$68,346</span>
            <span>-37%</span>
          </div>
        </th>

        <th
          scope="row"
          className="px-4 py-4 min-w-[130px] sm:min-w-[140px] md:min-w-[170px]"
        >
          <div className="flex flex-col items-end">
            <span>24,45%</span>
            <span>16,49%</span>
          </div>
        </th>
      </tr>
      {showButtons && (
        <div
          className={
            index % 2 !== 0
              ? "bg-black font-semibold text-white"
              : "bg-gradient-to-r from-[#191919] via-[#181818] to-[#000] font-semibold text-white"
          }
        >
          {/* short */}
          <div className="w-[180px] h-[53px] rounded-[53px] bg-gradient-to-br from-[#D34253] to-[#3C1217] p-[2px]">
            <div className="flex h-full w-full items-center rounded-[53px] justify-center bg-black">
              <div className="w-full h-full text-[#D34253] rounded-[53px] border-2 border-transparent flex justify-center items-center gap-2 bg-black">
                <img
                  src={down}
                  alt=""
                />{" "}
                Short
              </div>
            </div>
          </div>

          {/* lend */}
          <div className="w-[180px] h-[53px] rounded-[53px] bg-gradient-to-br from-[#28FDD7] to-[#0B453B] p-[2px]">
            <div className="flex h-full w-full items-center rounded-[53px] justify-center bg-black">
              <div className="w-full h-full text-[#28FDD7] rounded-[53px] border-2 border-transparent flex justify-center items-center gap-2 bg-black">
                <img
                  src={up}
                  alt=""
                />{" "}
                Lend
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TableItemMob;
