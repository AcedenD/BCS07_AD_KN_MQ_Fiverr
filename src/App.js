import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserTemplate from "./template/UserTemplate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserTemplate />} />
        <Route path="/about" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
