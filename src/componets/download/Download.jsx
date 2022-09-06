import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../footer/Footer";
import MenuBar from "../navbar/Navbar";
import download from "../../assets/iphone.png";
import "./download.css";
import dwonloadLogo from "../../assets/android.png";
const Download = ({ sidebar, setSidebar }) => {
  return (
    <div>
      <MenuBar sidebar={sidebar} setSidebar={setSidebar} />
      <div className="hero_banner_container">
        <div className="sidebar">
          <div className={`left__sidebar  ${sidebar ? "active" : ""} `}>
            <ul className="left__sidebar__menu">
              <li className="left__sidebar__menu__item">
                <span>How iRazoo Works</span>
              </li>
              <li className="left__sidebar__menu__item">
                <span>About</span>
              </li>
              <li className="left__sidebar__menu__item">
                <span>About</span>
              </li>
              <li className="left__sidebar__menu__item">
                <span>About</span>
              </li>
              <li className="left__sidebar__menu__item">
                <span>About</span>
              </li>

              <li className="left__sidebar__menu__item">
                <span>Partners</span>
              </li>
              <li className="left__sidebar__menu__item">
                <span>Contact Us</span>
              </li>

              <li className="left__sidebar__menu__item">
                <span>Terms of Use</span>
              </li>
              <li className="left__sidebar__menu__item">
                <span>Privacy Policy</span>
              </li>
              <li className="left__sidebar__menu__item">
                <span>Refer Friends</span>
              </li>
              <li className="left__sidebar__menu__item">
                <span>Download Apps</span>
              </li>
              <li className="left__sidebar__menu__item">
                <span>Watch Videos</span>
              </li>
              <li className="left__sidebar__menu__item">
                <span>Paid Surveys</span>
              </li>
              <li className="left__sidebar__menu__item">
                <span>Complete Offers</span>
              </li>
              <li className="left__sidebar__menu__item">
                <span>Play Games</span>
              </li>
              <li className="left__sidebar__menu__item">
                <span>Log In</span>
              </li>
              <li className="left__sidebar__menu__item">
                <span>Sign Up</span>
              </li>
              <li className="left__sidebar__menu__item">
                <span>Help Desk</span>
              </li>
              <li className="left__sidebar__menu__item">
                aaaa
              </li>
            </ul>
          </div>
          <div
            className="right__side"
            style={{ width: "100%" }}
          >
            <div className="main__content" style={{ marginTop: "100px" }}>
              <Container style={{ width: "100%", margin: "auto" }}>
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <div>
                    <div className="dwonload_logo">
                      <img
                        src={dwonloadLogo}
                        alt=""
                        style={{
                          width: " 226px",
                          height: "55vh",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div className="customButton">
                      <button className="btn">Android</button>
                    </div>
                  </div>
                  <div>
                    <div className="dwonload_logo">
                      <img
                        src={download}
                        alt=""
                        style={{
                          width: " 226px",
                          height: "55vh",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div className="customButton">
                      <button className="btn">Iphone</button>
                    </div>
                  </div>

                  {
                    /* <Col >
                    <div className="">
                      <img
                        src={download}
                        alt="download"
                        style={{ width: "80%" }}
                      />
                    </div>
                    <h3
                      style={{
                        textAlign: "center",
                        marginTop: "35px",
                        marginBottom: "20px",
                      }}
                    >
                      Download
                    </h3>
                    <div className="download_btn">
                      <img src={downloadAppsStore} alt="" />
                      <img src={downloadPlayStore} alt="" />
                    </div>

                  </Col> */
                  }
                </div>
                <div className="down_load_content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim quaerat quisquam mollitia aspernatur aperiam dolores?
                    Tenetur reprehenderit aspernatur laboriosam sed ullam
                    repudiandae iste veritatis nostrum, esse accusamus assumenda
                    maxime id, vero veniam harum delectus sunt? Aut consequatur
                    magnam quisquam optio.
                  </p>
                </div>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
