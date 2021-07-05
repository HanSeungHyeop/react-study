import React, { useEffect } from 'react';


interface Props {
    user: any
    onRemove: (id: number) => void
    onToggle: (id: number) => void
}
const User = React.memo(function User(props: Props) {
    const { user, onRemove, onToggle } = props;
    useEffect(() => {
        console.log(user);
        return () => {
            console.log(user);
        }
    }, []);
    return (
        <div>
            <b style={{cursor: 'pointer', color: user.active ? 'green' : 'black'}}onClick={() => onToggle(user.id)}>
                {user.username}
            </b>
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    )
})

interface ListProps {
    users: any[]
    onRemove: (id: number) => void
    onToggle: (id: number) => void
}

function UserList(props: ListProps) {
    const { users, onRemove, onToggle } = props;
    return (
        <div>
            {
                users.map(user =>
                    (<User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />)
                )
            }
        </div>
    )
}

export default React.memo(UserList, (prevProps, nextProps)=>nextProps.users===prevProps.users);