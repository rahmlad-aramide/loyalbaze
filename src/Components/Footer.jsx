import React from 'react'
import {RiHome8Fill} from 'react-icons/ri'
import {MdPhoneInTalk} from 'react-icons/md'
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2 }}
    className='flex justify-center'>
        <div className="flex w-[90%] justify-center flex-col">
            <div className="h-[1px] w-full mt-4 bg-[#fff]"></div>
            <div className="flex flex-col md:grid md:grid-cols-3 my-6">
                <div className='flex mb-4 md:mb-0 order-1 md:order-0 justify-center md:justify-start items-center'>
                    <div className='mr-4'><RiHome8Fill size={25} /></div>
                    <p className='max-w-[25ch] text-center md:text-left'>
                    2nd Floor, The Garnet Building, KM14 Lekki Epe Expressway, Lagos,
                    Nigeria.
                    </p>
                </div>
                <div className='flex mb-4 md:mb-0 order-0 md:order-1 justify-center items-center text-center font-semibold text-lg'>Loyalbaze is almost here.</div>
                <div className='flex mb-4 md:mb-0 order-1 justify-center md:justify-end items-center text-center md:text-right'>
                    <div className='mr-4'><MdPhoneInTalk size={25}/> </div>
                    <p>+234 903 618 9485</p>
                </div>
            </div>
        </div>
    </motion.div>
  );
}

export default Footer