import { useState } from "react";

const LendTableItemMob = ({
  index,
  block,
  amount,
  name,
  close,
  endTime,
  claim,
  rewards,
}) => {
  const [showButtons, setShowButtons] = useState(false);

  const formatTime = (time) => {
    const total = Number(time);
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = Math.floor((total % 3600) % 60);

    const hDisplay = h > 0 ? h + (h === 1 ? " h, " : " h, ") : "";
    const mDisplay = m > 0 ? m + (m === 1 ? " min, " : " min, ") : "";
    const sDisplay = s > 0 ? s + (s === 1 ? " s" : " s") : "Finished!";
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
        <div className="px-2 flex flex-col w-full py-4">
          <span>{name}</span>
          <span className="text-[#898989]">
            {amount === "0" ? "_" : amount}
          </span>
        </div>

        {/* endtime */}
        <div className="px-2 flex flex-col text-end w-full py-4">
          <span className="text-[#898989]">
            {endTime === "0"
              ? "_"
              : block === 1337
              ? "Loading"
              : formatTime(endTime - block)}{" "}
          </span>
          <span className="text-[#898989]">
            {rewards === 0 || rewards === "0" ? "__" : rewards}
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
          {/* claim */}
          <div
            onClick={claim}
            className="w-[160px] h-[53px] rounded-[53px] bg-gradient-to-br from-[#28FDD7] to-[#0B453B] p-[2px]"
          >
            <div className="flex h-full w-full items-center rounded-[53px] justify-center bg-black">
              <div className="w-full h-full text-[#28FDD7] rounded-[53px] border-2 border-transparent flex justify-center items-center gap-2 bg-black">
                Cliaim Rewards
              </div>
            </div>
          </div>

          {/* withdraw */}
          <div
            onClick={close}
            className="w-[180px] h-[53px] rounded-[53px] bg-gradient-to-br from-[#28FDD7] to-[#0B453B] p-[2px]"
          >
            <div className="flex h-full w-full items-center rounded-[53px] justify-center bg-black">
              <div className="w-full h-full text-[#28FDD7] rounded-[53px] border-2 border-transparent flex justify-center items-center gap-2 bg-black">
                Withdraw Tokens
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LendTableItemMob;
