import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './components/Login';
import AddEmployee from './pages/AddEmployee';
import EmployeeList from './pages/EmployeeList';
import Navbar from './components/Navbar';
import Home from './pages/Home';

import Adminorg from './pages/Adminorg';
import Emp_Page from './pages/Emp_Page';


function App() {
  return (
    <div className="App" >
      <Router>
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/addemployee' element={<AddEmployee/>}/>
          <Route path='/employeelist' element={<EmployeeList/>}/>
          <Route path='/emp_page' element={<Emp_Page/>}/>
          <Route path='/adminorg' element={<Adminorg/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
