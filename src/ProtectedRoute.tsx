import { ReactElement, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./contexts/authContext";

type ProtectedRouteProps = {
  element: ReactElement;
};

const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  const { userLoggedIn } = useContext(AuthContext);

  return userLoggedIn ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
