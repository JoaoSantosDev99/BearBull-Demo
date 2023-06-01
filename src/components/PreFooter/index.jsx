import tg from "../../assets/icons/tg.svg";
import tw from "../../assets/icons/twtt.svg";
import dk from "../../assets/icons/dk.svg";

const PreFooter = () => {
  return (
    <div className="w-full px-10 flex flex-col items-center py-20 bg-black justify-center">
      <spans className="text-center text-[18px] text-[#ffffff] text-opacity-20 font-[500px]">
        Follow us to keep track of the ever-
        <br className="hidden sm:flex" /> expanding list of available
        cryptocurrencies
      </spans>
    </div>
  );
};
export default PreFooter;
