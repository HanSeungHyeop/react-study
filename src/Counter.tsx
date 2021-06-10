import React, {useState} from 'react';

export function Counter() {
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        console.log('+1')
        setNumber (prev => prev+1);
    }
    const onDecrease = () => {
        console.log('-1')
        setNumber(prev => prev-1);
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isNaN(+e.target.value)) {
            setNumber(+e.target.value)
        }
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
            <br/>
            <input onChange={onChange} value={number}/>
        </div>
    )
}