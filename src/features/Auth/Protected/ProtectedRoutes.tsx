import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {
  return localStorage.getItem("username") ? (
    <Outlet />
  ) : (
    <Navigate to={"/auth/registration"} replace />
  );
}
