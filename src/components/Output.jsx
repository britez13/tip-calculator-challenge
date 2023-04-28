import { initialData } from "../App";
import { initialFormData } from "../App";

export function Output({data, setData, setFormData}) {
    // console.log(data);

    function handleReset() {
        setData(initialData);
        setFormData(initialFormData);
    }

  return (
    <div className="bg-very-dark-cyan mt-4 flex flex-col gap-4 justify-between rounded-lg p-4 md:mt-0 md:gap-8
    md:p-8 md:min-w-[213px]">
      <div className="mt-4 flex flex-col gap-6">
        <div className="flex justify-between">
          <div>
            <h2 className="text-white font-bold">Tip Amount</h2>
            <p className="text-grayish-cyan font-bold">/ person</p>
          </div>
          <span className="text-strong-cyan font-bold text-4xl">
            {" "}
            {data.tipAmountPerPerson ? `$${ data.tipAmountPerPerson }` : "$0.00"}
          </span>
        </div>
        <div className="flex justify-between">
          <div>
            <h2 className="text-white font-bold">Total</h2>
            <p className="text-grayish-cyan font-bold">/ person</p>
          </div>
          <span className="text-strong-cyan font-bold text-4xl">
            {" "}
            {data.totalPerPerson ? `$${ data.totalPerPerson }` : "$0.00"}{" "}
          </span>
        </div>
      </div>
      <button onClick={handleReset} className="bg-strong-cyan text-very-dark-cyan w-full text-base text-center 
      font-bold py-2 rounded-md uppercase hover:bg-very-dark-cyan-opacity">
        Reset
      </button>
    </div>
  );
}

export default Output