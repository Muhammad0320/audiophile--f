import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../users/useUser";

function ProtectedRoutes({ children }) {
  const { user } = useUser();

  console.log(user);

  return user ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoutes;
