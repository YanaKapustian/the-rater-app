import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Record } from "../types/types";
import ImageComponent from "./ImageComponent";
import { Card, CardInfo } from "./styles/Body.styled";

type Props = {
   key: string,
   record: Record
}

const RecordCard: React.FC<Props> = ({record}: Props) => {
   const {id} = record
   const [image] = useState(record['Cover (link)'])
   const array: [string, string][] = Object.entries(record).filter(elem => elem[0] !== 'id' && elem[0] !== 'Cover (link)')

   function scrollToTop() {
      window.scrollTo({
         top: 0
      })
   }
   
   return (
      <NavLink to={`/${id}`} className='link' onClick={scrollToTop}>
         <Card>
            {image ? <ImageComponent src={image}></ImageComponent> : null}
            <CardInfo>
               {array.map((elem) => <RecordInfo key={elem[0]} category={elem[0]} value={elem[1]}></RecordInfo>)}
            </CardInfo>
         </Card>
      </NavLink>
   );
}
 
export default RecordCard;

type PropsInfo = {
   key: string,
   category: string,
   value: string,
}

export const RecordInfo: React.FC<PropsInfo> = ({category, value}: PropsInfo) => {
   return <p><span>{category}:</span> {value}</p>
}