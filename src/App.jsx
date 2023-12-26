import { useState } from 'react';

export default function App() {
  const [count, setCounter] = useState(0);

  function handleClick(text) {
    if (text.toLowerCase() === 'kurang') {
      setCounter(count - 1);
    } else if (text.toLowerCase() === 'tambah') {
      setCounter(count + 1);
    } else {
      setCounter(0);
    }
  }

  return (
    <div className='container'>
      <div className='show-counter'>
        <Button
          className={'button'}
          disabled={count === 0 ? true : false}
          text={'Kurang'}
          handleClick={handleClick}
        />
        <p>{count}</p>
        <Button
          className={'button'}
          disabled={count < 10 ? false : true}
          text={'Tambah'}
          handleClick={handleClick}
        />
      </div>
      <Button
        className={'button reset'}
        disabled={count === 0 ? true : false}
        text={'Reset'}
        handleClick={handleClick}
      />
    </div>
  );
}

function Button({ className, disabled, text, handleClick }) {
  return (
    <button
      className={className}
      disabled={disabled}
      onClick={() => {
        handleClick(text);
      }}
    >
      {text}
    </button>
  );
}
