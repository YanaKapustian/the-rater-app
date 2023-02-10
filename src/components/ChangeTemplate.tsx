import 'bootstrap'
import React, { useEffect, useState } from 'react';
import { checkKeyLS, getFromLS, setToLS } from '../storage/MyStorage';
import { ButtonAddModal, ButtonCloseModal, ButtonSaveModal, DivBG, DivFlexNoMg, DivForLabels, InputModal, Modal, TemplButton, TitleModal } from './styles/Modal.styled';

const ChangeTemplate: React.FC = () => {
   const [template, setTemplate] = useState<string[]>([])
   const [inputValue, setInputValue] = useState('')

   useEffect(() => {
      funcSetTemplate()
   }, [])

   function funcSetTemplate() {
      if (checkKeyLS('current')) {
         setTemplate(getFromLS('current'))
      } else {
         setTemplate(getFromLS('basicTemplate'))
      }
   }

   function handleAdd() {
      if (inputValue === '') return;
      let array: string[] = [...template, inputValue]
      setTemplate(array)
      setInputValue('')
   }

   function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      setInputValue(e.target.value)
   }

   function handleDelete(e: { target: any; }) {
      if (e.target.classList.contains('cross')) {
         let value = e.target.id
         findAndDeleteString(value)
      }
   }

   function handleSave() {
      setToLS('current', template)
      window.location.reload()
   }

   function findAndDeleteString(value: string) {
      let i = template.findIndex((elem) => elem === value)
      let first = template.slice(0, i)
      let second = template.slice(i + 1)
      setTemplate([...first, ...second])
   }

   return (
      <div>
         <TemplButton type="button" data-toggle="modal" data-target="#exampleModalCenter">Change the template</TemplButton>
         <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
         <div className="modal-dialog modal-dialog-centered" role="document">
            <Modal className="modal-content">
               <div className="modal-header">
               <TitleModal id="exampleModalLongTitle">Enter the name of the field you want to add and click the button 'Add'. <p>To remove the field, click on the cross next to the name.</p></TitleModal>
               <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
               </button>
               </div>
               <div className="modal-body">
                  <DivFlexNoMg>
                     <InputModal value={inputValue} onChange={handleChange}></InputModal>
                     <ButtonAddModal onClick={handleAdd}>Add</ButtonAddModal>
                  </DivFlexNoMg>
                  <DivForLabels>
                     {template?.map((elem) => {
                        return <DivBG key={elem} onClick={handleDelete}>
                           {elem} 
                           {elem !== 'Title' ? 
                           <img id={elem} className='cross' src="https://i.ibb.co/F0Rd7SD/icons8-multiply-30-1.png" alt="cross"></img> : null}
                        </DivBG>
                     })}
                  </DivForLabels>
               </div>
               <div className="modal-footer">
               <ButtonCloseModal onClick={funcSetTemplate} data-dismiss="modal">Close</ButtonCloseModal>
               <ButtonSaveModal onClick={handleSave} data-dismiss="modal">Save changes</ButtonSaveModal>
               </div>
            </Modal>
         </div>
         </div>
      </div>
   );
}
 
export default ChangeTemplate;