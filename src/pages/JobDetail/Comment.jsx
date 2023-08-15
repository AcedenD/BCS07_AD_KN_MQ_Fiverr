import React from "react";

const Comment = (props) => {
  const { item } = props;
  return (
    <div className="comment flex flex-row mb-4 pb-4 border-b-2 gap-4">
      <div className="w-2/12">
        <img className="rounded-full" src={item.avatar} alt="user avatar" />
      </div>
      <div className="w-10/12">
        <div className="flex flex-col">
          <div className="commenter_name">
            <span className="text-gray-700 font-semibold mr-2">
              {item.tenNguoiBinhLuan}
            </span>
            <i className="fa-solid fa-star text-[#ffb33e] font text-sm">
              {item.saoBinhLuan}
            </i>
          </div>
          <div className="commenter_country flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png"
              alt=""
              className="w-6 h-4 mr-2"
            />
            <span className="text-md font-semibold text-gray-500">VietNam</span>
          </div>
          <div className="commenter_content my-4">
            <p className="text-gray-500 text-md">{item.noiDung}</p>
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
  );
};

export default Comment;
