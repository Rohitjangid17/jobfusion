import { Navigate, Route } from "react-router-dom";
import RecruiterDashboard from "./dashboard/RecruiterDashboard";
import Jobs from "./jobs/Jobs";
import Candidates from "./candidates/Candidates";
import Applications from "./applications/Applications";
import Interviews from "./interviews/Interviews";
import Messages from "./messages/Messages";

const RecruiterRoutes = (
    <>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<RecruiterDashboard />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="candidates" element={<Candidates />} />
        <Route path="applications" element={<Applications />} />
        <Route path="interviews" element={<Interviews />} />
        <Route path="messages" element={<Messages />} />
    </>
);

export default RecruiterRoutes;