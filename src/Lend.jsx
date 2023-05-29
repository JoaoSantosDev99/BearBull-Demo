import { Link, useParams } from "react-router-dom";
import LendTableItem from "./components/UI/LendTabItem";
import LendTableItemMob from "./components/UI/LendTabItemMob";
import drop from "./assets/icons/drop.png";
import cancel from "./assets/icons/closeAll.png";
import up from "./assets/icons/lend.png";
import lock from "./assets/icons/lock.png";

const Lend = () => {
  const { id } = useParams();
  return (
    <section className="w-full flex justify-center">
      <div className="text-white max-w-screen-2xl flex flex-col w-full justify-center items-center">
        <h2 className="text-[70px] w-full md:w-[95%] lg:w-[90%] text-start font-bold">
          <span className="text-[#28FDD7]">Land:</span> {id}
        </h2>

        {/* Buttons */}
        <div className="flex w-[90%] font-medium">
          <button className="w-[173px] h-[53px] rounded-[53px] border-2">
            <div className="w-full h-full text-[#ffffff] rounded-[53px] border-2 border-transparent flex justify-center items-center gap-2 bg-black">
              <img
                src={lock}
                alt=""
              />{" "}
              Approve
            </div>
          </button>

          <button className="w-[173px] h-[53px] rounded-[53px] bg-gradient-to-br from-[#28FDD7] to-[#0B453B] p-[2px]">
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

        <h2 className="text-[70px] w-full md:w-[95%] lg:w-[90%] text-start font-bold">
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
