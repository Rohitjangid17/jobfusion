import { Navigate, Route } from "react-router-dom";
import Home from "./home/Home";
import Features from "./features/Features";

const PagesRoutes = (
  <>
    <Route index element={<Navigate to="/home" replace />} />
    <Route path="/home" element={<Home />} />
    <Route path="/features" element={<Features />} />
  </>
);

export default PagesRoutes;