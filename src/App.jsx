import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from "./Component/Login"
import './App.css'
import Verification from './Component/Verification'
import {BrowserRouter,Route,Routes,useNavigate } from "react-router"
import Stepone from './Component/Stepone'
import Test from './Component/Test'
import Clientweb from './Component/Clientweb'
import Integrateweb from './Component/Integrateweb'
import Integration from './Component/Integration'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-screen">
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>} ></Route>  
            <Route path="/stepone" element={<Stepone/>}></Route>  
            <Route path="/Test" element={<Test/>}></Route>
            <Route path="/clientweb" element={<Clientweb/>}></Route>
            <Route path="/integratgeweb" element={<Integrateweb/>}></Route>
            <Route path="/Integration" element={<Integration/>}></Route>
        </Routes>
        </BrowserRouter>
         
          
      </div>

    </>
  )
}

export default App
