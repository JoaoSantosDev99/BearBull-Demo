import footerLogo from "../../assets/Logos/footerLogo.svg";

import tg from "../../assets/icons/tg.svg";
import tw from "../../assets/icons/twtt.svg";
import dk from "../../assets/icons/dk.svg";
import { Link } from "react-router-dom";

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
              <a
                href="https://t.me/bearbullchat"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={tg}
                  alt=""
                  className="w-[40px] h-[40px]"
                />
              </a>

              <a
                href="https://twitter.com/BearBullToken"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={tw}
                  alt=""
                  className="w-[42px] h-[42px]"
                />
              </a>

              <a
                href="https://linktr.ee/bearbulldex"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={dk}
                  alt=""
                  className="w-[42px] h-[42px]"
                />
              </a>
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
              <Link to="short/0">
                <li className="text-[12px] md:text-[18px] font-normal">
                  Shorting Protocol
                </li>
              </Link>

              <Link to="/lend/0">
                <li className="text-[12px] md:text-[18px] font-normal">
                  Lending Protocol
                </li>
              </Link>
            </ul>
          </div>

          {/* Coloumn 2 */}
          <div className="flex flex-col">
            <h3 className="text-white text-[14px] md:text-[18px] font-bold mb-2">
              DEX
            </h3>
            <ul className="flex flex-col text-[#FFFFFF8F]">
              <a
                href="https://pancakeswap.finance/swap?outputCurrency=0x4F0F2fA439C6454B4664f3C4432514Ec07c1bC28"
                target="_blank"
                rel="noreferrer"
              >
                <li className="text-[12px] md:text-[18px] font-normal">
                  BearBull Token
                </li>
              </a>

              <li className="text-[12px] md:text-[18px] font-normal">
                Launch DEX
              </li>

              <a
                href="https://bearbullstaking.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <li className="text-[12px] md:text-[18px] font-normal">Earn</li>
              </a>
            </ul>
          </div>

          {/* Coloumn 3 */}
          <div className="flex flex-col">
            <h3 className="text-white text-[14px] md:text-[18px] font-bold mb-2">
              About
            </h3>
            <ul className="flex flex-col text-[#FFFFFF8F]">
              <a
                href="https://bearbull-dex.gitbook.io/whitepaper"
                target="_blank"
                rel="noreferrer"
              >
                <li className="text-[12px] md:text-[18px] font-normal">
                  Whitepaper
                </li>
              </a>
              <li className="text-[12px] md:text-[18px] font-normal">GitHub</li>

              <a
                href="https://linktr.ee/bearbulldex"
                target="_blank"
                rel="noreferrer"
              >
                <li className="text-[12px] md:text-[18px] font-normal">
                  Socials
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
