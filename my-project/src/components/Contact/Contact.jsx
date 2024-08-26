import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from "framer-motion";
import Modal from './../Modal/modal' ;

const fadeUp = (delay) => ({
  hidden: {
      opacity: 0,
      y: 100,
  },
  show: {
      opacity: 1,
      y: 0,
      transition: {
          duration: 0.4,
          delay: delay,
      },
  },
});

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className='bg-black text-white '>
        
        <div className="container py-10 lg:py-20 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
                
                {/* left side */}
                <section className=' space-y-7 lg:max-w-[380px]'>
                    <motion.p 
                    variants={fadeUp(0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    className='text-sm opacity-70 tracking-widest translate-y-3 '>- About me</motion.p>

                    <motion.h1 
                    variants={fadeUp(0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    className='text-2xl lg:text-3xl'>New Skills, Fresh Start.</motion.h1>

                    <motion.p 
                    variants={fadeUp(0.6)}
                    initial="hidden"
                    whileInView={"show"}
                    className='text-sm leading-6 opacity-70'>After 10 years in the luxury retail sector, as well as founding a feminist artistic agency, I am taking the leap into a new chapter. My passion for design, teamwork, and technology has naturally led me to the path of development. Drawing on my artistic experiences and love for customer experience, I am making a complete career shift, diving headfirst into the world of coding and technology.</motion.p>

                    <motion.button 
                    variants={fadeUp(0.8)}
                    initial="hidden"
                    whileInView={"show"}
                    className='text-[#80dce0]  border-b-2 border-[#80dce0] text-xl font-bold p-1 flex items-center gap-4 group'
                    onClick={handleButtonClick} 
                    > Download my resume {" "} <FaArrowRight className='text-sm group-hover:translate-x-2 transition duration-200' /> </motion.button>
                </section>
                {/* right side */} 
                <div className='space-y-7 lg:max-w-[500]' >
                    <motion.h1 
                    variants={fadeUp(0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    className='text-2xl lg:text-3xl'>Driven by creative and accessible design, commited to dynamic interface.</motion.h1>

                    <motion.p 
                    variants={fadeUp(0.6)}
                    initial="hidden"
                    whileInView={"show"}
                    className='text-sm leading-6 opacity-70'> Training at <a href='https://adatechschool.fr/"' target="_blank"><strong className='text-xl hover:text-[#f7b5c0] '>Ada Tech School</strong></a>, known for its innovative pedagogy, has led me to a genuine passion for front-end and UX/UI design, while also sparking a keen curiosity for back-end development.</motion.p>

                    {/* stacks sections */}
                    <motion.div 
                    variants={fadeUp(0.8)}
                    initial="hidden"
                    whileInView={"show"}
                    className='grid grid-cols-2 gap-4'>
                    <div className='flex gap-3 items-center'>
                        <p className='text-6xl font-bold text-[#80dce0]'>9</p>
                        <p className='font-semibold'>Months of Fullstack Web Development education.</p>
                    </div>

                    <div className='flex gap-3 items-center'>
                        <p className='text-6xl font-bold text-[#80dce0]'>12</p>
                        <p className='font-semibold'>Months in apprenticeship </p>
                    </div>
                    </motion.div>
                </div>
            </div>
        </div>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <img src="/cv.png" alt="" className="w-full h-auto z-50"/>
        </Modal>
    </main>
  );
};

export default Contact;
