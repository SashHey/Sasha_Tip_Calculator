import React, { useState } from 'react';

const Components = () => {
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
}
export default Components;