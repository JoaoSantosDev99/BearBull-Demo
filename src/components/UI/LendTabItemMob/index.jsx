import { Link } from "react-router-dom";
import { useState } from "react";

const LendTableItemMob = ({ index }) => {
  const data = "test";
  const [showButtons, setShowButtons] = useState(false);

  return (
    <>
      <tr
        onClick={() => setShowButtons((e) => !e)}
        className={`bg-${
          index % 2 !== 0
            ? "black"
            : "gradient-to-r from-[#191919] via-[#181818] to-[#000]"
        } font-semibold text-white`}
      >
        <th
          scope="row"
          className="px-6 py-4 min-w-[190px] sm:min-w-[280px]"
        >
          <div className="flex flex-col text-start text-[16px] font-semibold">
            <span>Doge Inu</span>
            <span className="text-[#898989]">DINU</span>
          </div>
        </th>
        <th
          scope="row"
          className="px-6 py-4 min-w-[190px] sm:min-w-[280px]"
        >
          <div className="flex flex-col text-end text-[16px] font-semibold">
            <span>127,152</span>
            <span>0,00229 BNB</span>
          </div>
        </th>
      </tr>

      {showButtons && (
        <div
          className={`bg-${
            index % 2 !== 0
              ? "black"
              : "gradient-to-r from-[#191919] via-[#181818] to-[#000]"
          } py-2 text-white w-full flex justify-center gap-5`}
        >
          {/* lend */}
          <div className="w-[160px] h-[53px] rounded-[53px] bg-gradient-to-br from-[#28FDD7] to-[#0B453B] p-[2px]">
            <div className="flex h-full w-full items-center rounded-[53px] justify-center bg-black">
              <div className="w-full h-full text-[#28FDD7] rounded-[53px] border-2 border-transparent flex justify-center items-center gap-2 bg-black">
                Close Position
              </div>
            </div>
          </div>

          {/* short */}
          <div className="w-[160px] h-[53px] rounded-[53px] bg-gradient-to-br from-[#D34253] to-[#3C1217] p-[2px]">
            <div className="flex h-full w-full items-center rounded-[53px] justify-center bg-black">
              <div className="w-full h-full text-[#D34253] rounded-[53px] border-2 border-transparent flex justify-center items-center gap-2 bg-black">
                Claim Rewards
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LendTableItemMob;