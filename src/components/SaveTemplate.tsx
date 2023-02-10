import 'bootstrap'
import React, { useState } from 'react';
import { getFromLS, setToLS } from '../storage/MyStorage';
import { ButtonCloseModal, ButtonSaveModal, DivFlexNoMg, InputModal100, Modal, TemplButton, TitleModal } from './styles/Modal.styled';
import { Message } from './styles/Record.styled';

const SaveTemplate: React.FC = () => {
   const [inputValue, setInputValue] = useState('')

   function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      setInputValue(e.target.value)
   }

   function handleSave() {
      if (inputValue === '') return;
      showMessage("")
      if (getFromLS('current') == null) {
         showMessage("You can't save the basic template")
      } else {
         saveTemplateToLS()
      }
   }

   function showMessage(text: string) {
      const message = document.querySelector<HTMLElement>('.message-modal')
      if (message !== null) message.innerText = text;
   }

   function saveTemplateToLS() {
      let templates = getFromLS('templates')
      let current = getFromLS('current')
      if (templates[inputValue]) {
         showMessage("This name is already used!")
      } else {
         templates[inputValue] = current;
         setToLS('templates', templates)
         closeModal()
         window.location.reload()
      }
   }

   function closeModal() {
      const btn = document.querySelector('.button-save')
      btn?.setAttribute("data-dismiss", "modal")
   }

   return (
      <div>
         <TemplButton type="button" data-toggle="modal" data-target="#exampleModalCenter2">Save current template</TemplButton>
         <div className="modal fade" id="exampleModalCenter2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
         <div className="modal-dialog modal-dialog-centered" role="document">
            <Modal className="modal-content">
               <div className="modal-header">
               <TitleModal id="exampleModalLongTitle">Enter the name of the template and click 'Save'</TitleModal>
               <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
               </button>
               </div>
               <div className="modal-body">
                  <DivFlexNoMg>
                     <InputModal100 value={inputValue} onChange={handleChange}></InputModal100>
                  </DivFlexNoMg>
                  <Message className="message-modal" />
               </div>
               <div className="modal-footer">
               <ButtonCloseModal data-dismiss="modal">Close</ButtonCloseModal>
               <ButtonSaveModal className='button-save' onClick={handleSave}>Save</ButtonSaveModal>
               </div>
            </Modal>
         </div>
         </div>
      </div>
   );
}
 
export default SaveTemplate;