import { useAllUsers } from "../../hooks/useAllUsers";
import AdminHeader from "./AdminHeader";

const AdminScreen = () => {
  const { data } = useAllUsers();

  console.log(data);

  return (
    <div className="className=w-[95%] md:w-[90%] h-[auto] max-sm:w-[95%]">
      <AdminHeader />
      {/* Hold */}
      <br />
      <div>
        <div className="w-[90%] flex flex-wrap">
        {data?.map((props: any) => (
            <div className="py-4 px-4 w-[300px] border-[1px] border-[#85bc3c] flex justify-between rounded m-[10px] max-md:w-[230px]">
              {/* avatar */}

              <div className="w-[45px] h-[45px] rounded border-[1px] border-[#85bc3c] flex items-center justify-center">
                {props.studentImage}
              </div>
              <div className="w-[75%] break-words">
                <nav>{props?.studentName}</nav>
                <nav className="text-[12px]">{props?.studentName} Bags</nav>
                <nav className="text-[12px]">{props?.email}</nav>
              </div>
            </div>
        ))}
        </div>
        {/* Hold */}
      </div>
    </div>
  );
};

export default AdminScreen;
