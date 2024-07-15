import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasePage from "./pages/BasePage";
import Home from "./pages/Home";
import AddVideo from "./pages/AddVideo";
import Player from "./pages/Player";
import NotFound from "./pages/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<Home />}></Route>
          <Route path="add" element={<AddVideo />}></Route>
          <Route path=":id" element={<Player />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
