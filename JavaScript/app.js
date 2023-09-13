import React, { useState } from 'react';
import customTip from './customTip';

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

        //come back to
        
    }

    const validationHandler = (event) => {
        const {value: string} = event.target
        const result = parseFloat(string)
    
        if (Number.isNaN(result)) return 'error'
    
        typeof result === number
    }
    
    return(
    <>
        <input type="number" onChange={event => {event}}></input>
    </>)
};
export default app;