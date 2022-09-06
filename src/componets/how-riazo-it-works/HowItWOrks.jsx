import React from "react";
import { Container, Row, Col } from "react-bootstrap/esm";
import { howItWorks } from "../../assets/data/data";
import "./how_it_works.css";

const HowItWOrks = () => {
  return (
    <div className="how_it_works_container">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className="how_it_works_data_container">
              <Row>
                {howItWorks.map((data, index) => {
                  return (
                    <Col key={index} xs={12} md={12}>
                      <div className="how_it_works_data">
                        <div className="how_works_icon">
                          <img src={data.icon} alt="" />
                        </div>
                        <div className="how_works_infp">
                          <h5 style={{ margin: "7px 0px", padding: "0px" }}>
                            {data.name}
                          </h5>
                          <p style={{ margin: "0px", padding: "0px" }}>
                            {data.msg}
                          </p>
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="how_it_works_videio">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/x3c1ih2NJEg"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HowItWOrks;
