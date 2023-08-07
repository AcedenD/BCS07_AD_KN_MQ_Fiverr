import React, { useEffect, useRef, useState } from "react";
import { Col, Row, Modal, Typography, Button } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import videoSource from "../../assets/video/homepage.mp4";
import imgSource from "../../assets/img/selling.png";
import { Content } from "antd/es/layout/layout";

const { Title } = Typography;

function SellingPro() {
  const [visible, setVisible] = useState(false);
  const videoRef = useRef(null);
  const handleModalOpen = () => {
    setVisible(true);
  };
  const handleModalClose = () => {
    setVisible(false);
  };
  useEffect(() => {
    if (visible && videoRef.current) {
      videoRef.current.play();
    } else if (!visible && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [visible]);

  return (
    <div>
      <Content className="container">
        <Row gutter={50}>
          <Col xl={12} sm={24}>
            <div>
              <Title level={1}>
                A whole workd of freelance talent at your fingertips
              </Title>
              <div className="mt-4">
                <Title level={4} style={{ fontWeight: "bold" }}>
                  <i
                    className="fa-regular fa-circle-check"
                    style={{ color: "gray", fontSize: "30px" }}
                  ></i>{" "}
                  The best for every budget
                </Title>
                <p>
                  Find high-quanlity services at every price point. No hourly
                  rates, just project-based pricing.
                </p>
              </div>
              <div className="mt-4">
                <Title level={4} style={{ fontWeight: "bold" }}>
                  <i
                    className="fa-regular fa-circle-check"
                    style={{ color: "gray", fontSize: "30px" }}
                  ></i>{" "}
                  Quality work done quickly
                </Title>
                <p>
                  Find the free lancer to begin working on your project within
                  minutes
                </p>
              </div>
              <div className="mt-4">
                <Title level={4} style={{ fontWeight: "bold" }}>
                  <i
                    className="fa-regular fa-circle-check"
                    style={{ color: "gray", fontSize: "30px" }}
                  ></i>{" "}
                  Protected payment, every time
                </Title>
                <p>
                  Always know what you'll pay upfront. Your payment isn't
                  released until you approve the work.
                </p>
              </div>
              <div className="mt-4">
                <Title level={4} style={{ fontWeight: "bold" }}>
                  <i
                    className="fa-regular fa-circle-check"
                    style={{ color: "gray", fontSize: "30px" }}
                  ></i>{" "}
                  24/7 support
                </Title>
                <p>
                  Questions? Our round-the-clock support team is available to
                  help anytime, anywhere.
                </p>
              </div>
            </div>
          </Col>
          <Col xl={12} sm={24}>
            <button
              type="button"
              onClick={handleModalOpen}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <img
                src={imgSource}
                alt="..."
                className="w-full h-auto max-w-full"
                style={{ borderRadius: "10px" }}
              />
              <PlayCircleOutlined
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "75px",
                  color: "rgba(255,255,255,0.5)",
                  zIndex: 2,
                }}
              />
            </button>
            <Modal
              visible={visible}
              onCancel={handleModalClose}
              width="80vw"
              footer={null}
            >
              <video ref={videoRef} width="100%" controls>
                <source src={videoSource} type="video/mp4" />
              </video>
            </Modal>
          </Col>
        </Row>
      </Content>
    </div>
  );
}

export default SellingPro;
