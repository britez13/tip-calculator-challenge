function App() {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="bill">Bill</label>
          <input id="bill" type="number" />
        </div>
        <div>
          <label htmlFor="tip-percentage">Select Tip %</label>
        </div>
        <div>
          <label htmlFor="people">Number of people</label>
          <input type="number" />
        </div>
      </form>
      <div></div>
    </div>
  );
}

export default App;
