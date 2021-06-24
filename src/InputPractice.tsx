import React, { useState } from 'react';

export function InputPractice() {
    const [year, setYear] = useState(1990);
    const [month, setMonth] = useState(1);
    const [date, setDate] = useState(1);
    const [inputs, setInputs] = useState({
        id: 'abc123',
        portal: 'google',
    })

    const { id, portal } = inputs;

    const onIncreaseYear = () => {
        setYear(prev => prev + 1)
    }
    const onDecreaseYear = () => {
        setYear(prev => prev - 1);
    }
    const onIncreaseMonth = () => {
        setMonth(prev => prev + 1);
    }
    const onDecreaseMonth = () => {
        setMonth(prev => prev - 1);
    }
    const onIncreaseDate = () => {
        setDate(prev => prev + 1);
    }
    const onDecreaseDate = () => {
        setDate(prev => prev - 1);
    }

    const onMarkYear = (e: { target: { value: string | number; }; }) => {
        if (!isNaN(+e.target.value)) {
            setYear(+e.target.value)
        }
    }
    const onMarkMonth = (e: { target: { value: string | number; }; }) => {
        if (!isNaN(+e.target.value)) {
            setMonth(+e.target.value)
        }
    }
    const onMarkDate = (e: { target: { value: string | number; }; }) => {
        if (!isNaN(+e.target.value)) {
            setDate(+e.target.value)
        }
    }

    const onMark = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;

        setInputs({
            ...inputs,
            [name]: value
        })
    }
    return (
        <div>
            <div>
                <h1>{year}년 {month}월{date}일</h1>
            </div>
            <div>
                <h2>{id}@{portal}.com</h2>
            </div>
            <div>
                <input
                    className='InputExampleInputBox'
                    name='year'
                    onChange={onMarkYear}
                    value={year}
                />
                <button onClick={onIncreaseYear}>+1</button>
                <button onClick={onDecreaseYear}>-1</button>
                <br />

                <input
                    className='InputExampleInputBox'
                    name='month'
                    onChange={onMarkMonth}
                    value={month}
                />
                <button onClick={onIncreaseMonth}> +1</button>
                <button onClick={onDecreaseMonth}>-1</button>
                <br />

                <input
                    className='InputExampleInputBox'
                    name='date'
                    onChange={onMarkDate}
                    value={date}
                />
                <button onClick={onIncreaseDate}>+1</button>
                <button onClick={onDecreaseDate}>-1</button>
                <br />

                <div>
                    <br />
                    <input
                        name='id'
                        className='InputExampleInputBox'
                        value={id}
                        onChange={onMark}
                    />
                    <input
                        name='portal'
                        className='InputExampleInputBox'
                        value={portal}
                        onChange={onMark}
                    />
                </div>
                <br /><br /><br />
            </div>
        </div>
    )
}