import { useParams } from "react-router-dom";

const LendTableItem = ({
  index,
  name,
  amount,
  endTime,
  close,
  block,
  ticker,
}) => {
  // window.scrollTo({ top: 0 });
  const { id } = useParams();

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
    <tr
      className={
        index % 2 !== 0
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
      <td className="px-6 py-4 text-end">
        {amount === "0" ? "_" : amount} ${ticker}
      </td>
      <td className="px-6 py-4 text-end">
        {endTime === "0"
          ? "_"
          : block === 1337
          ? "Loading"
          : formatTime(endTime - block)}
      </td>

      {/* buttons */}
      <td className="px-6 py-4 flex justify-end gap-2">
        {/* lend */}
        {/* <button className="w-[180px] h-[53px] rounded-[53px] bg-gradient-to-br from-[#28FDD7] to-[#0B453B] p-[2px]">
          <div className="flex h-full w-full items-center rounded-[53px] justify-center bg-black">
            <div className="w-full h-full text-[#28FDD7] rounded-[53px] border-2 border-transparent flex justify-center items-center gap-2 bg-black">
              Claim Rewards
            </div>
          </div>
        </button> */}

        {/* short */}
        <button
          onClick={close}
          className="w-[180px] h-[53px] rounded-[53px] bg-gradient-to-br from-[#D34253] to-[#3C1217] p-[2px]"
        >
          <div className="flex h-full w-full items-center rounded-[53px] justify-center bg-black">
            <div className="w-full h-full text-[#D34253] rounded-[53px] border-2 border-transparent flex justify-center items-center gap-2 bg-black">
              Close Position
            </div>
          </div>
        </button>
      </td>
    </tr>
  );
};

export default LendTableItem;
