import React, { useState } from 'react';

const bill = 0;
const customTip = 0;
const people = 0;
const tipAmount = 0;
const tipTotal = 0;
const reset = false;

const tip = [
    {
        id: 'p1',
        title: '5%',
        amount: 0.05,
    },
    {
        id: 'p2',
        title: '10%',
        amount: 0.1,
    },
    {
        id: 'p3',
        title: '15%',
        amount: 0.15,
    },
    {
        id: 'p4',
        title: '25%',
        amount: 0.25,
    },
    {
        id: 'p5',
        title: '50%',
        amount: 0.5,
    },
];

const App = () => {
    const [bill, setBill] = useState(1.1);
    const [tip, setTip] = useState(1.1)
    const [people, setPeople] = useState(2)

    const handler = ({tipAmount, label}) => {
        return (
            <button onClick={() => setTip(tipAmount)}
            style={{background: tip === tipAmount ? "blue" : "pink",}}>
            {label}
            </button>
        );
    };
    const buttons = TIP_PERCENTAGE.map(handler);

    const handleBill = (event) => {
        const {value} = event.target;
        if (value === "") 
        return setBill(0);

        const result = parseFloat(value);
        if (result < 0)
        return setBill(result);
    };

    const handlePeople = (event) => {
      const {value} = event.target;
      if (value === "")
      return setPeople(0);

      const result = parseInt(value);
      if (result < 0)
      return setPeople(result);      
    };

    const handleValidation = (event) => {
      const {value: string} = event.target
      const result = parseFloat(string)
  
      if (Number.isNaN(result)) return 'error'
  
      typeof result === number
  };
  
  <input type="number" onChange={event => {event}}></input>
};

<div>
  <h1>Splitter</h1>
  <div>
    <h2>Bill</h2>
    <input type="number"
    value = {bill}
    onChange = {handleBill}/>

    <h2>Select Tip %</h2>
    {buttons}

    <h2>Number of People</h2>
    <input value = {people}
    onChange = {handlePeople}/>
    {people === 0 && (
      <p>Amount of people cannot be 0</p>
    )}
  </div>
  <div>
    <h2>Tip Amount / Person</h2>
    <div>
      {people === 0
      ? "..."
      : tipAmount}
    </div>
    <h2>Total / Person</h2>
    <div>
      {people === 0
      ? "..."
      : tipTotal}
    </div>
  </div>
</div>

export default App;