import React from "react"
import Home from "./Pages/home/Home"
import {
   BrowserRouter as Router,
   Routes,
   Route,
} from "react-router-dom";
import Profile from "./components/profile/Profile"
import Login from "./components/login/Login";
export default function App() {
   return (
      <Router>
         <Routes>
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/form" element={<Login />} />
            <Route path="/" element={<Home />} />
           
         </Routes>
      </Router>


   )
} 