import Navbar from "../components/Navbar";
import { Body, Container, ContainerFlex, NewRecord, Title } from "../components/styles/Body.styled";
import { NavLink } from 'react-router-dom'
import { Props } from "../types/types";
import { Record } from "../types/types";
import RecordCard from "../components/RecordCard";
import MyStorage, { removeFromLS } from "../storage/MyStorage";
import { getFromLS } from "../storage/MyStorage";
import { useEffect } from "react";

const Books: React.FC<Props> = ({onChangeTheme}: Props) => {
   const records: Record[] = getFromLS('records')

   useEffect(() => {
      removeFromLS('new')
   }, [])
   
   return ( 
      <div>
         <Body>
            <MyStorage></MyStorage>
            <Navbar onChangeTheme={onChangeTheme}></Navbar>
            <Container>
               <Title>Click + to add new record. Click on the record to see the detailed information.</Title>
               <ContainerFlex>
                  <NavLink to='/addrecord'>
                     <NewRecord>
                        <img src="https://i.ibb.co/ZT961Hb/plus.png" alt="plus"></img>
                     </NewRecord>
                  </NavLink>
               {records?.map((record: Record) => <RecordCard key={record.id} record={record}></RecordCard>)}
               </ContainerFlex>
            </Container>
         </Body>
      </div>
    );
}
 
export default Books;