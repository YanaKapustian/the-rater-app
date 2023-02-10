import { Logo, NavbarBody, NavbarContainer } from "./styles/Navbar.styled";
import Switch from "react-switch";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Props } from "../types/types";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC<Props> = ({onChangeTheme}: Props) => {
   const {name, colors} = useContext(ThemeContext)
   const navigate = useNavigate()

   function handleLogoClick() {
      navigate('/')
   }

   return (
      <NavbarBody>
         <NavbarContainer>
            <Logo onClick={handleLogoClick}>
               <span>the</span>
               <div>RATER</div>
            </Logo>
            <Switch 
               onChange={onChangeTheme}
               checked={name === "dark"}
               height={20}
               width={40}
               checkedIcon={false}
               uncheckedIcon={false}
               handleDiameter={25}
               offColor={colors.colorForToggle}
               onColor={colors.colorForToggle}
            />
         </NavbarContainer>
      </NavbarBody>
   );
}
 
export default Navbar;