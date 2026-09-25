import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    children: React.ReactNode;
    roles: string[];
}

const ProtectedRoute = ({ children, roles, }: ProtectedRouteProps) => {
    const isAuthenticated = true;
    const userRole = "admin";

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    if (!roles.includes(userRole)) {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;