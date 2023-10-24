import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signinUser } from "../../apis/authApi";
import { useNavigate } from "react-router-dom";
import useUser from "../../global/globalFile";

const Reg = () => {
  const [state, setState] = useUser();
  const navigate = useNavigate();
  const [checked, setChecked] = useState<boolean>(false);

  const Schema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const onHandleSubmit = handleSubmit(async (data: any) => {
    signinUser(data).then((res: any) => {
      console.log(data)
      setState(res);
      console.log(res);
      navigate("/home");
    });
    reset();
  });

  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <div className="mt-[25px] relative rounded-md">
          <div className="absolute bg-white px-1 text-[13px] max-sm:text-[10px] max-sm:mt-[-8px] font-semibold ml-[15px] mt-[-10px] text-gray-500">
            Enter Email:
          </div>
          <div className="min-w-[300px] h-[40px] border flex justify-center items-center rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="example@gmail.com"
              className="w-full h-full outline-none  pl-5 placeholder:text-[13px] text-[13px]"
              {...register("email")}
            />
          </div>
          {errors.email?.message && (
            <div className="text-[11px] text-red-500 flex justify-end items-center mt-[-4px] font-semibold">
              Please provide a valid email address
            </div>
          )}
        </div>
        <div className="mt-[25px] relative rounded-md">
          <div className="absolute bg-white px-1 text-[13px] max-sm:text-[10px] max-sm:mt-[-8px] font-semibold ml-[15px] mt-[-10px] text-gray-500">
            Enter Password:
          </div>
          <div className="min-w-[300px] h-[40px] border flex justify-center items-center rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="JohnDoe123"
              className="w-full h-full outline-none  pl-5 placeholder:text-[13px] text-[13px]"
              {...register("password")}
            />
          </div>
          {errors.password?.message && (
            <div className="text-[11px] text-red-500 flex justify-end items-center mt-[-4px] font-semibold">
              Please provide a password
            </div>
          )}
        </div>
        <div className="flex text-[13px] font-semibold items-center">
          <input
            type="checkbox"
            onClick={(e: any) => {
              setChecked(e.target.checked);
            }}
          />
          <div className=" ml-4 mt-[6px] ">Remember me</div>
        </div>{" "}
        <div className="w-full flex items-center justify-center mt-3 mb-3">
          <button
            className={`px-5 py-2 text-white text-[14px] transition-all duration-500 ${
              checked ? "bg-green-400" : "bg-gray-400"
            } rounded-sm font-semibold rounded-tl-[20px] rounded-br-[20px] `}
            type="submit"
            disabled={!checked}
          >
            Signin
          </button>
        </div>
        {/* <div>Have an account? <Link to="/signin">Signin</Link></div> */}
      </form>
    </div>
  );
};

export default Reg;
