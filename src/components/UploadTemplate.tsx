import 'bootstrap'
import { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { getFromLS, removeFromLS, setToLS } from '../storage/MyStorage';
import { ButtonCloseModal, ButtonSaveModal, DivBGUpload, DivForLabels, Modal, TemplButton, TitleModal } from './styles/Modal.styled';
import { Message } from './styles/Record.styled';

const UploadTemplate: React.FC = () => {
   const templates: {} = getFromLS('templates')
   const theme = useContext(ThemeContext)

   const [keys, setKeys] = useState<string[]>(Object.keys(templates))
   const [values, setValues] = useState<string[]>(Object.values(templates))
   const [nameOfTemplate, setNameOfTemplate] = useState('')

   function handleSave() {
      let i = keys.findIndex((elem) => elem === nameOfTemplate)
      let value = values[i]
      setToLS("current", value)

      handleRemoving()

      let curr = getFromLS('current')
      if (curr === undefined) removeFromLS('current')
      window.location.reload()
   }

   function handleClick(e: { [x: string]: any; target: any; }) {
      if (e.target.classList.contains('cross')) {
         let value = e.target.id
         findAndDeleteString(value)
      } else {
         removeStyles()
         e.currentTarget.style.border = '2px solid orange'
         setNameOfTemplate(e.currentTarget.innerText)
      }
   }

   function handleRemoving() {
      let object: { [char: string]: string } = {}
      keys.forEach((elem: string, i: number) => {
         object[elem] = values[i]
      }) 
      setToLS('templates', object)
   }

   function findAndDeleteString(value: string) {
      let i = keys.findIndex((elem) => elem === value)

      let first = keys.slice(0, i)
      let second = keys.slice(i + 1)
      setKeys([...first, ...second])

      first = values.slice(0, i)
      second = values.slice(i + 1)
      setValues([...first, ...second])
   }

   function removeStyles() {
      const items = document.querySelectorAll<HTMLDivElement>('.item')
      items.forEach((elem => elem.style.border = `2px solid ${theme.colors.primary}`))
   }

   return (
      <div>
         <TemplButton type="button" data-toggle="modal" data-target="#exampleModalCenter3">Choose the saved template</TemplButton>
         <div className="modal fade" id="exampleModalCenter3" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
         <div className="modal-dialog modal-dialog-centered" role="document">
            <Modal className="modal-content">
               <div className="modal-header">
               <TitleModal id="exampleModalLongTitle">Choose the template and click 'Save' to use it.</TitleModal>
               <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
               </button>
               </div>
               <div className="modal-body">
                  <DivForLabels>
                     {keys.length === 0 ? <Message>You don't have any saved templates</Message> : 
                     keys?.map((elem) => {
                        return <DivBGUpload key={elem} className='item' onClick={handleClick}>
                           {elem} 
                           <img id={elem} className='cross' src="https://i.ibb.co/F0Rd7SD/icons8-multiply-30-1.png" alt="cross"></img>
                        </DivBGUpload>
                     })}
                  </DivForLabels>
                  <Message className="message-modal" />
               </div>
               <div className="modal-footer">
               <ButtonCloseModal onClick={removeStyles} data-dismiss="modal">Close</ButtonCloseModal>
               <ButtonSaveModal onClick={handleSave} data-dismiss="modal">Save</ButtonSaveModal>
               </div>
            </Modal>
         </div>
         </div>
      </div>
   );
}
 
export default UploadTemplate;