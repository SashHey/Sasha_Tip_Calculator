import React, { useState } from 'react';
import customTip from './JavaScript/customTip';

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

const app = () => {
    const [tips, selectTips] = useState(tip);
    const addTipsHandler = (tipsy) => {
        selectTips((setTips) => {
            return [expense, ...setTips];
        });
    };
    return (
        <CustomCalculator/>      
    );
};

const validationHandler = (event) => {
    const {value: string} = event.target
    const result = parseFloat(string)

    if (Number.isNaN(result)) return 'error'

    typeof result === number
}

<input type="number" onChange={event => {event}}></input>

export default app;