import React, { useState } from 'react'
import Login from '../components/Login';
import Signup from '../components/Signup';
import banner from '../assets/supermarket.jpg'
import '../styles/Home.css';
function Home() {
    const [dec,setdec]=useState(true)
    const alert1=dec?'alert alert-primary':'alert alert-secondary'
    const alert2=dec?'alert alert-secondary':'alert alert-primary'
    console.log(dec)
    
  return (
      <div id='parent'>
          <div id='child1'>
          <img id='img_tag'src={banner}/>
          </div>
          <div id='child2'>
              <div id='Registration' className='container'>
                  <div class='row mt-3'>
                      <div class='col-sm'>
                          <div onClick={() => {
                              setdec(true)
                          }} class={alert1}>Login</div>
                      </div>
                      <div class='col-sm'>
                          <div onClick={() => {
                              setdec(false)
                          }} class={alert2}>Register</div>
                      </div>
                  </div>
                  <div class='row mt-3'>
                      {dec ? <Login /> : <Signup />}
                  </div>
              </div>
          </div>
      </div>
    
  )
}

export default Home