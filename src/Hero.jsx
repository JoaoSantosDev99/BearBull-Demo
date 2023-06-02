import tg from "./assets/icons/tg.svg";
import tw from "./assets/icons/twtt.svg";
import dk from "./assets/icons/dk.svg";

const Hero = () => {
  return (
    <section className="bg-center bg-cover bg-no-repeat bg-[url('./assets/main.jpg')] pb-40 md:pb-52 w-full flex justify-center">
      <div className="max-w-screen-2xl w-full px-7 md:px-6">
        <div className="text-white flex flex-col items-center mt-44 md:mt-96">
          {/* title */}
          <h2 className="font-bold text-center leading-[60px] md:leading-snug mt-20 md:mt-0 text-[70px] md:text-[100px]">
            BearBull <br className="md:hidden" /> Dex
          </h2>
          <span className="font-normal max-w-md md:max-w-xl text-center mt-3 md:mt-0 text-[16px] md:text-[24px]">
            We double your profit opportunities. Lend or short any low cap
            crypto!
          </span>
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
    </section>
  );
};

export default Hero;
