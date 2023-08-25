import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserTemplate from "./template/UserTemplate";
import AdminTemplate from "./template/AdminTemplate";
import Page404 from "./pages/Page404/Page404";
import HomePage from "./pages/HomePage/HomePage";
import Title from "./pages/TitlePage/Title";
import Categories from "./pages/Categories/Categories";
import ServiceManage from "./pages/ServiceManage/ServiceManage";
import JobTypeManage from "./pages/JobTypeManage/JobTypeManage";

import FormLogin from "./Components/FormLogin/FormLogin";
import FormSignUp from "./Components/FormSignUp/FormSignUp";

import JobDetail from "./pages/JobDetail/JobDetail";
import UserProfile from "./pages/UserProfile/UserProfile";
import UserManage from "./pages/UserManage/UserManage";
import JobManage from "./pages/JobManage/JobManage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserTemplate />}>
          <Route index element={<HomePage />} />
          <Route path="signup" element={<FormSignUp />} />
          <Route path="/login" element={<FormLogin />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="title/:id" element={<Title />} />
          <Route path="categories/:id" element={<Categories />} />
          <Route path="jobDetail/:id" element={<JobDetail />} />
        </Route>
        <Route path="/admin" element={<AdminTemplate />}>
          <Route path="user" element={<UserManage />} />
          <Route path="job" element={<JobManage />} />
          <Route path="job-type" element={<JobTypeManage />} />
          <Route path="service" element={<ServiceManage />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
