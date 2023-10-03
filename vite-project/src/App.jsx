import React, { useState } from 'react';
import Components from './Components';

const App = () => {
  <Components></Components>
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
              background: selectedTip === tipOption.amount ? 'blue' : 'black',
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
}
  
export default App;