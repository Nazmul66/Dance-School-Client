import './Footer.css'
import logo from '../../../../public/images/logo.png'
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa';
import { BsEnvelopeFill } from 'react-icons/bs';
import { AiTwotoneEnvironment } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer>
           <div className='max-w-[1140px] mx-auto'>
              <div className='flex lg:flex-row flex-col justify-between gap-5'>
                  <div className='lg:w-[40%] w-full footerBar'>
                    <Link href="/">
                      <img src={logo} alt="" className="lg:w-[80px] w-[70px] lg:mx-0 mx-auto rounded-full" />    
                    </Link>
                    <p>On this summer camp school student are must be do something external workout that they can learn some new good things.</p>
                  </div>

                  <div className='lg:w-[30%] w-full footerBar mb-8'>
                     <h2>CONTACT INFO</h2>
                     <div className='lg:mb-7 mb-10'>
                        <FaPhoneAlt className='footerIcon' />
                        <h3>878 989 0000</h3>
                     </div>
                     <div className='lg:mb-7 mb-10'>
                        <BsEnvelopeFill className='footerIcon' />
                        <h3>info@gmail.com</h3>
                     </div>
                     <div className=''>
                        <AiTwotoneEnvironment className='footerIcon' />
                        <h3>4500 Mercantile plaza, Suite 300, Fort Worth, TX, 76137, USA</h3>
                     </div>
                  </div>
                  <div className='lg:w-[30%] w-full footerBar'>
                     <h2>QUICK LINKS</h2>
                     <ul>
                        <li><Link>Home</Link></li>
                        <li><Link>Instructors</Link></li>
                        <li><Link>Classes</Link></li>
                        <li><Link>Login</Link></li>
                     </ul>
                  </div>
              </div>
              <div className='copyRight'>
                 <p>@ Copyright 2023 by Dance School</p>
              </div>
           </div>
        </footer>
    );
};

export default Footer;