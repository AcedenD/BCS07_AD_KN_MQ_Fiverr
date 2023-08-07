import React from "react";

import "./Trusted.scss";

const Trusted = () => {
  return (
    <div className="wrapper-trusted">
      <div className="container mx-auto">
        <div className="w-full flex justify-center items-center">
          <span className="trusted-by-text">Trusted by:</span>
          <ul className=" flex justify-center items-center">
            <li>
              <picture>
                <source
                  media="(max-width: 899px)"
                  srcSet="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/meta.99a0dda.png 1x, https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/meta2x.d8d5bc3.png 2x"
                />
                <source
                  media="(min-width: 900px)"
                  srcSet="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/meta.12b5e5c.png 1x, https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/meta2x.b364aec.png 2x"
                />
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/meta.12b5e5c.png"
                  alt="facebook"
                />
              </picture>
            </li>
            <li>
              <picture>
                <source
                  media="(max-width: 899px)"
                  srcSet="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/google.9d71a37.png 1x, https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/google2x.0053d08.png 2x"
                />
                <source
                  media="(min-width: 900px)"
                  srcSet="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/google.61e78c8.png 1x, https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/google2x.4fa6c20.png 2x"
                />
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/google.61e78c8.png"
                  alt="Google"
                />
              </picture>
            </li>
            <li>
              <picture>
                <source
                  media="(max-width: 899px)"
                  srcSet="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/netflix.35dc5cd.png 1x, https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/netflix2x.9022712.png 2x"
                />
                <source
                  media="(min-width: 900px)"
                  srcSet="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/netflix.96c5e3f.png 1x, https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/netflix2x.6b36ad6.png 2x"
                />
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/netflix.96c5e3f.png"
                  alt="NETFLIX"
                />
              </picture>
            </li>
            <li>
              <picture>
                <source
                  media="(max-width: 899px)"
                  srcSet="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/pandg.967b1ad.png 1x, https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/pandg2x.6665fbe.png 2x"
                />
                <source
                  media="(min-width: 900px)"
                  srcSet="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/pandg.0f4cfc2.png 1x, https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/pandg2x.0d06f7b.png 2x"
                />
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/pandg.0f4cfc2.png"
                  alt="P&G"
                />
              </picture>
            </li>
            <li className="display-from-sm">
              <picture>
                <source
                  media="(max-width: 899px)"
                  srcSet="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/paypal.910e738.png 1x, https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/paypal2x.bd199ac.png 2x"
                />
                <source
                  media="(min-width: 900px)"
                  srcSet="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/paypal.305e264.png 1x, https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/paypal2x.d2fa54d.png 2x"
                />
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/paypal.305e264.png"
                  alt="PayPal"
                />
              </picture>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
