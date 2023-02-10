import { useState } from "react";
import { Cover } from "./styles/Body.styled";

interface Props {
   src: string;
}

const ImageComponent: React.FC<Props> = ({src}: Props) => {
   const [isImageLoaded, setIsImageLoaded] = useState(false);

   return ( 
      <Cover  
      src={src}
      style={{...(isImageLoaded ? {} : {display:'none'}) }} 
      onLoad={()=>{ setIsImageLoaded(true); }}
      ></Cover>
    );
}
 
export default ImageComponent;