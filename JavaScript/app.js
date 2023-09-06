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

const app = () => {
    const [tips, selectTips] = useState(tip);
    const addTipsHandler = (tipsy) => {
        selectTips((setTips) => {
            return [expense, ...setTips];
        });
    };
    return (
        //<div>
            <></>    
        //<div/>
    );
};

export default app;