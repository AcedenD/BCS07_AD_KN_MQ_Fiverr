import React, { useState } from "react";

import "./Header.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Dropdown } from "antd";
import { xoaTatCaDuLieuLocal } from "../../utils/localStore";

const Header = (props) => {
  const [color, setColor] = useState(false);

  const { hoTen } = useSelector((state) => state.nguoiDung);
  const role = hoTen?.user?.role ?? "";

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  const handleClickLogout = () => {
    xoaTatCaDuLieuLocal();
  };

  const items = [
    {
      label: (
        <NavLink to={"/userprofile"} className=" text-lg">
          Your profile
        </NavLink>
      ),
      key: "1",
    },
    {
      label: (
        <NavLink to={"/login"} onClick={handleClickLogout} className=" text-lg">
          LogOut
        </NavLink>
      ),
      key: "2",
    },
    {
      label:
        role == "ADMIN" ? (
          <NavLink to={"/admin"} className="text-lg ">
            <span className="text-red-600">ADMIN</span>
          </NavLink>
        ) : (
          ""
        ),

      key: "3",
    },
  ];

  return (
    <div
      className={`wrapper-header ${
        props.removeFixed && !color ? "" : "fixed"
      } ${
        color
          ? "scroll-header text-gray-500"
          : `${props.removeFixed ? "" : "text-white"}`
      }`}
    >
      <nav className="border-gray-200 ">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-3">
          <a href="/" className="flex items-center">
            <span
              className={
                color
                  ? "self-center text-4xl font-bold whitespace-nowrap text-[#58595c]"
                  : "self-center text-4xl font-bold whitespace-nowrap"
              }
            >
              fiverr
              <span className=" text-[#1dbf73]">.</span>
            </span>
          </a>
          <div className="flex justify-center items-center gap-2">
            <div className="flex items-center md:order-2">
              {hoTen ? (
                <Dropdown
                  menu={{
                    items,
                  }}
                >
                  <div className=" text-xl">
                    <i className="fa-solid fa-circle-user ml-2" />
                    <span className="font-bold text-md ml-2"></span>
                    {hoTen.user?.name}
                  </div>
                </Dropdown>
              ) : (
                <div>
                  <NavLink
                    to={"signup"}
                    className="font-bold text-md px-3 py-2 md:px-2 md:py-1 mr-1 md:mr-2 "
                  >
                    Sign up
                  </NavLink>
                  <NavLink
                    to={"/login"}
                    className="hover:bg-[#1dbf73] text-md px-3 py-2 md:px-4 md:py-1.5 mr-1 md:mr-2 border border-[#fff] bg-[transparent] ease-in duration-200 "
                  >
                    Login
                  </NavLink>
                </div>
              )}

              <button
                data-collapse-toggle="mega-menu-icons"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mega-menu-icons"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              id="mega-menu-icons"
              className="flex-col items-end justify-between hidden w-full md:flex md:w-auto md:order-1"
            >
              <ul className="flex flex-col mt-4 font-bold md:flex-row md:space-x-8 md:mt-0">
                <li>
                  <NavLink
                    to={""}
                    className="block py-2 pl-3 pr-4 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 ease-in duration-200"
                    aria-current="page"
                  >
                    Fiverr Business
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={""}
                    className="block py-2 pl-3 pr-4 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 ease-in duration-200"
                  >
                    Explore
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={""}
                    className="block py-2 pl-3 pr-4 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 ease-in duration-200"
                  >
                    <i className="fa-solid fa-globe mr-1" />
                    English
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={""}
                    className="block py-2 pl-3 pr-4 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 ease-in duration-200"
                  >
                    US$ USD
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={""}
                    className="block py-2 pl-3 pr-4 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 ease-in duration-200"
                  >
                    Become a Seller
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`nav2 items-center justify-center hidden font-light w-full md:flex md:w-auto md:order-1 ${
          !color ? "display-none" : ""
        }`}
      >
        <ul className="flex flex-col mt-4 font-light md:flex-row md:space-x-8 md:mt-0">
          <li className="nav2-item">
            <NavLink className="nav-link">Graphics & Design</NavLink>
            <ul className="nav2-dropdown">
              <p className="font-bold">Graphics</p>
              <li>
                <NavLink className="font-light">
                  Social Media Advertising
                </NavLink>
              </li>
              <li>
                <NavLink className="font-light">Video Editing</NavLink>
              </li>
              <li>
                <NavLink className="font-light">Visual Effects</NavLink>
              </li>
            </ul>
          </li>
          <li className="nav2-item">
            <NavLink className="nav-link">Digital Marketing</NavLink>
            <ul className="nav2-dropdown">
              <p className="font-bold">Marketing</p>
              <li>
                <NavLink className="font-light">
                  Social Media Advertising
                </NavLink>
              </li>
              <li>
                <NavLink className="font-light">Visual Effects</NavLink>
              </li>
            </ul>
          </li>
          <li className="nav2-item">
            <NavLink className="nav-link">Writing & Translation</NavLink>
            <ul className="nav2-dropdown">
              <p className="font-bold">Writing</p>
              <li>
                <NavLink className="font-light">Visual Effects</NavLink>
              </li>
              <li>
                <NavLink className="font-light">Songwriters</NavLink>
              </li>
              <li>
                <p className="font-bold">Translation</p>
              </li>
              <li>
                <NavLink className="font-light">Video Editing</NavLink>
              </li>
              <li>
                <NavLink className="font-light">Producers & Composers</NavLink>
              </li>
            </ul>
          </li>
          <li className="nav2-item">
            <NavLink className="nav-link">Video & Animation</NavLink>
            <ul className="nav2-dropdown">
              <p className="font-bold">Social & Marketing Videos</p>
              <li>
                <NavLink className="font-light">Short Video Ads</NavLink>
              </li>
              <li>
                <NavLink className="font-light">Social Media Videos</NavLink>
              </li>
              <p className="font-bold">Video Editing & Post-Production</p>
              <li>
                <NavLink className="font-light">Video Editing</NavLink>
              </li>
              <li>
                <NavLink className="font-light">Visual Effects</NavLink>
              </li>
              <p className="font-bold">Media</p>
              <li>
                <NavLink className="font-light">Social Media Videos</NavLink>
              </li>
              <li>
                <NavLink className="font-light">Video Editing</NavLink>
              </li>
            </ul>
          </li>
          <li className="nav2-item">
            <NavLink className="nav-link">Music & Audio</NavLink>
            <ul className="nav2-dropdown">
              <p className="font-bold">Music Production & Writing</p>
              <li>
                <NavLink className="font-light">Producers & Composers</NavLink>
              </li>
              <li>
                <NavLink className="font-light">Songwriters</NavLink>
              </li>
              <p className="font-bold">Beat Productions</p>
              <li>
                <NavLink className="font-light">Articles & Blog Posts</NavLink>
              </li>
            </ul>
          </li>
          <li className="nav2-item">
            <NavLink className="nav-link">Programing & Tech</NavLink>
            <ul className="nav2-dropdown">
              <p className="font-bold">Graphics</p>
              <li>
                <NavLink className="font-light">
                  Social Media Advertising
                </NavLink>
              </li>
              <li>
                <NavLink className="font-light">Video Editing</NavLink>
              </li>
              <li>
                <NavLink className="font-light">Visual Effects</NavLink>
              </li>
            </ul>
          </li>
          <li className="nav2-item">
            <NavLink className="nav-link">Javascriptest</NavLink>
            <ul className="nav2-dropdown">
              <p className="font-bold">Javascriptest</p>
              <li>
                <NavLink className="font-light">Video Editing</NavLink>
              </li>
              <li>
                <NavLink className="font-light">Visual Effects</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
