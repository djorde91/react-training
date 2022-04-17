import React from 'react';
import PropTypes from 'prop-types';
import defaultLogo from '../../logo.svg';

function Header(props) {
  const { logo, mainText } = props;

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>{mainText}</p>
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
  mainText: PropTypes.string.isRequired,
};

Header.defaultProps = {
  logo: defaultLogo,
};

export default Header;
