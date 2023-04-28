import { useState } from "react";
import { ReactComponent as Logo } from "./assets/logo.svg";
import { Form } from "./components/Form";
import Output from "./components/Output";

function App() {

  const [data, setData] = useState({
    bill: 0,
    tipPercentage: 0,
    numberOfPeople: 0,
  })



  return (
    <>
      <Logo />
      <div className="bg-white px-6 py-6 rounded-2xl md:grid md:grid-cols-2 md:gap-6 md:max-w-[800px]">
        <Form setData={setData} data={data} />
        <Output data={data} />
      </div>
    </>
  );
}

export default App;
