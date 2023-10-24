import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import useUser from "../global/globalFile";

const PrivateRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const [state] = useUser();
  return <div>{state ? <div>{children}</div> : <Navigate to="/signin" />}</div>;
};

export default PrivateRoute;
