import styled from "styled-components";

export const NavbarBody = styled.nav`
  background-color: ${props => props.theme.colors.primary};
  width: 100%;
  height: 85px;
  color: ${props => props.theme.colors.textColor};
`;

export const NavbarContainer = styled.div`
  width: 80%;
  height: 85px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.div`
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  span {
    font-size: 30px;
    font-family: 'Satisfy', cursive;
  }
  div {
    font-size: 30px;
    font-family: 'Ubuntu', sans-serif;
  }
  ::after {
    content: 'rate your experience';
      font-size: 12px;
      position: absolute;
      bottom: 0;
      width: 200px;
      margin-left: 73px;
      line-height: .7;
      font-family: 'Roboto Mono', monospace;
  }
`