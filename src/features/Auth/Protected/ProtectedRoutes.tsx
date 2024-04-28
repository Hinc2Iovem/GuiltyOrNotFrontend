import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {
  return localStorage.getItem("username")?.trim() ? (
    <Outlet />
  ) : (
    <Navigate to={"/auth/registration"} replace />
  );
}
