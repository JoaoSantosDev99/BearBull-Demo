import footerLogo from "../../assets/Logos/footerLogo.svg";

import tg from "../../assets/icons/tg.svg";
import tw from "../../assets/icons/twtt.svg";
import dk from "../../assets/icons/dk.svg";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#191919] to-black w-full flex justify-center py-16">
      <div className="max-w-screen-2xl w-full flex flex-wrap gap-20 justify-center">
        {/* logo */}
        <div className="flex justify-center px-2 items-center gap-5 md:gap-[44px]">
          <h2>
            <img
              src={footerLogo}
              alt="logo"
              className="w-[120px] h-[120px] md:w-[142px] md:h-[142px]"
            />
          </h2>

          <div className="flex flex-col ">
            <div className="flex flex-col text-[#FFFFFF]">
              <h2 className="font-bold text-[20px] md:text-[32px] mb-1 md:mb-3">
                BearBull DEX
              </h2>
              <p className="font-medium text-[12px] md:text-[16px] max-w-[200px] md:max-w-[300px] w-full">
                The First Decentralized Exchange allowing for Short Trades on
                micro-cap cryptos.
              </p>
            </div>
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

        {/* Columns */}
        <div className="flex justify-start px-7 sm:px-0 flex-wrap gap-[46px] mt-3">
          {/* Coloumn 1 */}
          <div className="flex flex-col">
            <h3 className="text-white text-[20px] md:text-[24px] font-bold mb-2">
              Protocols
            </h3>
            <ul className="flex flex-col text-[#FFFFFF8F]">
              <li className="text-[16px] md:text-[24px] font-normal">
                Shorting Protocol
              </li>
              <li className="text-[16px] md:text-[24px] font-normal">
                Lending Protocol
              </li>
              <li className="text-[16px] md:text-[24px] font-normal">
                Leverage Trade
              </li>
            </ul>
          </div>

          {/* Coloumn 2 */}
          <div className="flex flex-col">
            <h3 className="text-white text-[20px] md:text-[24px] font-bold mb-2">
              DEX
            </h3>
            <ul className="flex flex-col text-[#FFFFFF8F]">
              <li className="text-[16px] md:text-[24px] font-normal">
                BearBull Token
              </li>
              <li className="text-[16px] md:text-[24px] font-normal">
                Launch DEX
              </li>
              <li className="text-[16px] md:text-[24px] font-normal">Earn</li>
            </ul>
          </div>

          {/* Coloumn 3 */}
          <div className="flex flex-col">
            <h3 className="text-white text-[20px] md:text-[24px] font-bold mb-2">
              About
            </h3>
            <ul className="flex flex-col text-[#FFFFFF8F]">
              <li className="text-[16px] md:text-[24px] font-normal">
                Whitepaper
              </li>
              <li className="text-[16px] md:text-[24px] font-normal">GitHub</li>
              <li className="text-[16px] md:text-[24px] font-normal">
                Socials
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
