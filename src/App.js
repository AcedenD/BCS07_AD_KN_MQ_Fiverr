import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserTemplate from "./template/UserTemplate";
import AdminTemplate from "./template/AdminTemplate";
import Page404 from "./pages/Page404/Page404";
import HomePage from "./pages/HomePage/HomePage";
import Title from "./pages/TitlePage/Title";
import Categories from "./pages/Categories/Categories";
import ServiceManage from "./pages/ServiceManage/ServiceManage";
import JobTypeManage from "./pages/JobTypeManage/JobTypeManage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserTemplate />}>
          <Route index element={<HomePage />} />
          <Route path="signin" />
          <Route path="login" />
          <Route path="title/:id" element={<Title />} />
          <Route path="categories/:id" element={<Categories />} />
        </Route>
        <Route path="/admin" element={<AdminTemplate />}>
          <Route path="user" />
          <Route path="job" />
          <Route path="job-type" element={<JobTypeManage />}/>
          <Route path="service" element={<ServiceManage />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
