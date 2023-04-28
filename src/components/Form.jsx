import { useEffect, useState, useCallback } from "react";
import { ReactComponent as IconDolar } from "../assets/icon-dollar.svg";
import { ReactComponent as IconPerson } from "../assets/icon-person.svg";

export function Form({setData, data}) {
  const [formData, setFormData] = useState({
    bill: 0,
    tipPercentage: 0,
    numberOfPeople: 0,
  });

  const [isInputEmpty, setIsInputEmpty] = useState(false);

  const availableTips = ["5%", "10%", "15%", "25%", "50%", "custom"];

  //   const handleChange = useCallback(
  //     (name) => (event) => {
  //       setFormData({ ...formData, [name]: event.target.value });
  //       console.log(formData);
  //     },
  //     [formData]
  //   );

  useEffect(() => {
    if (formData.bill && formData.tipPercentage && formData.numberOfPeople) {
      setData({
        bill: formData.bill,
        tipPercentage: formData.tipPercentage,
        numberOfPeople: formData.numberOfPeople,
      });

    }
  }, [formData])

  function handleChange(event) {

    const name = event.target.name;
    const value = event.target.value;
    setFormData( (state) => ({ ...state, [name]: value }));
  }

  function handleClick(event) {
    console.log(event.target.innerText);
  }

  return (
    <form
      className="flex flex-col gap-8"
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
                 placeholder:text-very-dark-cyan placeholder:mix-blend-normal placeholder:opacity-[0.35] font-bold text-xl"
            id="bill"
            name="bill"
            value={formData.bill}
            type="number"
            placeholder="0"
            onChange={handleChange}
          ></input>
          <IconDolar className="absolute top-[55%] left-4" />
        </label>
      </div>
      <div>
        <label
          className="text-dark-grayish-cyan font-bold mb-2"
          htmlFor="tip-percentage"
        >
          Select Tip %
        </label>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {availableTips.map((tip) => {
            if (tip === "custom") {
              return (
                <div id="custom" className="custom inline" key={tip}>
                  <input
                    className="w-full py-2 font-bold text-xl bg-very-light-grayish-cyan text-center outline-strong-cyan placeholder-very-dark-cyan placeholder:text-center"
                    type="number"
                    id="custom"
                    name="tipPercentage"
                    placeholder="Custom"
                    onChange={handleChange}
                    value={formData.tipPercentage}
                  />
                </div>
              );
            }
            return (
              <div key={tip}>
                <button className="btn" onClick={handleClick}>
                  {tip}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="">
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
            className="input text-right mt-2 outline-strong-cyan "
            type="number"
            placeholder="0"
            onChange={ handleChange }
          />
          <IconPerson className="absolute top-[55%] left-4" />
        </label>
      </div>
    </form>
  );
}
