import React, { useRef, useState } from 'react';
import './App.css';
import { BigBox } from './BigBox';
import { SmallBox } from './SmallBox';
import { TitleBox } from './TitleBox';
import { Outline } from './Outline';
import { Counter } from './Counter';
import { InputSample } from './InputSample';
import { UserList } from './UserList';
import { InputExample } from './InputExample';
import CreateUser from './CreateUser';
import NumMark from './NumMark';
import { UserName } from './UserName';
import { InputPractice } from './InputPractice';


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
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    // prev배열 만든 후 user배열 추가
    setUsers(prev => [...prev, user]);
    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };
  const onRemove = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
  }
  return (
    <Outline>
      {/* <Counter /> */}
      <NumMark />
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
        <UserList users={users} onRemove={onRemove} />
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
