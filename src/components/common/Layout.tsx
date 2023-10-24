import { Outlet } from "react-router-dom";
import Header from "../static/Header";

const Layout = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="mt-[60px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;