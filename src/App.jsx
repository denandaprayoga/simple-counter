import { useState } from 'react';

export default function App() {
  const [count, setCounter] = useState(0);

  return (
    <div className='container'>
      <div className='show-counter'>
        <Button
          className={'button'}
          disabled={count === 0 ? true : false}
          value={'Kurang'}
          count={count}
          setCounter={setCounter}
        />
        <p>{count}</p>
        <Button
          className={'button'}
          disabled={count < 10 ? false : true}
          value={'Tambah'}
          count={count}
          setCounter={setCounter}
        />
      </div>
      <Button
        className={'button reset'}
        disabled={count === 0 ? true : false}
        value={'Reset'}
        setCounter={setCounter}
      />
    </div>
  );
}

function Button({ className, disabled, value, count, setCounter }) {
  return (
    <button
      className={className}
      disabled={disabled}
      onClick={() => {
        handleClick(value, count, setCounter);
      }}
    >
      {value}
    </button>
  );
}

function handleClick(value, counter, setCounter) {
  if (value.toLowerCase() === 'kurang') {
    setCounter(counter - 1);
  } else if (value.toLowerCase() === 'tambah') {
    setCounter(counter + 1);
  } else {
    setCounter(0);
  }
}
