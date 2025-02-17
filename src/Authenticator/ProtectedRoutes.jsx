import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, user }) => {
  console.log(user)
  if (!user) {
    return <Navigate to="/" replace />; // Redirect to login if not authenticated
  }
  if (user.role !== "Admin" && user.role !== "Staff") {
    return <Navigate to="/404" replace />;
  }
  return element;
};

export default ProtectedRoute;
