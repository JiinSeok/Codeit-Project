import diceBlue01 from './assets/dice-blue-1.svg';
import diceBlue02 from './assets/dice-blue-2.svg';
import diceBlue03 from './assets/dice-blue-3.svg';
import diceBlue04 from './assets/dice-blue-4.svg';
import diceBlue05 from './assets/dice-blue-5.svg';
import diceBlue06 from './assets/dice-blue-6.svg';
import diceRed01 from './assets/dice-red-1.svg';
import diceRed02 from './assets/dice-red-2.svg';
import diceRed03 from './assets/dice-red-3.svg';
import diceRed04 from './assets/dice-red-4.svg';
import diceRed05 from './assets/dice-red-5.svg';
import diceRed06 from './assets/dice-red-6.svg';
import './Dice.css';

// 주사위 이미지를 보여주는 컴포넌트 

const DICE_IMAGES = { // 객체와 배열로 변수에 정리
  blue: [diceBlue01, diceBlue02, diceBlue03, diceBlue04, diceBlue05, diceBlue06],
  red: [diceRed01, diceRed02, diceRed03, diceRed04, diceRed05, diceRed06],
};

const style = {
  width: '100%',
  maxWidth: '100px',
  maxHeight: '100px',
};

function Dice({ color = 'blue', num = 1 }) { // destructuring, 기본값 지정
  const src = DICE_IMAGES[color][num - 1];
  const alt = `${color} ${num}`;
  return <img src={src} alt={alt} style={style}/>;
}

// function Dice(props) {
//   const diceImg = props.color === 'red' ? diceRed01 : diceBlue01; // 조건 ? true : false
//   return <img src={diceImg} alt='주사위' />;
// }

// function Dice(props) {
//   console.log(props);
//   return <img src={diceBlue01} alt="주사위" />;
// }

// function Dice() {
//   return <img src="./assets/dice-blue-1.svg" alt="주사위" />; // 바로 이미지 주소를 쓰면 이미지를 불러올 수 없다.
// }

export default Dice;
