import React, { useState, useRef } from 'react';

export function UserName() {
    const [inputs, setInputs] = useState({
        userName: '',
        userNickname: ''
    })

    const { userName, userNickname } = inputs;

    const resetPoint = useRef<HTMLInputElement>(null);

    const onMark = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }
    const onRemove = () => {
        setInputs({
            userName: '',
            userNickname: ''
        })
        resetPoint.current?.focus();
    }
    return (
        <div>
            <input
                name="userName"
                placeholder="이름"
                value={userName}
                onChange={onMark}
                ref={resetPoint}
            />
            <input
                name="userNickname"
                placeholder="닉네임"
                value={userNickname}
                onChange={onMark}
            />
            <button onClick={onRemove}>초기화</button>
            <div>
                <br />
                <b>값: </b>
                {userName} ({userNickname})
            </div>
            <br />
        </div >
    )
}