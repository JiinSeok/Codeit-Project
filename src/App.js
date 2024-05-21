import Board from "./Board";
import Button from "./Button";
import { useState } from "react";
import './App.css'
import logoImg from './assets/logo.png';

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() { // State Lifting 자식 컴포넌트의 state를 부모 컴포넌트로
  const [myHistory, setMyHistory] = useState([]); // 배열을 가리키는 주소값을 가지고 있는 gameHistory
  const [partnerHistory, setPartnerHistory] = useState([]); // 배열을 가리키는 주소값을 가지고 있는 gameHistory
  
  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextPartnerNum = random(6);
    setMyHistory([...myHistory, nextMyNum]); // 빈 배열 안에 기존 배열을 펼치고 새 요소 추가해서 새로 만들기
    setPartnerHistory([...partnerHistory, nextPartnerNum]);
  };
  
  const handleClearClick = () => {
    setMyHistory([]);
    setPartnerHistory([]);
  };

  return (
    <div className="App">
      <img className="App-logo" src={logoImg} alt="주사위게임 로고" />
      <h1 className="App-title">주사위게임</h1>
      <div>
        <Button className="Button blue App-button" color='blue' onClick={handleRollClick}>던지기</Button>
        <Button className="Button red App-button" color='red' onClick={handleClearClick}>처음부터</Button>
      </div>
      <div className="App-boards">
        <div className="Board App-board">
          <Board name="나" color="blue" gameHistory={myHistory} />
        </div>
        <div className="Board App-board">
          <Board name="상대" color="red" gameHistory={partnerHistory} />
        </div>
      </div>
    </div>
  );
}

export default App;