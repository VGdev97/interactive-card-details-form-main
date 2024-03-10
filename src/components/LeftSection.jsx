import React from "react";
import frontCard from "../assets/bg-card-front.png";
import backCard from "../assets/bg-card-back.png";
import cardLogo from "../assets/card-logo.svg";

const LeftSection = ({ cardNumber, cardHolder, expMonths, expYears, cvc }) => {
  return (
    <div className="bg-mobile-hero-pattern lg:bg-hero-pattern w-full xl:w-[40%] lg:bg-mobile-hero bg-cover bg-no-repeat min-h-[40vh] md:min-h-[40vh] xl:min-h-screen relative">
      {/* Back Image */}
      <div>
        <div className="backImage">
          <img src={backCard} alt="backCard" />
          <div>
            <span className="absolute top-[44%] right-[12%] lg:right-[13%] lg:top-[39%] text-white text-[11px] lg:text-[15px] tracking-[2px]">
              {cvc}
            </span>
          </div>
        </div>
        {/* Front Image */}
        <div className="frontImage">
          <img src={frontCard} alt="frontCard" />
          <div>
            <img
              src={cardLogo}
              alt="card logo"
              className="absolute w-[60px] top-[10%] left-[10%]"
            />

            <span className="absolute w-full left-[10%] bottom-[35%] text-left text-[18px] lg:text-[27px] tracking-[3px] text-white ">
              {cardNumber}
            </span>

            <p className="text-[11px] lg:text-[16px] tracking-[1.5px] uppercase text-white absolute w-full bottom-[18%] left-[10%]">
              {cardHolder}
            </p>

            <p className="absolute text-[11px] lg:text-[16px] tracking-[1.5px] uppercase text-white text bottom-[18%] right-[10%]">
              {expMonths && (
                <p>
                  {expMonths}/{expYears}
                </p>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
