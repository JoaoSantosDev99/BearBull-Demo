import { Link } from "react-router-dom";

const LendTableItem = ({ index }) => {
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
      <td className="px-6 py-4 text-end">17,452</td>
      <td className="px-6 py-4 text-end">$68,346</td>

      {/* buttons */}
      <td className="px-6 py-4 flex justify-end gap-2">
        {/* lend */}
        <button className="w-[180px] h-[53px] rounded-[53px] bg-gradient-to-br from-[#28FDD7] to-[#0B453B] p-[2px]">
          <div className="flex h-full w-full items-center rounded-[53px] justify-center bg-black">
            <div className="w-full h-full text-[#28FDD7] rounded-[53px] border-2 border-transparent flex justify-center items-center gap-2 bg-black">
              Claim Rewards
            </div>
          </div>
        </button>

        {/* short */}
        <button className="w-[180px] h-[53px] rounded-[53px] bg-gradient-to-br from-[#D34253] to-[#3C1217] p-[2px]">
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
