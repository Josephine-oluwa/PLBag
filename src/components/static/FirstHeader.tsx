import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RiRecycleFill } from "react-icons/ri";

const FirstHeader = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  const onScroll = () => {
    setScroll(!scroll);
    if (window.scrollY >= 13) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", onScroll);

  return (
    <div>
      <div className="w-full py-3 flex items-center justify-center fixed bg-white">
        <div className="w-[95%]  h-full flex justify-center items-center">
          <div className="flex justify-between items-center w-full">
            <div className="flex w-[auto]  justify-between items-center">
              <div className="mr-20">
                <RiRecycleFill className="text-4xl"/>
              </div>
              <div className="flex max-md:hidden mx-2">
                <Link to="/mission">
                  <div className="mx-5 font-bold text-gray-500">
                    Our Mission
                  </div>
                </Link>
                <Link to="/projects">
                  <div className="mx-5 font-bold text-gray-500">Projects</div>
                </Link>
                <Link to="/blogs">
                  <div className="mx-5 font-bold text-gray-500">Blogs</div>
                </Link>
                <Link to="/contact">
                  <div className="mx-5 font-bold text-gray-500">Contact</div>
                </Link>
              </div>
            </div>
            <Link to="/register">
            <div className="max-sm:hidden ml-2">
              <button className="px-[24px] py-2 rounded-tl-[20px] rounded-br-[20px] bg-[#69BA00] text-white outline-none font-bold">
                Get Started
              </button>
            </div>
            </Link>
            <div className="max-sm:flex hidden">
              <FiMenu className="text-3xl hover:cursor-pointer hover:scale-125 duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstHeader;
