import './Button.css';

// 버튼을 보여주는 컴포넌트

// function Button({ text }) {
//   return <button>{text}</button>;
// }

function Button({ children, onClick, color = 'blue', className = '' }) {
  const classNames = `Button ${color} ${className}`; // 클래스명 추가할 때 빈 공백 필요 (2개의 클래스 추가)
  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
