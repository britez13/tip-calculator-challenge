
export function Output({data}) {
  return (
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
          <span className="text-strong-cyan font-bold text-4xl"> { data.bill ? `$${data.bill}` : '$0.00'} </span>
        </div>
      </div>
      <button className="bg-strong-cyan text-very-dark-cyan w-full text-base text-center font-bold py-2 rounded-md uppercase">
        Reset
      </button>
    </div>
  );
}

export default Output