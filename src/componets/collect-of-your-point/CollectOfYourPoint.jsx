import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./collect.css";
import { toast } from "react-toastify";
import { FaArrowRight } from "react-icons/fa";
const CollectOfYourPoint = () => {
  const [email, setEmail] = useState("");

  const handleCollectCoin = () => {
    if (email == "") {
      toast.error("Email is required", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    toast.success("Register Success", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <div className="collect_container">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className="collect_info">
              <div className="collect_info_details">
                <p>Enter your email & Register</p>
              </div>
            </div>
          </Col>

          <Col xs={12} md={2}></Col>

          <Col xs={12} md={4}>
            <div className="collect_info_input">
              <input onChange={(e) => setEmail(e.target.value)} type="text" />
              <p onClick={handleCollectCoin}>
                <FaArrowRight style={{ marginTop: "40px" }} />
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CollectOfYourPoint;
