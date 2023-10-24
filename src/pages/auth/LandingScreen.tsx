import { BsPlayCircleFill } from "react-icons/bs";
import vite from "../../assets/react.svg";

const LandingScreen = () => {
  return (
    <div className="w-full h-[auto] flex justify-center">
      <div className="mt-7 w-[95%] h-full flex max-sm:flex-col">
        <div className="h-full w-[50%] md:w-[70%] max-sm:w-[100%] flex flex-col justify-center">
          <div className="w-full max-md:flex max-md:flex-col max-md:items-center ">
            <div className="h-[290px] w-[100%]   border mt-2  max-sm:flex hidden ">
              <img
                src={vite}
                alt="Environment"
                className="w-full h-full  object-cover"
              />
            </div>
            <div className="">
              <div className="text-[50px] font-bold mt-20 max-md:text-[30px] max-md:mt-10">
                Let's clean the Nature
              </div>
              <div className="w-[65%] max-md:w-[90%] mt-5 max-md:mt-3 my-1  font-bold text-gray-600">
                To ensure a clean and free environment for our children, women
                and families, <span>to make our cities healthy and fit</span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="mt-6  flex items-center">
                <button className="px-16 py-3 rounded-tl-[25px] max-md:px-11 rounded-br-[25px] bg-[#69BA00] text-white outline-none font-bold mr-5">
                  Read More
                </button>
                <div className="min-w-[45px] min-h-[45px] rounded-full bg-[#69BA00] flex items-center justify-center">
                  <BsPlayCircleFill className="text-xl text-white hover:scale-125 duration-300 transition-all hover:cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="mt-10 flex ">
              <div className="flex max-lg:flex-col ">
                <div className="mx-2 mt-2">
                  <div className="font-extrabold my-1">Our Environment</div>
                  <div className="text-[14px]">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Doloremque tenetur deserunt ad. Pariatur quos voluptatum
                    quia sed unde neque deleniti sequi itaque cumque sunt
                    tempora, impedit, similique maiores perferendis temporibus!
                  </div>
                </div>
                <div className="mx-2 mt-2 max-md:mt-5">
                  <div className="font-extrabold my-1">Our Story</div>
                  <div className="text-[14px]">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Doloremque tenetur deserunt ad. Pariatur quos voluptatum
                    quia sed unde neque deleniti sequi itaque cumque sunt
                    tempora, impedit, similique maiores perferendis temporibus!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[570px] w-[570px] ml-5 rounded-full border hidden md:flex ">
          <img
            src=""
            alt="Environment"
            className="w-full h-full rounded-full object-cover bg-green-400"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
