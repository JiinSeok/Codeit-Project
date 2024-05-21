// import { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // 맨 위에서 import 해야 함
import './index.css' // head 태그 안에 style 태그로 자동 작성

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render( // JSX - 자바스크립트 확장 문법
//   <div>
//     <h1 id="hello" className='hi'>안녕 리액트</h1> 
//     <p>리액트</p>
//   </div>
// );

// root.render( // <div id="root"> 아래에 바로 코드 시작
//   <Fragment>
//     <h1 id="hello" className='hi'>안녕 리액트</h1>
//     <p>리액트</p>
//   </Fragment>
// );

// root.render( // Fragment 생략
//   <>
//     <h1 id="hello" className='hi'>안녕 리액트</h1>
//     <p>리액트</p>
//   </>
// );

// root.render(
//   <form>
//     <label htmlFor='name'>이름</label>
//     <input id='name' type='text'onBlur="" onFocus="" onMouseDown=""/>
//   </form>
// );

// const product = 'MacBook';
// const model = ' Air';
// const item = product + model;
// const imageUrl =
//   'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/MacBook_with_Retina_Display.png/500px-MacBook_with_Retina_Display.png';

// function handleClick() {
//   alert('곧 도착합니다!');
// }

// root.render( // 자바스크립트 표현식!은 중괄호 안에 쓸 수 있다. 속성도 동일하다. 문장은 X(if, for, 함수)
//   <>
//     <h1>나만의 {item.toUpperCase()} 주문하기</h1>
//     <img src={imageUrl} alt="제품 사진" />
//     <button onClick={handleClick}>확인</button>
//   </>
// );

class Dice { // 객체 지향 개념으로 선언할 때 사용하는 class. css와 다름
  roll() {
    console.log('Roll!');
  }
}

function Hello() { // 리액트 컴포넌트
  return <h1>안녕 리액트</h1>;
}

const element = (
  <>
    <Hello />
    <Hello />
    <Hello />
  </>
);

// console.log(element); // 리액트 엘리먼트

root.render(
  <App />
);
