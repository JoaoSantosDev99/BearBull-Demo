import tg from "./assets/icons/tg.svg";
import tw from "./assets/icons/twtt.svg";
import dk from "./assets/icons/dk.svg";
import wallet from "./assets/icons/wallet.png";

const Hero = () => {
  return (
    <section className="bg-center bg-cover bg-no-repeat bg-[url('./assets/main.jpg')] pb-64 w-full flex justify-center">
      <div className="max-w-screen-2xl w-full px-7 md:px-6">
        {/* Title */}
        <div className="text-white flex flex-col mt-44 md:mt-96">
          <h2 className="font-bold leading-[43px] md:leading-snug mt-20 md:mt-0 text-[50px] md:text-[115px]">
            BearBull <br className="md:hidden" /> Protocol
          </h2>
          <span className="font-normal mt-3 md:mt-0 text-[16px] md:text-[24px]">
            We double your profit opportunities. Lend or short any low cap
            crypto!
          </span>
        </div>

        {/* Connect */}
        <div className="flex flex-col items-start md:flex-row md:items-center flex-wrap gap-5 md:gap-10 mt-5 md:mt-20">
          <button className="flex gap-4 justify-center items-center bg-white w-[233px] md:w-[293px] font-bold text-[20px] md:text-[24px] h-[61px]">
            Connect Wallet
            <img
              src={wallet}
              alt=""
              className="mb-2"
            />
          </button>
          {/* icons */}
          <div className="flex">
            <img
              src={tg}
              alt=""
              className="w-[40px] h-[40px]"
            />
            <img
              src={tw}
              alt=""
              className="w-[42px] h-[42px]"
            />
            <img
              src={dk}
              alt=""
              className="w-[42px] h-[42px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
