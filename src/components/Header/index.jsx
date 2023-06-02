import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";
import { addressShortener } from "../../utils";
import { useState } from "react";

import logo from "../../assets/Logos/footerLogo.svg";
import haburger from "../../assets/icons/mobile.png";
import close from "../../assets/icons/close.png";
import home from "../../assets/icons/home.png";
import pancake from "../../assets/icons/pancake.png";

import tg from "../../assets/icons/tg.svg";
import tw from "../../assets/icons/twtt.svg";
import dk from "../../assets/icons/dk.svg";

const Header = () => {
  const [nav, setNav] = useState(false);
  const { open } = useWeb3Modal();
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();
  const { address, isConnected } = useAccount();

  const handleNav = () => {
    setNav((p) => !p);
  };

  const connectWallet = () => {
    if (isConnected) return;

    if (chain?.id !== 56) {
      switchNetwork?.(56);
    }

    try {
      open();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="w-full absolute top-0 flex justify-center">
      <div className="flex max-w-screen-2xl px-3 py-4 w-full justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-[20px]">
          <h1>
            <img
              src={logo}
              alt="log"
              className=" h-[60px] w-[60px] lg:w-[90px] lg:h-[90px]"
            />
          </h1>
          <span className="text-white font-bold text-[20px] lg:text-[32px] leading-[80%] ">
            BearBull
            <br /> DEX
          </span>
        </div>

        {/* Text links */}
        <div className="hidden lg:flex gap-2">
          {/* Price */}
          <div className="flex">
            <a
              href="https://bearbull.finance/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="h-[50px] mr-1 flex justify-center items-center text-white w-[70px] border-white border-[3px] font-semibold text-[20px]">
                <img
                  src={home}
                  alt=""
                  className="w-8 h-8"
                />
              </button>
            </a>
            <a
              href="https://pancakeswap.finance/swap?outputCurrency=0x4F0F2fA439C6454B4664f3C4432514Ec07c1bC28&inputCurrency=BNB"
              target="_blank"
              rel="noreferrer"
              className="flex"
            >
              <button className="h-[50px] w-[162px] bg-white font-bold text-[20px]">
                Buy BBT
              </button>
              <button className="h-[50px] bg-black flex justify-center items-center text-white  w-[90px] border-white border-[3px] font-semibold text-[20px]">
                <img
                  src={pancake}
                  alt=""
                  className="w-8 h-8"
                />
              </button>
            </a>
          </div>

          {/* Connect */}
          <button
            onClick={connectWallet}
            className="flex gap-4 justify-center items-center bg-white w-[180px] md:w-[200px] font-bold text-[20px] h-[50px]"
          >
            {isConnected ? addressShortener(address) : "Connect Wallet"}
          </button>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setNav(true)}
          className="lg:hidden mb-4"
        >
          <img
            src={haburger}
            alt=""
          />
        </button>

        {/* Mobile menu */}
        <div
          className={
            nav
              ? "xl:hidden fixed z-50 right-0 top-0 w-full h-screen drop-shadow-2xl "
              : "hidden"
          }
        >
          <div
            className={
              nav
                ? "bg-[#000000] fixed z-10 flex transition-all flex-col justify-between right-0 bottom-0 top-0 w-[100%] sm:w-[60%] md:w-[45%] h-screen text-white px-8 py-10 ease-in duration-500"
                : "fixed right-[-130%] top-0 p-10 transition-all ease-in duration-500"
            }
          >
            <div className="flex flex-col w-full h-screen items-center justify-start">
              {/* mobile logo */}
              <div className="flex justify-between items-center w-full mb-5">
                <div className="flex items-center gap-[10px]">
                  <h1>
                    <img
                      src={logo}
                      alt="log"
                      className="xl:h-[142px] h-[72px] w-[72px] xl:w-[142px]"
                    />
                  </h1>
                  <span className="text-white font-bold text-[20px] xl:text-[32px] leading-[80%] ">
                    BearBull
                    <br /> DEX
                  </span>
                </div>

                <div onClick={handleNav}>
                  <img
                    src={close}
                    alt=""
                  />
                </div>
              </div>

              {/* Connect */}
              <button
                onClick={connectWallet}
                className="flex gap-4 text-black mt-10 justify-center items-center bg-white w-[180px] md:w-[200px] font-bold text-[20px] h-[50px]"
              >
                {isConnected ? addressShortener(address) : "Connect Wallet"}
              </button>
              <a
                href="https://bearbull.finance/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="h-[50px] gap-4 mt-5 mr-1 flex justify-center items-center text-white px-3 border-white border-[3px] font-semibold text-[20px]">
                  <img
                    src={home}
                    alt=""
                    className="w-8 h-8"
                  />{" "}
                  Home page
                </button>
              </a>

              <ul className="flex flex-col mt-7 font-bold text-xl gap-4 items-center">
                <li>About</li>
                <a
                  href="https://bearbull-dex.gitbook.io/whitepaper"
                  target="_blank"
                  rel="noreferrer"
                >
                  <li>Whitepaper</li>
                </a>

                <li>GitHub</li>

                <a
                  href="https://linktr.ee/bearbulldex"
                  target="_blank"
                  rel="noreferrer"
                >
                  <li>Socials</li>
                </a>
              </ul>

              {/* Price */}
              <a
                href="https://pancakeswap.finance/swap?outputCurrency=0x4F0F2fA439C6454B4664f3C4432514Ec07c1bC28&inputCurrency=BNB"
                target="_blank"
                rel="noreferrer"
                className="flex"
              >
                <div className="flex mt-16">
                  <button className="h-[50px] text-black w-[162px] bg-white font-bold text-[20px]">
                    Buy BBT
                  </button>
                  <button className="h-[50px] bg-black flex justify-center items-center text-white  w-[90px] border-white border-[3px] font-semibold text-[20px]">
                    <img
                      src={pancake}
                      alt=""
                      className="w-8 h-8"
                    />
                  </button>
                </div>
              </a>

              {/* Social Media */}
              <div className="flex mt-10">
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
        </div>
      </div>
    </header>
  );
};

export default Header;
