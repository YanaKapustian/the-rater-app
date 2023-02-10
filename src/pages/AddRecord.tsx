import { Key, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import { Body, Container, Title } from "../components/styles/Body.styled";
import { DivFlex, Message, MyButton, MyButtonGrey } from "../components/styles/Record.styled";
import { Props } from "../types/types";
import { Record } from "../types/types";
import uniqid from 'uniqid';
import { checkKeyLS, getAndAddLS, getFromLS, removeFromLS, setToLS } from "../storage/MyStorage";
import SaveTemplate from "../components/SaveTemplate";
import UploadTemplate from "../components/UploadTemplate";
import ChangeTemplate from "../components/ChangeTemplate";

const AddRecord: React.FC<Props> = ({onChangeTheme}: Props) => {
   const [template, setTemplate] = useState<string[]>([])
   const navigate = useNavigate()

   useEffect(() => {
      if (checkKeyLS('current')) {
         setTemplate(getFromLS('current'))
      } else {
         setTemplate(getFromLS('basicTemplate'))
      }

      let record = {
         id: uniqid()
      }
      if (!checkKeyLS('new')) {
         setToLS('new', record)
      }
   }, [])
   

   function handleSave() {
      let record: Record = getFromLS('new')
      const message = document.querySelector<HTMLElement>('.message')
      if (record.Title) {
         getAndAddLS('records', record)
         removeFromLS('new')
         removeFromLS('current')
         navigate('/')
      } else {
         if (message !== null) message.innerText = 'Please enter the title'
      }
      
   }

   function handleCancel() {
      removeFromLS('new')
      removeFromLS('current')
      navigate('/')
   }

   return (
      <div>
         <Body>
            <Navbar onChangeTheme={onChangeTheme}></Navbar>
            <Container>
               <Title>Fill in the form and click 'Save' to add new record. Mandatory fields are marked with an asterisk (*)</Title>
               {template?.map((elem: string, i: Key | null | undefined) => <Input children={elem} key={i}></Input> )}
               <Message className="message"></Message>
               <DivFlex>
                  <MyButtonGrey onClick={handleCancel}>Cancel</MyButtonGrey>
                  <MyButton onClick={handleSave}>Save</MyButton>
               </DivFlex>
               <ChangeTemplate />
               <SaveTemplate />
               <UploadTemplate />
            </Container>
         </Body>
      </div>
   );
}
 
export default AddRecord;