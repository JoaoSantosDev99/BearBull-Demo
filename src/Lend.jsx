import { Link, useParams } from "react-router-dom";
import LendTableItem from "./components/UI/LendTabItem";
import LendTableItemMob from "./components/UI/LendTabItemMob";
import drop from "./assets/icons/drop.png";
import cancel from "./assets/icons/closeAll.png";
import up from "./assets/icons/lend.png";
import lock from "./assets/icons/lock.png";
import pchart from "./assets/icons/piechart.png";
import cal from "./assets/icons/cal.png";

const Lend = () => {
  const { id } = useParams();
  return (
    <section className="w-full flex justify-center">
      <div className="text-white max-w-screen-2xl flex flex-col w-full justify-center items-center">
        <h2 className="mt-96 leading-[52px] md:leading-normal mb-10 md:mb-10 text-[50px] md:text-[70px] w-[370px] sm:w-[570px] md:w-[90%] text-start font-bold">
          <span className="text-[#28FDD7]">
            Land:
            <br className="md:hidden" />{" "}
          </span>{" "}
          Doge Inu
        </h2>

        {/* inputs */}
        <div className="flex items-center justify-center flex-wrap gap-5 md:gap-10 md:justify-start w-[90%] mb-10">
          {/* Number */}
          <div>
            <h3 className="text-[16px] md:text-[24px]">
              Enter an amount of <span className="font-bold">DINU</span>
            </h3>
            <div className="relative">
              <input
                min={0}
                type="number"
                placeholder="12.002"
                className="placeholder:text-[#ffffff65] w-[328px] md:w-[465px] outline-none pb-7 text-[24px] md:text-[40px] p-3 h-[57px] md:h-[87px] bg-transparent border-2"
              />
              <button className="absolute left-5 bottom-2 text-[14px] md:text-[20px] opacity-30 font-normal">
                ≈ 0.0000025 BNB
              </button>
              <button className="absolute right-2 top-1 text-[14px] md:text-[24px] font-bold">
                MAX
              </button>
            </div>
          </div>
          {/* Cal */}
          <div>
            <h3 className="text-[16px] md:text-[24px]">Select an End Time</h3>
            <div className="relative">
              <input
                min={0}
                placeholder="DAte"
                type="date"
                className="w-[328px] md:w-[465px] outline-none text-[24px] md:text-[40px] p-3 h-[57px] md:h-[87px] bg-transparent border-2"
              />
            </div>
          </div>
        </div>

        {/* stats */}
        <div className="flex flex-wrap mb-5 md:mb-16 justify-between items-center w-[370px] sm:w-[570px] md:w-[90%]">
          <div className="flex w-[170px] md:w-auto flex-col">
            <h2 className="text-[40px] lg:text-[60px] leading-[60px] font-light">
              68,231
            </h2>
            <span className="text-[16px] lg:text-[24px] font-normal">
              Available Balance
            </span>
          </div>
          <div className="flex w-[170px] md:w-auto flex-col">
            <h2 className="text-[40px] lg:text-[60px] leading-[60px] font-light">
              0
            </h2>
            <span className="text-[16px] lg:text-[24px] font-normal">
              Pooled Balance
            </span>
          </div>
          <div className="flex w-[170px] md:w-auto flex-col">
            <h2 className="text-[40px] lg:text-[60px] leading-[60px] font-light">
              200M
            </h2>
            <span className="text-[16px] lg:text-[24px] font-normal">
              Total Supply
            </span>
          </div>

          {/* chart */}
          <div className="flex w-[170px] md:w-auto justify-start">
            <img
              src={pchart}
              alt=""
              className="hidden lg:flex -mt-4 -mr-5"
            />

            <div className="flex mt-1 justify-center flex-col">
              <span className="text-[24px] lg:text-[40px] lg:leading-[35px] font-normal">
                4,323M
              </span>
              <span className="text-[14px] lg:text-[20px] opacity-30 font-normal">
                ≈ 0.027 BNB{" "}
              </span>
              <span className="text-[16px] lg:text-[24px] font-normal">
                In Orders
              </span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mb-16 w-[370px] sm:w-[570px] md:w-[95%] lg:w-[90%] font-medium">
          <button className="w-[173px] h-[53px] rounded-[53px] border-2">
            <div className="w-full h-full text-[#ffffff] rounded-[53px] border-2 border-transparent flex justify-center items-center gap-2 bg-black">
              <img
                src={lock}
                alt=""
              />{" "}
              Approve
            </div>
          </button>

          <button className="w-[137px] h-[53px] rounded-[53px] bg-gradient-to-br from-[#28FDD7] to-[#0B453B] p-[2px]">
            <div className="flex h-full w-full items-center rounded-[53px] justify-center bg-black">
              <div className="w-full h-full text-[#28FDD7] rounded-[53px] border-2 border-transparent flex justify-center items-center gap-2 bg-black">
                <img
                  src={up}
                  alt=""
                />{" "}
                Lend
              </div>
            </div>
          </button>
        </div>

        <h2 className="text-[36px] md:text-[70px] w-[370px] sm:w-[570px] md:w-[95%] lg:w-[90%] text-start font-bold">
          Open Orders
        </h2>

        {/* Desktop */}
        <div className="hidden md:w-[95%] lg:w-[90%] md:flex">
          <table className="w-full text-sm text-left">
            <thead className="text-white font-normal relative">
              <button className="absolute hidden md:flex right-2 bottom-2 font-bold text-[16px] text-[#D34253] items-center gap-2">
                <img
                  src={cancel}
                  alt=""
                />{" "}
                Cancel All
              </button>
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
                  Supply Pooled
                </th>

                <th
                  scope="col"
                  class="px-2 xl:px-6 text-end py-3"
                >
                  Rewards Pooled
                </th>
              </tr>
            </thead>

            {/* Body */}
            <tbody className="border-b-2">
              <LendTableItem index={1} />
              <LendTableItem index={2} />
              <LendTableItem index={1} />
              <LendTableItem index={2} />
              <LendTableItem index={1} />
              <LendTableItem index={2} />
              <LendTableItem index={1} />
              <LendTableItem index={2} />
              <LendTableItem index={1} />
              <LendTableItem index={2} />
              <LendTableItem index={1} />
              <LendTableItem index={2} />
              <LendTableItem index={1} />
              <LendTableItem index={2} />
            </tbody>
          </table>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <table className="w-full flex flex-col items-center text-sm text-left">
            <thead className="text-white w-full flex justify-between font-normal">
              <tr className="text-[18px] w-full flex justify-between border-b-[2px] xl:text-[19px]">
                <th
                  scope="col"
                  class="text-start py-3 w-full"
                >
                  <div className="flex flex-col gap-5 w-full">
                    <span className="flex justify-start gap-2 items-center border-b py-3 px-3">
                      <img
                        src={drop}
                        alt=""
                      />
                      Name
                    </span>
                    <span className="px-3">Ticker</span>
                  </div>
                </th>

                <th
                  scope="col"
                  class="text-start py-3 w-full"
                >
                  <div className="flex flex-col gap-5 w-full">
                    <span className="border-b py-3 text-end px-3">
                      Supply Pooled
                    </span>
                    <span className="text-end px-3">Rewards Pooled</span>
                  </div>
                </th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              <LendTableItemMob index={1} />
              <LendTableItemMob index={2} />
              <LendTableItemMob index={1} />
              <LendTableItemMob index={2} />
              <LendTableItemMob index={1} />
              <LendTableItemMob index={2} />
              <LendTableItemMob index={1} />
              <LendTableItemMob index={2} />
              <LendTableItemMob index={1} />
              <LendTableItemMob index={2} />
              <LendTableItemMob index={1} />
              <LendTableItemMob index={2} />
              <LendTableItemMob index={1} />
              <LendTableItemMob index={2} />
            </tbody>
          </table>
        </div>

        <div className="justify-between w-[380px] sm:w-[560px] md:w-[95%] lg:w-[90%] p-5 flex mb-20 bg-black">
          <Link to="/">
            <button className="flex font-bold text-[16px] items-center gap-2">
              <img
                src={drop}
                alt=""
                className="rotate-90"
              />{" "}
              Back
            </button>
          </Link>
          <button className="md:hidden flex font-bold text-[16px] text-[#D34253] items-center gap-2">
            <img
              src={cancel}
              alt=""
            />{" "}
            Cancel All
          </button>
        </div>
      </div>
    </section>
  );
};

export default Lend;
