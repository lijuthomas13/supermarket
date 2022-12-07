import React ,{useState,useEffect}from 'react'
import axios from 'axios';
import {useLocation} from 'react-router-dom';
function Emp_page() {
    const location = useLocation()
  const { id } = location.state

  const [post, setPost] = useState([]);
    React.useEffect(() => {
        axios.get(`http://192.168.2.74/employee/${id}`).then((response) => {
            setPost(response.data);
        });
    }, []);
    console.log(post)
  return (
    <div>{post.firstName}</div>
  )
}

export default Emp_page