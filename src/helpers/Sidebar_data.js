import Dashbord from "../components/Dashbord";
import Employees from "../components/Employees";
import { MdOutlineDashboard } from 'react-icons/md';
import {HiUserGroup} from 'react-icons/hi';
import {BiLogOutCircle} from 'react-icons/bi';
import {HiOutlineCurrencyRupee} from 'react-icons/hi';
import Logout from "../components/Logout";
import Payroll from "../components/Payroll";

// export const Sidebar_data=[
//     [
//         {
//             id:1,
//             title:'Dashboard',
//             component:<Dashbord/>,
//             icon:<MdOutlineDashboard/>
//         }
//     ],
//     [
//         {
//             id:2,
//             title:'Employee',
//             component:<Employees/>,
//             icon:<HiUserGroup/>
//         }
//     ]
// ] 

export const Sidebar_data=[
    {
        id:'1',
        title: 'Dashboard',
        component: Dashbord,
        icon: <MdOutlineDashboard />
    },
    {
        id:'2',
        title: 'Employee',
        component: Employees,
        icon: <HiUserGroup />
    },
    {
        id:'3',
        title:'Payroll',
        component:Payroll,
        icon:<HiOutlineCurrencyRupee/>
    },
    {
        id:'4',
        title:'Logout',
        component:Logout,
        icon:<BiLogOutCircle/>
    }
]