import { Navigate, Route } from "react-router-dom";
import RecruiterDashboard from "./dashboard/RecruiterDashboard";
import Jobs from "./jobs/Jobs";
import Candidates from "./candidates/Candidates";
import Applications from "./applications/Applications";
import Interviews from "./interviews/Interviews";
import Messages from "./messages/Messages";
import Support from "./support/Support";
import Settings from "./settings/Settings";
import Profile from "./profile/Profile";
import CompanyProfile from "./company-profile/CompanyProfile";
import JobPerformance from "./reports/job-performance/JobPerformance";
import ApplicationAnalytics from "./reports/application-analytics/ApplicationAnalytics";
import CandidateAnalytics from "./reports/candidate-analytics/CandidateAnalytics";
import HiringAnalytics from "./reports/hiring-analytics/HiringAnalytics";
import InterviewAnalytics from "./reports/interview-analytics/InterviewAnalytics";

const RecruiterRoutes = (
    <>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<RecruiterDashboard />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="candidates" element={<Candidates />} />
        <Route path="applications" element={<Applications />} />
        <Route path="interviews" element={<Interviews />} />
        <Route path="messages" element={<Messages />} />
        <Route path="reports">
            <Route path="job-performance" element={<JobPerformance />} />
            <Route path="application-analytics" element={<ApplicationAnalytics />} />
            <Route path="candidate-analytics" element={<CandidateAnalytics />} />
            <Route path="hiring-analytics" element={<HiringAnalytics />} />
            <Route path="interview-analytics" element={<InterviewAnalytics />} />
        </Route>
        <Route path="company-profile" element={<CompanyProfile />} />
        <Route path="profile" element={<Profile />} />
        <Route path="support" element={<Support />} />
        <Route path="settings" element={<Settings />} />
    </>
);

export default RecruiterRoutes;