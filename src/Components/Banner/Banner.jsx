import React, { useEffect, useState } from "react";
// Initialization for ES Users

import "./Banner.scss";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    {
      order: 0,
      class: "hero-bannerImg1",
    },
    {
      order: 1,
      class: "hero-bannerImg2",
    },
    {
      order: 2,
      class: "hero-bannerImg3",
    },
    {
      order: 3,
      class: "hero-bannerImg4",
    },
    {
      order: 4,
      class: "hero-bannerImg5",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 300000); // Change item every 3 seconds

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="hero-wrapper hero-jenny lohp-row is-desktop">
      <div className="hero-backgrounds">
        <div className="container">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`${
                item.order === currentIndex ? item.class : ""
              } hero-background`}
            >
              <div className="brand flex justify-center items-center gap-2">
                <div className="img border rounded-full">
                  <img
                    className="w-full h-full overflow-hidden"
                    srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_40,dpr_1.0/v1/attachments/generic_asset/asset/7539ee9d7a6ab02e3d23069ebefb32c8-1690386499432/colin-2x.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_40,dpr_2.0/v1/attachments/generic_asset/asset/7539ee9d7a6ab02e3d23069ebefb32c8-1690386499432/colin-2x.png 2x"
                    src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_40,dpr_1.0/v1/attachments/generic_asset/asset/7539ee9d7a6ab02e3d23069ebefb32c8-1690386499432/colin-2x.png"
                    alt="Colin"
                  />
                </div>
                <div className="flex justify-center items-left flex-col">
                  <div className="flex justify-between items-center">
                    <div>@colinstark</div>
                    <div className="flex justify-center items-center">
                      5
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={13}
                        viewBox="0 0 12 13"
                        fill="none"
                      >
                        <path
                          d="M5.93263 1.00546C6.04001 0.736149 6.42121 0.736149 6.5286 1.00546L7.62159 3.74654C7.66741 3.86145 7.77521 3.93977 7.89866 3.94784L10.8433 4.1403C11.1326 4.15921 11.2504 4.52175 11.0275 4.7071L8.75833 6.59364C8.66321 6.67273 8.62203 6.79946 8.6525 6.91935L9.37942 9.77938C9.45084 10.0604 9.14244 10.2844 8.89727 10.1297L6.40185 8.55454C6.29724 8.48851 6.16399 8.48851 6.05938 8.55454L3.56396 10.1297C3.31879 10.2844 3.01039 10.0604 3.08181 9.77938L3.80872 6.91935C3.8392 6.79946 3.79802 6.67273 3.7029 6.59364L1.43372 4.7071C1.21078 4.52175 1.32858 4.15921 1.61789 4.1403L4.56257 3.94784C4.68601 3.93977 4.79381 3.86145 4.83963 3.74654L5.93263 1.00546Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="niLaqs0">
                    <b>Creative Director</b>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="hero">
          <div className="header">
            <h1 className="font-domaine">
              Find the right <i>freelance</i> service, right away
            </h1>
            <div className="search-bar-package search_bar-package">
              <form className="search-form">
                <input
                  type="search"
                  className="long-placeholder"
                  autoComplete="off"
                  placeholder="Search for any service..."
                  defaultValue=""
                />
                {/* <input
                  type="search"
                  className="short-placeholder"
                  autoComplete="off"
                  placeholder="Search for any service..."
                  defaultValue
                /> */}
                <button className="submit-button">
                  <div className="submit-button-icon">
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentFill"
                    >
                      <path d="m15.89 14.653-3.793-3.794a.37.37 0 0 0-.266-.109h-.412A6.499 6.499 0 0 0 6.5 0C2.91 0 0 2.91 0 6.5a6.499 6.499 0 0 0 10.75 4.919v.412c0 .1.04.194.11.266l3.793 3.794a.375.375 0 0 0 .531 0l.707-.707a.375.375 0 0 0 0-.53ZM6.5 11.5c-2.763 0-5-2.238-5-5 0-2.763 2.237-5 5-5 2.762 0 5 2.237 5 5 0 2.762-2.238 5-5 5Z" />
                    </svg>
                  </div>
                </button>
              </form>
            </div>
            <div className="popular">
              Popular:{" "}
              <ul>
                <li>
                  <a
                    href="/categories/graphics-design/website-design?source=hplo_search_tag&pos=1&name=website-design"
                    className="text-body-2"
                  >
                    Website Design
                  </a>
                </li>
                <li>
                  <a
                    href="/categories/programming-tech/wordpress-services?source=hplo_search_tag&pos=2&name=wordpress-services"
                    className="text-body-2"
                  >
                    WordPress
                  </a>
                </li>
                <li>
                  <a
                    href="/categories/graphics-design/creative-logo-design?source=hplo_search_tag&pos=3&name=creative-logo-design"
                    className="text-body-2"
                  >
                    Logo Design
                  </a>
                </li>
                <li>
                  <a
                    href="/cp/ai-services?source=hplo_search_tag&pos=4&name=ai-services"
                    className="text-body-2"
                  >
                    AI Services
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;