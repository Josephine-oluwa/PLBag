import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { CgLogOut } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { changeToggleFalse, changeToggleTrue } from "../../global/globalState";


const Sider = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state: any) => state.toggle);
  return (
    <div className="small:hidden">
        {toggle ? (
        <div className="h-[100vh] w-[65px] fixed bg-[#69BA00] text-white pt-[10px]">
          <div
            className=" flex flex-col w-full h-[90px] hover:bg-[#85bc3c] hover:text-[black] items-center justify-between px-[5px] hover:cursor-pointer transition-all duration-300 hover:rounded-md">
            <div
              className=" my-[5px] h-[40px] w-[40px] flex items-center justify-center rounded bg-[white]">
              <img  alt="" className="w-[35px] " />
            </div>
            {toggle ? (
              <HiChevronDoubleRight
                className="text-[23px]"
                onClick={() => {
                  dispatch(changeToggleFalse());
                }}
              />
            ) : (
              <HiChevronDoubleRight
                className="text-[23px]"
                onClick={() => {
                  dispatch(changeToggleTrue());
                }}
              />
            )}
          </div>

          <div
            className="flex w-[64.5px]
              h-[50px]
              [50px]
      hover:bg-[#85bc3c] hover:text-[black] hover:cursor-pointer transition-all duration-300  pl-[20px] mt-[40px] items-center hover:rounded-md"
          >
            <LuLayoutDashboard className="text-[23px]" />
          </div>
          <div
            className="flex w-[64.5px]
              h-[50px]
              [50px]
      hover:bg-[#85bc3c] hover:text-[black] hover:cursor-pointer transition-all duration-300  pl-[20px] mt-[5px] items-center hover:rounded-md"
          >
            <BsFillCreditCard2BackFill className="text-[23px]" />
          </div>
          {/* <div className="mt-[200px] md:mt-[90px]" /> */}
          <div
            className="flex w-[64.5px]
              h-[50px] mt-[200px]  md:mt-[220px]
               hover:cursor-pointer transition-all duration-300  pl-[20px]  items-center hover:rounded-md"
          >
            <div
              className="h-[35px] flex items-center  mb-[5px] w-[25px] rounded
              [50px]
      hover:text-[black] hover:cursor-pointer transition-all duration-300"
            >
              <CgLogOut className="text-[25px]" />
            </div>
          </div>
      
        </div>
      ) : (
        <div className="h-[100vh] w-[200px] md:w-[150px] fixed bg-[#69BA00] text-white pt-[10px]">
          <div
            className="
      flex
      w-full 
      h-[50px]
      [50px]
      hover:bg-[#85bc3c]
       hover:text-[black]
      items-center
      justify-between
      px-[5px]
      hover:cursor-pointer 
      transition-all 
      duration-300 
      hover:rounded-md"
          >
            <div
              className="
          my-[5px] 
          h-[40px] 
          w-[40px] 
          flex 
          items-center 
          justify-center 
          rounded 
          bg-[white] 
          ml-[10px]"
            >
              <img  alt="" className="w-[35px] " />
            </div>

            {toggle ? (
              <HiChevronDoubleLeft
                className="text-[23px]"
                onClick={() => {
                  dispatch(changeToggleFalse());
                }}
              />
            ) : (
              <HiChevronDoubleLeft
                className="text-[23px]"
                onClick={() => {
                  dispatch(changeToggleTrue());
                }}
              />
            )}
          </div>

          <div
            className="flex w-full
      h-[50px]
      hover:bg-[#85bc3c] hover:text-[black] hover:cursor-pointer transition-all duration-300  pl-[20px] mt-[40px] items-center hover:rounded-md " 
          >
            <LuLayoutDashboard className="text-[23px]" />
            <p className="ml-[15px] md:text-[14px]">Home</p>
          </div>
          <div
            className="flex w-full
      h-[50px]
      [50px]
      hover:bg-[#85bc3c] hover:text-[black] hover:cursor-pointer transition-all duration-300  pl-[20px] mt-[5px] items-center hover:rounded-md"
          >
            <BsFillCreditCard2BackFill className="text-[23px]" />
            <p className="ml-[15px] md:text-[14px]">Credit</p>
          </div>

          {/* <div className="mt-[100px] md:mt-[140px] bg-slate-400" /> */}
          <div
            className="flex w-full h-[50px] mt-[30px] md:mt-[250px] pl-[10px] items-center bg-[#85bc3c]  hover:text-[black] hover:cursor-pointer transition-all duration-300"
          >
            <div
              className="h-[50px] flex items-center justify-center mb-[0px] w-[40px] rounded
              [50px]
              "
            >
              <CgLogOut className="text-[25px]" />
            </div>
            <span className="ml-[15px]">Log out</span>
          </div>
          <div />
 
        </div>
      )}
  </div>
  );
};

export default Sider;
