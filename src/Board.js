import Dice from "./Dice";
import './Board.css';
// import classNames from "classnames";

// function App() {
//   return <div>App 컴포넌트!</div>
// }

// function App() {
//   return (
//     <div>
//       <div>
//         <Button text='던지기' />
//         <Button text='처음부터' />
//       </div>
//       <Dice color="red" num={2} />
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <div>
//         <Button>던지기</Button>
//         <Button>처음부터</Button>
//       </div>
//       <Dice color="red" num={2} />
//     </div>
//   );
// }

function Board({ name, color, gameHistory, className = '' }) {
  const num = gameHistory[gameHistory.length - 1] || 1;
  const sum = gameHistory.reduce((a, b) => a + b, 0); // a 누적 + b 현재를 더해서 최종 리턴
  const classNames = `Board ${className}`;

  return (
    <div>
      <h2 className="Board-heading">{name}</h2>
      <Dice color={color} num={num} />
      <h2 className="Board-heading">총점</h2>
      <p>{sum}</p>
      <h2 className="Board-heading">기록</h2>
      <p>{gameHistory.join(', ')}</p>
    </div>
  );
}

export default Board;