import React from "react";

const RightSection = ({
  cardNumber,
  cardHolder,
  setCardHolder,
  expMonths,
  setExpMonths,
  expYears,
  setExpYears,
  cvc,
  setCvc,
  error,
  handleCardNumberChange,
  handleFormSubmit,
}) => {
  return (
    <div className="xl:w-[73%] flex items-center justify-center min-h-[60vh] md:min-h-[60vh]">
      <form
        className="w-[80%] xl:w-[40%] flex flex-col gap-5"
        onSubmit={handleFormSubmit}
      >
        {/* Cardholder Name */}
        <div className="flex flex-col">
          <h3 className="heading-3">cardholder name</h3>
          <input
            type="text"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
            placeholder="e.g. Jane Appleseed"
            className={`border-[hsl(270, 3%, 87%)] border-[1px] px-[12px] py-[8px] rounded-[7px] ${
              error && cardHolder.length < 6 ? "border-red-500" : ""
            }`}
          />
          {error && cardHolder.length < 6 && (
            <label className="text-red-500 text-[14px] mt-1">
              Can't be empty
            </label>
          )}
        </div>
        {/* Card Number */}
        <div className="flex flex-col">
          <h3 className="heading-3">card number</h3>
          <input
            maxLength={19}
            value={cardNumber}
            onChange={handleCardNumberChange}
            type="text"
            placeholder="e.g. 1234 56789 9123 0000"
            className={`border-[hsl(270, 3%, 87%)] border-[1px] px-[12px] py-[8px] rounded-[7px] ${
              error && cardNumber.length < 19 ? "border-red-500" : ""
            }`}
          />
          {error && cardNumber.length < 19 && (
            <label className="text-red-500 text-[14px] mt-1">
              Can't be empty
            </label>
          )}
        </div>

        {/* Card Info */}
        <div className="flex items-center gap-5">
          <div className="flex flex-col w-2/3">
            <h3 className="heading-3">exp. date (mm/yy)</h3>
            <div className="flex items-center ">
              <input
                type="text"
                maxLength={2}
                value={expMonths}
                onChange={(e) => setExpMonths(e.target.value)}
                placeholder="MM"
                className={`border-[#dedddf] border-[1px] px-[12px] py-[8px] rounded-[7px] w-1/2 mr-2 ${
                  error && expMonths.length < 2 ? "border-red-500" : ""
                } `}
              />
              <input
                maxLength={2}
                type="text"
                placeholder="YY"
                value={expYears}
                onChange={(e) => setExpYears(e.target.value)}
                className={`border-[hsl(270, 3%, 87%)] border-[1px] px-[12px] py-[8px] rounded-[7px] w-1/2 ${
                  error && expYears.length < 2 ? "border-red-500" : ""
                }`}
              />
            </div>
            {error && (expYears.length < 2 || expMonths.length < 2) && (
              <label className="text-red-500 text-[14px] mt-1">
                Can't be blank
              </label>
            )}
          </div>
          <div className="w-1/3">
            <h3 className="heading-3">cvc</h3>
            <input
              type="text"
              pattern="\d*"
              maxLength="3"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              placeholder="e.g. 123"
              className={`input w-full ${
                error && cvc.length < 2 ? "border-red-500" : ""
              }`}
            />
            {error && cvc.length < 3 && (
              <label className="text-red-500 text-[14px] mt-1">
                Can't be blank
              </label>
            )}
          </div>
        </div>
        {/* Button */}
        <button type="submit" className="button">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default RightSection;
