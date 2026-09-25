import { Navigate, Route } from "react-router-dom";
import Login from "./login/Login";
import ForgotPassword from "./forgot-password/ForgotPassword";
import VerifyOtp from "./verify-otp/VerifyOtp";
import ResetPassword from "./reset-password/ResetPassword";

const AuthRoutes = (
    <>
        <Route index element={<Navigate to="login" replace />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="verify-otp" element={<VerifyOtp />} />
        <Route path="reset-password" element={<ResetPassword />} />
    </>
);

export default AuthRoutes;