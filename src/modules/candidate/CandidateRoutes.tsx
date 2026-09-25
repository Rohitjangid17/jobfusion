import { Navigate, Route } from "react-router-dom";
import CandidateDashboard from "./dashboard/CandidateDashboard";

const CandidateRoutes = (
    <>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<CandidateDashboard />} />
    </>
);

export default CandidateRoutes;