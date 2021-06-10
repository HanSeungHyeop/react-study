import React, { useState } from 'react';

export function InputExample () {
    const [year, setYear] = useState(1990);
    const [month, setMonth] = useState(1);
    const [date, setDate] = useState(1);
    const [inputs, setInputs] = useState({
        id: 'abc123',
        portal: 'google',
    });

    const {id, portal} = inputs;
    
    const onIncreaseYear = () => {
        setYear (prev => prev+1);
    }    
    const onIncreaseMonth = () => {
        setMonth (prev => prev+1);
    }
    const onIncreaseDate = () => {
        setDate (prev => prev+1);
    }

    const onDecreaseYear = () => {
        setYear (prev => prev-1);
    }
    const onDecreaseMonth = () => {
        setMonth (prev => prev-1);
    }
    const onDecreaseDate = () => {
        setDate (prev => prev-1);
    }

    const onChangeYear = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(!isNaN(+e.target.value)) {
            setYear(+e.target.value)
        }
    }
    const onChangeMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(!isNaN(+e.target.value)) {
            setMonth(+e.target.value)
        }
    }
    const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(!isNaN(+e.target.value)) {
            setDate(+e.target.value)
        }
    }
    const onChangeText = (e: { target: { id: any; value: any; }; }) => {
        const {value, id} = e.target;

        setInputs({
            ...inputs,
            [id]: value,
        });
    }

    return (
        <div>
            <br/><br/><br/>
            <div>
                <h1>{year}년 {month}월{date}일</h1>
            </div>

            <div>
                <h2>{id}@{portal}.com</h2>
            </div>

            <br/><br/>
            <input 
                className='InputExampleInputBox' 
                value={year}
                onChange={onChangeYear}
            />
            <button onClick={onIncreaseYear}>+1</button>
            <button onClick={onDecreaseYear}>-1</button>            
            <br/>

            <input 
                className='InputExampleInputBox' 
                value={month}
                onChange={onChangeMonth}
            />
            <button onClick={onIncreaseMonth}>+1</button>
            <button onClick={onDecreaseMonth}>-1</button>
            <br/>

            <input 
                className='InputExampleInputBox'
                value={date}
                onChange={onChangeDate}
            />
            <button onClick={onIncreaseDate}>+1</button>
            <button onClick={onDecreaseDate}>-1</button>
            <br/><br/>

            <input 
                className='InputExampleInputBox'
                value={id}
                name='id'
                placeholder='id'
                onChange={onChangeText}
            />
            <input 
                className='InputExampleInputBox'
                value={portal}
                name='portal'
                placeholder='portal'
                onChange={onChangeText}
            />
            
            <br/><br/><br/><br/><br/><br/>
        </div>
    )
}