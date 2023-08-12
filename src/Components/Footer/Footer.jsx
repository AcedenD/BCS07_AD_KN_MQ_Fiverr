import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer px-28 py-10 ">
      <div className="footer_top justify-between w-full grid grid-cols-2 xl:grid-cols-5 md:grid-cols-3">
        <div className="item">
          <div className="title">
            <h6>Categories</h6>
          </div>
          <div className="content_list">
            <ul>
              <li>
                <a href="#">Graphics & Design</a>
              </li>
              <li>
                <a href="#">Digital Marketing</a>
              </li>
              <li>
                <a href="#">Writing & Translation</a>
              </li>
              <li>
                <a href="#">Video & Animation</a>
              </li>
              <li>
                <a href="#">Music & Audio</a>
              </li>
              <li>
                <a href="#">Programming & Tech</a>
              </li>
              <li>
                <a href="#">Data</a>
              </li>
              <li>
                <a href="#">Business</a>
              </li>
              <li>
                <a href="#">Lifestyle</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="item">
          <div className="title">
            <h6>About</h6>
          </div>
          <div className="content_list">
            <ul>
              <li>
                <a href="#" rel>
                  Careers
                </a>
              </li>
              <li>
                <a href="#" rel>
                  Press & News
                </a>
              </li>
              <li>
                <a href="#" rel>
                  Partnerships
                </a>
              </li>
              <li>
                <a href="#" rel>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" rel>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" rel>
                  Intellectual Property Claims
                </a>
              </li>
              <li>
                <a href="#">Investor Relations</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="item">
          <div className="title">
            <h6>Support</h6>
          </div>
          <div className="content_list">
            <ul>
              <li>
                <a href="#">Help & Support</a>
              </li>
              <li>
                <a href="#">Trust & Safety</a>
              </li>
              <li>
                <a href="#">Selling on Fiverr</a>
              </li>
              <li>
                <a href="#">Buying on Fiverr</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="item">
          <div className="title">
            <h6>Communlty</h6>
          </div>
          <div className="content_list">
            <ul>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Forum</a>
              </li>
              <li>
                <a href="#">Community Standards</a>
              </li>
              <li>
                <a href="#">Podcast</a>
              </li>
              <li>
                <a href="#">Affiliates</a>
              </li>
              <li>
                <a href="#">Invite a Friend</a>
              </li>
              <li>
                <a href="#">Become a Seller</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="item">
          <div className="title">
            <h6>More From FIverr</h6>
          </div>
          <div className="content_list">
            <ul className="ul_5">
              <li className="li_5">
                <a href="#">Fiverr Business</a>
              </li>
              <li>
                <a href="#">Fiverr Pro</a>
              </li>
              <li>
                <a href="#">Fiverr Studios</a>
              </li>
              <li>
                <a href="#">Fiverr Logo Maker</a>
              </li>
              <li>
                <a href="#">Fiverr Guides</a>
              </li>
              <li>
                <a href="#">Get Inspired</a>
              </li>
              <li>
                <a href="#">Fiverr Select</a>
              </li>
              <li>
                <a href="#">ClearVoice</a>
                <p>Content Marketing</p>
              </li>
              <li>
                <a href="#">Fiverr Workspace</a>
                <p>Invoice Software</p>
              </li>
              <li>
                <a href="#">Learn</a>
                <p>Online Courses</p>
              </li>
              <li>
                <a href="#">Working Not Working</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer_bottom flex justify-between flex-col lg:flex-row">
        <div className="footer_left flex justify-center items-center">
          <span className="footer_left_logo filter grayscale">
            <a href="#">
              <img
                className="w-[91px] h-[51px] "
                src="https://1000logos.net/wp-content/uploads/2021/11/Fiverr-Logo-500x281.png"
                alt="testing"
              />
            </a>
          </span>
          <span class="copyright text-gray-400 ml-4">
            © Fiverr International Ltd. 2022
          </span>
        </div>
        <div className="footer_right text-gray-500 flex items-center flex-col md:flex-row gap-3">
          <div className="social_logo grid gap-10 grid-cols-5 md:w-1/2 ">
            <a href="#">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-pinterest"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
          <div className="settings flex md:w-1/2 md:ml-20 items-center">
            <div className="setting_local flex items-center">
              <i class="fa-solid fa-globe"></i>
              <span className=" font-semibold ml-2">English</span>
            </div>
            <div className="setting_currency ml-10">
              <span className="font-semibold ml-2">US$</span>

              <span className="font-semibold ml-1">USD</span>
            </div>
            <div className="human ml-10">
              <span>
                <i class="fa-solid fa-person"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
