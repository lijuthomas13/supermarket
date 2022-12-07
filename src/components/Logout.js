import React from 'react';
import { useNavigate } from "react-router-dom";


function Logout() {
    const navigate=useNavigate();
    function yes(){
        navigate('/')
    }
    function no(){
        navigate('/adminorg')
    }
  return (
    <div>
        <h1>do u want to logout?</h1>
        <button onClick={yes}>yes</button>
        
    </div>
  )
}

export default Logout