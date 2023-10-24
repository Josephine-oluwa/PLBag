import { BiSearch } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";

const AdminHeader = () => {
  return (
    <div className="w-[100%] h-[70px] flex items-center justify-center">
      <div className="w-[100%] h-[100%] flex items-center justify-between border-b-[1px] border-[silver] ">
        <div>Logo</div>
        {/* Holder */}
        <div className="flex gap-[10px]">
          {/* inputHolder */}
          <div
            className="flex items-center
         h-[40px] border-[1px] bg-[#eeeeee] px-[5px] rounded-[20px] gap-[5px]"
          >
            {/* icon */}
            <div className="text-[20px] text-[#0000009a]">
              <BiSearch />
            </div>
            {/* input */}
            <input
              placeholder="Search"
              className="w-[180px] small:w-[120px] h-[90%] rounded bg-transparent placeholder:text-[#0000009a] text-[14px] outline-none border-none"
            />
          </div>
          <div className="flex items-center text-[22px] md:hidden ">
            <AiOutlineMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
