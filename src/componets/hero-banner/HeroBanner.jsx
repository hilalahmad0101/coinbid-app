import React from "react";
import { Col, Container, Row } from "react-bootstrap/esm";
import "./he_banner.css";

import {
  FaUserTie,
} from "react-icons/fa";
const HeroBanner = ({ sidebar }) => {
  return (
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
            <Row style={{ margin: "10px 0px" }}>
              <Col xs={12}>
                <div className="hero_banner_header">
                  <h4>Why CoinBid?</h4>
                  <h2>SECURE TRANSACTIONS PLATFORM</h2>
                </div>
              </Col>
            </Row>
            <Row style={{ display: "flex", justifyContent: "center" }}>
              <Col xl={8} lg={8} md={7} sm={12}>
                <Row>
                  <Col
                    xl={4}
                    lg={4}
                    md={6}
                    sm={12}
                    style={{ marginTop: "10px" }}
                  >
                    <div className="hero_banner_card">
                      <p>
                        <FaUserTie />
                      </p>
                      <h5>CoinBid for Individuals</h5>
                      <span className="hero_banner_card_span">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </span>
                    </div>
                  </Col>
                  <Col
                    xl={4}
                    lg={4}
                    md={6}
                    sm={12}
                    style={{ marginTop: "10px" }}
                  >
                    <div className="hero_banner_card">
                      <p>
                        <FaUserTie />
                      </p>
                      <h5>CoinBid for Individuals</h5>
                      <span className="hero_banner_card_span">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </span>
                    </div>
                  </Col>
                  <Col
                    xl={4}
                    lg={4}
                    md={6}
                    sm={12}
                    style={{ marginTop: "10px" }}
                  >
                    <div className="hero_banner_card">
                      <p>
                        <FaUserTie />
                      </p>
                      <h5>CoinBid for Individuals</h5>
                      <span className="hero_banner_card_span">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </span>
                    </div>
                  </Col>
                  <Col
                    xl={4}
                    lg={4}
                    md={6}
                    sm={12}
                    style={{ marginTop: "10px" }}
                  >
                    <div className="hero_banner_card">
                      <p>
                        <FaUserTie />
                      </p>
                      <h5>CoinBid for Individuals</h5>
                      <span className="hero_banner_card_span">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </span>
                    </div>
                  </Col>
                  <Col
                    xl={4}
                    lg={4}
                    md={6}
                    sm={12}
                    style={{ marginTop: "10px" }}
                  >
                    <div className="hero_banner_card">
                      <p>
                        <FaUserTie />
                      </p>
                      <h5>CoinBid for Individuals</h5>
                      <span className="hero_banner_card_span">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </span>
                    </div>
                  </Col>
                  <Col
                    xl={4}
                    lg={4}
                    md={6}
                    sm={12}
                    style={{ marginTop: "10px" }}
                  >
                    <div className="hero_banner_card">
                      <p>
                        <FaUserTie />
                      </p>
                      <h5>CoinBid for Individuals</h5>
                      <span className="hero_banner_card_span">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </span>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
