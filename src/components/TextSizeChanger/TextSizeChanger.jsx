import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

function TextSizeChanger(props) {
  const { id, fontSizeDefault, fontSizeMaxLimit, fontSizeMinLimit } = props;
  const [fontSize, setFontSize] = useState(fontSizeDefault);

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

  return (
    <div id={id}>
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
      <p style={{ fontSize: `${fontSize}px` }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
        magnam!
      </p>
    </div>
  );
}

TextSizeChanger.propTypes = {
  id: PropTypes.string.isRequired,
  fontSizeDefault: PropTypes.number.isRequired,
  fontSizeMaxLimit: PropTypes.number,
  fontSizeMinLimit: PropTypes.number,
};

TextSizeChanger.defaultProps = {
  fontSizeDefault: 16,
  fontSizeMaxLimit: 30,
  fontSizeMinLimit: 8,
};

export default TextSizeChanger;
