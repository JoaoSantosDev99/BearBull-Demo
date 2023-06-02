import { Link, useParams } from "react-router-dom";
import drop from "./assets/icons/drop.png";
import down from "./assets/icons/down.png";
import ShortTableItem from "./components/UI/ShortTabItem";
import ShortTableItemMob from "./components/UI/ShortTabItemMob";

import { PieChart } from "react-minimal-pie-chart";
import Tokens from "./constants/Tokens.json";
import { useContext, useEffect, useState } from "react";

import { ethers } from "ethers";
import abi from "./contracts/contract.json";
import ercAbi from "./contracts/erc-20.json";

import { AppContext } from "./context/appContext";
import { useAccount, useSigner } from "wagmi";
import { fiveDecimals, twoDecimals } from "./utils";

const Short = () => {
  const { id } = useParams();
  const contAdd = Tokens[id].contract;
  const { statProv } = useContext(AppContext);

  const [statInOrd, setstatInOrd] = useState(0);
  const [statTSupp, setTSupp] = useState(0);
  const [statOrdWorth, setstatOrdWorth] = useState(0);
  const [statTotalLent, setstatTotalLent] = useState(0);

  const [itemStartTime, setitemStartTime] = useState(0);
  const [itemAmount, setitemAmount] = useState(0);
  const [itemRiskTol, setitemRiskTol] = useState(0);

  const [userBal, setUserbal] = useState(0);
  const [collateral, setCollateral] = useState(0);
  const [tokenAmPric, settokenAmPric] = useState();

  const [inputAmount, setinputAmount] = useState();
  const [percVal, setpercVal] = useState(0);

  const [currentBlock, setCurrentBlock] = useState(1337);

  const { data: signer } = useSigner();
  const { address, isConnected } = useAccount();

  const shortToken = Tokens[id].address;
  // ercAbi
  const readContract = new ethers.Contract(contAdd, abi, statProv);
  const readTokenContract = new ethers.Contract(shortToken, ercAbi, statProv);

  const fetchData = async () => {
    const ftsup = await readTokenContract.totalSupply();
    const inOrdFt = await readContract.tokensInShorts();
    const fworth = await readContract.getCollateral(
      ethers.utils.formatUnits(inOrdFt, 0),
      100
    );

    const poolFt = await readContract.totalLent();
    setstatTotalLent(ethers.utils.formatUnits(poolFt, 0));

    setstatInOrd(ethers.utils.formatUnits(inOrdFt, 0));

    setstatOrdWorth(fiveDecimals(ethers.utils.formatUnits(fworth, 18)));
    setTSupp(ethers.utils.formatUnits(ftsup, 18));

    if (isConnected) {
      const data = await readContract.shortMap(address);
      const fuserBal = await readTokenContract.balanceOf(address);
      const formated = twoDecimals(Number(ethers.utils.formatEther(fuserBal)));

      setUserbal(formated);
      setitemAmount(ethers.utils.formatUnits(data.amount, 0));
      setitemStartTime(ethers.utils.formatUnits(data.startTime, 0));
      setitemRiskTol(ethers.utils.formatUnits(data.tolerance, 0));
    }
  };

  useEffect(() => {
    setInterval(async () => {
      const currenBlock = statProv.blockNumber;
      const timestamp = (await statProv.getBlock(currenBlock)).timestamp;
      setCurrentBlock(timestamp);
      console.log(timestamp);
    }, 5000);

    fetchData();
  }, []);

  const closeShort = async () => {
    if (!isConnected) return alert("Not connected!");

    const writeContract = new ethers.Contract(contAdd, abi, signer);

    try {
      const cancel = await writeContract.closeShort();
      await cancel.wait();
      alert("Success");
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const openShort = async () => {
    if (!isConnected) return alert("Not connected!");

    const coll = await readContract.getCollateral(inputAmount, 100);

    const writeContract = new ethers.Contract(contAdd, abi, signer);
    console.log("coll", coll);

    try {
      console.log("token", inputAmount, ethers.utils.formatUnits(coll));

      const openShort = await writeContract.openShort(inputAmount, 100, {
        value: coll,
      });
      // await openShort.wait();
      // alert("success");
      // fetchData();
    } catch (error) {
      console.log("err", error);
    }
  };

  const handleInputChange = (e) => {
    if (e.target.value === "") {
      setinputAmount(e.target.value);
      setCollateral(0);
      console.log("empty");
    } else {
      setinputAmount(e.target.value);
      fetchPrice(e.target.value);
    }
  };

  const fetchPrice = async (val) => {
    const coll = await readContract.getCollateral(val, 100);
    setCollateral(fiveDecimals(ethers.utils.formatEther(coll, 0)));
  };

  const handleInputPerc = (e) => {
    const format = e.target.value.replace(/[^0-9 ]/g, "").replace("-", " ");

    if (format < 0) {
      return setpercVal(0);
    } else if (format > 100) {
      setpercVal(100);
    } else {
      setpercVal(format);
    }
  };

  const maxInput = () => {
    setinputAmount(userBal);
    fetchPrice(userBal);
  };

  return (
    <section className="w-full flex justify-center">
      <div className="text-white max-w-screen-2xl flex flex-col w-full justify-center items-center">
        <div className="bg-center bg-cover bg-no-repeat bg-[url('./assets/short.jpg')] flex flex-col items-center w-full">
          <h2 className="mt-96 leading-[52px] md:leading-normal mb-10 md:mb-10 text-[50px] md:text-[70px] w-[370px] sm:w-[570px] md:w-[90%] text-start font-bold">
            <span className="text-[#D34253]">
              Short:
              <br className="md:hidden" />{" "}
            </span>
            {Tokens[id].name}
          </h2>

          {/* inputs */}
          <div className="flex items-center justify-center flex-wrap gap-5 md:gap-10 md:justify-start w-[90%] mb-10">
            {/* Number */}
            <div>
              <h3 className="text-[16px] md:text-[24px]">
                Enter an amount of{" "}
                <span className="font-bold">{Tokens[id].ticker}</span>
              </h3>
              <div className="relative">
                <input
                  onChange={handleInputChange}
                  value={inputAmount}
                  min={0}
                  type="number"
                  placeholder="285"
                  className="placeholder:text-[#ffffff65] w-[328px] md:w-[465px] outline-none pb-7 text-[24px] md:text-[40px] p-3 h-[57px] md:h-[87px] bg-transparent border-2"
                />
                <button className="absolute left-5 bottom-2 text-[14px] md:text-[20px] opacity-30 font-normal">
                  ≈ {collateral} BNB
                </button>
                <button
                  onClick={maxInput}
                  className="absolute right-2 top-1 text-[14px] md:text-[24px] font-bold"
                >
                  MAX
                </button>
              </div>
            </div>
            {/* % */}
            <div>
              <h3 className="text-[16px] md:text-[24px]">
                Enter your Risk Tolerance, %
              </h3>
              <div className="relative">
                <input
                  value={100}
                  // value={percVal}
                  onChange={handleInputPerc}
                  min={0}
                  max={100}
                  type="number"
                  placeholder="27"
                  className="placeholder:text-[#ffffff65] text-end w-[328px] md:w-[465px] outline-none text-[36px] md:text-[60px] p-3 h-[57px] md:h-[87px] bg-transparent border-2"
                />

                <span className="absolute left-2 text-[36px] md:text-[60px] top-1 font-bold">
                  %
                </span>
              </div>
            </div>
          </div>

          {/* stats */}
          <div className="flex gap-10 flex-col md:flex-row mb-5 md:mb-16 justify-start items-start md:items-center w-[350px] sm:w-[570px] md:w-[90%]">
            <div className="flex w-[170px] md:w-auto flex-col">
              <h2 className="text-[40px] lg:text-[60px] leading-[60px] font-light">
                {Math.trunc(statTSupp)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                {Tokens[id].ticker}
              </h2>
              <span className="text-[16px] lg:text-[24px] font-normal">
                Total Supply
              </span>
            </div>

            {/* chart */}
            <div className="flex gap-5 -ml-8 md:ml-0 w-[170px] md:w-auto justify-start">
              <div className="hidden md:flex">
                <PieChart
                  style={{ width: "120px", height: "120px" }}
                  data={[
                    {
                      title: "Total Pool",
                      value: 1 - statInOrd / statTotalLent,
                      color: "#131313",
                    },
                    {
                      title: "Shorted",
                      value: statInOrd / statTotalLent,
                      color: "#C13C37",
                    },
                  ]}
                />
              </div>

              <div className="flex mb-6 md:mb-0 justify-center flex-col">
                <span className="text-[24px] lg:text-[40px] lg:leading-[35px] font-normal">
                  {statInOrd}
                </span>
                <span className="text-[14px] lg:text-[20px] opacity-30 font-normal">
                  ≈ {statOrdWorth} BNB
                </span>
                <span className="text-[16px] lg:text-[24px] font-normal">
                  In Orders
                </span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mb-16 w-[370px] sm:w-[570px] md:w-[95%] lg:w-[90%] font-medium">
            <button
              onClick={openShort}
              className="w-[137px] h-[53px] rounded-[53px] bg-gradient-to-br from-[#D34253] to-[#3C1217] p-[2px]"
            >
              <div className=" flex h-full w-full items-center rounded-[53px] justify-center bg-black">
                <div className="w-full transition duration-100 ease-in-out active:text-white active:bg-[#822e38b3] h-full text-[#D34253] rounded-[53px] border-2 border-transparent flex justify-center items-center gap-2 bg-black">
                  <img
                    src={down}
                    alt=""
                  />{" "}
                  Short
                </div>
              </div>
            </button>
          </div>
        </div>
        <h2 className="text-[36px] md:text-[70px] w-[370px] sm:w-[570px] md:w-[95%] lg:w-[90%] text-start font-bold">
          Open Order
        </h2>

        {/* Desktop */}
        <div className="hidden md:w-[95%] mb-20 lg:w-[90%] md:flex">
          <table className="w-full text-sm text-left">
            <thead className="text-white font-normal relative">
              {/* <button className="absolute hidden md:flex right-2 bottom-2 font-bold text-[16px] text-[#D34253] items-center gap-2">
                <img
                  src={cancel}
                  alt=""
                />{" "}
                Close All
              </button> */}
              <tr className="text-[18px] border-b-[2px] xl:text-[19px]">
                <th
                  scope="col"
                  class="px-2 xl:px-6 text-start py-3"
                >
                  Name
                </th>
                <th
                  scope="col"
                  class="px-2 text-center py-3"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  class="px-2 text-center py-3"
                >
                  Start Time
                </th>
                <th
                  scope="col"
                  class="px-2  text-center py-3"
                >
                  Risk Tolerace
                </th>
              </tr>
            </thead>

            {/* Body */}
            <tbody className="border-b-2">
              <ShortTableItem
                index={2}
                name={Tokens[id].name}
                amount={itemAmount}
                startTime={itemStartTime}
                riskTol={itemRiskTol}
                block={currentBlock}
                ticker={Tokens[id].ticker}
                close={closeShort}
              />
            </tbody>
          </table>
        </div>

        {/* Mobile */}
        <div className="md:hidden mb-20">
          <div className="flex font-bold text-[18px] justify-between md:hidden mb-2 w-[385px] sm:w-[420px] border-b">
            {/* part 1 */}
            <div className="flex gap-5 flex-col w-full">
              <span className="px-3 py-3 border-b"> Name</span>
              <span className="px-3 pb-2">Amount</span>
            </div>
            {/* part 2 */}
            <div className="flex gap-5 flex-col text-end w-full">
              <span className="px-3 py-3 border-b"> Start Time</span>
              <span className="px-3 pb-2">Risk Tolerance</span>
            </div>
          </div>

          {/* Body */}
          <div>
            <ShortTableItemMob
              index={2}
              name={Tokens[id].name}
              amount={itemAmount}
              startTime={itemStartTime}
              riskTol={itemRiskTol}
              block={currentBlock}
              ticker={Tokens[id].ticker}
              close={closeShort}
            />
          </div>
        </div>

        <Link to="/">
          <button className="fixed bg-black border-2 sm:border-[3px] p-2 sm:p-4 rounded-md sm:rounded-lg bottom-5 right-5 flex font-bold text-[18px] sm:text-[20px] items-center gap-2">
            <img
              src={drop}
              alt=""
              className="rotate-90"
            />{" "}
            Back
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Short;
