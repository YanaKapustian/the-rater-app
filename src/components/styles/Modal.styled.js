import styled from "styled-components";


export const TemplButton = styled.button`
   background-color: transparent;
   cursor: pointer;
   font-size: 21px;
   border: none;
   outline: 0 !important;
   color: ${props => props.theme.colors.textColor};
   margin-top: 30px;
   :hover {
      text-decoration: underline;
   }
`
export const TitleModal = styled.h5`
   font-size: 21px;
   line-height: 1.4;
   margin: 0;
   p {
      margin: 0;
      padding: 0;
   }
`
export const Modal = styled.div`
   background-color: ${props => props.theme.colors.secondary};
   color: ${props => props.theme.colors.textColor};
   font-family: ${props => props.theme["font-family"]};
`
export const InputModal = styled.input`
   width: 75%;
   height: 35px;
   font-size: 20px;
   padding-left: 5px;
   border-radius: 3px;
   border: none;
   background-color: ${props => props.theme.colors.primary};
   color: ${props => props.theme.colors.textColor};
`
export const InputModal100 = styled.input`
   width: 100%;
   height: 35px;
   font-size: 20px;
   padding-left: 5px;
   border-radius: 3px;
   border: none;
   background-color: ${props => props.theme.colors.primary};
   color: ${props => props.theme.colors.textColor};
`
export const DivFlexNoMg = styled.div`
   display: flex;
   width: 100%;
   justify-content: space-between;
   margin-bottom: 10px;
`
export const ButtonAddModal = styled.button`
   width: 20%;
   height: 35px;
   background-color: ${props => props.theme.colors.primary};
   color: ${props => props.theme.colors.textColor};
   border: none;
   border-radius: 3px;
   font-size: 18px;
   cursor: pointer;
   :hover {
      background-color: ${props => props.theme.colors.hoverColor};
   }
`
export const DivForLabels = styled.div`
   width: 100%;
   display: flex;
   flex-wrap: wrap;
`
export const DivBG = styled.div`
   height: 20px;
   background-color: ${props => props.theme.colors.primary};
   color: ${props => props.theme.colors.textColor};
   margin-right: 10px;
   margin-top: 10px;
   border-radius: 3px;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 15px 10px;
   font-size: 19px;
   p {
      margin: 0;
      padding: 0;
   }
   img {
      width: 25px;
      height: 25px;
      cursor: pointer;
      margin-left: 3px;
      margin-right: -7px;
   }
`
export const Circle = styled.div`
   width: 15px;
   height: 15px;
   background-color: #424a40;
   cursor: pointer;
   margin-left: 5px;
`
export const ButtonSaveModal = styled.button`
   padding: 5px 10px;
   background-color: ${props => props.theme.colors.primary};
   color: ${props => props.theme.colors.textColor};
   border: none;
   border-radius: 3px;
   font-size: 18px;
   cursor: pointer;
   :hover {
      background-color: ${props => props.theme.colors.hoverColor};
   }
`
export const ButtonCloseModal = styled.button`
   padding: 5px 10px;
   background-color: ${props => props.theme.colors.greyColor};
   color: ${props => props.theme.colors.textColor};
   border: none;
   border-radius: 3px;
   font-size: 18px;
   cursor: pointer;
   :hover {
      background-color: ${props => props.theme.colors.hoverColorGrey};
   }
`
export const DivBGUpload = styled.div`
   height: 20px;
   min-width: 110px;
   background-color: ${props => props.theme.colors.primary};
   border: 2px solid ${props => props.theme.colors.primary};
   color: ${props => props.theme.colors.textColor};
   margin-right: 10px;
   margin-top: 10px;
   border-radius: 3px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 15px 10px;
   font-size: 19px;
   cursor: pointer;
   box-sizing: border-box;
   p {
      margin: 0;
      padding: 0;
   }
   img {
      width: 25px;
      height: 25px;
      margin-right: -7px;
   }
   :hover {
      background-color: ${props => props.theme.colors.hoverColor};
   }
`