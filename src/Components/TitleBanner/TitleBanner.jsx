import { Modal } from "antd";
import React, { useEffect, useRef, useState } from "react";
import videoSource from "../../assets/video/homepage.mp4";

const TitleBanner = (props) => {
  const { tenLoaiCongViec } = props;
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
    <div className="flex flex-col justify-center items-center bg-[#0C3B24] pt-32 pb-10 mb-7">
      <h1 className="font-bold text-3xl mb-3 text-white">{tenLoaiCongViec}</h1>
      <h2 className="font-medium text-xl mb-3 text-white">
        Designs to make you stand out.
      </h2>
      <button
        onClick={handleModalOpen}
        className="py-2 px-2 bg-slate-50 rounded-md font-semibold text-sm text-slate-900 hover:bg-slate-900 hover:text-slate-50 transition duration-300 ease-in-out"
      >
        <i class="fa-regular fa-circle-play mr-2"></i>
        How Fiverr Works
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
    </div>
  );
};

export default TitleBanner;
