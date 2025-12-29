import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../services/authservices";

export default function ProtectedRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/login" />;
}
