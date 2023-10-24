import email from "../../assets/email1.jpg"

const MailScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen  w-full">
      <div className="flex flex-col items-center">
        <div className="w-[150px] h-[150px] rounded-md mb-2">
          <img src={email} alt="Email sent" className="w-full h-full object-cover "/>
        </div>
        <div className="font-bold text-2xl text-center max-md:text-[14px] leading-7 text-green-600">
          A Mail have been sent to your mail, check your email for a link on your
          email, to get verified
        </div>
        
      </div>
    </div>
  );
};

export default MailScreen;
