import React from "react";
import { NavLink } from "react-router-dom";

const TitleCard = (props) => {
  // console.log(props);

  const { category } = props;
  // console.log(loaiCongViec);
  console.log(category);
  const dsChiTietLoai = category.dsChiTietLoai;
  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow  ">
      <a href="#">
        <img
          class="rounded-t-lg object-cover w-full h-56"
          // src="https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg"
          src={category.hinhAnh}
          alt=""
        />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-700 ">
            {category.tenNhom}
          </h5>
        </a>
        <ul>
          {dsChiTietLoai.map((item, index) => {
            console.log(item);
            return (
              <li key={index} class="flex items-center py-2">
                <NavLink to={`/categories/${item.id}`}>
                  <p class="text-md font-normal text-gray-400 hover:text-green-700 transition duration-200 ml-2">
                    {item.tenChiTiet}
                  </p>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TitleCard;
