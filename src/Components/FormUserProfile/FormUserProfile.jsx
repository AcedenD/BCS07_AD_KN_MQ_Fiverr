import React from "react";

import "./FormUserProfile.scss";

const FormUserProfile = () => {
  return (
    <div className="wrapper-userprofile">
      <div className="container mx-auto">
        <div className="grid grid-cols-6">
          <div className="col-span-2 mx-3">
            <div className="flex flex-col gap-10">
              <div className="card w-full border p-5 flex flex-col">
                <div className="card-body mb-3 text-center">
                  <h1 className="avatar my-6 mx-auto">N</h1>
                  <div className="text-lg font-bold">
                    Your display name{" "}
                    <span className="text-sm mx-3">
                      <i class="fa-solid fa-pen"></i>
                    </span>
                    <span className="status">NEW</span>
                  </div>
                  <div className="name text-gray-500">@john_smile</div>
                  <span className="text-sm">
                    <i class="fa-solid fa-pen"></i>
                  </span>
                  <span className="status online">online</span>
                </div>
                <button className="btn-preview mb-5">
                  Preview Fiverr Profile
                </button>
                <div className="card-footer">
                  <div className="flex justify-between mb-3">
                    <p>
                      <i class="fa-solid fa-location-dot me-3"></i>From
                    </p>
                    <b>Vietnam</b>
                  </div>
                  <div className="flex justify-between">
                    <p>
                      <i class="fa-solid fa-user me-3"></i>Member since
                    </p>
                    <b>Aug 2023</b>
                  </div>
                </div>
              </div>
              <div className="card w-full border p-5 text-center">
                <div className="card-body mb-3 text-center">
                  <img
                    className="mx-auto mb-3 pt-10"
                    width={200}
                    src="https://npm-assets.fiverrcdn.com/assets/@fiverr-private/fiverr_learn/enroll-icon.69b770f.svg"
                    alt=""
                  />
                  <div className="text-lg font-bold">
                    Earn badges and stand out
                  </div>
                  <div className="text-black">
                    Boost your sales, by boosting your expertise.
                  </div>
                  <span className="learn">
                    <img
                      src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_png/v1/attachments/generic_asset/asset/6bef0aaa4d62dcf41383658e5e3211ee-1571214998624/fiverrlearn_logo.svg"
                      alt=""
                    />
                  </span>
                </div>
                <button className="btn-error-now mb-5 mt-3 mx-auto">
                  Error Now
                </button>
              </div>
              <div className="card w-full border p-5 flex flex-col">
                <div className="card-footer" style={{ border: "none" }}>
                  <div className="flex justify-between items-center mb-10">
                    <b className="text-lg text-black">Description</b>
                    <a className="text-[#00698c] font-medium" href="#">
                      Edit Description
                    </a>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="flex justify-between items-center mb-3">
                    <b className="text-base text-black mt-3">Languages</b>
                    <a className="text-[#00698c] font-medium" href="">
                      Add New
                    </a>
                  </div>
                  <div className="flex justify-between items-center mb-5">
                    <b className="text-sm text-gray-500 font-medium">
                      English - Basic
                    </b>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="flex justify-between items-center">
                    <b className="text-lg text-black mt-3 mb-3">
                      Linked Accounts
                    </b>
                  </div>
                  <div className="flex justify-between text-[#00698c] font-medium mb-3">
                    <p>
                      <i class="fa-solid fa-plus me-3"></i>Facebook
                    </p>
                  </div>
                  <div className="flex justify-between font-medium">
                    <p>
                      <i class="fa-brands fa-google-plus me-3"></i>Google
                    </p>
                  </div>
                </div>
              </div>
              <div className="card w-full border p-5">
                <div className="card-body mb-3">
                  <div className="text-lg font-bold mb-4 text-base">
                    Shared activity information
                  </div>
                  <div className="text-black text-sm">
                    In order to provide the best possible work and service, some
                    information about your activity on Fiverr may be shared with
                    sellers.
                    <a href="..." className="text-[#00698c] font-medium">
                      Manage settings
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormUserProfile;