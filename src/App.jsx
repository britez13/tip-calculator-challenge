import { ReactComponent as Logo } from "./assets/logo.svg";
import { ReactComponent as IconDolar } from "./assets/icon-dollar.svg";
import { ReactComponent as IconPerson } from "./assets/icon-person.svg";

function App() {
  return (
    <>
      <Logo />
      <div className="bg-white px-6 py-6 rounded-2xl md:grid md:grid-cols-2 md:gap-6 md:max-w-[720px]">
        <form className="flex flex-col gap-8">
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
                type="text"
                placeholder="0"
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
              <div>
                <button className="btn">5%</button>
              </div>
              <div>
                <button className="btn">10%</button>
              </div>
              <div>
                <button className="btn">15%</button>
              </div>
              <div>
                <button className="btn">25%</button>
              </div>
              <div>
                <button className="btn">50%</button>
              </div>
              <div id="custom" className="custom inline">
                <input
                  className="w-full py-2 font-bold text-xl bg-very-light-grayish-cyan text-right outline-strong-cyan placeholder-very-dark-cyan placeholder:text-center"
                  type="text"
                  placeholder="Custom"
                />
              </div>
            </div>
          </div>
          <div className="">
            <label
              className="flex flex-col relative text-dark-grayish-cyan font-bold placeholder:text-right
                 placeholder:text-very-dark-cyan placeholder:mix-blend-normal placeholder:opacity-[0.35] font-bold text-xl"
              htmlFor="people"
            >
              Number of people
              <input
                id="people"
                className="input text-right mt-2 outline-strong-cyan "
                type="text"
                placeholder="0"
              />
              <IconPerson className="absolute top-[55%] left-4" />
            </label>
          </div>
        </form>
        <div className="bg-very-dark-cyan mt-10 flex flex-col gap-8 justify-between rounded-lg p-8 md:mt-0 md:min-w-[213px]">
          <div className="mt-4 flex flex-col gap-6">
            <div className="flex justify-between">
              <div>
                <h2 className="text-white font-bold">Tip Amount</h2>
                <p className="text-grayish-cyan font-bold">/ person</p>
              </div>
              <span className="text-strong-cyan font-bold text-4xl">$0.00</span>
            </div>
            <div className="flex justify-between">
              <div>
                <h2 className="text-white font-bold">Total</h2>
                <p className="text-grayish-cyan font-bold">/ person</p>
              </div>
              <span className="text-strong-cyan font-bold text-4xl">$0.00</span>
            </div>
          </div>
          <button className="bg-strong-cyan text-very-dark-cyan w-full text-base text-center font-bold py-2 rounded-md uppercase">
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
