import Verification from "./Verification";
import {useState} from "react"
export default function Login(){
    const [isOpen,setIsOpen]=useState(false);
     const OpenPopup=()=>{
        setIsOpen(true);
     }
     const ClosePopup=()=>{
        setIsOpen(false);
     }
    return <>
              <div className="justify-center font-mono">     
                    <div className="space-y-24" style={{fontFamily: "Doto, serif"}}>
                    <div className="text-3xl decoration-black flex justify-center items-center">Wellcome  BeyondChat</div>
                        <div className="space-y-6"> 
                            <div className="flex justify-center items-center "><input placeholder=" Enter your Name" className=" text-center h-10 w-80 rounded-xl border-2 border-indigo-600  font-bold decoration-black" type="text" /></div>
                            <div className="flex justify-center items-center "><input placeholder=" Enter email address" className=" text-center h-10 w-80 rounded-xl border-2 border-indigo-600  font-bold decoration-black " type="text" /></div>
                            <div className="flex justify-center items-center "><input placeholder=" Enter password" className=" text-center h-10 w-80 rounded-xl border-2 border-indigo-600  font-bold decoration-black  " type="text" /></div>
                            <div className="flex justify-center items-center"><button  onClick={OpenPopup} className="text-white text-xl  shadow-lg shadow-indigo-500/50 cursor-pointer font-bold bg-blue-700 border-2 border-indigo-600 rounded-xl h-10 w-24 " type="button" style={{fontFamily:"Doto,serif"}}>Sign Up</button></div>
                            {isOpen && <Verification ClosePopup={ClosePopup}/>}
                        </div>
                        <div className="flex justify-center items-center font-bold">
                            <div className="border-indigo-500 border rounded-xl inset-shadow-sm shadow-indigo-500/50 shadow-lg cursor-pointer h-12 flex flex justify-center items-center font-bold px-4 ">
                                <svg  className="h-14 w-14 px-2"  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                </svg> 
                                Continue with Google
                            
                            </div>
                        </div>     
                    </div>
               </div>   

         </>
}