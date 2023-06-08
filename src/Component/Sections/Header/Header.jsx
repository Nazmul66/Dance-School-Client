import './Header.css'
import logo from '../../../../public/images/logo.png' 
import { Link } from 'react-router-dom';
import { CiSun } from 'react-icons/ci';
import { FiMenu } from 'react-icons/fi';
import { RxCross1} from 'react-icons/rx';
import { BsFillMoonFill} from 'react-icons/bs';
import { useEffect, useState } from 'react';


const Header = () => {
    const [toggle, setToggle] = useState(false)
    const [theme, setTheme] = useState('light-theme')

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
        <header className="py-2 px-5">
          <div className='max-w-[1140px] mx-auto'>
              <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <img src={logo} alt="" className='lg:w-[120px] w-[70px]' />
                </div>
                    <nav className={`${toggle ? "menuBar active" : "menuBar "}`}>
                        <ul>
                            <li><Link>Home</Link></li>
                            <li><Link>Instructors</Link></li>
                            <li><Link>Classes</Link></li>
                            <li><Link>Dashboard </Link></li>
                            <li><Link>Login </Link></li>
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