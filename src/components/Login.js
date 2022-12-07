import React from 'react'
import axios from 'axios';
import '../styles/Home.css';
import {useFormik} from "formik"
import * as Yup from 'yup'
import { useNavigate } from "react-router-dom";
function Login() {

  const navigate=useNavigate();

  const formik=useFormik({
    initialValues:{
        email:"",
        password:""
        
    },
    validationSchema:Yup.object({
        email:Yup.string().max(30,'only 10 char').required('Required'),
        password:Yup.string().min(8,'Minimum 8 characters').required('Required'),
        
    }),
    onSubmit:(values)=>{
        // console.log(values);
        // navigate('/adminorg')
        const payload={userType: 3,
          password: "12345",
          userName: "testadmin"}
        axios.post('http://192.168.2.74/login', payload)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },

})
 console.log(formik.errors)

  return (
        <form onSubmit={formik.handleSubmit}>
      <div class="mb-3">
        <label for="exampleInputEmail1"  id='email_label' class="form-label">Email address</label>
        <input type="email" name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        
        onChange={formik.handleChange}
        value={formik.values.email}/>
        {formik.touched.email&&formik.errors.email? <p className='error_msg'>{formik.errors.email}</p>:null}
        
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1"  id='pass_label' class="form-label">Password</label>
        <input type="password" name='password' class="form-control" id="exampleInputPassword1"
        onChange={formik.handleChange}
        value={formik.values.password}/>

      {formik.touched.password&&formik.errors.password? <p className='error_msg'>{formik.errors.password}</p>:null}
      </div>
      <div class='mb-3'>
        <button id='sub_but' type="submit" class="btn btn-primary">Submit</button>
      </div>

      <div class='mb-3'>
        <button id='res_but' type="reset" class="btn btn-outline-danger">Reset</button>
      </div>
      
      
    </form>
  )
}

export default Login