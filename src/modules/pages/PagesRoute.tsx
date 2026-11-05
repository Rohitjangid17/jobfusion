import { Navigate, Route } from "react-router-dom";
import Home from "./home/Home";
import Features from "./features/Features";
import Solutions from "./solutions/Solutions";
import Pricing from "./pricing/Pricing";
import About from "./about/About";

const PagesRoutes = (
  <>
    <Route index element={<Navigate to="/home" replace />} />
    <Route path="/home" element={<Home />} />
    <Route path="/features" element={<Features />} />
    <Route path="/solutions" element={<Solutions />} />
    <Route path="/pricing" element={<Pricing />} />
    <Route path="/about" element={<About />} />
  </>
);

export default PagesRoutes;