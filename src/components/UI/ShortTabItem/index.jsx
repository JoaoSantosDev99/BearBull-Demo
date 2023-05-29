const ShortTableItem = ({ index }) => {
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
      <td className="px-2 py-4 text-end">$0.002</td>
      <td className="px-2 py-4 text-end">3 BNB</td>
      <td className="px-2 py-4 text-end">+0.659 BNB</td>

      {/* buttons */}
      <td className="px-6 py-4 flex justify-end gap-2">
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

export default ShortTableItem;
