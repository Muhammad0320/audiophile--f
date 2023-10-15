import { Navigate } from "react-router-dom";
import { useUser } from "../users/useUser";

function ProtectedRoutes({ children }) {
  const { user } = useUser();

  return user ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoutes;
