import { useState } from 'react';

export default function App() {
  const [count, setCounter] = useState(0);

  return (
    <div className='container'>
      <div className='show-counter'>
        <Button
          className={'button'}
          disabled={count === 0 ? true : false}
          text={'Kurang'}
          handleClick={() => setCounter(count - 1)}
        />
        <p>{count}</p>
        <Button
          className={'button'}
          disabled={count < 10 ? false : true}
          text={'Tambah'}
          handleClick={() => setCounter(count + 1)}
        />
      </div>
      <Button
        className={'button reset'}
        disabled={count === 0 ? true : false}
        text={'Reset'}
        handleClick={() => {
          setCounter(0);
        }}
      />
    </div>
  );
}

function Button({ className, disabled, text, handleClick }) {
  return (
    <button className={className} disabled={disabled} onClick={handleClick}>
      {text}
    </button>
  );
}
