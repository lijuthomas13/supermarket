import { useState, useEffect } from 'react';
import axios from 'axios';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import * as React from 'react';
import PropTypes from 'prop-types';
import SearchBar from "material-ui-search-bar";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import DoneIcon from '@mui/icons-material/Done';
import Avatar from '@mui/material/Avatar';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import GppBadIcon from '@mui/icons-material/GppBad';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CloseIcon from '@mui/icons-material/Close';
import { color } from '@mui/system';
import { MDBCol } from "mdbreact";
import DateRangePicker from '@wojtekmaj/react-daterange-picker/dist/entry.nostyle';
import '../../src/styles/Employee/Table.css'
import Delete from '@mui/icons-material/Delete';
function Payroll() {

  const [currentId,setCurrentId]=useState(1)
  function display(ref) {
    console.log(ref)
  }
  
  const [post, setPost] = useState([]);
  React.useEffect(() => {
    axios.get('http://192.168.2.74/employee/all').then((response) => {
      setPost(response.data);
    });
  }, []);

  

  const [value, onChange] = useState([new Date(), new Date()]);
  const [rows, setrows] = useState(post)
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);


  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - post.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  // const requestSearch = (searchedVal) => {
  //   const filteredRows = rows.filter((row) => {
  //     return row.name.toLowerCase().includes(searchedVal.toLowerCase());
  //   });
  //   setrows(filteredRows);
  // };

  // function Search(value){
  //   const data=post;
  //   for(var i in data) {
      
  //     if(data[i].firstName ===value){
  //       console.log(post[i].isVerified)
  //       data[i].isVerified=!(data[i].isVerified)
  //       setPost(data)
  //       console.log(post[i].isVerified)
  //     }
  //   }
  // }


  function Verify(payload){
    
    
    axios.post(`http://192.168.2.74/Employee/Verify/${payload}` )
    .then(function (response) {
      console.log(response);
      axios.get('http://192.168.2.74/employee/all').then((response) => {
        setPost(response.data);
      });
    })
    .catch(function (error) {
      console.log(error);
    });

    
    // const data=post;
    // for(var i in data) {
      
    //   if(data[i].id ===payload){
    //     console.log(post[i].isVerified)
    //     data[i].isVerified=!(data[i].isVerified)
    //     setPost(data)
    //     // console.log(post[i].isVerified)
    //   }
    // }
    
}

function Row(props) {
  const { row } = props
  const [open, setOpen] =useState(false);
  const [searched, setSearched] = useState("");
  useEffect(()=>{
    if(currentId===row.id){
      setOpen(true)}
      
  },[row])
  
  function DeleteEmp(payload){
      
      
    axios.delete(`http://192.168.2.74/Employee/Delete/${payload}` )
    .then(function (response) {
      console.log(response);
      axios.get('http://192.168.2.74/employee/all').then((response) => {
        setPost(response.data);
      });
      
    })
    .catch(function (error) {
      console.log(error);
    });
    
    
  }
  
  return (
    
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
          
            <IconButton
              aria-label="expand row"
              size="small"
              // onClick={() => setOpen(!open)}
              // onClick={()=>buttonclick(row.id)}
              onClick={() => { setOpen(!open) }}
              // onClick={() => { setOpen(!open); setCurrentId(row.id);}}
            >
              

              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          
          <TableCell component="th" scope="row"><Avatar alt="Travis Howard" src={row.profilePic} /></TableCell>
          <TableCell component="th" scope="row">{row.id}</TableCell>
          <TableCell component="th" scope="row">{row.firstName}</TableCell>
          <TableCell component="th" scope="row">{row.lastName}</TableCell>
          <TableCell component="th" scope="row">{row.email}</TableCell>
          <TableCell component="th" scope="row">{row.designation}</TableCell>
          <TableCell align="center" component="th" scope="row">{row.isVerified ? <VerifiedUserIcon style={{ color: 'green', fontSize: '25px' }} /> : <GppBadIcon style={{ color: 'red', fontSize: '29px' }} />}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Details
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableBody>
                    <TableRow >
                      <TableCell component="th" scope="row">Mobile :</TableCell>
                      <TableCell align="leftt">{row.phoneNumber}</TableCell>
                    </TableRow>
                    <TableRow >
                      <TableCell component="th" scope="row">Address :</TableCell>
                      <TableCell align="leftt">{row.address}</TableCell>
                    </TableRow>
                    <TableRow >
                      <TableCell component="th" scope="row">Aadhar No. :</TableCell>
                      <TableCell align="leftt">{row.aadharNumber}</TableCell>
                    </TableRow>
                    <TableRow >
                      <TableCell component="th" scope="row">Desgination :</TableCell>
                      <TableCell align="leftt">{row.designation}</TableCell>
                    </TableRow>
                    <TableRow >
                      <TableCell component="th" scope="row"> Department :</TableCell>
                      <TableCell align="leftt">{row.department}</TableCell>
                    </TableRow>
                    <TableRow >
                      
                      <TableCell component="th" scope="row"> <Button id='123' onClick={()=>{Verify(row.id); setCurrentId(row.id);}} style={row.isVerified ? { width: '130px', backgroundColor: 'red' } : { width: '130px', backgroundColor: 'green' }} variant="contained">{row.isVerified ? 'Unverify' : 'Verify'} {row.isVerified ? <CloseIcon /> : <DoneIcon />} </Button></TableCell>
                      <TableCell component="th" scope="row"> <Button variant="contained">View Aadhar <ArrowForwardIosIcon style={{fontSize: '15px'}} /></Button></TableCell>
                      <TableCell component="th" scope="row"> <Button onClick={()=>{DeleteEmp(row.id)}}  variant="contained" style={{backgroundColor:'red'}}>Delete <DeleteIcon style={{fontSize: '23px'}} /></Button></TableCell>
                    </TableRow>
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                    </TableRow>
                  </TableFooter>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

  return (
    <div class='container' >
      <div class='card' id='table_comp' >
        <div class='container'>
          <div class='row'>
            <div class="col-sm">
              <MDBCol >
                <input  className="form-control" type="text" placeholder="Search" aria-label="Search" />
              </MDBCol>
            </div>
            <div class='col-sm'>
              <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">Engineer</option>
                <option value="2">HR</option>
                <option value="3">Managers</option>
              </select>
            </div>
            <div class='col-sm'>
              {/* <DateRangePicker id='calendar' onChange={onChange} value={value} /> */}
            </div>
          </div>
          <div class='row' id='table_row'>
          <TableContainer component={Paper}>

            <Table  aria-label="collapsible table">
              <TableHead id='table_head'>
                  
                <TableRow>
                  <TableCell />
                  <TableCell />
                  <TableCell>ID </TableCell>
                  <TableCell>First Name </TableCell>
                  <TableCell >LastName</TableCell>
                  <TableCell >E-mail</TableCell>
                  <TableCell >Designation</TableCell>
                  <TableCell align="center">Verification status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? post.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : post
                ).map((row) => (
                  <Row row={row} />
                ))}

              </TableBody>
              <TablePagination
                rowsPerPageOptions={[1, 5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={post.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}

              />
            </Table>
          </TableContainer>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Payroll