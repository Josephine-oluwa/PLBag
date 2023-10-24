import { Outlet } from "react-router-dom";
import FirstHeader from "../static/FirstHeader";
import Footer from "../static/Footer";

const FirstLayout = () => {
  return (
    <div className="flex flex-col">
      <FirstHeader />
      <div className="mt-10">
        <Outlet />
        <Footer/>
      </div>

    </div>
  );
};

export default FirstLayout;
