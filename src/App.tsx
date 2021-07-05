import React, { useRef, useState, useMemo, useCallback, useReducer } from 'react';
import './App.css';
import { BigBox } from './BigBox';
import { SmallBox } from './SmallBox';
import { TitleBox } from './TitleBox';
import { Outline } from './Outline';
import  Counter  from './Counter';
import { InputSample } from './InputSample';
import  UserList  from './UserList';
import { InputExample } from './InputExample';
import CreateUser from './CreateUser';
import NumMark from './NumMark';
import { UserName } from './UserName';
import { InputPractice } from './InputPractice';

function countActiveUsers(users:any[]) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user=>user.active).length;
}
function App() {

  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]);


  const nextId = useRef(4);
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
      active:true
    };
    // prev배열 만든 후 user배열 추가
    setUsers(prev => [...prev, user]);
    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }, [username, email]);

  const onRemove = useCallback((id: number) => {
    //users.filter(user => user.id !== id)
    setUsers(prev=>prev.filter(user => user.id !== id));
  }, [])

  const onToggle = useCallback(
    (id: number) => {
      setUsers(
        prev => prev.map(user=>user.id===id?{...user, active: !user.active} : user)
      )
  }, [])

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <Outline>
      <Counter />
      {/* <NumMark /> */}
      <UserName />
      {/* <InputSample /> */}
      <InputPractice />
      <>
        <CreateUser
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate}
        />
        <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
        <div>활성 사용자 수: {count}</div>
      </>
      {/* <InputExample /> */}
      <BigBox>
        <TitleBox title='자동차' />
        <SmallBox content='현대' />
        <SmallBox content='삼성' />
        <SmallBox content='기아' />
      </BigBox>

      <BigBox>
        <TitleBox title='휴대폰' />
        <SmallBox content='삼성-갤럭시' />
        <SmallBox content='삼성-노트' />
        <SmallBox content='애플-아이폰' />
        <SmallBox content='삼성-효도폰' />
      </BigBox>

      <BigBox>
        <TitleBox title='부동산' />
        <SmallBox content='원룸'/>
        <SmallBox content='삼성' />
        <SmallBox content='투룸'  />
        <SmallBox content='쓰리룸' />
        <SmallBox content='전세'  />
      </BigBox>

      <BigBox>
        <TitleBox title='음식' />
        <SmallBox content='한식' />
        <SmallBox content='중식' />
        <SmallBox content='일식' />
      </BigBox>

    </Outline>
  );
}

export default App;
function initialState(reducer: (state: any, action: any) => any, initialState: any): [any, any] {
  throw new Error('Function not implemented.');
}

