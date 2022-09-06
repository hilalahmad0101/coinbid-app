import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { whatsNewData } from "../../assets/data/data";
import "./whats.nesw.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { icons } from "react-icons/lib";

const WhatsNew = () => {
  return (
    <div className="whats_new_container">
      <Container>
        <div className="whats_new_header">
          <h1>What's New at CoinBid</h1>
          <p>Catch up on the latest coinBid news and announcements.</p>
        </div>
        <Row>
          {whatsNewData.map((data, index) => {
            console.log("data", data.icon);
            return (
              <Col style={{ margin: "14px 0px" }} key={index} xs={12} md={4}>
                <div className="whats_new_item_data_plan_container">
                  <div className="whats_new_item_data_plan">
                    {data.icon.map((icons, i) => {
                      return (
                        <div key={i} className="plan_icon_container">
                          <p>{<icons.icon />}</p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="whats_new_item_plan_name">
                    <p>{data.name}</p>
                  </div>
                  {data.plan.map((planData, i) => {
                    return (
                      <div key={i} className="whats_new_item_plan_container">
                        <div className="whats_new_item_plan">
                          <p>{planData.plan}</p>
                        </div>
                      </div>
                    );
                  })}
                  <div style={{ textAlign: "center" }}>
                    <p
                      style={{
                        fontFamily: "monospace",
                        fontWeight: "700",
                        fontSize: "22px",
                      }}
                    >
                      $ {data.price}
                    </p>
                  </div>
                  <div className="whats_new_item_data_plan_btn">
                    <button>Buy This Plan</button>
                  </div>
                </div>
              </Col>
            );
          })}
          <Col xs={12} md={5}></Col>
          <Col xs={12} md={2}>
            <div className="whats_new_btn">
              <button>Veiw More News</button>
            </div>
          </Col>
          <Col xs={12} md={5}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhatsNew;
