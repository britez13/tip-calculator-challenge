import { useEffect, useState } from "react";
import { ReactComponent as IconDolar } from "../assets/icon-dollar.svg";
import { ReactComponent as IconPerson } from "../assets/icon-person.svg";
import { initialData } from "../App";

export function Form({ setData, formData, setFormData }) {
  // State for tracking error message
  const [isInputEmpty, setIsInputEmpty] = useState(false);

  // Define different types of tips availables
  const availableTips = ["5%", "10%", "15%", "25%", "50%", "custom"];

  // Every time formData state changes will run
  useEffect(() => {
    // I
    if (
      formData.bill &&
      (formData.tipPercentage || formData.customPercentage)
    ) {
      setIsInputEmpty(true);
    }

    if (!isInputEmpty) {
      setData(initialData);
    }

    // If all inputs have been filled will change data related to tip state
    if (
      formData.bill &&
      (formData.tipPercentage || formData.customPercentage) &&
      formData.numberOfPeople
    ) {
      // Based on which is truthy, it select that.
      const percentageToUse = formData.tipPercentage
        ? formData.tipPercentage
        : formData.customPercentage;

      setIsInputEmpty(false);

      // Set data that will used to display within Output component
      setData({
        tipAmountPerPerson: Number(
          (parseFloat(formData.bill) * percentageToUse) /
            100 /
            formData.numberOfPeople
        ).toFixed(2),
        totalPerPerson: Number(
          (parseFloat(formData.bill) +
            (formData.bill * percentageToUse) / 100) /
            formData.numberOfPeople
        ).toFixed(2),
      });
    }
  }, [formData]);

  function handleChange(event) {
    if (event.target.name === "customPercentage") {
      setFormData((state) => ({ ...state, tipPercentage: 0 }));
      setFormData((state) => ({
        ...state,
        customPercentage: parseInt(event.target.value),
      }));
    }

    if (event.target.value) {
      const name = event.target.name;
      const value = event.target.value;
      setFormData((state) => ({ ...state, [name]: value }));
    }

    if (!event.target.value) {
      const name = event.target.name;
      const value = event.target.value;
      setFormData((state) => ({ ...state, [name]: value }));
    }
  }

  function handleClick(event) {
    const percentageString = event.target.innerText;
    const percentageValue = percentageString.substring(
      0,
      percentageString.length - 1
    );
    setFormData({ ...formData, customPercentage: "" });
    setFormData((prev) => ({
      ...prev,
      tipPercentage: parseInt(percentageValue),
    }));
  }

  return (
    <form
      className="flex flex-col gap-4 md:gap-8"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="flex flex-col">
        <label
          className="flex flex-col relative text-dark-grayish-cyan font-bold"
          htmlFor="bill"
        >
          Bill
          <input
            className="input px-4 py-2 text-right mt-2 outline-strong-cyan placeholder:text-right
                 placeholder:text-very-dark-cyan placeholder:mix-blend-normal placeholder:opacity-[0.35] 
                 font-bold text-xl rounded-md"
            id="bill"
            name="bill"
            value={formData.bill}
            type="number"
            placeholder="0"
            step="any"
            onChange={handleChange}
          ></input>
          <IconDolar className="absolute top-[55%] left-4" />
        </label>
      </div>
      <div>
        <label
          className="text-dark-grayish-cyan font-bold"
          htmlFor="tip-percentage"
        >
          Select Tip %
        </label>
        <div className="grid grid-cols-2 mt-2 gap-4 md:grid-cols-3">
          {availableTips.map((tip) => {
            if (tip === "custom") {
              return (
                <div id="custom" className="custom inline" key={tip}>
                  <input
                    className="w-full py-2 px-2 font-bold text-xl bg-very-light-grayish-cyan text-very-dark-cyan text-right outline-strong-cyan
                     placeholder-very-dark-cyan placeholder:text-center caret-strong-cyan rounded-md"
                    type="number"
                    id="custom"
                    name="customPercentage"
                    placeholder="Custom"
                    onChange={handleChange}
                    value={formData.customPercentage}
                  />
                </div>
              );
            }
            return (
              <div key={tip}>
                <button
                  className={`btn hover:bg-strong-cyan ${
                    formData.tipPercentage === parseInt(tip)
                      ? "bg-strong-cyan"
                      : "bg-very-dark-cyan"
                  }`}
                  onClick={handleClick}
                >
                  {tip}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <label
          className="flex flex-col relative text-dark-grayish-cyan font-bold placeholder:text-right
                 placeholder:text-very-dark-cyan placeholder:mix-blend-normal placeholder:opacity-[0.35] placeholder:font-bold text-xl"
          htmlFor="people"
        >
          Number of people
          <input
            id="people"
            name="numberOfPeople"
            value={formData.numberOfPeople}
            className={`input text-right mt-1 outline-strong-cyan border rounded-md ${
              isInputEmpty ? " border-redish" : "border-transparent"
            } md:mt-2`}
            type="number"
            placeholder="0"
            onChange={handleChange}
          />
          <IconPerson className="absolute top-[55%] left-4" />
          <span
            className={`${
              isInputEmpty ? "opacity-100" : "opacity-0"
            } text-redish font-normal text-sm absolute top-[7%] right-0`}
          >
            Can't be zero
          </span>
        </label>
      </div>
    </form>
  );
}
