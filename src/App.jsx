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
          <div>
            <input type="text" value="5%" />
          </div>
          <div>
            <input type="text" value="10%" />
          </div>
          <div>
            <input type="text" value="15%" />
          </div>
          <div>
            <input type="text" value="25%" />
          </div>
          <div>
            <input type="text" value="50%" />
          </div>
          <div className="custom">
            <input type="text" />
          </div>
        </div>
        <div>
          <label htmlFor="people">Number of people</label>
          <input type="number" />
        </div>
      </form>
      <div>
        <div>
          <div>
            <div>
              <h2>Tip Amount</h2>
              <p>/ person</p>
            </div>
            <span>
              $0
            </span>
          </div>
          <div>
            <h2>Total</h2>
            <p>/ person</p>
          </div>
        </div>
        <button>Reset</button>
      </div>
    </div>
  );
}

export default App;
