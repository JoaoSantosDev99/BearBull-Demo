import { useState } from "react";

const ShortTableItemMob = ({
  index,
  name,
  amount,
  startTime,
  riskTol,
  close,
  block,
  ticker,
}) => {
  const [showButtons, setShowButtons] = useState(false);
  const formatTime = (time) => {
    const total = Number(time);
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = Math.floor((total % 3600) % 60);

    const hDisplay = h > 0 ? h + (h === 1 ? " h, " : " h, ") : "";
    const mDisplay = m > 0 ? m + (m === 1 ? " min, " : " min, ") : "";
    const sDisplay = s > 0 ? s + (s === 1 ? " s" : " s") : "";
    return hDisplay + mDisplay + sDisplay;
  };
  return (
    <>
      <div
        onClick={() => setShowButtons((e) => !e)}
        className={
          index % 2 !== 0
            ? "bg-black mt-2 flex font-semibold text-white w-[385px] sm:w-[420px]"
            : "bg-gradient-to-r mt-2 flex from-[#191919] w-[385px] sm:w-[420px] via-[#181818] to-[#000] font-semibold text-white"
        }
      >
        {/* Name/amount */}
        <div className="px-2 w-full py-4">
          <div className="flex flex-col text-start text-[16px] font-semibold">
            <span>{name}</span>
            <span className="text-[#898989]">
              {amount === "0" ? "__" : amount} {ticker}
            </span>
          </div>
        </div>

        {/* start/risk */}
        <div className="px-2 w-full py-4">
          <div className="flex w-auto flex-col text-end text-[16px] font-semibold">
            <span>
              {" "}
              {block === 1337
                ? "Loading"
                : startTime === "0"
                ? "__"
                : formatTime(block - startTime) + " ago"}
            </span>
            <span>{riskTol === "0" ? "__" : riskTol}%</span>
          </div>
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
