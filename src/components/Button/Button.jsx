import PropTypes from 'prop-types';
import StyledButton from './StyledButton';

function Button(props) {
  const { id, type, text, className, styleType } = props;

  const onClick = () => {
    console.log('button clicked');
  };

  return (
    <StyledButton
      id={id}
      type={type}
      className={className}
      styleType={styleType}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  styleType: PropTypes.oneOf(['primary', 'secondary']),
};

Button.defaultProps = {
  type: 'button',
  text: 'default props text',
  styleType: 'primary',
};

export default Button;
