import { useState } from 'react';
import Button from '../Button/Button';

function ClickCounter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < 10) setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 0) setCount((prevCount) => prevCount - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <div>
        <Button
          id="incrementCounter"
          text="+ Increment counter"
          onClick={handleIncrement}
        />
        <Button
          id="decrementCounter"
          text="- Decrement counter"
          styleType="secondary"
          onClick={handleDecrement}
        />
        <h3>
          Count is: <b>{count} </b>
        </h3>
      </div>
      <Button
        id="decrementCounter"
        text="Reset Counter"
        styleType="primary"
        onClick={handleReset}
      />
    </div>
  );
}

export default ClickCounter;
