import { Link, useParams } from "react-router-dom";
import LendTableItem from "./components/UI/LendTabItem";
import LendTableItemMob from "./components/UI/LendTabItemMob";
import drop from "./assets/icons/drop.png";
import up from "./assets/icons/lend.png";
import Tokens from "./constants/Tokens.json";
import { PieChart } from "react-minimal-pie-chart";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./context/appContext";
import { useAccount, useSigner } from "wagmi";
import { ethers } from "ethers";

import abi from "./contracts/contract.json";
import ercAbi from "./contracts/erc-20.json";
import { fiveDecimals, formatCommas, twoDecimals } from "./utils";

const Lend = () => {
  const { id } = useParams();
  const contAdd = Tokens[id].contract;

  const { statProv } = useContext(AppContext);

  const [currentBlock, setCurrentBlock] = useState(1337);
  const [dateVal, setdateVal] = useState("");
  const [userBal, setUserbal] = useState(0);
  const [bnbVal, setbnbVal] = useState(0);

  const [orderAmount, setorderAmount] = useState(0);
  const [orderEndTime, setorderEndTime] = useState(0);
  const [orderRewards, setorderRewards] = useState(0);

  const [statTSup, setstatTSup] = useState(0);
  const [statTotalLent, setstatTotalLent] = useState(0);
  const [statWorthBbn, setstatWorthBbn] = useState(0);

  const [inputAmount, setinputAmount] = useState();
  const [percVal, setpercVal] = useState(0);
  const [placeHval, setPlaceHval] = useState(0);

  const { data: signer } = useSigner();
  const { address, isConnected } = useAccount();

  const readContract = new ethers.Contract(contAdd, abi, statProv);
  const readTokenContract = new ethers.Contract(
    Tokens[id].address,
    ercAbi,
    statProv
  );

  const fetchData = async () => {
    const ftsup = await readTokenContract.totalSupply();
    const tsupFormated = ethers.utils.formatUnits(ftsup);
    setstatTSup(tsupFormated);

    const totalLent = await readContract.totalLent();
    setstatTotalLent(ethers.utils.formatUnits(totalLent, 0));

    const fworth = await readContract.getCollateral(
      ethers.utils.formatUnits(totalLent, 0),
      100
    );

    setstatWorthBbn(fiveDecimals(ethers.utils.formatUnits(fworth, 18)));

    const fworthPlaceHolder = await readContract.getCollateral(642, 100);
    setPlaceHval(fiveDecimals(ethers.utils.formatUnits(fworthPlaceHolder, 18)));

    if (isConnected) {
      const userBal = await readTokenContract.balanceOf(address);
      const formated = twoDecimals(Number(ethers.utils.formatEther(userBal)));

      const lendInfo = await readContract.lendMap(address);

      const ordAmount = ethers.utils.formatUnits(lendInfo.amount, 0);
      const ordEndtime = ethers.utils.formatUnits(lendInfo.endTime, 0);

      setorderAmount(ordAmount);
      setorderEndTime(ordEndtime);

      setUserbal(formated);
      setorderRewards(
        fiveDecimals(ethers.utils.formatUnits(lendInfo.rewards, 18))
      );
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

  const handlaDateChange = (e) => {
    setdateVal(e.target.value);
  };

  const lend = async () => {
    if (!isConnected) return alert("Not connected!");

    const writeContract = new ethers.Contract(contAdd, abi, signer);
    const wTkContract = new ethers.Contract(Tokens[id].address, ercAbi, signer);

    try {
      const approve = await wTkContract.approve(
        contAdd,
        ethers.utils.parseEther(inputAmount)
      );

      await approve.wait();
      console.log(inputAmount);

      const lend = await writeContract.lendTokens(inputAmount, dateVal);

      await lend.wait();
      alert("success");
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const closeLend = async () => {
    if (!isConnected) return alert("Not connected!");

    const writeContract = new ethers.Contract(contAdd, abi, signer);

    try {
      const closePos = await writeContract.withdrawTokens();
      await closePos.wait();
      alert("success");
    } catch (error) {
      console.log(error);
    }
  };

  const claimRewards = async () => {
    if (!isConnected) return alert("Not connected!");

    const writeContract = new ethers.Contract(contAdd, abi, signer);

    try {
      const claim = await writeContract.claimRewards();
      await claim.wait();
      alert("success");
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = async (e) => {
    setinputAmount(e.target.value);

    const bnbWorth = await readContract.getValue(
      ethers.utils.parseEther(e.target.value)
    );

    const formated = fiveDecimals(ethers.utils.formatUnits(bnbWorth, 18));
    setbnbVal(formated);
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

  return (
    <section className="w-full flex justify-center">
      <div className="text-white max-w-screen-2xl flex flex-col w-full justify-center items-center">
        <div className="bg-center bg-cover bg-no-repeat bg-[url('./assets/lend.jpg')] flex flex-col items-center w-full">
          <h2 className="mt-96 leading-[52px] md:leading-normal mb-10 md:mb-10 text-[50px] md:text-[70px] w-[370px] sm:w-[570px] md:w-[90%] text-start font-bold">
            <span className="text-[#28FDD7]">
              Lend:
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
                  placeholder="642"
                  className="placeholder:text-[#ffffff65] w-[328px] md:w-[465px] outline-none pb-7 text-[24px] md:text-[40px] p-3 h-[57px] md:h-[87px] bg-transparent border-2"
                />
                <button className="absolute left-5 bottom-2 text-[14px] md:text-[20px] opacity-30 font-normal">
                  ≈ {bnbVal !== 0 ? bnbVal : placeHval} BNB
                </button>
                <button
                  onClick={() => setinputAmount(userBal)}
                  className="absolute right-2 top-1 text-[14px] md:text-[24px] font-bold"
                >
                  MAX
                </button>
              </div>
            </div>

            {/* Cal */}
            <div>
              <h3 className="text-[16px] md:text-[24px]">Select an End Time</h3>
              <div className="relative">
                <input
                  value={dateVal}
                  onChange={handlaDateChange}
                  min={0}
                  placeholder="Lend time in hours"
                  type="number"
                  className="placeholder:text-[30px] w-[328px] md:w-[465px] outline-none text-[24px] md:text-[40px] p-3 h-[57px] md:h-[87px] bg-transparent border-2"
                />
              </div>
            </div>
          </div>

          {/* stats */}
          <div className="flex flex-wrap mb-5 md:mb-16 justify-between items-center w-[370px] sm:w-[570px] md:w-[90%]">
            <div className="flex w-[170px] md:w-auto flex-col">
              <h2 className="text-[40px] lg:text-[60px] leading-[60px] font-light">
                {Tokens[id].totalSupply === "false"
                  ? Math.trunc(statTSup)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  : Tokens[id].totalSupply}
              </h2>
              <span className="text-[16px] lg:text-[24px] font-normal">
                Total Supply
              </span>
            </div>

            <div className="flex w-[170px] md:w-auto flex-col">
              <h2 className="text-[40px] lg:text-[60px] leading-[60px] font-light">
                {statTotalLent}
              </h2>
              <span className="text-[16px] lg:text-[24px] font-normal">
                Total Lent
              </span>
            </div>

            <div className="flex w-[170px] md:w-auto flex-col">
              <h2 className="text-[40px] lg:text-[60px] leading-[60px] font-light">
                {userBal}
              </h2>
              <span className="text-[16px] lg:text-[24px] font-normal">
                Your Balance
              </span>
            </div>

            {/* chart */}
            <div className="flex w-[170px] md:w-auto justify-start">
              <div className="hidden lg:flex mt-2 mr-4">
                <PieChart
                  style={{ width: "100px", height: "100px" }}
                  data={[
                    {
                      title: "Total Suuply",
                      value: statTSup - statTotalLent,
                      color: "#ffffff17",
                    },
                    {
                      title: "Tokens Lent",
                      value: Number(statTotalLent),
                      color: "#28FDD7",
                    },
                  ]}
                />
                {console.log("tl", statTotalLent)}
                {console.log("tl 2", statTSup - statTotalLent)}
              </div>

              <div className="flex mt-1 justify-center flex-col">
                <span className="text-[24px] lg:text-[40px] lg:leading-[35px] font-normal">
                  {formatCommas(statTotalLent)}
                </span>
                <span className="text-[14px] lg:text-[20px] opacity-30 font-normal">
                  ≈ {statWorthBbn} BNB {console.log(statWorthBbn)}
                </span>
                <span className="text-[16px] lg:text-[24px] font-normal">
                  Lendings
                </span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mb-16 w-[370px] sm:w-[570px] md:w-[95%] lg:w-[90%] font-medium">
            <button
              onClick={lend}
              className="w-[137px] h-[53px] rounded-[53px] bg-gradient-to-br from-[#28FDD7] to-[#0B453B] p-[2px]"
            >
              <div className="flex h-full w-full items-center rounded-[53px] justify-center bg-black">
                <div className="w-full h-full active:text-black active:bg-[#1aa38a] text-[#1f9f87] rounded-[53px] border-2 border-transparent flex justify-center items-center gap-2 bg-black">
                  <img
                    src={up}
                    alt=""
                  />
                  Lend
                </div>
              </div>
            </button>
          </div>
        </div>

        <h2 className="text-[36px] md:text-[70px] w-[370px] sm:w-[570px] md:w-[95%] lg:w-[90%] text-start font-bold">
          Open Order
        </h2>

        {/* Desktop */}
        <div className="hidden mb-20 md:w-[95%] lg:w-[90%] md:flex">
          <table className="w-full text-sm text-left">
            <thead className="text-white font-normal relative">
              <tr className="text-[18px] border-b-[2px] xl:text-[19px]">
                <th
                  scope="col"
                  class="px-2 xl:px-6 text-start py-3"
                >
                  Name
                </th>

                <th
                  scope="col"
                  class="px-2 xl:px-6 text-end py-3"
                >
                  Amount
                </th>

                <th
                  scope="col"
                  class="px-2 xl:px-6 text-end py-3"
                >
                  End Time
                </th>
                <th
                  scope="col"
                  class="px-2 xl:px-6 text-end py-3"
                >
                  Rewards
                </th>
              </tr>
            </thead>

            {/* Body */}
            <tbody className="border-b-2">
              <LendTableItem
                name={Tokens[id].name}
                amount={orderAmount}
                endTime={orderEndTime}
                block={currentBlock}
                index={1}
                close={closeLend}
                claim={claimRewards}
                rewards={orderRewards}
                ticker={Tokens[id].ticker}
              />
            </tbody>
          </table>
        </div>

        {/* Mobile */}
        <div className="md:hidden mb-20">
          <div className="flex font-bold text-[18px] justify-between md:hidden mb-2 w-[385px] sm:w-[420px] border-b">
            {/* part 1 */}
            <div className="flex gap-5 flex-col w-full">
              <span className="px-3 py-2 border-b"> Name</span>
              <span className="px-3 py-2"> Amount</span>
            </div>

            {/* part 3 */}
            <div className="flex gap-5 flex-col text-end w-full">
              <span className="px-3 py-2 border-b"> End Time</span>
              <span className="px-3 py-2"> Rewards</span>
            </div>
          </div>

          {/* Body */}
          <div>
            <LendTableItemMob
              index={2}
              name={Tokens[id].name}
              amount={orderAmount}
              endTime={orderEndTime}
              block={currentBlock}
              close={closeLend}
              claim={claimRewards}
              rewards={orderRewards}
            />
          </div>
        </div>

        <Link to="/">
          <button className="fixed focus:bg-[#474747] transition-all duration-100 ease-in-out bg-black border-2 sm:border-[3px] p-2 sm:p-4 rounded-md sm:rounded-lg bottom-5 right-5 flex font-bold text-[18px] sm:text-[20px] items-center gap-2">
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

export default Lend;
