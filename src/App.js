import { useState, useRef } from 'react';
import { HashLink } from 'react-router-hash-link';
import './App.css';
import logo from './Assets/logo.svg';
import line from './Assets/line.svg';
import emptyStar from './Assets/empty-star.svg'
import star from './Assets/filled-star.svg'

import {HiOutlineUserCircle} from 'react-icons/hi';
import {HiOutlineEnvelope} from 'react-icons/hi2';
import {ImCheckmark} from 'react-icons/im';
import {FaTimes, FaBars} from 'react-icons/fa';

import { consultData, countries } from './data';

function App() {
  const formRef = useRef();
  const navRef = useRef();
  const [modal, setModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setModal(true)
    for (let i = 0; i < 2; i++) {
      formRef.current[i].value = '';
    }
  }
  const closeModal = () => {
    setModal(false);
  }
  const handleNav = () => {
    navRef.current.classList.toggle('translate-x-full')
  }
  return (
    <div className="bg-primary text-light">
      <section id="top" className="min-h-screen">
        <div className="h-[60px] md:h-[100px] backdrop-blur fixed w-full"></div>
        <div className="flex justify-between items-center fixed py-auto w-full pr-[5%] pl-[5%] px-0 md:px-[50px] h-fit pt-2 md:h-[100px]">
          <div className="h-fit">
            <img src={logo} alt="Loyalbaze" className="h-[45px] md:h-[50px]" />
          </div>
          <div className="hidden md:flex">
            <HashLink smooth to={"#priority-access"}>
              <button className="border-gradient rounded-border-gradient hover:scale-90 transition duration-200">
                Get Priority Access
              </button>
            </HashLink>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={handleNav}
              className="border-gradient bar-border-gradient hover:scale-90 transition duration-200"
            >
              <FaBars size={25} />
            </button>
            <div
              ref={navRef}
              className="flex flex-col justify-center items-center translate-x-full transition duration-200 fixed top-0 right-0 h-screen w-[70%] backdrop-blur"
            >
              <button
                ref={navRef}
                onClick={handleNav}
                className="absolute top-4 right-4 border-gradient bar-border-gradient hover:scale-90 transition duration-200"
              >
                <FaTimes size={25} />
              </button>
              <div>
                <HashLink smooth to={"#early-access"}>
                  <button className="border-gradient mb-8 bar-border-gradient hover:scale-90 transition duration-200">
                    Get Early Access
                  </button>
                </HashLink>
              </div>
              <div>
                <HashLink smooth to={"#priority-access"}>
                  <button className="border-gradient bar-border-gradient hover:scale-90 transition duration-200">
                    Get Priority Access
                  </button>
                </HashLink>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full mt-0 pt-20 md:pt-[150px] my-10 md:my-0 md:h-[calc(100vh_-_120px)] flex justify-center flex-col">
          <div className="flex flex-col items-center">
            <h1 className="text-[48px] md:text-[52px] leading-[65px] font-black text-center w-[90%] max-w-[22ch] md:max-w-[18ch] mb-4">
              Turn your best customers into{" "}
              <span className="text-[#A75FD2]">Loyal fans</span>
            </h1>
            <p
              id="early-access"
              className="w-[90%] max-w-[60ch] text-center text-lg mb-8"
            >
              Loyalbaze, empowers businesses to offer digital, mobile-first
              loyalty programs to their customers. With our AI Powered platform,
              you can easily create and manage custom loyalty and rewards
              programs, track customer engagement, and gain valuable insights to
              improve your business. Sign up now to get early access.
            </p>
          </div>
          <form
            ref={formRef}
            className="flex items-center flex-col"
            onSubmit={handleSubmit}
          >
            <div className="flex items-center w-[90%] max-w-[325px] rounded border p-1 mb-4">
              <label htmlFor="name">
                <HiOutlineUserCircle size={20} className="mx-1" />
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="bg-transparent outline-none w-full"
                placeholder="Tell us your name"
                required
              />
            </div>
            <div className="flex items-center w-[90%] max-w-[325px] rounded border p-1 mb-4">
              <label htmlFor="email">
                <HiOutlineEnvelope size={20} className="mx-1" />
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="bg-transparent outline-none w-full"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="w-[90%] max-w-[325px] mb-4">
              <button
                className="w-[100%] rounded-full bg-gradient-to-r from-secondary to-tertiary py-[4px] hover:scale-95 transition duration-200"
                type="submit"
              >
                Get early access
              </button>
            </div>
            <div className="flex cursor-pointer">
              <div>
                <span className="bg-[#175CE1] rounded-full px-2 py-1">G</span>
                <span className="bg-[#A75FD2] rounded-full px-2 py-1 -ml-[5px]">
                  O
                </span>
                <span className="bg-[#175CE1] rounded-full px-2 py-1 -ml-[5px]">
                  U
                </span>
                <span className="bg-[#A75FD2] rounded-full px-2 py-1 -ml-[5px] mr-2">
                  M
                </span>
              </div>
              <div>+57 Joined</div>
            </div>
          </form>
        </div>
        {modal && (
          <div
            onClick={closeModal}
            className="flex justify-center items-center fixed h-screen w-screen top-0 bg-primary/50"
          >
            <div className="flex justify-center items-center">
              <div className="flex flex-col items-center px-4 md:px-8 py-16 bg-[#15141B] rounded-[20px] w-[90%] max-w-[446px] p-4 relative">
                <div
                  onClick={closeModal}
                  className="absolute top-4 right-4 cursor-pointer hover:scale-90 transition duration-200"
                >
                  <FaTimes size={25} />
                </div>
                <div>
                  <div className="border-[#ffffff33] border-[10px] mb-8 w-fit rounded-full">
                    <div className="bg-[#20AC5B] rounded-full p-4 box-shadow">
                      <ImCheckmark size={40} />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h2 className="font-bold text-2xl py-3">Congratulations</h2>
                  <p className="max-w-[35ch]">
                    Great move! You're one step closer to getting your hands on
                    the product. Please check your mail for more information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      <section id="priority-access" className="min-h-screen">
        <div className='flex flex-col md:flex-row relative'>
          <div className='absolute ellipse -top-10 left-[15%] mt-5 md:mt-0'></div>
          <div className='absolute -top-6 left-[45%]'>
            <img src={emptyStar} alt='Line' className='h-7' />
          </div>
          <div className='absolute bottom-16 left-2 md:left-[40%]'>
            <img src={star} alt='Line' className='h-8' />
          </div>
          <div className='absolute md:-top-[70px] top-[35%] right-[14%]'>
            <img src={emptyStar} alt='Line' className='h-7' />
          </div>
          <div className='absolute circle -bottom-10'></div>
          <div className='w-full md:w-1/2 flex justify-center items-center'>
            <div className='mt-6 md:mt-0'>
              <div className='flex justify-center ml-[90%] -mt-10 mb-10 md:-mr-40'>
                <img src={star} alt='Line' className='h-7' />
              </div>
              <h1 className='text-[40px] md:text-[50px] font-medium text-center'>Priority Access</h1>
              <div className='flex justify-center -mt-1'>
                <img src={line} alt='Line' className='h-12' />
              </div>
              <div className='flex justify-center'>
                <p className='w-[90%] max-w-[31ch] mt-3 mb-8 md:mb-0'>
                  Get ready to revolutionize the way you interact with your
                  customers and drive sales with Loyalbaze. Skip the waitlist and
                  get exclusive priority access to LoyalBaze. Limited slots
                  available. Please tell us a bit about your business and needs and
                  of our consultants will be in touch Immediately!
                </p>
              </div>
            </div>
          </div>
          <div className='flex w-full justify-center items-center md:w-1/2'>
            <div className='bg-[#1D2939] mx-auto w-[85%] max-w-[533px] p-5 md:p-10 rounded-xl'>
              <h2 className='pb-6'>
                Book a Consultation with us
              </h2>
              {consultData.map(item=> (
                <div className='pb-6'>
                  <input type={item.type} placeholder={item.placeholder} className='bg-transparent border py-[6px] px-3 outline-none focus:border-[#fff] border-[#ddd]/50 rounded-lg w-full' required />
                </div>
              ))}
              <div>
                <select className='bg-transparent color-transparent border py-[6px] px-3 outline-none focus:border-[#fff] border-[#ddd]/50 rounded-lg w-full' required>
                  {countries.map(country=>(
                    <option className='bg-primary'>{country}</option>
                  ))}
                </select>
              </div>
              <div className='mt-6'>
                <textarea placeholder='Drop a message...' className='bg-transparent color-transparent border py-[6px] px-3 min-h-[40px] outline-none focus:border-[#fff] border-[#ddd]/50 rounded-lg w-full' required />
              </div>
              <div className="mt-6">
                <button
                  className="w-[100%] rounded-full bg-gradient-to-r from-secondary to-tertiary py-[4px] hover:scale-95 transition duration-200"
                  type="submit"
                >
                  Send Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
