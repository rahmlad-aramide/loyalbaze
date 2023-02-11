import { useState, useRef } from 'react';
import { HashLink } from 'react-router-hash-link';
import logo from './logo.svg';
import './App.css';

import {HiOutlineUserCircle} from 'react-icons/hi';
import {HiOutlineEnvelope} from 'react-icons/hi2';
import {ImCheckmark} from 'react-icons/im';
import {FaTimes} from 'react-icons/fa';

function App() {
  const formRef = useRef();
  const [modal, setModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setModal(true)
    for (let i = 0; i < 2; i++) {
      formRef.current[i].value = ''
    }
  }
  const closeModal = () => {
    setModal(false);
  }
  return (
    <div className="bg-primary text-light">
      <section className="min-h-screen">
        <div className="flex justify-between items-center py-auto px-[10px] md:px-[50px] h-fit pt-2 md:h-[100px]">
          <div className="h-fit">
            <img src={logo} alt="Loyalbaze" className=" md:h-[50px]" />
          </div>
          <div className="">
            <HashLink smooth to={"#priority-access"}>
              <button className="border-gradient hover:scale-90 transition duration-200">
                Get Priority Access
              </button>
            </HashLink>
          </div>
        </div>
        <div className="h-[calc(100vh_-_120px)] flex justify-center flex-col">
          <div className="flex flex-col items-center">
            <h1 className="text-[52px] leading-[65px] font-black text-center max-w-[18ch] mb-4">
              Turn your best customers into{" "}
              <span className="text-[#A75FD2]">Loyal fans</span>
            </h1>
            <p className="max-w-[60ch] text-center text-lg mb-8">
              Loyalbaze, empowers businesses to offer digital, mobile-first
              loyalty programs to their customers. With our AI Powered platform,
              you can easily create and manage custom loyalty and rewards
              programs, track customer engagement, and gain valuable insights to
              improve your business. Sign up now to get early access.
            </p>
          </div>
          <form ref={formRef} className="flex items-center flex-col" onSubmit={handleSubmit}>
            <div className="flex items-center w-[90%] max-w-[325px] rounded border p-1 mb-4">
              <label htmlFor="name">
                <HiOutlineUserCircle className="mx-1" />
              </label>
              <input
                id="name"
                name='name'
                type="text"
                className="bg-transparent outline-none w-full"
                placeholder="Tell us your name"
                required
              />
            </div>
            <div className="flex items-center w-[90%] max-w-[325px] rounded border p-1 mb-4">
              <label htmlFor="email">
                <HiOutlineEnvelope className="mx-1" />
              </label>
              <input
                id="email"
                name='email'
                type="email"
                className="bg-transparent outline-none w-full"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="w-[90%] max-w-[325px] mb-4">
              <button
                className="w-[100%] rounded-full bg-gradient-to-r from-secondary to-tertiary py-[4px]"
                type="submit"
              >
                Get early access
              </button>
            </div>
            <div className="flex">
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
        {modal && 
          <div onClick={closeModal} className='flex justify-center items-center fixed h-screen w-screen top-0 bg-primary/50'>
            <div>
              <div className='flex flex-col items-center py-16 bg-[#15141B] w-[90%] max-w-[446px] p-4 relative'>
                <div onClick={closeModal} className='absolute top-4 right-4 cursor-pointer hover:scale-90 transition duration-200'>
                  <FaTimes size={25}/>
                </div>
                <div>
                  <div className='border-[#ffffff33] border-[10px] mb-8 w-fit rounded-full'>
                    <div className='bg-[#20AC5B] rounded-full p-4'>
                      <ImCheckmark size={40} />
                    </div>
                  </div>
                </div>
                <div className='text-center'>
                  <h2 className='font-bold text-2xl py-3'>Congratulations</h2>
                  <p className='max-w-[35ch]'>
                    Great move! You're one step closer to getting your hands on the
                    product. Please check your mail for more information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        }
      </section>
      <section id="priority-access" className="min-h-screen">
        Section Two
      </section>
    </div>
  );
}

export default App;
