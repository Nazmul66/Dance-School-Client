import { useState } from 'react'
import './Dashboard.css'
import logo from '../../public/images/logo.png'
import { Link, Outlet } from 'react-router-dom';
import { GiWallet } from 'react-icons/gi';
import { FaUserTie, FaUserCheck } from 'react-icons/fa';
import { BsFillHouseDoorFill, BsFillCalendarWeekFill } from 'react-icons/bs';
import { MdSchool } from 'react-icons/md';
import { AiOutlineCodeSandbox, AiOutlineMenu } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';

const Dashboard = () => {
    // const location = useLocation(); 
    // console.log(location)
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState("selectClass");

    const isAdmin = true;

    return (
        <>
        <div className='p-5 lg:hidden block'>
            <div className='flex justify-between items-center'>
                <div className="">
                    <img src={logo} alt="" className='w-[70px] rounded-full' />
                </div>
                <div className=""> 
                {
                    toggle ? <RxCross1 onClick={() => setToggle(!toggle) } className='text-white z-30 text-[24px]' /> : <AiOutlineMenu onClick={() => setToggle(!toggle) } className='text-white z-30 text-[24px]' />
                }
                    
                </div>
            </div>
        </div>

        <div className='dashboard'>
            <div className="flex justify-center ">
                <div className={`lg:w-[20%] w-[70%] h-[100vh] bg-[#F5F7FC] px-6 py-11 ${toggle ? "sidebar active" : "sidebar"}`}>
                   <div className='lg:mb-9 mb-8'>
                       <img src={logo} alt="" className='w-[90px] rounded-full mx-auto' />
                   </div>
                   <div className='dashboard_menu'>
                       <ul>
                        {
                            isAdmin ? <>
                                <li onClick={() => setActive("selectClass")}><Link to="/dashboard/select_class" className={`flex items-center ${active === "selectClass" ? "active" : ""}`}><FaUserCheck /> <h3 className='ml-3'>My Selected Classes</h3></Link></li>

                                <li onClick={() => setActive("items")}><Link to="" className={`flex items-center ${active === "items" ? "active" : ""}`}><AiOutlineCodeSandbox /> <h3 className='ml-3'>My Enrolled Classes</h3></Link></li>

                                <li onClick={() => setActive("manage")}><Link to="" className={`flex items-center ${active === "manage" ? "active" : ""}`}><GiWallet /> <h3 className='ml-3'>Payment History</h3></Link></li>
                            </> : 
                            <>
                                <li onClick={() => setActive("userHome")}><Link to="" className={`flex items-center ${active === "userHome" ? "active" : ""}`}><BsFillHouseDoorFill /> <h3 className='ml-3'>Manage Classes</h3></Link></li>

                                <li onClick={() => setActive("reservation")}><Link className={`flex items-center ${active === "reservation" ? "active" : ""}`}><BsFillCalendarWeekFill /> <h3 className='ml-3'>Manage Users</h3></Link></li>
                            </>
                        }
                       </ul>

                         <div className="w-full bg-[#141414] h-[1px] my-5"></div>

                         <ul>
                           <li><Link to="/" className='flex items-center'><BsFillHouseDoorFill /> <h3 className='ml-3'>Home</h3></Link></li>

                           <li><Link className='flex items-center'><FaUserTie /> <h3 className='ml-3'>Instructors</h3></Link></li>

                           <li><Link to="/classPage" className='flex items-center'><MdSchool /> <h3 className='ml-3'>Classes</h3></Link></li>
                    
                       </ul>
                   </div>
                </div>

                <div className='lg:w-[80%] w-full ml-auto'>
                   <div className='p-16'>
                   <Outlet />
                   </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Dashboard;