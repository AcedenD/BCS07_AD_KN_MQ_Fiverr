import React from "react";
import Header from "../Components/Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import { useSelector } from "react-redux";
import Loading from "../pages/Loading/Loading";

const UserTemplate = () => {
  const location = useLocation();
  const pathFromLocation = location.pathname.split("/")[1];
  const { isLoading } = useSelector((state) => state.loading);
  console.log("pathFromLocation: ", pathFromLocation);

  return (
    <>
      {isLoading ? <Loading /> : <></>}
      <div className="flex flex-col min-h-screen justify-between">
        <Header removeFixed={pathFromLocation === "userprofile"} />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default UserTemplate;
