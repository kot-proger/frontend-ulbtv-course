import { useState } from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev) => ++prev);

  return (
    <div>
      <h1 className={classes['counter-value']}>{count}</h1>
      <button onClick={increment} type='button'>
        increment
      </button>
    </div>
  );
};
