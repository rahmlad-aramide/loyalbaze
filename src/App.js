import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";
import line from "./Assets/line.svg";
import emptyStar from "./Assets/empty-star.svg";
import star from "./Assets/filled-star.svg";
import Matrix from "./Assets/matrix.svg";

import { HiOutlineUserCircle } from "react-icons/hi";
import { HiOutlineEnvelope } from "react-icons/hi2";

import { consultData, countries } from "./data";
import { Button, Ellipses, Footer, Joiners, Modal, Navbar } from "./Components";

function App() {
  const formRef = useRef();
  const priorityFormRef = useRef();

  const [modal, setModal] = useState(false);
  const [priorityModal, setPriorityModal] = useState(false);

  const handleSubmitEarly = (e) => {
    e.preventDefault();
    setModal(true);
    for (let i = 0; i < 2; i++) {
      formRef.current[i].value = "";
    }
  };
  const handleSubmitPriority = (e) => {
    e.preventDefault();
    setPriorityModal(true);
    for (let i = 0; i < 6; i++) {
      if (i === 4) {
        priorityFormRef.current[i].value = "Nigeria";
      } else {
        priorityFormRef.current[i].value = "";
      }
    }
  };

  return (
    <div className="bg-primary text-light">
      <Navbar />
      <section id="top" className="min-h-screen relative overflow-x-hidden">
        <Ellipses />
        <div className="flex absolute top-[5rem] md:top-[8.5rem] right-[62%] z-10 justify-center ml-[30%]">
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 100, scale: 1 }}
            transition={{ duration: 1, delay: 2 }}
            src={star}
            alt="star"
            className="h-7"
          />
        </div>
        <div className="hidden sm:flex absolute bottom-[6rem] right-[4%] z-10 justify-center ml-[90%]">
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 100, scale: 1 }}
            transition={{ duration: 1, delay: 2 }}
            src={star}
            alt="star"
            className="h-7"
          />
        </div>
        <div className="flex absolute bottom-[3rem] right-[4%] z-10 justify-center mr-[90%]">
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 100, scale: 1 }}
            transition={{ duration: 1, delay: 2 }}
            src={star}
            alt="star"
            className="h-7"
          />
        </div>
        <div className="min-h-screen h-full mt-0 pt-[100px] md:pt-[150px] my-10 md:my-0 flex justify-center flex-col">
          <div className="flex flex-col items-center">
            <motion.h1
              initial={{ y: "-50vh" }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
              className="text-[40px] md:text-[52px] leading-[55px] z-10 md:leading-[65px] font-black text-center w-[90%] max-w-[22ch] mb-1"
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
              Loyalbaze, empowers businesses to offer digital, mobile-first
              loyalty programs to their customers. With our AI Powered platform,
              you can easily create and manage custom loyalty and rewards
              programs, track customer engagement, and gain valuable insights to
              improve your business. Sign up now to get early access.
            </motion.p>
          </div>
          <motion.form
            initial={{ y: "50vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            ref={formRef}
            className="flex items-center flex-col"
            onSubmit={handleSubmitEarly}
          >
            <div className="static md:absolute md:left-[63%] h-24 -mt-4 md:-mt-7">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 100, scale: 1 }}
                transition={{ delay: 1.5, duration: 1.5 }}
                src={Matrix}
                alt="matrix"
                className="h-20"
              />
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
              <Button>Get early access</Button>
            </div>
            <Joiners />
          </motion.form>
        </div>
        {modal && (
          <AnimatePresence>
            <Modal setModal={setModal} />
          </AnimatePresence>
        )}
      </section>
      <motion.section
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2 }}
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
                  and of our consultants will be in touch Immediately!
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
                <Button>Send Request</Button>
              </div>
            </form>
          </div>
        </div>
        {priorityModal && (
          <AnimatePresence>
            <Modal setPriorityModal={setPriorityModal} />
          </AnimatePresence>
        )}
      </motion.section>
      <Footer />
    </div>
  );
}

export default App;
