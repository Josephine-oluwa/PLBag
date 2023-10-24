
import { useState } from "react";
import { usePaystackPayment } from "react-paystack";

const UpdateScreen = () => {

  const [amount, setAmount] = useState<number | any>(0)
  const [email, setEmail] = useState<string | any>("")
  const config :any= {
    reference: new Date().getTime().toString(),
    email: email,
    amount: amount* 100,
    publicKey: "pk_test_5a0581a5d3a5e4eff176456546f8e4b3f32d2d01",
  };

  const onSuccess: any = (reference: any) => {
    console.log(reference);
  };

  const onClose = () => {
    console.log("closed");
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <div className="w-full h-[90vh] flex justify-center  bg-green-400 items-center">
      <div className="w-[310px] h-[250px] rounded-xl bg-white flex flex-col justify-center items-center">
        <div className="flex flex-col">
          <div className="font-bold text-[14px]">Email: </div>
          <div className="w-[280px] h-[40px] border flex items-center rounded-md overflow-hidden">
            <input type="text" className="w-full h-full outline-none pl-3 placeholder:text-[13px]" 
            value={email}
            placeholder="enter email" onChange={(e:any)=>{
              setEmail(e.target.value)
            }}/>
          </div>
        </div>
        <div className="flex flex-col mt-3">
          <div className="font-bold text-[14px]">Amount: </div>
          <div className="w-[280px] h-[40px] border flex items-center rounded-md overflow-hidden">
            <input type="text" className="w-full h-full outline-none pl-3 placeholder:text-[13px]" placeholder="enter amount"
            value={amount}
            onChange={(e:any)=>{
              setAmount(e.target.value)
            }}
            />
          </div>
        </div>
        <div className="mt-[15px]">
          <button
            className="py-2 px-5 rounded-md bg-green-400 text-white"
            onClick={() => {
              initializePayment(onSuccess, onClose);
              // console.log("i am")
            }}
          >
            Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateScreen;
