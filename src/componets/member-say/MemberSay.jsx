import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { memberSay } from "../../assets/data/data";
import "./member.css";
const MemberSay = () => {
  return (
    <div className="member_say_container">
      <Container>
        <Row>
          <Col xs={12} md={12}>
            <div className="memberSay_header">
              <h1>What Our Members Are Saying</h1>
              <p>
                Use rewards for additional holiday gifts, extra spending money,
                and more. See why our members love what we do!
              </p>
            </div>
          </Col>
          {memberSay.map((data, index) => {
            return (
              <Col key={index} xs={12} md={4}>
                <div className="saymember_details">
                  <div className="saymember_details_img">
                    <img src={data.img} alt="" />
                  </div>
                  <div className="say_member_details_info">
                    <p>{data.msg}</p>
                    <div className="say_member_details_author">
                      <h6 style={{ margin: "0px", padding: "0px" }}>
                        {data.name}
                      </h6>
                      <span style={{ margin: "0px", padding: "0px" }}>
                        {data.add}
                      </span>
                    </div>
                  </div>
                </div>
                <br />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default MemberSay;
