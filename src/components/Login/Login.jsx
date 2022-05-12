import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from '../Button/Button';

function Login(props) {
  const { id, text, className, loggedInText, loggedOutText } = props;
  const [logged, setLogged] = useState(false);

  const handleLogin = (type) => {
    setLogged(type);
  };

  return (
    <div id={id} className={className}>
      <h1>{text}</h1>
      <Button
        id="logInButton"
        text="Log in"
        styleType="success"
        onClick={() => handleLogin(true)}
      />
      <Button
        id="logOutButton"
        text="Log out"
        styleType="error"
        onClick={() => handleLogin(false)}
      />
      {logged ? <h3>{loggedInText}</h3> : <h3>{loggedOutText}</h3>}
    </div>
  );
}

Login.propTypes = {
  text: PropTypes.string,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  loggedInText: PropTypes.string,
  loggedOutText: PropTypes.string,
};

Login.defaultProps = {
  text: 'Welcome user, thanks for using our application!',
  loggedInText: 'You are logged in',
  loggedOutText: 'You are logged out',
};

export default Login;
