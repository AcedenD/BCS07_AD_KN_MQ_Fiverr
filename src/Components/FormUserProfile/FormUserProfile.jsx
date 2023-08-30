import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./FormUserProfile.scss";
import FormUserProfileEdit from "../FormUserProfileEdit/FormUserProfileEdit";
import { getAllUser } from "../../redux/slices/nguoiDungSlice";
import { layDuLieuLocal } from "../../utils/localStore";

const FormUserProfile = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.nguoiDung);
  const currentUserId = layDuLieuLocal("userId");

  const userDetail = users.find(({ id }) => id === currentUserId);

  const showModal = () => {
    setOpen(true);
  };

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  return (
    <div>
      <div className="wrapper-userprofile">
        {/* <div className="container mx-auto"> */}
        {/* <div className="grid grid-cols-6"> */}
        <div className="col-span-2 mx-3">
          <div className="flex flex-col gap-10">
            <div className="card w-full border p-5 flex flex-col">
              <div className="card-body mb-3 text-center">
                <h1 className="avatar my-6 mx-auto">
                  {userDetail?.name[0] ?? "A"}
                </h1>
                {/* <div className="text-lg font-bold">Your display name</div> */}
                <div className="name text-2xl font-bold text-[#000]">
                  {userDetail?.email}
                  <span className="status ml-2">{userDetail?.role}</span>
                </div>
                <span className="text-sm" onClick={showModal}>
                  <i className="fa-solid text-base fa-pen cursor-pointer text-gray-400 hover:text-[#000] ease-in duration-200"></i>
                </span>
                <span className="status online">online</span>
              </div>
              <button className="btn-preview mb-5 hover:bg-[#1dbf73]">
                Preview Fiverr Profile
              </button>
              <div className="card-footer">
                <div className="flex justify-between mb-3">
                  <p>
                    <i className="fa-solid fa-location-dot me-3"></i>From
                  </p>
                  <b className="text-[#1dbf73]">Vietnam</b>
                </div>
                <div className="flex justify-between">
                  <p>
                    <i class="fa-solid fa-user me-3"></i>Member since
                  </p>
                  <b className="text-[#1dbf73]">Aug 2023</b>
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
                <div className="flex justify-between items-center mb-3">
                  <b className="text-lg text-black">Description</b>
                  <button
                    className="text-[#1dbf73] font-medium"
                    onClick={showModal}
                  >
                    <i className="fa-solid text-base fa-pen cursor-pointer text-gray-400 hover:text-[#000] ease-in duration-200"></i>
                  </button>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <p className="text-lg text-black">Name</p>
                  <p className="text-[#1dbf73] font-medium">
                    {userDetail?.name}
                  </p>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <p className="text-lg text-black">Phone</p>
                  <p className="text-[#1dbf73] font-medium">
                    {userDetail?.phone}
                  </p>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <p className="text-lg text-black">Birthday</p>
                  <p className="text-[#1dbf73] font-medium">
                    {userDetail?.birthday}
                  </p>
                </div>
              </div>
              <div className="card-footer">
                <div className="flex justify-between items-center mb-3">
                  <b className="text-base text-black mt-3">Languages</b>
                </div>
                <div className="flex justify-between items-center mb-5">
                  <b className="text-sm text-gray-500 font-medium">
                    English - Basic
                  </b>
                </div>
              </div>
              <div className="card-footer">
                <div className="flex justify-between items-center mb-3">
                  <b className="text-base text-black mt-3">Skill</b>
                  <button
                    className="text-[#1dbf73] font-medium"
                    onClick={showModal}
                  >
                    <i className="fa-solid text-base fa-pen cursor-pointer text-gray-400 hover:text-[#000] ease-in duration-200"></i>
                  </button>
                </div>
                <div className="flex justify-between items-center mb-5">
                  {userDetail?.skill?.map((skill, index) => (
                    <b
                      key={index}
                      className="text-sm text-gray-500 font-medium"
                    >
                      {skill}
                    </b>
                  ))}
                </div>
              </div>
              <div className="card-footer">
                <div className="flex justify-between items-center mb-3">
                  <b className="text-base text-black mt-3">Certification</b>
                  <button
                    className="text-[#1dbf73] font-medium"
                    onClick={showModal}
                  >
                    <i className="fa-solid text-base fa-pen cursor-pointer text-gray-400 hover:text-[#000] ease-in duration-200"></i>
                  </button>
                </div>
                <div className="flex justify-between items-center mb-5">
                  {userDetail?.certification?.map((certification, index) => (
                    <b
                      key={index}
                      className="text-sm text-gray-500 font-medium"
                    >
                      {certification}
                    </b>
                  ))}
                </div>
              </div>
              <div className="card-footer">
                <div className="flex justify-between items-center">
                  <b className="text-lg text-black mt-3 mb-3">
                    Linked Accounts
                  </b>
                </div>
                <div className="flex justify-between text-[#1dbf73] font-medium mb-3">
                  <button>
                    <i class="fa-solid fa-plus me-3"></i>Facebook
                  </button>
                </div>
                <div className="flex justify-between font-medium">
                  <button>
                    <i class="fa-brands fa-google-plus me-3"></i>Google
                  </button>
                </div>
              </div>
            </div>
            <div className="card w-full border p-5">
              <div className="card-body mb-3">
                <div className="text-lg font-bold mb-4">
                  Shared activity information
                </div>
                <div className="text-black text-sm">
                  In order to provide the best possible work and service, some
                  information about your activity on Fiverr may be shared with
                  sellers.
                  <a href="..." className="text-[#1dbf73] font-medium">
                    Manage settings
                  </a>
                </div>
              </div>
            </div>
            {open && (
              <FormUserProfileEdit
                title="EDIT YOUR PROFILE"
                setOpen={setOpen}
                open={open}
                userDetail={userDetail}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormUserProfile;
