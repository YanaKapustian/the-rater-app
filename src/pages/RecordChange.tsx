import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import { Body, Container, Title } from "../components/styles/Body.styled";
import { DivFlex, Message, MyButton, MyButtonGrey } from "../components/styles/Record.styled";
import { Props } from "../types/types";
import { Record } from "../types/types";
import { checkKeyLS, getFromLS, removeFromLS, setToLS } from "../storage/MyStorage";

const RecordChange: React.FC<Props> = ({onChangeTheme}: Props) => {
   const navigate = useNavigate()
   const {id} = useParams()
   const [keys, setKeys] = useState<string[]>([])

   useEffect(() => {
      if (checkKeyLS('new')) {
         let data = getFromLS('new')
         let k = Object.keys(data).filter(elem => elem !== 'id')
         setKeys(k)
      } else {
         getData()
      }
      async function getData() {
         let data: Record = await getFromLS("records").find((elem: Record) => elem.id === id)
         let k = Object.keys(data).filter(elem => elem !== 'id')
         setKeys(k)
         setToLS('new', data)
      }
   }, [])
   

   function handleSave() {
      let record: Record = getFromLS('new')
      const message = document.querySelector<HTMLElement>('.message')
      if (record.Title) {
         findAndUpdateLS()
         removeFromLS('new') 
         navigate(`/${id}`)
      } else {
         if (message !== null) message.innerText = 'Please enter the title'
      }
   }

   function handleCancel() {
      removeFromLS('new')
      navigate(`/${id}`)
   }

   function findAndUpdateLS() {
      let records: Record[] = getFromLS('records')
      let i = records.findIndex((elem: Record) => elem.id === id)
      let first = records.slice(0, i)
      let second = records.slice(i + 1)
      let updated: Record = getFromLS('new')
      setToLS('records', [...first, updated, ...second])
   }

   return (
      <div>
         <Body>
            <Navbar onChangeTheme={onChangeTheme}></Navbar>
            <Container>
               <Title>Make changes and click 'Save' to update information about the record. Mandatory fields are marked with an asterisk (*)</Title>
               {keys?.map((elem, i) => <Input children={elem} key={i}></Input> )}
               <Message className="message"></Message>
               <DivFlex>
                  <MyButtonGrey onClick={handleCancel}>Cancel</MyButtonGrey>
                  <MyButton onClick={handleSave}>Save</MyButton>
               </DivFlex>
            </Container>
         </Body>
      </div>
   );
}
 
export default RecordChange;