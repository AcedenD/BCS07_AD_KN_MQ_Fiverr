import React from "react";
import "./MostPopular.scss";

const MostPopular = (props) => {
  return (
    <div className="">
      <h1 className="font-bold text-3xl mb-3 text-gray-700">{`Most popular in ${props.tenLoaiCongViec}`}</h1>

      <div className="content">
        <div className="item ">
          <img
            src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png"
            alt="..."
          />
          <div className="popText">
            <span>Minimalist Logo Design</span>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <div className="item">
          <img
            src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101618/Architecture%20_%20Interior%20Design_2x.png"
            alt="..."
          />
          <div className="popText">
            <span>Architecture &amp; Interior Design</span>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <div className="item">
          <img
            src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101624/Photoshop%20Editing_2x.png"
            alt="..."
          />
          <div className="popText">
            <span>Image Editing</span>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <div className="item">
          <img
            src="https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/fc6c7b8c1d155625e7878252a09c4437-1653222039380/Nft%20Art%20%281%29.png"
            alt="..."
          />
          <div className="popText">
            <span>NFT Art</span>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <div className="item">
          <img
            src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101623/T-Shirts%20_%20Merchandise_2x.png"
            alt="..."
          />
          <div className="popText">
            <span>T-Shirts &amp; Merchandise</span>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostPopular;
