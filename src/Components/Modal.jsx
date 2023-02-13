import React from 'react'
// import {motion, AnimatePresence} from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import { ImCheckmark } from 'react-icons/im'

const Modal = ({setModal, setPriorityModal}) => {
    const closeModal = () => {
        setModal && setModal(false);
        setPriorityModal && setPriorityModal(false);
      }
  return (
    <div
            onClick={closeModal}
            className="flex justify-center items-center fixed h-screen w-screen z-[900] top-0 bg-primary/50"
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
  )
}

export default Modal