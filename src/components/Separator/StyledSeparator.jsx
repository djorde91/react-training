import styled from 'styled-components';

const StyledSeparator = styled.hr`
  width: 100%;
  border: 2px solid
    ${(props) => props.theme.separator[props.styleType].borderColor};
  padding: 10px;
  background-color: ${(props) =>
    props.theme.separator[props.styleType].backgroundColor};
  margin: 0;
  font-weight: 400;
  font-size: 20px;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export default StyledSeparator;
