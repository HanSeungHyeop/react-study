import React from 'react';


interface Props {
    user: any
    onRemove: (id: number) => void
}
function User(props: Props) {
    const { user, onRemove } = props;
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    )
}

interface ListProps {
    users: any[]
    onRemove: (id: number) => void
}

export function UserList(props: ListProps) {
    const { users, onRemove } = props;
    return (
        <div>
            {
                users.map(user =>
                    (<User user={user} key={user.id} onRemove={onRemove} />)
                )
            }
        </div>
    )
}