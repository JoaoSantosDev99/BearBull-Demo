import { useState } from "react";

const ShortTableItemMob = ({ index }) => {
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
          className="px-6 py-4 min-w-[150px] sm:min-w-[280px]"
        >
          <div className="flex flex-col text-start text-[16px] font-semibold">
            <span>Doge Inu</span>
            <span className="text-[#898989]">DINU</span>
          </div>
        </th>
        <th
          scope="row"
          className="px-2 py-4 min-w-[100px] sm:min-w-[280px]"
        >
          <div className="flex flex-col text-start text-[16px] font-semibold">
            <span>$0.002</span>
          </div>
        </th>
        <th
          scope="row"
          className="px-6 py-4 min-w-[160px] sm:min-w-[280px]"
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
          } py-2 text-white w-full flex justify-end px-5 gap-5`}
        >
          {/* short */}
          <div className="w-[160px] h-[53px] rounded-[53px] bg-gradient-to-br from-[#D34253] to-[#3C1217] p-[2px]">
            <div className="flex h-full w-full items-center rounded-[53px] justify-center bg-black">
              <div className="w-full h-full text-[#D34253] rounded-[53px] border-2 border-transparent flex justify-center items-center gap-2 bg-black">
                Close Position
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShortTableItemMob;
