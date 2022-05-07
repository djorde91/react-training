import PropTypes from 'prop-types';
import StyledSeparator from './StyledSeparator';

function Separator(props) {
  const { id, className, styleType } = props;

  return (
    <StyledSeparator id={id} className={className} styleType={styleType} />
  );
}

Separator.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  styleType: PropTypes.oneOf(['primary', 'secondary']),
};

Separator.defaultProps = {
  styleType: 'primary',
};

export default Separator;
