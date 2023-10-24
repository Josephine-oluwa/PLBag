import { useState } from "react";
import { MdLogout } from "react-icons/md";
import { RiRecycleFill } from "react-icons/ri";
import useUser from "../../global/globalFile";

const Header = () => {
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

  const [state, setState] = useUser();

  return (
    <div>
      <div className="w-full py-3 flex items-center justify-center fixed bg-white">
        <div className="w-[95%]  h-full flex justify-center items-center">
          <div className="flex justify-between items-center w-full">
            <div className="flex w-[auto]  justify-between items-center">
              <div className="mr-20">
                <RiRecycleFill className="text-4xl" />
              </div>
            </div>
            <div
              onClick={() => {
                setState(null);
              }}
            >
              <MdLogout className="text-3xl  hover:scale-125 duration-300 transition-all cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
