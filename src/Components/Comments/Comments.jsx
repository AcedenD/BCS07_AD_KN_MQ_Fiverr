import React, { useEffect, useState } from "react";
import { Input, Space } from "antd";
import { binhLuanServ } from "../../services/binhLuanServices";
import Comment from "./Comment";
import { message } from "antd";
import AddComment from "./AddComment";

const Comments = (props) => {
  const [messageApi, contextHolder] = message.useMessage();
  const { id, avatar, tenNguoiTao } = props;
  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  const [binhLuan, setBinhLuan] = useState([]);
  useEffect(() => {
    binhLuanServ
      .getBinhLuan(id)
      .then((res) => {
        // console.log(res.data.content);
        setBinhLuan(res.data.content);
      })
      .catch((err) => {});
  }, []);

  useEffect(() => {
    binhLuanServ
      .getBinhLuan(id)
      .then((res) => {
        // console.log(res.data.content);
        setBinhLuan(res.data.content);
      })
      .catch((err) => {});
  }, [binhLuan.length]);

  const delete_binhLuan = (id) => {
    binhLuanServ
      .deleteBinhLuan(id)
      .then((res) => {
        setBinhLuan(binhLuan.filter((item) => item.id !== id));
        messageApi.success("Xóa bình luận thành công");
      })
      .catch((err) => {
        messageApi.error(
          "Xóa bình luận thất bại, bình luận này không còn tồn tại"
        );
        // setBinhLuan(binhLuan.filter((item) => item.id !== id));
      });
  };

  return (
    <div className="my-10">
      {contextHolder}

      <div className=" border-b-2 my-4">
        <h2 className="text-xl font-bold text-gray-700">Filters</h2>
        <div>
          <input
            className="border border-gray-400 p-2 my-4 rounded-l-sm outline-none w-2/5"
            type="text"
            placeholder="Search Reviews"
          />
          <button
            className="border border-gray-400 px-3 py-2 rounded-r-sm bg-gray-400 hover:bg-gray-500"
            type="button"
          >
            <i className="fas fa-search text-white"></i>
          </button>
        </div>
      </div>
      <div className="comment flex flex-row mb-4 pb-4 border-b-2 gap-4">
        <div className="w-2/12">
          <img className="rounded-full" src={avatar} alt="user avatar" />
        </div>
        <div className="w-10/12">
          <div className="flex flex-col">
            <div className="commenter_name">
              <span className="text-gray-700 font-semibold mr-2">
                {tenNguoiTao.charAt(0).toUpperCase() + tenNguoiTao.slice(1)}
              </span>
              <i className="fa-solid fa-star text-[#ffb33e] font text-sm">5</i>
            </div>
            <div className="commenter_country flex items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png"
                alt=""
                className="w-6 h-4 mr-2"
              />
              <span className="text-md font-semibold text-gray-500">
                VietNam
              </span>
            </div>
            <div className="commenter_content my-4">
              <p className="text-gray-500 text-md">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officiis saepe quisquam error, sit asperiores veritatis odio ea
                vitae qui sed labore, exercitationem cupiditate omnis nisi
                deserunt eligendi tenetur iusto obcaecati! Culpa quod molestias
                voluptates explicabo eveniet impedit obcaecati illum, sed
                repellendus, officiis nemo dolor magni!
              </p>
            </div>
            <div className="helpful text-gray-500 flex">
              <span className="mr-2 text-gray-600 font-semibold">Helpful?</span>
              <span className="mr-2">
                <i className="fa-solid fa-thumbs-up font-thin"></i>
                Yes
              </span>
              <span className="mr-2">
                <i className="fa-solid fa-thumbs-down font-thin"></i>
                No
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        {binhLuan.map((item, index) => {
          return (
            <Comment
              key={index}
              item={item}
              delete_binhLuan={delete_binhLuan}
            />
          );
        })}
      </div>
      <div className="my-4">
        <AddComment />
      </div>
    </div>
  );
};

export default Comments;
