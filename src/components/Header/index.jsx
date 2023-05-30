import { useWeb3Modal } from "@web3modal/react";
import { Link, NavLink } from "react-router-dom";
import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";
import { addressShortener } from "../../utils";
import { useEffect } from "react";
import { useState } from "react";
import { ethers } from "ethers";

import logo from "../../assets/Logos/footerLogo.svg";
import drop from "../../assets/icons/drop.png";
import wallet from "../../assets/icons/wallet2.png";
import haburger from "../../assets/icons/mobile.png";
import close from "../../assets/icons/close.png";
import money from "../../assets/icons/money.png";

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
    if (chain?.id !== 719) {
      switchNetwork?.(719);
    }
    try {
      open();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="w-full absolute top-0 flex justify-center">
      <div className="flex max-w-screen-2xl px-3 py-5 xl:py-14 w-full justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-[20px]">
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

        {/* Text links */}
        <div className="hidden xl:flex gap-10">
          {/* text */}
          <ul className="flex gap-10">
            {/* 1 */}
            <li className="flex font-bold text-white items-center gap-2 text-[24px] leading-[80%]">
              <img
                src={drop}
                alt=""
              />
              <span>
                BearBull <br />
                Protocols
              </span>
            </li>
            {/* 2 */}
            <li className="flex font-bold text-white items-center gap-2 text-[24px] leading-[80%]">
              <img
                src={drop}
                alt=""
              />

              <span>
                BearBull <br />
                Token
              </span>
            </li>
            {/* wallet */}
            <li className="flex font-bold text-white items-center gap-2 text-[24px] leading-[80%]">
              <img
                src={wallet}
                alt=""
              />
              <span>
                Connect <br />
                Wallet
              </span>
            </li>
          </ul>

          {/* Price */}
          <div>
            <button className="h-[61px] w-[162px] bg-white font-bold text-[24px]">
              Buy BBT
            </button>
            <button className="text-white h-[61px] w-[162px] border-white border-[3px] font-semibold text-[24px]">
              $0.2271
            </button>
          </div>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setNav(true)}
          className="xl:hidden mb-4"
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

              {/* Price */}
              <div className="relative mt-8 mb-20">
                <img
                  src={money}
                  alt=""
                  className="absolute -top-6 -right-6"
                />
                <button className="text-black h-[61px] w-[150px] bg-white font-bold text-[24px]">
                  Buy BBT
                </button>
                <button className="text-white h-[61px] w-[150px] border-white border-[3px] font-semibold text-[24px]">
                  $0.2271
                </button>
              </div>

              {/* List */}
              <div className="flex flex-col h-full items-center gap-10 w-full">
                <ul className="flex flex-col gap-10">
                  {/* 1 */}
                  <li className="flex font-medium text-white items-center gap-5 text-[24px] leading-[80%]">
                    <img
                      src={drop}
                      alt=""
                    />
                    <span>
                      BearBull <br />
                      Protocols
                    </span>
                  </li>
                  {/* 2 */}
                  <li className="flex font-medium text-white items-center gap-5 text-[24px] leading-[80%]">
                    <img
                      src={drop}
                      alt=""
                    />

                    <span>
                      BearBull <br />
                      Token
                    </span>
                  </li>
                  {/* wallet */}
                  <li className="flex font-medium text-white items-center gap-5 text-[24px] leading-[80%]">
                    <img
                      src={wallet}
                      alt=""
                    />
                    <span>
                      Connect <br />
                      Wallet
                    </span>
                  </li>
                </ul>
              </div>

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
