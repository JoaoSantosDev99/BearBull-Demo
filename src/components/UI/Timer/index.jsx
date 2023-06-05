import Countdown from "react-countdown";

const Timer = () => {
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="flex gap-4 text-[#f0f0f0] bg-[#151515] px-2 rounded-md">
        <span className="flex gap-2">{days} :</span>
        <span className="flex gap-2">{hours} :</span>
        <span className="flex gap-2">{minutes} :</span>{" "}
        <span className="flex gap-2">{seconds}</span>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-4xl sm:text-4xl font-bold">
        <Countdown
          renderer={renderer}
          date={new Date("2023-06-10T20:00:00.000+04:00")}
        />
      </span>
    </div>
  );
};

export default Timer;
