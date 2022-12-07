import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { CDBCard, CDBCardBody, CDBDataTable, CDBContainer } from 'cdbreact';


function Payroll() {
  function display(ref){
    console.log(ref)
  }
 const [post, setPost] = useState([]);
    React.useEffect(() => {
        axios.get('http://192.168.2.74/employee/all').then((response) => {
            setPost(response.data);
        });
    }, []);

    post.forEach(object => {
      object.link = <a style={{color:'blue',textDecoration:'underline',cursor:'pointer'}} onClick={() => display(object.id)}>View more</a>
    });
    console.log(post)
    const data = {
    
      columns: [
        {
          label: 'ID',
          field: 'id',
          width: 150,
          sort: 'asc',
        },
        {
          label: 'First Name',
          field: 'firstName',
          width: 270,
        },
        {
          label: 'Last Name',
          field: 'lastName',
          width: 200,
        },
        {
          label: 'Email',
          field: 'email',
          
          width: 100,
        },
        {
          label: 'Designation',
          field: 'designation',
          
          width: 150,
        },
        {
          label: 'Link',
          field: 'link',
          
          width: 150,
        },
        // {
        //   label: 'Salary',
        //   field: 'salary',
        //   sort: 'disabled',
        //   width: 100,
        // },
      ],
      rows:post
      
      
    }
    console.log(data)
  return (
    <CDBContainer>
      <CDBCard>
        <CDBCardBody>
          <CDBDataTable
            striped
            bordered
            hover
            entriesOptions={[5, 10]}
            entries={5}
            pagesAmount={4}
            data={data}
            
            materialSearch={true}
          />
        </CDBCardBody>
      </CDBCard>
    </CDBContainer>

    
  )
}

export default Payroll