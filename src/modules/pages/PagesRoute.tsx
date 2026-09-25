import { Navigate, Route } from "react-router-dom";
import Home from "./home/Home";

const PagesRoutes = (
  <>
    <Route index element={<Navigate to="/home" replace />} />
    <Route path="/home" element={<Home />} />
  </>
);

export default PagesRoutes;