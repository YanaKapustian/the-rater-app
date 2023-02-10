import styled from 'styled-components'

export const MarginDiv = styled.div`
   margin-bottom: 20px;
`
export const Label = styled.label`
   font-size: 23px;
   color: ${props => props.theme.colors.textColor};
   font-family: ${props => props.theme["font-family"]};
   margin-right: 30px;
`
export const InputDiv = styled.input`
   min-width: 20%;
   height: 30px;
   font-size: 20px;
   font-family: ${props => props.theme["font-family"]};
   padding-left: 5px;
   border-radius: 3px;
   border: none;
   background-color: ${props => props.theme.colors.primary};
   color: ${props => props.theme.colors.textColor};
`
export const MyButton = styled.button`
   width: 180px;
   height: 50px;
   background-color: ${props => props.theme.colors.primary};
   color: ${props => props.theme.colors.textColor};
   font-family: ${props => props.theme["font-family"]};
   margin-right: 30px;
   border: none;
   border-radius: 3px;
   font-size: 20px;
   cursor: pointer;
   :hover {
      background-color: ${props => props.theme.colors.hoverColor};
   }
`
export const MyButtonGrey = styled.button`
   width: 180px;
   height: 50px;
   background-color: ${props => props.theme.colors.greyColor};
   color: ${props => props.theme.colors.textColor};
   font-family: ${props => props.theme["font-family"]};
   margin-right: 30px;
   border: none;
   border-radius: 3px;
   font-size: 20px;
   cursor: pointer;
   :hover {
      background-color: ${props => props.theme.colors.hoverColorGrey};
   }
`
export const DivFlex = styled.div`
   margin-top: 50px;
`
export const Message = styled.p`
   margin: 0;
   font-size: 18px;
   color: orange;
   font-family: 'Roboto Mono', monospace;
`
