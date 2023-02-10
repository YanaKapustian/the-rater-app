import { NavLink, useNavigate, useParams } from "react-router-dom";
import { getAndRemoveLS, getFromLS } from "../storage/MyStorage";
import Navbar from "../components/Navbar";
import { RecordInfo } from "../components/RecordCard";
import { Body } from "../components/styles/Body.styled";
import { DivFlex } from "../components/styles/Record.styled";
import { CircleArrow, CoverImage, Info, OptionPar, RecordContainer } from "../components/styles/RecordPage.styled";
import { Record } from "../types/types";
import { Props } from "../types/types";
import arrow from '../assets/arrow-left.png';
import { useEffect, useState } from "react";

const RecordPage: React.FC<Props> = ({onChangeTheme}: Props) => {
   const {id} = useParams()
   const navigate = useNavigate()
   const [image, setImage] = useState<string | undefined>()
   const [array, setArray] = useState<[string, string][]>()
   const [isImageLoaded, setIsImageLoaded] = useState(false);

   useEffect(() => {
      async function getData() {
         let data: Record = await getFromLS("records").find((elem: Record) => elem.id === id)
         setImage(data['Cover (link)'])
         let arr: [string, string][] = Object.entries(data).filter(elem => elem[0] !== 'id' && elem[0] !== 'Cover (link)')
         setArray(arr)
      }
      getData()
   }, [])

   function handleDelete() { 
      getAndRemoveLS('records', id)
      navigate('/')
   }

   return (
   <div>
      <Body>
         <Navbar onChangeTheme={onChangeTheme}></Navbar>
         <RecordContainer>
            <DivFlex>
               <CoverImage 
               src={image}
               style={{...(isImageLoaded ? {} : {display:'none'}) }} 
               onLoad={()=>{ setIsImageLoaded(true); }}
               ></CoverImage>
               <Info>
                  {array?.map((elem) => <RecordInfo key={elem[0]} category={elem[0]} value={elem[1]}></RecordInfo>)}
               </Info>
            </DivFlex>
            <NavLink className='link' to={`/${id}/change`}><OptionPar>Change the record</OptionPar></NavLink>
            <NavLink className='link' to='/' onClick={handleDelete}><OptionPar>Delete the record</OptionPar></NavLink>
            <NavLink className='a' to='/'>
               <CircleArrow><img src={arrow} alt='arrow'></img></CircleArrow>
            </NavLink> 
         </RecordContainer>
         
      </Body>
   </div>
   );
}
 
export default RecordPage;