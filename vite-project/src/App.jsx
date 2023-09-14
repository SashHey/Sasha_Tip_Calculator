import React, { useState } from 'react';

const TIP_PERCENTAGES = [
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
  const [bill, setBill] = useState(0);
  const [selectedTip, setSelectedTip] = useState(0.1);
  const [people, setPeople] = useState(1);

  const handleTipClick = (tipAmount) => {
    setSelectedTip(tipAmount);
  };

  const handleBillChange = (event) => {
    const { value } = event.target;
    setBill(value === '' ? 0 : parseFloat(value));
  };

  const handlePeopleChange = (event) => {
    const { value } = event.target;
    setPeople(value === '' ? 0 : parseInt(value));
  };

  const tipAmount = (bill * selectedTip) / people || 0;
  const totalPerPerson = (bill + bill * selectedTip) / people || 0;

  return (
    <div>
      <h1>Splitter</h1>
      <div>
        <h2>Bill</h2>
        <input
          type="number"
          value={bill}
          onChange={handleBillChange}
        />

        <h2>Select Tip %</h2>
        {TIP_PERCENTAGES.map((tipOption) => (
          <button
            key={tipOption.id}
            onClick={() => handleTipClick(tipOption.amount)}
            style={{
              background: selectedTip === tipOption.amount ? 'blue' : 'pink',
            }}
          >
            {tipOption.title}
          </button>
        ))}

        <h2>Number of People</h2>
        <input
          type="number"
          value={people}
          onChange={handlePeopleChange}
        />
        {people === 0 && <p>Amount of people cannot be 0</p>}
      </div>
      <div>
        <h2>Tip Amount / Person</h2>
        <div>{tipAmount.toFixed(2)}</div>
        <h2>Total / Person</h2>
        <div>{totalPerPerson.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default App;
