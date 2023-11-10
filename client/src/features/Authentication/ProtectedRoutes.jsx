import { Navigate } from "react-router-dom";

function ProtectedRoutes({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  return user ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoutes;
