import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import{useNavigate} from "react-router"
export default function Stepone(){
    const navigate=useNavigate();
    return <>
                 <div className="flex justify-center items-center font-mono" >
                        <div className="">
                            <h2 className=" text-2xl flex justify-center items-center m-4 font-bold text-2xl text-black-900">First Step</h2  >
                            <div className="justify-center items-center space-y-6">
                                <div className="flex justify-center items-center "><input placeholder=" Enter company Name" className=" text-center h-10 w-80 rounded-xl border-2 border-indigo-600  font-bold decoration-black" type="text" /></div>
                                <div className="flex justify-center items-center "><input placeholder=" Enter company website URL" className=" text-center h-10 w-80 rounded-xl border-2 border-indigo-600  font-bold decoration-black " type="text" /></div>
                                <div className="flex justify-center items-center "><input placeholder=" Enter description of company" className=" text-center h-10 w-80 rounded-xl border-2 border-indigo-600  font-bold decoration-black  " type="text" /></div>
                            </div>
                            <div className="space-y-10">
                                <h2 className="mt-6 flex justify-center items-center text-indigo-900 font-bold">total 2 out 3 pages scrapped</h2>
                                <div className="flex justify-center items-center space-x-6">
                                
                                    <div className="bg-slate-300 h-48 w-32 rounded-2xl flex justify-center items-center border-4 border-green-500 inset-shadow-sm shadow-indigo-500/50 shadow-lg">Done</div>
                                    <div className="bg-slate-300 h-48 w-32 rounded-2xl flex justify-center items-center border-4 border-red-500 inset-shadow-sm shadow-indigo-500/50 shadow-lg">Loading...</div>
                                    <div className="bg-slate-300 h-48 w-32 rounded-2xl flex justify-center items-center border-4 border-red-500 inset-shadow-sm shadow-indigo-500/50 shadow-lg">Loading...</div>
                                     
                                </div>
                                <div className="flex justify-center items-center">
                                        <div style={{ width: 100, height: 100 }}>
                                                <CircularProgressbar
                                                    value={75}
                                                    text={`75%`}
                                                    styles={buildStyles({
                                                    pathColor: "#4CAF50",
                                                    textColor: "#333",
                                                    trailColor: "#e0e0e0",
                                                    strokeLinecap: "round",
                                                    })}
                                                />  
                                        </div>

                                </div>
                            </div>
                            <div className="flex m-10 justify-center font-bold items-center space-x-72">
                                <div><button className="text-black cursor-pointer bg-slate-300 w-18 h-10 rounded-xl">Wait</button></div>
                            <div><button onClick={()=>navigate("/test")} className="text-black cursor-pointer bg-slate-300 w-18 h-10 rounded-xl">Next</button></div>
                            </div>
                        </div>
                  </div>
                
           </>
}