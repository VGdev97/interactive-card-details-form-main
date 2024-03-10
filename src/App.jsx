import { useState } from "react";
import RightSection from "./components/RightSection";
import LeftSection from "./components/LeftSection";
import ThankYou from "./components/ThankYou";

function App() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expMonths, setExpMonths] = useState("");
  const [expYears, setExpYears] = useState("");
  const [cvc, setCvc] = useState("");
  const [error, setError] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      cardHolder.length < 4 ||
      cardNumber.length < 19 ||
      expMonths.length < 2 ||
      expYears.length < 2 ||
      cvc.length < 3
    ) {
      setError(true);
    } else {
      setFormSubmitted(true); // Set formSubmitted to true on successful form submission
    }
  };

  function formatCardNumber(input) {
    // Remove any non-digit characters
    let formattedInput = input.replace(/\D/g, "");

    // Insert space after every 4 characters
    formattedInput = formattedInput.replace(/(.{4})/g, "$1 ");

    // Trim any leading or trailing spaces
    formattedInput = formattedInput.trim();

    return formattedInput;
  }

  const handleCardNumberChange = (e) => {
    const input = e.target.value;
    const formattedInput = formatCardNumber(input);
    setCardNumber(formattedInput);
  };

  return (
    <main className="flex flex-col xl:flex-row overflow-hidden">
      {/* Left */}
      <LeftSection
        cardNumber={cardNumber}
        cardHolder={cardHolder}
        expMonths={expMonths}
        expYears={expYears}
        cvc={cvc}
      />
      {/* Right Section */}
      {formSubmitted ? (
        <ThankYou />
      ) : (
        <RightSection
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
          cardHolder={cardHolder}
          setCardHolder={setCardHolder}
          expMonths={expMonths}
          setExpMonths={setExpMonths}
          expYears={expYears}
          setExpYears={setExpYears}
          cvc={cvc}
          setCvc={setCvc}
          error={error}
          setError={setError}
          handleFormSubmit={handleFormSubmit}
          handleCardNumberChange={handleCardNumberChange}
        />
      )}
    </main>
  );
}

export default App;
