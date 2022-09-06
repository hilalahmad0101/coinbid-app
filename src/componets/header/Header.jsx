import React, { useState } from "react";
import HeroBanner from "../hero-banner/HeroBanner";
import MenuBar from "../navbar/Navbar";
import "./header.css";
const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="header_container">
      <MenuBar sidebar={sidebar} setSidebar={setSidebar} />
      <HeroBanner sidebar={sidebar} />
    </div>
  );
};

export default Header;
