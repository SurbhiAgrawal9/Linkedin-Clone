import React from 'react';
import SignupS from './Components/SignupS';
import LoginS from './Components/LoginS';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from './Components/Home';
import MyNetwork from './features/MyNetwork';
import Job from './features/Job'
import Messaging from './features/Messaging';
import Notification from './features/Notification';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<LoginS />} />
          <Route path='/signup' element={<SignupS />} />
          <Route path='/home' element={<Home />} />
          <Route path="/mynetwork" element={<MyNetwork />} />
          <Route path="/jobs" element={<Job />} />
          <Route path="/messaging" element={<Messaging />} />
          <Route path="/notification" element={<Notification />} />
        </Routes>
      </BrowserRouter>



    </>

  );
}

export default App;
