import { BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className="w-[100%]  bg-[green] justify-center items-center flex">
        <div
          className="w-[95%] flex justify-between  items-center
 flex-wrap gap-[8px] max-sm:flex-col max-sm:w-85 max-md:w-85"
        >
          <div
            className="w-[20%] h-[45vh] flex   flex-col  gap-[10px] bg-[]  max-sm:w-72
   max-md:w-72 max-lg:w-72"
          >
            <div
              className="w-[100%] h-[65px] flex gap-[10px] bg-[]
       items-center"
            >
              <BsYoutube
                className=" text-[50px] flex justify-center
     items-center object-cover text-[red] rounded-[7px]"
              />
              <FaFacebook
                className="text-[40px] flex justify-center
     items-center object-cover text-[#0a74ff] rounded-[7px]"
              />
              <FaFacebookMessenger
                className="text-[40px] flex justify-center
     items-center object-cover text-[#0a74ff] rounded-[7px]"
              />
            </div>
            <b className="text-[#ffff] hover:text-[#000] cursor-pointer transition-all delay-63">
              Careers
            </b>
            <span className="text-[#ffff] hover:text-[#000] cursor-pointer transition-all delay-63">
              Investors
            </span>
            <span className="text-[#ffff] hover:text-[#000] cursor-pointer transition-all delay-63">
              Sitemap
            </span>
            <span className="text-[#ffff] hover:text-[#000] cursor-pointer transition-all delay-63">
              Terms
            </span>
          </div>

<div className="w-[20%] h-[40vh] flex   flex-col  gap-[10px]   max-sm:w-72
   max-md:w-72 max-lg:w-72">
   
      <div className="w-[100%] h-[55px] flex gap-[10px] bg-[]
       items-center">
   
     <BsYoutube  className=" text-[50px] flex justify-center
     items-center object-cover text-[red] rounded-[7px]"/>
<FaFacebook className="text-[40px] flex justify-center
     items-center object-cover text-[#0a74ff] rounded-[7px]"/>
     <FaFacebookMessenger  className="text-[40px] flex justify-center
     items-center object-cover text-[#0a74ff] rounded-[7px]"/>
      </div>
      <b className="text-[#ffff] hover:text-[#000] cursor-pointer transition-all delay-63">Careers</b>
      <span className="text-[#ffff] hover:text-[#000] cursor-pointer transition-all delay-63">Investors</span>
      <span className="text-[#ffff] hover:text-[#000] cursor-pointer transition-all delay-63">Sitemap</span>
      <span className="text-[#ffff] hover:text-[#000] cursor-pointer transition-all delay-63">Terms</span>
    </div>
    
    
    <div className="w-[20%] h-[35vh] flex flex-col bg-[] gap-[7px]
     max-sm:w-72 max-md:w-screen max-lg:w-screen">
        <b className="text-[#fff] hover:text-[#000] cursor-pointer transition-all delay-63">Categories</b>
        <span className=" text-[#fff] hover:text-[#000] cursor-pointer transition-all delay-63">Video for business</span>
        <span className=" text-[#fff] hover:text-[#000] cursor-pointer transition-all delay-63">Video for Works</span>
        <span className=" text-[#fff] hover:text-[#000] cursor-pointer transition-all delay-63">Video for Blog</span>
        <span className=" text-[#fff] hover:text-[#000] cursor-pointer transition-all delay-63">Video for Terms</span>
        <span className=" text-[#fff] hover:text-[#000] cursor-pointer transition-all delay-63">Video on Careers</span>
        <span className=" text-[#fff] hover:text-[#000] cursor-pointer transition-all delay-63">Video on Investors</span>
        <span className="text-[#fff] hover:text-[#000] cursor-pointer transition-all delay-63">
            Video for a product
        </span>
     </div>
    <div className="w-[20%] h-[35vh] flex  flex-col gap-[10px]
     max-sm:w-72 max-md:w-screen max-lg:w-screen">
<b className="text-[#fff] hover:text-[#000] cursor-pointer">About</b>
<span className="text-[#ffff] hover:text-[#000] cursor-pointer
 transition-all delay-63">works</span>
<span className="text-[#ffff] hover:text-[#000] cursor-pointer
 transition-all delay-63">Pricing</span>
<span className="text-[#ffff] hover:text-[#000] cursor-pointer
 transition-all delay-63">About</span>
<span className="text-[#ffff] hover:text-[#000] cursor-pointer
 transition-all delay-63">Process</span>
<span className="text-[#ffff] hover:text-[#000] cursor-pointer transition-all delay-63">
  Blog</span>
</div>
    <div className="w-[15%] h-[35vh] flex  flex-col gap-[8px] 
     max-sm:w-72 max-md:w-screen max-lg:w-screen">
<div className="w-[67%] flex">
<button className="px-[40px]
 rounded-[5px] py-[10px] border-[1px] border-[#fff] flex justify-center items-center text-[#ffff]">
  English
</button>
   </div>
<b className="text-[#ffff] hover:text-[#000] cursor-pointer transition-all delay-63">Cookie Settings</b>
<span className="text-[#ffff] hover:text-[#000] cursor-pointer transition-all delay-63">Privacy policy</span>
<span className="text-[#ffff] hover:text-[#000] cursor-pointer transition-all delay-63">Get app</span>
</div>
</div>
    </div>
    </div>
  )
}
export default Footer
