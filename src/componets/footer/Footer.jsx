import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";
import logo from "../../assets/3D_Logo-removebg-preview.png";
import { FaFacebookF, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer_container">
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <div className="footer_logo_section">
              <img src={logo} alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                ipsum, ad unde temporibus delectus facere.
              </p>
            </div>
          </Col>
          <Col xs={12} md={8}>
            <Row>
              <Col xs={12} md={3}>
                <div className="footer_social">
                  <h5
                    style={{
                      margin: "2px 0px",
                      color: "white",
                      // fontWeight: "700",
                    }}
                  >
                    Social
                  </h5>
                  <div className="footer_social_icon">
                    <p style={{ margin: "0px" }}>
                      <FaFacebookF />
                    </p>
                    <p style={{ margin: "0px" }}>Facebook</p>
                  </div>
                  <div className="footer_social_icon">
                    <p style={{ margin: "0px" }}>
                      <FaTwitterSquare />
                    </p>
                    <p style={{ margin: "0px" }}>Twitter</p>
                  </div>
                  <div className="footer_social_icon">
                    <p style={{ margin: "0px" }}>
                      <FaLinkedin />
                    </p>
                    <p style={{ margin: "0px" }}>Likedin</p>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={3}>
                <div className="fotter_details_company">
                  <h5
                    style={{
                      margin: "2px 0px",
                      color: "white",
                      // fontWeight: "700",
                    }}
                  >
                    Company
                  </h5>
                  <p style={{ margin: "0px" }}>How iRazoo Works</p>
                  <p style={{ margin: "0px" }}>About</p>
                  <p style={{ margin: "0px" }}>Partners</p>
                  <p style={{ margin: "0px" }}>Contact Us</p>
                  <p style={{ margin: "0px" }}>Terms of Use</p>
                  <p style={{ margin: "0px" }}>Privacy Policy</p>
                </div>
              </Col>
              <Col xs={12} md={3}>
                <div className="footer_details_ern_point">
                  <h5
                    style={{
                      margin: "2px 0px",
                      color: "white",
                      // fontWeight: "700",
                    }}
                  >
                    Earn Points
                  </h5>
                  <p style={{ margin: "0px" }}>Refer Friends</p>
                  <p style={{ margin: "0px" }}>Download Apps</p>
                  <p style={{ margin: "0px" }}>Watch Videos</p>
                  <p style={{ margin: "0px" }}>Paid Surveys</p>
                  <p style={{ margin: "0px" }}>Complete Offers</p>
                  <p style={{ margin: "0px" }}>Play Games</p>
                </div>
              </Col>
              <Col xs={12} md={3}>
                <div className="footer_details_MyAccount">
                  <h5 style={{ margin: "2px 0px", color: "white" }}>
                    My Account
                  </h5>
                  <p style={{ margin: "3px 0px" }}>Log In</p>
                  <p style={{ margin: "3px 0px" }}>Sign Up</p>
                  <p style={{ margin: "3px 0px" }}>Help Desk</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
