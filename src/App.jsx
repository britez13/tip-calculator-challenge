import { useState } from "react";
import { ReactComponent as Logo } from "./assets/logo.svg";
import { Form } from "./components/Form";
import Output from "./components/Output";

// Define inicial values
export const initialData = {
  tipAmountPerPerson: 0,
  totalPerPerson: 0,
};

export const initialFormData = {
  bill: "",
  tipPercentage: "",
  customPercentage: "",
  numberOfPeople: "",
};

function App() {


  // Define states
  const [data, setData] = useState(initialData)
  const [formData, setFormData] = useState(initialFormData);

  return (
    <>
      <Logo />
      <div className="bg-white px-4 py-4 rounded-2xl md:grid md:grid-cols-2 md:gap-6 md:max-w-[800px] 
      md:px-6 md:py-6">
        <Form formData={formData} setFormData={setFormData} setData={setData} />
        <Output data={data} setData={setData} setFormData={setFormData} />
      </div>
    </>
  );
}

export default App;
