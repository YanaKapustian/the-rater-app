import React, { useEffect, useState } from "react";
import { Record } from "../types/types";
import { getFromLS, setToLS } from "../storage/MyStorage";
import { InputDiv, Label, MarginDiv } from "./styles/Record.styled";

type Props = {
   children: string;
}

const Input: React.FC<Props> = ({children}: Props) => {
   const [text, setText] = useState<string | undefined>('')

   useEffect(() => {
      async function getData() {
         let record: Record = await getFromLS('new')
         if (record[children as keyof typeof record]) {
            setText(record[children as keyof typeof record])
         }
      }
      getData() 
   }, [])

   function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      let record: Record = getFromLS('new')
      let changed = e.target.value
      record[children as keyof typeof record] = changed.trim()
      setText(changed)
      setToLS('new', record)
   }

   return (
      <MarginDiv>
         <Label>{children === 'Title' ? `${children}*` : children}</Label>
         <InputDiv value={text} onChange={handleChange}></InputDiv>
      </MarginDiv>
   );
}
 
export default Input;