import { useState, useRef } from 'react';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion'
import './App.css';
import logo from './Assets/logo.svg';
import line from './Assets/line.svg';
import emptyStar from './Assets/empty-star.svg'
import star from './Assets/filled-star.svg'
import Matrix from './Assets/matrix.svg'

import {HiOutlineUserCircle} from 'react-icons/hi';
import {HiOutlineEnvelope} from 'react-icons/hi2';
import {FaTimes, FaBars} from 'react-icons/fa';

import { consultData, countries } from './data';
import Modal from './Components/Modal';
import Footer from './Components/Footer';

function App() {
  const formRef = useRef();
  const priorityFormRef = useRef();
  const navRef = useRef();
  const [modal, setModal] = useState(false);
  const [priorityModal, setPriorityModal] = useState(false);

  // const icon = {
  //   hidden: {
  //     pathLength: 0,
  //     fill: "rgba(255, 255, 255, 0)"
  //   },
  //   visible: {
  //     pathLength: 1,
  //     fill: "rgba(255, 255, 255, 1)"
  //   }
  // }

  const handleSubmitEarly = (e) => {
    e.preventDefault();
    setModal(true)
    for (let i = 0; i < 2; i++) {
      formRef.current[i].value = "";
    }
  }
  const handleSubmitPriority = (e) => {
    e.preventDefault();
    setPriorityModal(true)
    for (let i = 0; i < 6; i++) {
      if(i===4){
        priorityFormRef.current[i].value = "Nigeria";
      } 
      else {
        priorityFormRef.current[i].value = "";
      }
    }
  }
  
  const handleNav = () => {
    navRef.current.classList.toggle('translate-x-full')
  }
  return (
    <div className="bg-primary text-light">
      <div className="h-[60px] md:h-[100px] backdrop-blur z-[900] fixed w-full"></div>
      <div className="flex justify-between items-center fixed z-[999] py-auto w-full pr-[5%] pl-[5%] px-0 md:px-[50px] h-fit pt-2 md:h-[100px]">
        <div className="h-fit">
        {/* <svg width="231" height="62" viewBox="0 0 231 62" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path variants={icon} initial="hidden" animate="visible" transition={{duration: 3}} d="M3.12 47V12.44H9.264V47H3.12Z" fill="white"/>
          <path variants={icon} initial="hidden" animate="visible" d="M40.4 16.17C37.3833 16.17 34.6833 17.6367 33 19.8867C32.1402 18.7347 31.0237 17.799 29.7392 17.1539C28.4547 16.5087 27.0374 16.1719 25.6 16.17C20.4833 16.17 16.3333 20.3367 16.3333 25.4867C16.3333 27.47 16.65 29.3034 17.2 31.0034C19.8333 39.3367 27.95 44.32 31.9666 45.6867C32.5333 45.8867 33.4666 45.8867 34.0333 45.6867C38.05 44.32 46.1666 39.3367 48.8 31.0034C49.35 29.3034 49.6666 27.47 49.6666 25.4867C49.6666 20.3367 45.5166 16.17 40.4 16.17Z" fill="url(#paint0_linear_11_139)"/>
          <motion.path variants={icon} initial="hidden" animate="visible" transition={{duration: 3}} d="M36.4285 30.9995V33.5709C36.4285 34.5181 35.6613 35.2852 34.7142 35.2852H31.2856C30.3385 35.2852 29.5713 34.5181 29.5713 33.5709V30.9995C29.5713 30.7638 29.7642 30.5709 29.9999 30.5709H30.8442C31.0799 30.5709 31.2728 30.7638 31.2728 30.9995V32.3452C31.2732 32.5728 31.3635 32.791 31.524 32.9523C31.6846 33.1137 31.9023 33.2051 32.1299 33.2067C32.2928 33.2067 32.4556 33.1595 32.597 33.0652L33.0042 32.7995L33.3813 33.0524C33.6428 33.2281 33.977 33.2495 34.2556 33.0995C34.5385 32.9495 34.7142 32.6624 34.7142 32.3409V30.9995C34.7142 30.7638 34.907 30.5709 35.1428 30.5709H35.9999C36.2356 30.5709 36.4285 30.7638 36.4285 30.9995ZM37.0713 28.8567V29.2852C37.0713 29.7567 36.8442 30.1424 36.2142 30.1424H29.7856C29.1299 30.1424 28.9285 29.7567 28.9285 29.2852V28.8567C28.9285 28.3852 29.1299 27.9995 29.7856 27.9995H36.2142C36.8442 27.9995 37.0713 28.3852 37.0713 28.8567Z" fill="white"/>
          <motion.path variants={icon} initial="hidden" animate="visible" transition={{duration: 3}} d="M32.8452 27.9999H30.4795C30.409 27.9235 30.371 27.8227 30.3734 27.7188C30.3758 27.6148 30.4185 27.5159 30.4924 27.4428L31.1009 26.8342C31.178 26.758 31.2819 26.7153 31.3902 26.7153C31.4985 26.7153 31.6025 26.758 31.6795 26.8342L32.8452 27.9999ZM35.5165 27.9999H33.1508L34.3165 26.8342C34.3935 26.758 34.4975 26.7153 34.6058 26.7153C34.7141 26.7153 34.8181 26.758 34.8951 26.8342L35.5037 27.4428C35.6579 27.5971 35.6622 27.8414 35.5165 27.9999ZM33.8447 30.5709C34.0804 30.5709 34.2732 30.7638 34.2732 30.9995V32.3409C34.2732 32.6838 33.8918 32.8895 33.6089 32.6966L33.2232 32.4395C33.1533 32.3934 33.0713 32.3688 32.9875 32.3688C32.9037 32.3688 32.8218 32.3934 32.7518 32.4395L32.3489 32.7052C32.0661 32.8938 31.6889 32.6881 31.6889 32.3495V30.9995C31.6889 30.7638 31.8818 30.5709 32.1175 30.5709H33.8447Z" fill="white" />
          <motion.path variants={icon} initial="hidden" animate="visible" transition={{duration: 3}} d="M59.096 57.56L64.616 45.416H63.176L53.912 23.192H60.584L67.256 39.944L74.216 23.192H80.744L65.624 57.56H59.096ZM91.0936 47.576C89.0456 47.576 87.3656 47.256 86.0536 46.616C84.7416 45.944 83.7656 45.064 83.1256 43.976C82.4856 42.888 82.1656 41.688 82.1656 40.376C82.1656 38.168 83.0296 36.376 84.7576 35C86.4856 33.624 89.0776 32.936 92.5336 32.936H98.5816V32.36C98.5816 30.728 98.1176 29.528 97.1896 28.76C96.2616 27.992 95.1096 27.608 93.7336 27.608C92.4856 27.608 91.3976 27.912 90.4696 28.52C89.5416 29.096 88.9656 29.96 88.7416 31.112H82.7416C82.9016 29.384 83.4776 27.88 84.4696 26.6C85.4936 25.32 86.8056 24.344 88.4056 23.672C90.0056 22.968 91.7976 22.616 93.7816 22.616C97.1736 22.616 99.8456 23.464 101.798 25.16C103.75 26.856 104.726 29.256 104.726 32.36V47H99.4936L98.9176 43.16C98.2136 44.44 97.2216 45.496 95.9416 46.328C94.6936 47.16 93.0776 47.576 91.0936 47.576ZM92.4856 42.776C94.2456 42.776 95.6056 42.2 96.5656 41.048C97.5576 39.896 98.1816 38.472 98.4376 36.776H93.2056C91.5736 36.776 90.4056 37.08 89.7016 37.688C88.9976 38.264 88.6456 38.984 88.6456 39.848C88.6456 40.776 88.9976 41.496 89.7016 42.008C90.4056 42.52 91.3336 42.776 92.4856 42.776ZM110.589 47V12.44H116.733V47H110.589ZM137.123 47.576C135.331 47.576 133.763 47.24 132.419 46.568C131.075 45.896 129.987 44.952 129.155 43.736L128.483 47H123.011V12.44H129.155V26.6C129.923 25.544 130.931 24.616 132.179 23.816C133.459 23.016 135.107 22.616 137.123 22.616C139.363 22.616 141.363 23.16 143.123 24.248C144.883 25.336 146.275 26.824 147.299 28.712C148.323 30.6 148.835 32.744 148.835 35.144C148.835 37.544 148.323 39.688 147.299 41.576C146.275 43.432 144.883 44.904 143.123 45.992C141.363 47.048 139.363 47.576 137.123 47.576ZM135.827 42.2C137.779 42.2 139.395 41.544 140.675 40.232C141.955 38.92 142.595 37.224 142.595 35.144C142.595 33.064 141.955 31.352 140.675 30.008C139.395 28.664 137.779 27.992 135.827 27.992C133.843 27.992 132.211 28.664 130.931 30.008C129.683 31.32 129.059 33.016 129.059 35.096C129.059 37.176 129.683 38.888 130.931 40.232C132.211 41.544 133.843 42.2 135.827 42.2ZM162.531 47.576C160.483 47.576 158.803 47.256 157.491 46.616C156.179 45.944 155.203 45.064 154.563 43.976C153.923 42.888 153.603 41.688 153.603 40.376C153.603 38.168 154.467 36.376 156.195 35C157.923 33.624 160.515 32.936 163.971 32.936H170.019V32.36C170.019 30.728 169.555 29.528 168.627 28.76C167.699 27.992 166.547 27.608 165.171 27.608C163.923 27.608 162.835 27.912 161.907 28.52C160.979 29.096 160.403 29.96 160.179 31.112H154.179C154.339 29.384 154.915 27.88 155.907 26.6C156.931 25.32 158.243 24.344 159.843 23.672C161.443 22.968 163.235 22.616 165.219 22.616C168.611 22.616 171.283 23.464 173.235 25.16C175.187 26.856 176.163 29.256 176.163 32.36V47H170.931L170.355 43.16C169.651 44.44 168.659 45.496 167.379 46.328C166.131 47.16 164.515 47.576 162.531 47.576ZM163.923 42.776C165.683 42.776 167.043 42.2 168.003 41.048C168.995 39.896 169.619 38.472 169.875 36.776H164.643C163.011 36.776 161.843 37.08 161.139 37.688C160.435 38.264 160.083 38.984 160.083 39.848C160.083 40.776 160.435 41.496 161.139 42.008C161.843 42.52 162.771 42.776 163.923 42.776ZM180.49 47V42.056L192.634 28.28H180.634V23.192H199.642V28.136L187.306 41.912H199.882V47H180.49ZM216.563 47.576C214.163 47.576 212.035 47.064 210.179 46.04C208.323 45.016 206.867 43.576 205.811 41.72C204.755 39.864 204.227 37.72 204.227 35.288C204.227 32.824 204.739 30.632 205.763 28.712C206.819 26.792 208.259 25.304 210.083 24.248C211.939 23.16 214.115 22.616 216.611 22.616C218.947 22.616 221.011 23.128 222.803 24.152C224.595 25.176 225.987 26.584 226.979 28.376C228.003 30.136 228.515 32.104 228.515 34.28C228.515 34.632 228.499 35 228.467 35.384C228.467 35.768 228.451 36.168 228.419 36.584H210.323C210.451 38.44 211.091 39.896 212.243 40.952C213.427 42.008 214.851 42.536 216.515 42.536C217.763 42.536 218.803 42.264 219.635 41.72C220.499 41.144 221.139 40.408 221.555 39.512H227.795C227.347 41.016 226.595 42.392 225.539 43.64C224.515 44.856 223.235 45.816 221.699 46.52C220.195 47.224 218.483 47.576 216.563 47.576ZM216.611 27.608C215.107 27.608 213.779 28.04 212.627 28.904C211.475 29.736 210.739 31.016 210.419 32.744H222.275C222.179 31.176 221.603 29.928 220.547 29C219.491 28.072 218.179 27.608 216.611 27.608Z" fill="white"/>
          <defs>
            <linearGradient id="paint0_linear_11_139" x1="18.3333" y1="16.3335" x2="35.3333" y2="38.5001" gradientUnits="userSpaceOnUse">
            <stop stop-color="#175CE1" stop-opacity="0.71"/>
            <stop offset="1" stop-color="#A75FD2" stop-opacity="0.94"/>
            </linearGradient>
          </defs>
        </svg> */}
          <img src={logo} alt="Loyalbaze" className="h-[45px] md:h-[50px]" />
        </div>
        <div className="hidden md:flex">
          <HashLink smooth to={"#priority-access"}>
            <motion.button 
            initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2 }}
            className="border-gradient rounded-border-gradient hover:scale-90 transition duration-200">
              Get Priority Access
            </motion.button>
          </HashLink>
        </div>
        <div className="flex md:hidden">
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2 }}
            onClick={handleNav}
            className="border-gradient bar-border-gradient hover:scale-90 transition duration-200"
          >
            <FaBars size={25} />
          </motion.button>
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
      <section
        id="top"
        className="min-h-screen relative overflow-x-hidden min-w-screen"
      >
        <motion.div 
         animate={{x: 0}}
         initial={{x: '-50vw'}}
         transition={{delay: 1.5, duration: 2}} 
         className="ellipse1 absolute top-[7rem] left-[5%] z-10"></motion.div>
        <motion.div 
         animate={{x: 0}}
         initial={{x: '50vw'}}
         transition={{delay: 1.5, duration: 2}} 
         className="ellipse2 absolute right-0 top-20 md:top-28 md:right-[20%]"></motion.div>
        <motion.div 
         animate={{x: 0}}
         initial={{x: '50vw'}}
         transition={{delay: 1.5, duration: 2}} 
         className="ellipse3 absolute top-[25rem] -right-[7rem] md:-right-[5%] z-10"></motion.div>
        <div className="flex absolute top-[5rem] md:top-[8.5rem] right-[62%] z-10 justify-center ml-[30%]">
          <motion.img
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2 }}
          src={star} alt="star" className="h-7" />
        </div>
        <div className="hidden sm:flex absolute bottom-[6rem] right-[4%] z-10 justify-center ml-[90%]">
          <img src={star} alt="star" className="h-7" />
        </div>
        <div className="flex absolute bottom-[3rem] right-[4%] z-10 justify-center mr-[90%]">
          <img src={star} alt="star" className="h-7" />
        </div>
        <div className="min-h-screen h-full md:h-[calc(100vh_-_100px)] mt-0 pt-[100px] md:pt-[150px] my-10 md:my-0 flex justify-center flex-col">
          <div className="flex flex-col items-center">
            <motion.h1
              initial={{ y: "-50vh" }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
              className="text-[40px] md:text-[52px] leading-[55px] z-10 md:leading-[65px] font-black text-center w-[90%] max-w-[22ch] md:max-w-[18ch] mb-2"
            >
              Turn your best customers into{" "}
              <span className="text-[#A75FD2]">Loyal fans</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 100, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
              id="early-access"
              className="w-[90%] max-w-[60ch] z-10 text-center text-lg mb-8"
            >
              Loyalbaze,??empowers businesses to offer digital, mobile-first
              loyalty programs to their customers. With our AI Powered platform,
              you can easily create and manage custom loyalty and rewards
              programs, track customer engagement, and gain valuable insights to
              improve your business. Sign up now to get early access.
            </motion.p>
          </div>
          <motion.form
            initial={{ y: "50vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            ref={formRef}
            className="flex items-center flex-col"
            onSubmit={handleSubmitEarly}
          >
            <div className="static md:absolute md:left-[63%] h-24 -mt-4 md:-mt-7">
              <motion.img 
               initial={{ opacity: 0, scale: 0 }}
               animate={{ opacity: 100, scale: 1 }} 
               transition={{delay: 1.5, duration: 1.5}} src={Matrix} alt="matrix" className="h-20" />
            </div>
            <div className="flex items-center w-[90%] max-w-[325px] rounded border p-1 mb-6">
              <label htmlFor="name">
                <HiOutlineUserCircle size={25} className="mx-1" />
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="bg-transparent outline-none w-full p-1"
                placeholder="Tell us your name"
                required
              />
            </div>
            <div className="flex items-center w-[90%] max-w-[325px] rounded border p-1 mb-6">
              <label htmlFor="email">
                <HiOutlineEnvelope size={25} className="mx-1" />
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="bg-transparent outline-none w-full p-1"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="w-[90%] max-w-[325px] mb-6">
              <button
                className="w-[100%] rounded-full bg-gradient-to-r from-secondary to-tertiary py-[6px] hover:scale-95 transition duration-200"
                type="submit"
              >
                Get early access
              </button>
            </div>
            <div className="flex cursor-pointer mb-0 md:mb-6">
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
          </motion.form>
        </div>
        {modal && <Modal setModal={setModal} />}
      </section>
      <section
        id="priority-access"
        className="h-full pb-4 min-h-[calc(100vh_-_150px)]"
      >
        <div className="flex flex-col md:flex-row relative">
          <div className="absolute ellipse -top-10 left-[15%] mt-5 md:mt-0"></div>
          <div className="absolute -top-6 left-[45%]">
            <img src={emptyStar} alt="Line" className="h-7" />
          </div>
          <div className="absolute bottom-16 left-2 md:left-[40%]">
            <img src={star} alt="Line" className="h-8" />
          </div>
          <div className="absolute md:-top-[70px] top-[35%] right-[4%] md:right-[14%]">
            <img src={emptyStar} alt="Line" className="h-7" />
          </div>
          <div className="absolute circle bottom-[42rem] md:bottom-[12rem] right-[50%] md:right-[80%]"></div>
          <div className="absolute circle bottom-[85rem] md:bottom-[52rem] right-[50%]"></div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="mt-6 md:mt-0">
              <div className="flex justify-center ml-[90%] -mt-10 mb-10 md:-mr-40">
                <img src={star} alt="Line" className="h-7" />
              </div>
              <h1 className="text-[40px] md:text-[50px] font-medium text-center">
                Priority Access
              </h1>
              <div className="flex justify-center -mt-1">
                <img src={line} alt="Line" className="h-12" />
              </div>
              <div className="flex justify-center">
                <p className="w-[90%] max-w-[31ch] mt-3 mb-8 md:mb-0">
                  Get ready to revolutionize the way you interact with your
                  customers and drive sales with Loyalbaze. Skip the waitlist
                  and get exclusive priority access to LoyalBaze. Limited slots
                  available. Please tell us a bit about your business and needs
                  and of our consultants will be in touch??Immediately!
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center items-center md:w-1/2">
            <form
              ref={priorityFormRef}
              onSubmit={handleSubmitPriority}
              className="bg-[#1D2939] mx-auto w-[85%] max-w-[533px] p-5 md:p-10 mb-6 md:mb-0 rounded-xl"
            >
              <h2 className="pb-6 text-lg md:text-2xl font-medium">
                Book a Consultation with us
              </h2>
              {consultData.map((item, index) => (
                <div key={index} className="pb-6">
                  <input
                    type={item.type}
                    placeholder={item.placeholder}
                    className="bg-transparent border py-[6px] px-3 outline-none focus:border-[#fff] border-[#ddd]/50 rounded-lg w-full"
                    required
                  />
                </div>
              ))}
              <div>
                <select
                  className="bg-transparent color-transparent border py-[6px] px-3 outline-none focus:border-[#fff] border-[#ddd]/50 rounded-lg w-full"
                  required
                >
                  {countries.map((country, index) => (
                    <option key={index} className="bg-primary">
                      {country}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-6">
                <textarea
                  placeholder="Drop a message..."
                  className="bg-transparent color-transparent border py-[6px] px-3 min-h-[40px] outline-none focus:border-[#fff] border-[#ddd]/50 rounded-lg w-full"
                  required
                />
              </div>
              <div className="mt-6 mb-2">
                <button
                  className="w-[100%] rounded-full bg-gradient-to-r from-secondary to-tertiary py-[6px] hover:scale-95 transition duration-200"
                  type="submit"
                >
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </div>
        {priorityModal && <Modal setPriorityModal={setPriorityModal} />}
      </section>
      <Footer />
    </div>
  );
}

export default App;
