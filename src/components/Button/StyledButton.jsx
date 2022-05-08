import styled from 'styled-components';
// debugger;
const StyledButton = styled.button`
  transition: all 0.5s;
  color: ${({ theme, styleType }) => theme.button[styleType].color};
  font-weight: 400;
  font-size: 20px;
  background-color: ${({ theme, styleType }) =>
    theme.button[styleType].backgroundColor};
  border: 2px solid
    ${(props) => props.theme.button[props.styleType].borderColor};
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  padding: 15px;
  margin: 15px;
  &:hover {
    background-color: ${({ theme, styleType }) =>
      theme.button[styleType].backgroundColorHover};
  }
`;

export default StyledButton;
