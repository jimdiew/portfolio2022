import React from "react";

import { useState } from "react";
import menu from "../assets/statics/menu.svg";

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <img src={menu} alt="" className="menu-icon" />
    </div>
  );
}
