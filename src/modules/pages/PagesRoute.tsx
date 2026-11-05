import { Navigate, Route } from "react-router-dom";
import Home from "./home/Home";
import Features from "./features/Features";
import Solutions from "./solutions/Solutions";
import Pricing from "./pricing/Pricing";
import About from "./about/About";
import Contact from "./contact/Contact";
import Resources from "./resources/Resources";
import ResourceDetails from "./resources/ResourceDetails";
import Blog from "./blog/Blog";
import BlogDetails from "./blog/BlogDetails";
import Integrations from "./integrations/Integrations";
import Careers from "./careers/Careers";
import JobDetails from "./careers/JobDetails";
import FAQ from "./faqs/FAQ";
import HelpCenter from "./help/HelpCenter";

const PagesRoutes = (
  <>
    <Route index element={<Navigate to="/home" replace />} />
    <Route path="/home" element={<Home />} />
    <Route path="/features" element={<Features />} />
    <Route path="/solutions" element={<Solutions />} />
    <Route path="/pricing" element={<Pricing />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/resources" element={<Resources />} />
    <Route path="/resources/:id" element={<ResourceDetails />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/blog/:id" element={<BlogDetails />} />
    <Route path="/integrations" element={<Integrations />} />
    <Route path="/careers" element={<Careers />} />
    <Route path="/careers/:id" element={<JobDetails />} />
    <Route path="/faqs" element={<FAQ />} />
    <Route path="/help" element={<HelpCenter />} />
  </>
);

export default PagesRoutes;