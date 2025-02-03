
import{useState,useRef} from "react"
import {useNavigate} from "react-router"

export default function Verification({ClosePopup,length=6}){
 const navigate=useNavigate();
  const [otp,setOtp]=useState(new Array(length).fill(""));
    const inputRef=useRef([]);
    function Handlechange(e,index){
      const value=e.target.value;
      if(!/^\d?$/.test(value)) return ;  
      const newOtp=[...otp];
      newOtp[index]=value;
      setOtp(newOtp);
     
      if(value && index<length-1) {
           inputRef.current[index+1].focus();
       }

    }
    function HandleKeyDown(e,index){
    
       if(e.key==="Backspace" && !otp[index] && index > 0){
        inputRef.current[index-1].focus();
       }
    }
    
    return <div className="popup-container font-mono">
                <div className="popup">
                       <div className=" flex justify-center items-center space-x-4"> 
                       {
                         otp.map((digit,index)=>(
                            <input 
                            ref={(el)=>(inputRef.current[index]=el)}  
                            onChange={(e)=>Handlechange(e,index)}
                            onKeyDown={(e)=>HandleKeyDown(e,index)}
                            key={index}
                            value={digit}
                            className=" text-[42px] text-center  border border-indigo-600 w-10 h-16 rounded-xl"
                           
                                                      
                           
                           />
                            
                         ))


                         }

                       </div>
                     
                      <div className="flex justify-center items-center font-bold">
                          <button  className="cursor-pointer mt-14 text-green-500" onClick={()=>(ClosePopup,navigate("/stepone")) }>Click Here to verify</button>
                      </div>
                      
                </div>
           </div>
}