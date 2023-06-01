import footerLogo from "../../assets/Logos/footerLogo.svg";

import tg from "../../assets/icons/tg.svg";
import tw from "../../assets/icons/twtt.svg";
import dk from "../../assets/icons/dk.svg";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#191919] to-black w-full flex justify-center py-16">
      <div className="max-w-screen-2xl w-full flex items-start flex-wrap gap-4 md:gap-10 justify-center">
        {/* logo */}
        <div className="flex justify-center px-2 items-start gap-5">
          <h2>
            <img
              src={footerLogo}
              alt="logo"
              className="w-[100px] h-[100px] md:w-[120px] md:h-[120px]"
            />
          </h2>

          <div className="flex flex-col">
            <div className="flex flex-col text-[#FFFFFF]">
              <h2 className="font-bold text-[14px] md:text-[20px] mb-1 md:mb-3">
                BearBull DEX
              </h2>
              <p className="font-medium text-[12px] md:text-[15px] max-w-[150px] md:max-w-[280px] w-full">
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
        <div className="flex justify-center px-7 sm:px-0 flex-wrap gap-5 sm:gap-10">
          {/* Coloumn 1 */}
          <div className="flex flex-col">
            <h3 className="text-white text-[14px] md:text-[18px] font-bold mb-2">
              Protocols
            </h3>
            <ul className="flex flex-col text-[#FFFFFF8F]">
              <li className="text-[12px] md:text-[18px] font-normal">
                Shorting Protocol
              </li>
              <li className="text-[12px] md:text-[18px] font-normal">
                Lending Protocol
              </li>
            </ul>
          </div>

          {/* Coloumn 2 */}
          <div className="flex flex-col">
            <h3 className="text-white text-[14px] md:text-[18px] font-bold mb-2">
              DEX
            </h3>
            <ul className="flex flex-col text-[#FFFFFF8F]">
              <li className="text-[12px] md:text-[18px] font-normal">
                BearBull Token
              </li>
              <li className="text-[12px] md:text-[18px] font-normal">
                Launch DEX
              </li>
              <li className="text-[12px] md:text-[18px] font-normal">Earn</li>
            </ul>
          </div>

          {/* Coloumn 3 */}
          <div className="flex flex-col">
            <h3 className="text-white text-[14px] md:text-[18px] font-bold mb-2">
              About
            </h3>
            <ul className="flex flex-col text-[#FFFFFF8F]">
              <li className="text-[12px] md:text-[18px] font-normal">
                Whitepaper
              </li>
              <li className="text-[12px] md:text-[18px] font-normal">GitHub</li>
              <li className="text-[12px] md:text-[18px] font-normal">
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
