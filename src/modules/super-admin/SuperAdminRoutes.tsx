import { Navigate, Route } from "react-router-dom";
import SuperAdminDashboard from "./dashboard/SuperAdminDashboard";
import Admins from "./admins/Admins";
import RolesPermissions from "./roles-permissions/RolesPermissions";
import Companies from "./companies/Companies";
import Recruiters from "./recruiters/Recruiters";
import Candidates from "./candidates/Candidates";
import Jobs from "./jobs/Jobs";
import Applications from "./applications/Applications";
import Master from "./master/Master";
import Locations from "./locations/Locations";
import Blogs from "./blogs/Blogs";
import Support from "./support/Support";
import JobsReport from "./reports/jobs/JobsReport";
import CandidatesReport from "./reports/candidates/CandidatesReport";
import ApplicationsReport from "./reports/applications/ApplicationsReport";
import RecruitersReport from "./reports/recruiters/RecruiterReport";
import CompaniesReport from "./reports/companies/CompaniesReport";
import HiringReport from "./reports/hiring/HiringReport";
import AuditLogs from "./audit-logs/AuditLogs";
import Profile from "./profile/Profile";
import Settings from "./settings/Settings";

const SuperAdminRoutes = (
    <>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<SuperAdminDashboard />} />
        <Route path="admins" element={<Admins />} />
        <Route path="roles-permissions" element={<RolesPermissions />} />
        <Route path="companies" element={<Companies />} />
        <Route path="recruiters" element={<Recruiters />} />
        <Route path="candidates" element={<Candidates />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="applications" element={<Applications />} />
        <Route path="master" element={<Master />} />
        <Route path="locations" element={<Locations />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="support" element={<Support />} />
        <Route path="reports">
            <Route path="jobs" element={<JobsReport />} />
            <Route path="candidates" element={<CandidatesReport />} />
            <Route path="applications" element={<ApplicationsReport />} />
            <Route path="recruiters" element={<RecruitersReport />} />
            <Route path="companies" element={<CompaniesReport />} />
            <Route path="hiring" element={<HiringReport />} />
        </Route>
        <Route path="audit-logs" element={<AuditLogs />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
    </>
);

export default SuperAdminRoutes;