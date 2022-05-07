import PropTypes from 'prop-types';
import defaultLogo from '../../logo.svg';
import './header.css';

function Header(props) {
  const { logo, id, text } = props;

  return (
    <header id={id} className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>{text}</p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}

Header.propTypes = {
  logo: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.object, PropTypes.string]), // For accepting HTML objects and Strings.
  id: PropTypes.string,
};

Header.defaultProps = {
  logo: defaultLogo,
  text: (
    <>
      Edit
      <code> src/App.js </code>
      and save to reload
    </>
  ),
};

export default Header;
