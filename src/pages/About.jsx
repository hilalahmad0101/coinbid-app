import React from "react";
import { Col, Container, Row } from "react-bootstrap/esm";
import "../componets/hero-banner/he_banner.css";
import MenuBar from "../componets/navbar/Navbar";
import "../componets/download/download.css";
const About = ({ sidebar, setSidebar }) => {
  return (
    <>
      <MenuBar sidebar={sidebar} setSidebar={setSidebar} />
      <div className="hero_banner_container">
        <div className="sidebar">
          <div className={`left__sidebar  ${sidebar ? "active" : ""} `}>
            <ul className="left__sidebar__menu">
              <li className="left__sidebar__menu__item">
                <span>About</span>
              </li>
              <li className="left__sidebar__menu__item">
                <span>Terms of Use</span>
              </li>
              <li className="left__sidebar__menu__item">
                <span>Privacy Policy</span>
              </li>
            </ul>
          </div>
          <div className="right__side" style={{ width: "100%" }}>
            <Container className="right__content">
              <Row>
                <Col xs={12}>
                  <div style={{ paddingTop: "60px", marginTop: "40px" }}>
                    <h4>About App</h4>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xl={9} lg={9} md={12} sm={12}>
                  <p style={{ marginTop: "10px" }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesettingm.
                  </p>
                  <p style={{ marginTop: "10px" }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting
                  </p>
                  <p style={{ marginTop: "10px" }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
