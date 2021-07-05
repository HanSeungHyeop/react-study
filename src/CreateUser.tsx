import React from 'react';

interface Props {
    username: string;
    email: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onCreate: (event: React.MouseEvent<HTMLButtonElement>) => void
}

function CreateUser(props: Props) {
    const { username, email, onChange, onCreate } = props;
    return (
        <div>
            <input
                name="username"
                placeholder="계정명"
                onChange={onChange}
                value={username}
            />
            <input
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={email}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    );
}

export default React.memo(CreateUser);