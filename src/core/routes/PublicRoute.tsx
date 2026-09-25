import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
    const isAuthenticated = false;

    if (isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default PublicRoute;