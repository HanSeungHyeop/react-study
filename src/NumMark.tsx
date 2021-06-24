import React, { useState } from 'react';

function NumMark() {
    const [number, setNumber] = useState(0);
    const onPlus = () => {
        setNumber(prev => prev + 1)
    }
    const onMinus = () => {
        setNumber(prev => prev - 1)
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onPlus}>+1</button>
            <button onClick={onMinus}>-1</button>
            <br /><br /><br />
        </div>
    )
}

export default NumMark;