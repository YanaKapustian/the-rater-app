import styled from "styled-components";

export const Body = styled.div`
   width: 100%;
   padding-bottom: 20px;
   background-color: ${props => props.theme.colors.secondary};
   color: ${props => props.theme.colors.textColor};
`
export const ContainerFlex = styled.div`
   width: 100%;
   margin: 40px auto;
   display: flex;
   flex-wrap: wrap;
   a {
      text-decoration: none;
   }
`
export const Container = styled.div`
   width: 80%;
   margin: 40px auto;
`
export const Title = styled.h2`
   font-family: ${props => props.theme["font-family"]};
   font-size: 23px;
   font-weight: 400;
   margin-bottom: 20px;
`
export const NewRecord = styled.div`
   background-color: ${props => props.theme.colors.primary};
   width: 385px;
   height: 300px;
   border-radius: 5px;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   margin-right: 20px;
   margin-bottom: 20px;
   img {
      width: 130px;
      height: 130px;
   }
   :hover {
      background-color: ${props => props.theme.colors.hoverColor};
   }
`
export const Circle = styled.div`
   background-color: #a7b2a4;
   border-radius: 50%;
`
export const Card = styled.div`
   height: 300px;
   background-color: ${props => props.theme.colors.primary};
   color: ${props => props.theme.colors.textColor};
   margin-right: 17px;
   margin-bottom: 17px;
   border-radius: 3px;
   display: flex;
   font-family: ${props => props.theme["font-family"]};
   cursor: pointer;
   :hover {
      background-color: ${props => props.theme.colors.hoverColor};
   }
`
export const Cover = styled.img`
   max-width: 200px;
   height: 300px;
   object-fit: cover;
   object-position: center;
   border-radius: 3px;
`
export const CardInfo = styled.div`
   width: 185px;
   height: 300px;
   padding: 3px;
   font-size: 21px;
   overflow: hidden;
   span {
      font-style: italic; 
   }
   p {
      margin: 0;
      padding: 7px;
      padding-bottom: 0px;
   }
`