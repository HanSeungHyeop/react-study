import React, { useState } from 'react';

export function InputExample () {
    const [year, setYear] = useState(1990);
    const [month, setMonth] = useState(1);
    const [date, setDate] = useState(1);
    
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

    return (
        <div>
            <br/><br/><br/>
            <h1>{year}년 {month}월{date}일</h1>
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
            
            <br/><br/><br/><br/><br/><br/>
        </div>
    )
}