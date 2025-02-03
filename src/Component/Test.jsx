
import {useNavigate} from "react-router"
import React, { useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function Test(){
    const navigate=useNavigate();
    const { width, height } = useWindowSize();
    const [isConfettiActive, setIsConfettiActive] = useState(false);
    return<>
            <div className="font-mono">
                 <div className="sm:bg-green-400 h-8 sm:mt-0.5 sm:font-bold sm:text-white sm:flex sm:items-center sm:justify-center"> <h2 className="bg-green-400 rounded-full flex items-center justify-center text-white">chatbot not working as intended ?</h2> <u className="sm:ml-2 sm:bg-yellow-300 sm:rounded-xl sm:text-black font-bold"> <h2 className=" items-center rounded-full flex justify-center bg-yellow-300">Kindly share the feedback</h2> </u></div>
                 <div className="space-y-6 items-center justify-center mt-32">  
                       <div className="flex justify-center items-center bg-salte">
                          <button onClick={()=>navigate("/clientweb")} className="cursor-pointer relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                    Test Chatbot
                                </span>
                          </button>
                             
                        </div>
                    <div className="flex justify-center items-center" >
                          <button onClick={()=>navigate("/integrateweb")} className="cursor-pointer relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                    Integrate your Website
                                </span>
                          </button>
                    </div>
                    <div className="flex justify-center items-center" >
                         <button onClick={()=>(setIsConfettiActive(true), setTimeout(()=>{navigate("/Integration")},4000))} className="cursor-pointer relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                    Test Integration
                                </span>
                          </button>
                          {isConfettiActive && <Confetti width={width} height={height} />}
                    </div>
                 </div>

            </div>
          </>
}