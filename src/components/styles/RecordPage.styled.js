import styled from 'styled-components'

export const CoverImage = styled.img`
   float: left;
   min-width: 300px;
   max-width: 500px;
   max-height: 500px;
   object-fit: cover;
   object-position: center;
   border-radius: 3px;
   margin-right: 30px;
   margin-bottom: 10px;
`
export const RecordContainer = styled.div`
   width: 80%;
   margin: 40px auto;
   margin-bottom: 40px;
   .link {
      display: block;
      width: 230px;
   }
   .a {
      display: block;
      width: 100px;
      font-size: 24px;
      color: #a7b2a4;
      //margin-top: 30px;
   }
`
export const DivFlex = styled.div`
   display: flex;
`
export const Info = styled.div`
   font-size: 25px;
   span {
      font-style: italic; 
   }
   p {
      margin: 0;
      padding-bottom: 3px;
   }
`
export const CircleArrow = styled.div`
   width: 80px;
   height: 80px;
   border-radius: 50%;
   background-color: ${props => props.theme.colors.primary};
   display: flex;
   align-items: center;
   justify-content: center;
   margin-top: 20px;
   img {
      width: 50px;
      height: 50px;
   }
`
export const OptionPar = styled.p`
   display: block;
   max-width: 280px;
   cursor: pointer;
   font-size: 22px;
   color: ${props => props.theme.colors.textColor};
   margin-bottom: 10px;
   margin-top: 15px;
   :hover {
      text-decoration: underline;
   }
`