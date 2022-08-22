import { Navigate, Outlet } from "react-router-dom";
const PrivateRouter = () => {
  const loggedIn = false;
  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRouter;
