import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../users/useUser";

function ProtectedRoutes() {
  const { user } = useUser();

  return user ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoutes;
