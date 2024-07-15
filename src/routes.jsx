import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasePage from "./pages/BasePage";
import Home from "./pages/Home";
import AddVideo from "./pages/AddVideo";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<Home />} />
          <Route path="add" element={<AddVideo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
