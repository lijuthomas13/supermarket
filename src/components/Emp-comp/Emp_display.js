import React from 'react';
import axios from 'axios';
import '../../styles/Employee/List.css';
import {FaRegUserCircle} from 'react-icons/fa';
function Emp_display(props) {
    function Verify(){
        const payload=props.emp.id;
        axios.post(`http://192.168.2.74/Employee/Verify/${payload}` )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  return (
      <div id='parent_emp'>
          <div class='card' id='left-emp'>
              <div id='left-emp-top'>
                  <FaRegUserCircle style={{ height: '80px', width: '80px', marginRight: '300px' }} />
              </div>
              <div id='left-emp-bottom'>
                  <div id='left-emp-bottom-left'>
                      <h5>First Name :</h5>
                      <h5>Last Name :</h5>
                      <h5>Email ID :</h5>
                      <h5>Mobile :</h5>
                      <h5>Address :</h5>
                      <h5>Aadhar Number :</h5>
                  </div>
                  <div id='left-emp-bottom-right'>
                      <h5>{props.emp.firstName}</h5>
                      <h5>{props.emp.lastName}</h5>
                      <h5>{props.emp.email}</h5>
                      <h5>{props.emp.phoneNumber}</h5>
                      <h5>{props.emp.address}</h5>
                      <h5>{props.emp.aadharNumber}</h5>
                  </div>
              </div>
              <div id='button_div'>
                <div><button id='but_adhar' type="button" class="btn btn-primary" >View Adhar</button></div>
                <div><button id='but_verify' onClick={Verify} type="button" class={props.emp.isVerified?"btn btn-success":"btn btn-danger"}>{props.emp.isVerified?"Verified":"Verify"}</button></div>
              
              </div>
          </div>
          <div class='container' id='right-emp'>
              <div class='card' id='right-emp-top'></div>
              <div class='card' id='right-emp-bottom'></div>
          </div>
      </div>
  )
}

export default Emp_display