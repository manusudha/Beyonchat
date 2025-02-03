import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
export default function Integrateweb(){

    const code = `
    <script>
  (function () {
    var script = document.createElement("script");
    script.src = "https://yourdomain.com/chatbot.js"; 
    script.async = true;
    document.head.appendChild(script);
  })();
</script>
    `;
  
    return <>
             <div className="font-mono m-8"> 
                   <div className="flex justify-center items-center" >
                          <button  className="font-semibold cursor-pointer relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                   Get Intsructon on mail
                                </span>
                          </button>
                    </div>
                       {/* using ------------or---------- */}
                       <div class="flex items-center">
                            <div class="flex-1 border-t border-gray-400"></div>
                            <span class="mx-2 text-gray-600">or</span>
                            <div class="flex-1 border-t border-gray-400"></div>
                       </div>



                    <h2 className="flex justify-center items-center m-8 font-semibold">The below code is just an example</h2>
                    <div className="flex justify-center items-center ">
                        <SyntaxHighlighter className="w-[900px] flex justify-center items-center" language="javascript" style={dracula}>
                            {code}
                        </SyntaxHighlighter>
                    </div>
             </div>
          </>
}