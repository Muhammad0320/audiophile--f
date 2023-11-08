import { Navigate } from "react-router-dom";
import { useUser } from "../users/useUser";

function ProtectedRoutes({ children }) {
  const { user, isLoading } = useUser();

  return user && !isLoading ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoutes;
