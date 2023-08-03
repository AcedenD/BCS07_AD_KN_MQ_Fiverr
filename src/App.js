import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserTemplate from "./template/UserTemplate";
import AdminTemplate from "./template/AdminTemplate";
import Page404 from "./pages/Page404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserTemplate />}>
          <Route path="signin" />
          <Route path="login" />
        </Route>
        <Route path="/admin" element={<AdminTemplate />}>
          <Route path="user" />
          <Route path="job" />
          <Route path="job-type" />
          <Route path="service" />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
