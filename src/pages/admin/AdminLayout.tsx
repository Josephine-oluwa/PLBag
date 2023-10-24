import { Outlet } from "react-router-dom";
import Sider from "./Sider";
import { useSelector } from "react-redux";

const AdminLayout = () => {
  const toggle = useSelector((state: any) => state.toggle);
  return (
    <div className="flex w-full">
      <Sider />
      {/* <div className="w-[calc(100%-200px)] flex justify-end"> */}
      {toggle ? (
        <div className="w-full flex justify-end">
          <div className="w-[calc(100%-60px)]  h-full flex justify-center">
            <Outlet />
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-end">
          <div className="w-[calc(100%-200px)] md:w-[calc(100%-150px)] max-sm:w-[100%] h-full flex justify-center">
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminLayout;
