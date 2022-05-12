import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <StyledNav>
      <StyledLink to="login">Login</StyledLink>
      <StyledLink to="text-size-changer">Text Size Changer</StyledLink>
      <StyledLink to="click-counter">Click Counter</StyledLink>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  background-color: ${({ theme }) => theme.navigation.backgroundColor};
  width: 100%;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.navigation.link.color};
  padding: 15px;
  text-decoration: none;
  font-size: 16px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  transition: 0.2s all ease-in-out;
  &:hover {
    transition: 0.2s all ease-in-out;
    color: ${({ theme }) => theme.navigation.link.colorHover};
  }
`;

Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;
