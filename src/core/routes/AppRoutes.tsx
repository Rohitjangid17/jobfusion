import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ProtectedRoute from "./ProtectedRoute";
import PagesLayout from "../../layouts/pages/PagesLayout";
import AuthLayout from "../../layouts/auth/AuthLayout";
import SuperAdminLayout from "../../modules/super-admin/SuperAdminLayout";
import SuperAdminRoutes from "../../modules/super-admin/SuperAdminRoutes";
import AdminRoutes from "../../modules/admin/AdminRoutes";
import AdminLayout from "../../modules/admin/AdminLayout";
import AuthRoutes from "../../modules/auth/AuthRoutes";
import PublicRoute from "./PublicRoute";
import PagesRoutes from "../../modules/pages/PagesRoute";
import CandidateRoutes from "../../modules/candidate/CandidateRoutes";
import CandidateLayout from "../../modules/candidate/CandidateLayout";
import RecruiterRoutes from "../../modules/recruiter/RecruiterRoutes";
import RecruiterLayout from "../../modules/recruiter/RecruiterLayout";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Pages */}
                <Route element={<PagesLayout />}>
                    {PagesRoutes}
                </Route>

                {/* Auth */}
                <Route element={<PublicRoute />}>
                    <Route path="/auth" element={<AuthLayout />}>
                        {AuthRoutes}
                    </Route>
                </Route>


                {/* Super Admin */}
                <Route
                    path="/superadmin"
                    element={
                        // <ProtectedRoute roles={["admin"]}>
                        <SuperAdminLayout />
                        // </ProtectedRoute>
                    }
                >
                    {SuperAdminRoutes}
                </Route>

                {/* Admin */}
                <Route
                    path="/admin"
                    element={
                        // <ProtectedRoute roles={["admin"]}>
                        <AdminLayout />
                        // </ProtectedRoute>
                    }
                >
                    {AdminRoutes}
                </Route>

                {/* Recruiter */}
                <Route
                    path="/recruiter"
                    element={
                        // <ProtectedRoute roles={["recruiter"]}>
                        <RecruiterLayout />
                        // </ProtectedRoute>
                    }
                >
                    {RecruiterRoutes}
                </Route>

                {/* Candidate */}
                <Route
                    path="/candidate"
                    element={
                        // <ProtectedRoute roles={["candidate"]}>
                        <CandidateLayout />
                        // </ProtectedRoute>
                    }
                >
                    {CandidateRoutes}
                </Route>

                {/* 404 */}
                <Route path="*" element={<h1>404 Page Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;