import {useState} from "react"
export default function Clientweb(){
    const [open ,setOpen]=useState(false);
const closeChat=()=>{
    setOpen(false);
}
const openChat=()=>{
    setOpen(true);
}
    return <>
              <div className="sm:bg-green-400 h-8 sm:mt-0.5 sm:font-bold sm:text-white sm:flex sm:items-center sm:justify-center"> <h2 className="bg-green-400 rounded-full flex items-center justify-center text-white">chatbot not working as intended ?</h2> <u className="sm:ml-2 sm:bg-yellow-300 sm:rounded-xl sm:text-black font-bold"> <h2 className=" items-center rounded-full flex justify-center bg-yellow-300">Kindly share the feedback</h2> </u></div>
             <div className="font-mono">
                 <div className="mt-8 flex flex-col items-center justify-center h-full bg-white p-4">
                                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                                    This is client Page.
                                </h1>
                                <p className="mt-4 text-2xl bg-gradient-to-r from-green-400 to-blue-600 text-transparent bg-clip-text">
                                    Please click on the circular bot to test your bot.
                                </p>
                        </div>
                        <div className=" absolute bottom-2 right-2 bg-green-500 text-black-900 rounded-full h-16 w-16 flex items-center justify-center mb-0 mr-0 ">
                            <div onClick={()=>openChat()}  className="flex items-center justify-center cursor-pointer h-16 w-16 bg-indigo-500 rounded-full animate-pulse  ">
                                    <svg className="w-12 h-12 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                                        <g id="Bot_Assistant" data-name="Bot Assistant">
                                            <path fill="#42a5f5" d="M24 41a1 1 0 0 0 0 2 1 1 0 0 0 0-2z" />
                                            <path
                                            fill="#42a5f5"
                                            d="M33.83 36H14.17a2 2 0 0 0-2 2.17L13 48h22l.82-9.83A2 2 0 0 0 33.83 36zM24 45a3 3 0 1 1 3-3 3 3 0 0 1-3 3zM11 15v10H9a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2zM41 17v6a2 2 0 0 1-2 2h-2V15h2a2 2 0 0 1 2 2zM32 14H16a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2zm-13 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm7 4h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zm3-4a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"
                                            />
                                            <path
                                            fill="#424242"
                                            d="M42.19 35.47a5 5 0 0 0-3.47-4.41l-4.16-1.33A5 5 0 0 0 38 25V15a5 5 0 0 0-4-4.9V5.22a3 3 0 1 0-4.4-.44L28.23 10h-8.46L18.4 4.78a3 3 0 1 0-4.4.44v4.88a5 5 0 0 0-4 4.9v10a5 5 0 0 0 3.44 4.73l-4.17 1.33a5 5 0 0 0-3.46 4.41L5 46.93A1 1 0 0 0 6 48h5l-.16-2H7.07l.74-10.39A3 3 0 0 1 9.88 33l8.41-2.69.74 3A1 1 0 0 0 20 34h8a1 1 0 0 0 1-.76l.74-3L38.11 33a3 3 0 0 1 2.08 2.64L40.93 46h-3.76L37 48c5.46 0 5.31.11 5.72-.32s.35.21-.53-12.21z"
                                            />
                                        </g>
                                        </svg>
                            </div>
                            {open && <ChatBot closeChat={closeChat}/>}
                        </div>
                    </div>

            </>
    }
function ChatBot({closeChat}){
        return <div className="bg-transpehrent shadow-lg shadow-indigo-500/50 fixed bottom-15 right-10 w-80 z-50" >
                 <div className="  items-center justify-center ">
                        <div className="flex justify-center items-center">
                            <div className=" flex justify-center items-center w-76 rounded-xl bg-indigo-300 space-x-10">
                                <div className=" items-center justify-center ">
                                        <div className=" text-[14px] flex items-center justify-center">name : Buddy</div>
                                        <div className="font-semibold text-[14px] flex justify-center items-center space-x-4"><h3 className=" h-2 w-2 bg-green-500 rounded-full"></h3 > <h3>Online</h3> </div>
                                </div>
                                <div onClick={closeChat} className="flex items-end justify-end pl-32">
                                    {/*  svg element for cross */}
                                        <svg className=" cursor-pointer h-8 w-8"  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
                                            <ellipse cx="32" cy="61" opacity=".3" rx="20" ry="3"></ellipse><path fill="#fd3c4f" d="M42.963,30l8.136-8.135c1.562-1.562,1.562-4.095,0-5.657l-5.306-5.306	c-1.562-1.562-4.095-1.562-5.657,0L32,19.038l-8.136-8.136c-1.562-1.562-4.095-1.562-5.657,0l-5.306,5.306	c-1.562,1.562-1.562,4.095,0,5.657L21.037,30l-8.135,8.135c-1.562,1.562-1.562,4.095,0,5.657l5.305,5.306	c1.562,1.562,4.095,1.562,5.657,0L32,40.963l8.136,8.135c1.562,1.562,4.095,1.562,5.657,0l5.305-5.306	c1.562-1.562,1.562-4.095,0-5.657L42.963,30z"></path><path d="M40.135,49.098c1.562,1.562,4.095,1.562,5.657,0l5.306-5.306	c1.562-1.562,1.562-4.095,0-5.657l-8.136-8.135l3.535-3.535l0,0C45.521,25.488,44.242,25,42.962,25c-1.224,0-2.448,0.447-3.406,1.34	c-2.084,1.943-1.973,5.352,0.042,7.366l7.257,7.256l-3.892,3.892l-7.275-7.274c-1.847-1.847-4.846-2.146-6.86-0.484	c-2.31,1.907-2.432,5.334-0.365,7.402l3.536-3.536L40.135,49.098z" opacity=".15"></path><path fill="#fff" d="M23.864,10.902c-1.562-1.562-4.095-1.562-5.657,0	l-5.306,5.306c-1.562,1.562-1.562,4.095,0,5.657L21.037,30l-3.535,3.535l0,0C18.478,34.512,19.757,35,21.037,35	c1.224,0,2.448-0.447,3.406-1.34c2.084-1.943,1.973-5.352-0.042-7.366l-7.257-7.256l3.892-3.892l7.275,7.274	c1.847,1.846,4.846,2.146,6.86,0.484c2.31-1.907,2.432-5.334,0.365-7.402L32,19.038L23.864,10.902z" opacity=".3"></path><polyline fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" points="18.5,15.5 21,13 23.5,15.5"></polyline>
                                        </svg>
                                </div>     
                            </div>
                        </div>
                       <div className="flex items-center justify-center">
                            <div className="h-96 bg-slate-100 w-76 rounded-xl flex justify-center items-center">

                            </div>
                       </div>
                       <div className="flex justify-center border-gray-300 items-center divide-y "> 
                                <div className="flex h-10 w-76 outline-2 outline-offset-2 outline-solid bg-indigo-500 justify-center items-center rounded-xl">
                                <input type="text" className="h-full focus:outline-none w-76" />
                                {/* this is send button*/}
                                <button className=" cursor-pointer border-none  rounded-full h-10 w-10 mr-2 justifyitems-end"> 
                                        <svg className=" w-12 h-10 justify-center items-center" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
                                        <path d="M2.926,13.098l3.085,1.209c0.326,0.128,0.578,0.395,0.688,0.727l1.287,3.918	c0.274,0.835,1.301,1.134,1.98,0.576l2.228-1.829c0.282-0.232,0.692-0.22,0.961,0.028l2.851,2.63	c1.035,0.955,2.716,0.408,2.991-0.973l2.979-14.961c0.186-0.935-0.747-1.698-1.627-1.33l-17.454,7.3	C1.687,10.9,1.706,12.62,2.926,13.098z" opacity=".35"></path><path d="M11.458,16.271l6.99-9.163c0.328-0.43-0.211-0.982-0.648-0.665L6.467,14.645c0.098,0.115,0.184,0.242,0.232,0.389	l1.287,3.918c0.126,0.383,0.413,0.647,0.75,0.773C9.639,19.981,11.458,16.271,11.458,16.271z"></path>
                                        </svg>
                                </button>
                             </div>
                             
                       </div>
                       
                 </div>
               </div>
}