import React from "react";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Overlay from "./Overlay.js";

export default function Header() {
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => setIsToggled(!isToggled);

  return (
    <div>
      <MenuIcon sx={{ fontSize: 70, m: 1 }} onClick={handleClick} />
      {/* <Overlay toggleData={isToggled} /> */}
    </div>
  );
}
