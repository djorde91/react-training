import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
function TextSizeChanger(props) {
  const { id, text, fontSizeDefault, fontSizeMaxLimit, fontSizeMinLimit } =
    props;
  const [fontSize, setFontSize] = useState(fontSizeDefault);
  const [sizeWarning, setSizeWarning] = useState('');

  useEffect(() => {
    handleSizeWarning();
  }, [fontSize]);

  const handleFontSize = (type) => {
    switch (type) {
      case 'increase':
        if (fontSize < fontSizeMaxLimit) setFontSize(fontSize + 2);

        break;
      case 'decrease':
        if (fontSize > fontSizeMinLimit) setFontSize(fontSize - 2);

        break;
    }
  };

  const handleSizeWarning = () => {
    let message = false;

    if (fontSize === fontSizeMaxLimit) {
      message = 'increase';
    } else if (fontSize === fontSizeMinLimit) {
      message = 'decrease';
    }

    if (message) {
      setSizeWarning(
        <>
          <h3>
            {`Font can't`} <b style={{ color: 'red' }}>{message}</b> {`anymore`}
          </h3>
        </>
      );
      return;
    }
    setSizeWarning('');
  };

  return (
    <div id={id}>
      {sizeWarning}
      <h2>
        Current fontsize is: <b>{fontSize}</b>
      </h2>
      <Button
        id="increaseSize"
        text="+ increase font size"
        onClick={() => handleFontSize('increase')}
      />
      <Button
        id="decreaseSize"
        text="- Decrease font size"
        styleType="secondary"
        onClick={() => handleFontSize('decrease')}
      />
      <p style={{ fontSize: `${fontSize}px` }}>{text}</p>
    </div>
  );
}

TextSizeChanger.propTypes = {
  id: PropTypes.string.isRequired,
  fontSizeDefault: PropTypes.number.isRequired,
  fontSizeMaxLimit: PropTypes.number,
  fontSizeMinLimit: PropTypes.number,
  text: PropTypes.string.isRequired,
};

TextSizeChanger.defaultProps = {
  fontSizeDefault: 16,
  fontSizeMaxLimit: 30,
  fontSizeMinLimit: 8,
};

export default TextSizeChanger;
