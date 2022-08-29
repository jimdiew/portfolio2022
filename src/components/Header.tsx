import React from "react";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Overlay from "./Overlay.js";

interface HeaderProps {
  isEducation?: any,
}
const Header = (props: HeaderProps) => {
  const [isToggled, setIsToggled] = useState(false);
  const [isEducation, setIsEducation] = useState(false);

  const handleClick = () => setIsToggled(!isToggled);
 
  return (
    <div className={isEducation ? '#00F5D4' : '#f15bb5'}>
      <MenuIcon sx={{ fontSize: 70, m: 1 }} onClick={handleClick} />
      {/* <Overlay toggleData={isToggled} /> */}
    </div>
  );
}

export default Header