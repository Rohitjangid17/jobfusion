import { Navigate, Route } from "react-router-dom";
import AdminDashboard from "./dashboard/AdminDashboard";
import Companies from "./companies/Companies";
import Recruiters from "./recruiters/Recruiters";
import Candidates from "./candidates/Candidates";
import Jobs from "./jobs/Jobs";
import Applications from "./applications/Applications";
import Master from "./master/Master";
import Locations from "./locations/Locations";
import Blogs from "./blogs/Blogs";
import Support from "./support/Support";
import Notifications from "./notifications/Notifications";
import Reports from "./reports/Reports";
import Profile from "./profile/Profile";
import Settings from "./settings/Settings";

const AdminRoutes = (
    <>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="companies" element={<Companies />} />
        <Route path="recruiters" element={<Recruiters />} />
        <Route path="candidates" element={<Candidates />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="applications" element={<Applications />} />
        <Route path="master" element={<Master />} />
        <Route path="locations" element={<Locations />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="support" element={<Support />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="reports" element={<Reports />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
    </>
);

export default AdminRoutes;