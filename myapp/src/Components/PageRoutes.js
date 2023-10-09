import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Loginadmin from './Loginadmin'; 
import Loginalumini from './Loginalumini';
import Loginstudent from './Loginstudent';
import Home from './Home';
function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Signup" element={<Signup />} /> 
      <Route path="/Loginstudent" element={<Loginstudent />} /> 
      <Route path="/Loginadmin" element={<Loginadmin />} /> 
      <Route path="/Loginalumini" element={<Loginalumini />} /> 
    </Routes>
  );
}
export default PageRoutes;
