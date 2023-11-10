import { Navigate } from "react-router-dom";

function ProtectedRoutes({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  console.log(user);

  return user ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoutes;
