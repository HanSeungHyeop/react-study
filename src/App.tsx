import React from 'react';
import './App.css';
import {BigBox} from './BigBox';
import {SmallBox} from './SmallBox';
import {TitleBox} from './TitleBox';
import {Outline} from './Outline';
import {Counter} from './Counter';
import { InputSample } from './InputSample';
import { UserList } from './UserList';

function App() {
  return (
    <Outline>
      <Counter/>
      <InputSample/>
      <UserList/>
        <BigBox>
          <TitleBox title='자동차'/>
          <SmallBox content='현대'/>
          <SmallBox content='삼성'/>
          <SmallBox content='기아'/>
        </BigBox>

        <BigBox>
          <TitleBox title='휴대폰'/>
          <SmallBox content='삼성-갤럭시' isWide/>
          <SmallBox content='삼성-노트' isWide/>
          <SmallBox content='애플-아이폰' isWide/>
          <SmallBox content='삼성-효도폰' isWide/>
        </BigBox>

        <BigBox>
          <TitleBox title='부동산'/>
          <SmallBox content='원룸'/>
          <SmallBox content='삼성'/>
          <SmallBox content='투룸'/>
          <SmallBox content='쓰리룸'/>
          <SmallBox content='전세'/>
        </BigBox>

        <BigBox>
          <TitleBox title='음식'/>
          <SmallBox content='한식'/>
          <SmallBox content='중식'/>
          <SmallBox content='일식'/>
        </BigBox>

    </Outline>
  );
}

export default App;
