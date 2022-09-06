import React from "react";
import "./navbar.css";
import logo from "../../assets/3D_Logo-removebg-preview.png";
import googleBtn from "../../assets/google-play.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { navbarMenu } from "../../assets/data/data";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
const MenuBar = ({ sidebar, setSidebar }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/download");
  };

  const menu = () => {
    setSidebar(!sidebar);
  };
  return (
    <div className="navbar_container">
      <Navbar
        style={{
          backgroundColor: "#009D6C",
          padding: "6px 0px",
          boxShadow: "0",
        }}
        expand="lg"
      >
        <Container>
          <Navbar.Brand>
            <img
              onClick={() => navigate("/")}
              style={{
                cursor: "pointer",
                width: " 100px",
                height: " 61px",
                objectFit: "cover",
              }}
              src={logo}
              alt="logo"
            />
          </Navbar.Brand>
          <div
            className="navbar__left__side"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div
              className="right__side__navbar"
              style={{ display: "flex", alignItems: "center" }}
            >
              <button className="join_btn">Download Apps</button>
              <button className="login_btn">
                <img
                  src={googleBtn}
                  alt=""
                  style={{
                    width: "133px",
                    height: "33px",
                    borderRadius: "19px",
                  }}
                />
              </button>
            </div>
            <FaBars className="bar" onClick={menu} />
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default MenuBar;
