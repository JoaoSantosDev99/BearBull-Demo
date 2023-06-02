import TableItem from "./components/UI/TableItem";
import TableItemMob from "./components/UI/TableItemMob";
import PreFooter from "./components/PreFooter";
import Hero from "./Hero";

import TokenList from "./constants/Tokens.json";

const Main = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <Hero />
      <div className="max-w-screen-2xl w-full flex flex-col items-center justify-center">
        {/* Header Table */}
        <div className="hidden lg:flex text-white justify-center py-3 mb-2 border-b border-white max-w-[100%] px-2">
          <span className="px-2 w-[100px] text-[18px] font-bold">Name</span>
          <span className="px-2 w-[100px] text-[18px] font-bold">Ticker</span>
          <span className="px-2 w-[150px] text-[18px] font-bold">
            Market Cap
          </span>
          <span className="px-2 w-[120px] text-[18px] font-bold">24h</span>
          <span className="px-2 w-[150px] text-[18px] font-bold">
            Pool Supply
          </span>
          <span className="px-2 w-[150px] text-[18px] font-bold">
            In Orders
          </span>
          <span className="px-2 w-[300px] text-[18px] font-bold"></span>
        </div>

        {/* Table Iteam */}
        <div className="hidden lg:flex">
          {TokenList.map((item, index) => (
            <TableItem
              index={index}
              address={item.address}
              name={item.name}
              ticker={item.ticker}
              key={index}
            />
          ))}
        </div>

        {/* Mobile -------------- */}

        {/* Mobile Header */}
        <div className="lg:hidden flex text-white justify-center py-3 mb-2 max-w-xl w-full px-1">
          <div className="flex w-full flex-col">
            <span className="px-2 py-2 border-b text-[16px] font-bold">
              Name
            </span>
            <span className="px-2 py-2 text-[16px] font-bold">Ticker</span>
          </div>
          <div className="flex w-full flex-col">
            <span className="px-2 py-2 border-b text-[16px] font-bold">
              Market cap
            </span>
            <span className="px-2 py-2 text-[16px] font-bold">24h</span>
          </div>
          <div className="flex w-full flex-col text-end ">
            <span className="px-2 py-2 border-b text-[16px] font-bold">
              Pool Supply
            </span>
            <span className="px-2 py-2 text-[16px] font-bold">In Orders</span>
          </div>
        </div>

        {/* Mobile Item */}
        <div className="lg:hidden px-[4px] flex text-white justify-center mb-20 max-w-xl w-full">
          {TokenList.map((item, index) => (
            <TableItemMob
              index={index}
              address={item.address}
              name={item.name}
              ticker={item.ticker}
              key={index}
            />
          ))}
        </div>

        <PreFooter />
      </div>
    </section>
  );
};

export default Main;
