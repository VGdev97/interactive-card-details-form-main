import checkIcon from "../assets/icon-complete.svg";

const ThankYou = () => {
  return (
    <div className="xl:w-[73%] flex items-center justify-center min-h-[60vh] md:min-h-[60vh]">
      <div className="text-center flex flex-col justify-center items-center xl:w-1/3">
        <img src={checkIcon} alt="check icon" className="w-[75px] mb-7" />
        <h2 className="text-[28px] uppercase tracking-[1.5px] font-bold mb-3">
          Thank You!
        </h2>
        <p className="text-[18px] font-semibold text-[#8b898c] mb-6">
          We've added your card details
        </p>
        <button className="button w-full"> Continue</button>
      </div>
    </div>
  );
};

export default ThankYou;
