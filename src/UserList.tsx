import React from 'react';

function User ({user}: {user:any}) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    )
}

export function UserList() {
    const users= [
        {
            id: 1,
            username: 'baxter',
            email: 'baxter49@naver.com'
        },
        {
            id: 2,
            username:'hsh',
            email: 'h970409@gmail.com'
        },
        {
            id: 3,
            username: 'hyeop',
            email: 'kkang53687@naver.com'
        }
    ];

    return (
        <div>
            {
                users.map(
                    user => (<User user={user} key={user.id}/>)
                )    
            }
        </div>
    )
}