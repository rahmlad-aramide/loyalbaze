import React, { useRef } from "react";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import logo from "../Assets/logo.svg";

import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const navRef = useRef();

  const handleNav = () => {
    navRef.current.classList.toggle("translate-x-full");
  };
  return (
    <>
      <div className="h-[60px] md:h-[90px] backdrop-blur z-[900] fixed w-full"></div>
      <nav className="flex justify-between items-center fixed z-[999] py-auto w-full pr-[5%] pl-[5%] px-0 md:px-[50px] h-fit pt-2 md:h-[90px]">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 100, scale: 1 }}
          transition={{ delay: 0.1, duration: 1.5 }}
          className="h-fit"
        >
          <img src={logo} alt="Loyalbaze" className="h-[45px] md:h-[50px]" />
        </motion.div>
        <div className="hidden md:flex">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <HashLink smooth to={"#priority-access"}>
              <button className="border-gradient rounded-border-gradient hover:scale-90 transition duration-200">
                Get Priority Access
              </button>
            </HashLink>
          </motion.div>
        </div>
        <div className="flex md:hidden">
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
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
      </nav>
    </>
  );
};

export default Navbar;
