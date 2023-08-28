import React, { Component, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { Row, Col, Modal, Typography } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "antd/es/typography/Title";
import "./MainCategories.scss";

function Testimonial() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
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
    <>
      <div  className="main-categories max-w-5xl mx-auto py-20">
        <Slider {...settings}>
          <div>
            <Row gutter={50}>
              <Col xl={12} sm={24}>
                <button
                  type="button"
                  onClick={handleModalOpen}
                  className="videoBtn"
                >
                  <img
                    src="https://demo5.cybersoft.edu.vn/img/testimonial1.png"
                    alt="..."
                    className="w-full h-auto max-w-full videoBtnImg"
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
                    <source
                      src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/yja2ld5fnolhsixj3xxw"
                      type="video/mp4"
                    />
                  </video>
                </Modal>
              </Col>
              <Col xl={12} sm={24}>
                <div className="mt-4">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Title
                      level={3}
                      style={{ color: "gray", borderRight: "2px solid gray" }}
                      className="pe-2"
                    >
                      Kay Kim, Co-Founder
                    </Title>
                    <img
                      src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/rooted-logo-x2.321d79d.png"
                      alt="logo"
                      style={{ width: "20%", marginLeft: "10px" }}
                    />
                  </div>
                  <Title
                    level={3}
                    className="mt-3"
                    style={{ lineHeight: "1.8" }}
                  >
                    <i>
                      "It's extremely exciting that Fiverr has freelancers from
                      all over the world — it broadens the talent pool. One of
                      the best things about Fiverr is that while we're sleeping,
                      someone's working."
                    </i>
                  </Title>
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row gutter={50}>
              <Col xl={12} sm={24}>
                <button
                  type="button"
                  onClick={handleModalOpen}
                  className="videoBtn"
                >
                  <img
                    src="https://demo5.cybersoft.edu.vn/img/testimonial2.png"
                    alt="..."
                    className="w-full h-auto max-w-full videoBtnImg"
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
                    <source
                      src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/plfa6gdjihpdvr10rchl"
                      type="video/mp4"
                    />
                  </video>
                </Modal>
              </Col>
              <Col xl={12} sm={24}>
                <div className="mt-4">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Title
                      level={3}
                      style={{ color: "gray", borderRight: "2px solid gray" }}
                      className="pe-2"
                    >
                      Caitlin Tormey, Chief Commercial Officer
                    </Title>
                    <img
                      src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/naadam-logo-x2.0a3b198.png"
                      alt="logo"
                      style={{ width: "20%", marginLeft: "10px" }}
                    />
                  </div>
                  <Title
                    level={3}
                    className="mt-3"
                    style={{ lineHeight: "1.8" }}
                  >
                    <i>
                      "We've used Fiverr for Shopify web development, graphic
                      design, and backend web development. Working with Fiverr
                      makes my job a little easier every day."
                    </i>
                  </Title>
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row gutter={50}>
              <Col xl={12} sm={24}>
                <button
                  type="button"
                  onClick={handleModalOpen}
                  className="videoBtn"
                >
                  <img
                    src="https://demo5.cybersoft.edu.vn/img/testimonial3.png"
                    alt="..."
                    className="w-full h-auto max-w-full videoBtnImg"
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
                    <source
                      src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/rb8jtakrisiz0xtsffwi"
                      type="video/mp4"
                    />
                  </video>
                </Modal>
              </Col>
              <Col xl={12} sm={24}>
                <div className="mt-4">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Title
                      level={3}
                      style={{ color: "gray", borderRight: "2px solid gray" }}
                      className="pe-2"
                    >
                      Brighid Gannon (DNP, PMHNP-BC), Co-Founder
                    </Title>
                    <img
                      src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lavender-logo-x2.89c5e2e.png"
                      alt="logo"
                      style={{ width: "20%", marginLeft: "10px" }}
                    />
                  </div>
                  <Title
                    level={3}
                    className="mt-3"
                    style={{ lineHeight: "1.8" }}
                  >
                    <i>
                      "We used Fiverr for SEO, our logo, website, copy, animated
                      videos — literally everything. It was like working with a
                      human right next to you versus being across the world."
                    </i>
                  </Title>
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row gutter={50}>
              <Col xl={12} sm={24}>
                <button
                  type="button"
                  onClick={handleModalOpen}
                  className="videoBtn"
                >
                  <img
                    src="	https://demo5.cybersoft.edu.vn/img/testimonial4.png"
                    alt="..."
                    className="w-full h-auto max-w-full videoBtnImg"
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
                    <source
                      src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/bsncmkwya3nectkensun"
                      type="video/mp4"
                    />
                  </video>
                </Modal>
              </Col>
              <Col xl={12} sm={24}>
                <div className="mt-4">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Title
                      level={3}
                      style={{ color: "gray", borderRight: "2px solid gray" }}
                      className="pe-2"
                    >
                      Tim and Dan Joo, Co-Founders
                    </Title>
                    <img
                      src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/haerfest-logo-x2.03fa5c5.png"
                      alt="logo"
                      style={{ width: "20%", marginLeft: "10px" }}
                    />
                  </div>
                  <Title
                    level={3}
                    className="mt-3"
                    style={{ lineHeight: "1.8" }}
                  >
                    <i>
                      "When you want to create a business bigger than yourself,
                      you need a lot of help. That's what Fiverr does."
                    </i>
                  </Title>
                </div>
              </Col>
            </Row>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Testimonial;
