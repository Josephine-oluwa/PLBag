import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import useUser from "../../global/globalFile";
import { useOneUser } from "../../hooks/useOneUser";

const HomeScreen = () => {
  const [show, setShow] = useState<boolean>(false);
  const onShow = () => {
    setShow(!show);
  };

  const [state]: any = useUser();
  const { data } = useOneUser(state);

  return (
    <div className="w-full h-auto flex justify-center items-center">
      <div className="w-[95%] h-auto ">
        <div className="w-full h-[340px]  flex justify-between items-centerx ">
          <div className="flex flex-col h-[300px]">
            <div className="text-2xl mt-7">
              Welcome <span className="font-bold">{data?.studentName}</span>,
              you've brought 10 bags
            </div>
            <div className="flex mt-5 flex-wrap">
              <div className="w-[250px] h-[180px] border rounded-md flex items-center justify-center hover:shadow-lg cursor-pointer transition-all duration-300 mx-8 my-2">
                <div className="flex flex-col items-center w-[90%] h-[90%] justify-cente ">
                  <div className="mt-5 text-3xl font-bold flex items-center">
                    ₦{show ? <div>{data?.amount}</div> : <div>****.**</div>}
                  </div>
                  <div
                    className="mt-14 text-4xl transition-all"
                    onClick={onShow}
                  >
                    {show ? <IoMdEyeOff /> : <IoMdEye />}
                  </div>
                </div>
              </div>
              <div className="w-[250px] h-[180px] border rounded-md flex items-center justify-center hover:shadow-lg cursor-pointer transition-all duration-300 mx-8 my-2">
                <div className="flex flex-col items-center w-[90%] h-[90%] justify-cente ">
                  <div className="mt-5 text-5xl font-bold">10</div>
                  <div className="mt-14">Total Bags</div>
                </div>
              </div>

              <div className="w-[250px] h-[180px] border rounded-md flex items-center justify-center hover:shadow-lg cursor-pointer transition-all duration-300 mx-8 my-2">
                <div className="flex flex-col items-center w-[90%] h-[90%] justify-cente ">
                  <div className="mt-5 text-5xl font-bold">0</div>
                  <div className="mt-14">Total Bags</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[270px] rounded-md h-[270px] bg-gray-300 max-md:hidden flex flex-col items-center">
            {/* <div className="w-[90px] h-[90px] rounded-full border mt-5 overflow-hidden">
              <img className="w-full h-full rounded-full object-cover" />
            </div> */}
            <div className="flex flex-col items-center">
              <div className="text-[14px] font-bold mt-4">Francis</div>
              <div className="text-[12px] mt-1">email@test.com</div>
              <div className="mt-1">Afara High School</div>
              <div className="mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
