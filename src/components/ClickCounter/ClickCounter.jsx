import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from '../Button/Button';

function ClickCounter(props) {
  const { id, text, className, counter = { max, min, initial } } = props;
  const [count, setCount] = useState(counter.initial);

  const handleIncrement = () => {
    if (count < counter.max) setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > counter.min) setCount((prevCount) => prevCount - 1);
  };

  const handleReset = () => {
    setCount(counter.initial);
  };

  return (
    <div id={id} className={className}>
      <div>
        <Button
          id="incrementCounter"
          text="+ Increment counter"
          styleType="success"
          onClick={handleIncrement}
        />
        <Button
          id="decrementCounter"
          text="- Decrement counter"
          styleType="error"
          onClick={handleDecrement}
        />
        <h3>
          {text}{' '}
          <b id="counterValue" value={count}>
            {count}{' '}
          </b>
        </h3>
      </div>
      <Button
        id="resetCounter"
        text="Reset Counter"
        styleType="warning"
        onClick={handleReset}
      />
    </div>
  );
}

ClickCounter.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string,
  className: PropTypes.string,
  counter: PropTypes.object,
  counter: PropTypes.shape({
    max: PropTypes.number,
    min: PropTypes.number,
    initial: PropTypes.number,
  }),
};

ClickCounter.defaultProps = {
  text: 'Count is:',
  counter: {
    max: 10,
    min: 0,
    initial: 0,
  },
};

export default ClickCounter;
