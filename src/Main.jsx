import TableItem from "./components/UI/TableItem";
import drop from "./assets/icons/drop.png";
import TableItemMob from "./components/UI/TableItemMob";
import PreFooter from "./components/PreFooter";
import Hero from "./Hero";

const Main = () => {
  return (
    <section className="w-full flex justify-center">
      <div className="max-w-screen-2xl w-full">
        <Hero />
        <div class="relative mt-52 overflow-x-auto">
          {/* Desktop */}
          <div className="hidden lg:flex">
            <table className="w-full text-sm text-left">
              <thead className="text-white font-normal">
                <tr className="text-[18px] border-b-[2px] xl:text-[19px]">
                  <th
                    scope="col"
                    class="px-2 xl:px-6 flex justify-center items-center gap-2 py-3 "
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={drop}
                        alt=""
                      />
                      <span>Name</span>
                    </div>
                  </th>

                  <th
                    scope="col"
                    class="px-2 xl:px-6 text-center py-3"
                  >
                    Ticker
                  </th>

                  <th
                    scope="col"
                    class="px-2 xl:px-6 text-center py-3"
                  >
                    Market Cap
                  </th>

                  <th
                    scope="col"
                    className="px-2 xl:px-6 text-center py-3"
                  >
                    24h Change, %
                  </th>
                  <th
                    scope="col"
                    className="px-2 xl:px-6 py-3 text-center"
                  >
                    Pool Supply, %
                  </th>
                  <th
                    scope="col"
                    className="px-2 xl:px-6 text-center py-3"
                  >
                    In Orders, %
                  </th>

                  {/* empty */}
                  <th
                    scope="col"
                    className="hidden lg:flex px-2 xl:px-6 py-3"
                  ></th>
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                <TableItem index={1} />
                <TableItem index={2} />
                <TableItem index={1} />
                <TableItem index={2} />
                <TableItem index={1} />
                <TableItem index={2} />
                <TableItem index={1} />
                <TableItem index={2} />
                <TableItem index={1} />
                <TableItem index={2} />
                <TableItem index={1} />
                <TableItem index={2} />
                <TableItem index={1} />
                <TableItem index={2} />
              </tbody>

              {/* Body */}
              <tbody>
                <TableItem index={1} />
                <TableItem index={2} />
                <TableItem index={1} />
                <TableItem index={2} />
                <TableItem index={1} />
                <TableItem index={2} />
                <TableItem index={1} />
                <TableItem index={2} />
                <TableItem index={1} />
                <TableItem index={2} />
                <TableItem index={1} />
                <TableItem index={2} />
                <TableItem index={1} />
                <TableItem index={2} />
              </tbody>
            </table>
          </div>

          {/* Mobile */}
          <div className="lg:hidden w-full flex justify-center">
            <table className="w-full flex flex-col items-center">
              <thead className="text-white w-full font-normal">
                <tr className="text-[18px] flex justify-evenly xl:text-[19px]">
                  <th
                    scope="col"
                    class="w-full xl:px-6 text-center py-3"
                  >
                    <div className="flex flex-col items-start">
                      <span className="text-start border-b w-full">
                        <div className="flex w-full text-start items-center gap-2">
                          <img
                            src={drop}
                            alt=""
                          />
                          <span>Name</span>
                        </div>
                        <br />
                      </span>
                      <span className="text-start">
                        Ticker <br /> {""}
                      </span>
                    </div>
                  </th>

                  <th
                    scope="col"
                    class="w-full xl:px-6 text-center py-3"
                  >
                    <div className="flex flex-col items-start">
                      <span className="text-start border-b w-full">
                        Market <br /> Cap
                      </span>
                      <span className="text-start">
                        24h <br /> Charge, %
                      </span>
                    </div>
                  </th>

                  <th
                    scope="col"
                    class="w-full xl:px-6 text-center py-3"
                  >
                    <div className="flex flex-col items-start">
                      <span className="text-start border-b w-full">
                        Pool <br /> Supply, %
                      </span>
                      <span className="text-start">
                        In Orders, <br /> %
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                <TableItemMob index={1} />
                <TableItemMob index={2} />
                <TableItemMob index={1} />
                <TableItemMob index={2} />
                <TableItemMob index={1} />
                <TableItemMob index={2} />
                <TableItemMob index={1} />
                <TableItemMob index={2} />
                <TableItemMob index={1} />
                <TableItemMob index={2} />
                <TableItemMob index={1} />
                <TableItemMob index={2} />
                <TableItemMob index={1} />
                <TableItemMob index={2} />
              </tbody>
            </table>
          </div>
        </div>
        <PreFooter />
      </div>
    </section>
  );
};

export default Main;
