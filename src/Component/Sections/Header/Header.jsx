import './Header.css'
import logo from '../../../../public/images/logo.png' 
import { Link } from 'react-router-dom';
import { CiSun } from 'react-icons/ci';
import { FiMenu } from 'react-icons/fi';
import { RxCross1} from 'react-icons/rx';
import { BsFillMoonFill} from 'react-icons/bs';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import useBooked from '../../../CustomLoader/useBooked';

const Header = () => {
    const {user, signOutUser} = useContext(AuthContext);
    const [toggle, setToggle] = useState(false)
    const [theme, setTheme] = useState('light-theme');
    const [book] = useBooked();


    const handleLogOut = () =>{
        signOutUser()
        .then(() =>{
            console.log("successful LogOut")
        })
        .catch(error =>{
            console.log(error.message)
        })
    }

    const setThemeItem = () =>{
        if(theme === 'light-theme'){
            setTheme('dark-theme')
        }
        else{
            setTheme('light-theme')
        }
    }

    useEffect(() =>{
        document.body.className = theme;
    }, [theme])

    return (
        <header className="py-5 px-5">
          <div className='max-w-[1140px] mx-auto'>
              <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                   <Link to="/">
                      <img src={logo} alt="" className='lg:w-[80px] w-[70px] rounded-full' />
                   </Link>
                </div>
                    <nav className={`${toggle ? "menuBar active" : "menuBar "}`}>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/instructor">Instructors</Link></li>
                            <li><Link to='/classPage'>Classes</Link></li>
                            {
                                user ? 
                                <>
                                    <li><Link to='/dashboard'>Dashboard </Link></li>
                                    <li>
                                        <div className='relative'>
                                           <img src={user?.photoURL} alt="" className='w-[60px] h-[60px] block rounded-[50px]' />
                                           <h3 className='absolute top-[-14px] right-[-16px] text-white bg-warning w-[40px] h-[40px] flex justify-center items-center rounded-full'>{book?.length || 0}</h3>
                                        </div>
                                    </li>
                                    <li><button onClick={ handleLogOut }>LogOut</button></li>
                                </> :
                                <>
                                    <li><Link to="/login">Login </Link></li>
                                </>
                            }
                        </ul>
                    </nav>
                    <div className='flex items-center'>
                        <div className='lg:hidden block mr-2' >
                            {
                               toggle ? <RxCross1 className='icons' onClick={() => setToggle(!toggle)} /> :
                                <FiMenu className='icons' onClick={() => setToggle(!toggle)} />
                            }
                        </div>
                        <div className='block'>
                            {
                               theme === 'dark-theme' ? <BsFillMoonFill className='icons' onClick={() => setThemeItem('dark-theme')} /> : <CiSun className='icons' onClick={() => setThemeItem('light-theme')} />
                            }
                        </div>
                    </div>
              </div>
          </div>
        </header>
    );
};

export default Header;