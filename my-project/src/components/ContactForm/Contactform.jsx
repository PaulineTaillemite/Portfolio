import React from 'react'
import ContactLogo from './../assets/contact.svg'
import ContactLogo2 from './../assets/contact2.svg'
import { FaArrowRight } from "react-icons/fa"
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiBento } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: {
        opacity: 0,
        x: 100,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            delay: delay,
        },
    },
});


const Contactform = () => {
    return (
        <div>
            <main className='bg-darkcolor'>


                <div className="container ">

                    <div class="grid lg:grid-cols-2 items-center max-lg:justify-center gap-6 h-full sm:p-12 p-8 max-sm:p-4">

                        {/* contact form  */}
                        <div class="max-w-lg max-lg:mx-auto max-lg:text-center max-lg:mb-6">
                            <h2 class="text-3xl font-semibold text-white ">Contact Me</h2>
                            <p class="mt-4 text-sm leading-6 opacity-70 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nesciunt inventore accusamus asperiores eligendi odio totam soluta voluptatem assumenda nulla? .</p>

                            <form class="mx-auto mt-8 bg-white rounded-lg p-6 shadow-md space-y-4">
                                <input type='text' placeholder='Name'
                                    class="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm outline-none" />
                                <input type='email' placeholder='Email'
                                    class="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm outline-none" />
                                <input type='text' placeholder='Subject'
                                    class="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm outline-none" />
                                <textarea placeholder='Message' rows="6"
                                    class="w-full rounded-md px-6 bg-[#f0f1f2] text-sm pt-3 outline-none"></textarea>
                                <button type='button'
                                    class="text-white bg-[#80dce0] hover:bg-darkcolor font- uppercase rounded-md text-sm px-6 py-3 block w-full">Send
                                    Message</button>
                            </form>
                        </div>

                        <div class=" pl-10 z-10 relative  text-white" >
                            <div className='grid col-span-2 relative h-full justify-center items-center'>
                                <div className='w-[280px] sm:w-[400px] md:w-[450px]'>
                                    <h1 className=' text-4xl md:text-6xl font-bold relative z-20 pb-4'>Pauline <br /> Taillemite.</h1>


                                    <div className='grid gap-3'>
                                        <div className="flex gap-3">
                                            <IoLocationOutline />
                                            <p className='text-sm font-extralight opacity-70'> Boulevard de Grenelle, Paris 15, France.</p>
                                        </div>

                                        <div className="flex gap-3">
                                            <IoMailOutline />
                                            <a href={`mailto:pauline.taillemite@gmail.com`} className='text-sm font-extralight opacity-70'>
                                                pauline.taillemite@gmail.com
                                            </a>
                                        </div>
                                        <div className="flex gap-3 ">
                                            <IoIosPhonePortrait />
                                            <p className='text-sm font-extralight opacity-70'> +33 6 58 91 09 43</p>
                                        </div>
                                    </div>




                                    {/* direct contact section */}
                                    <div className='flex gap-6 mt-12'>

                                        <motion.div
                                        variants={container(0.2)}
                                        initial="hidden"
                                        whileInView="show">
                                        <a href="https://github.com/PaulineTaillemite" target="_blank" rel="noopener noreferrer">
                                            <FaGithub className='text-2xl hover:scale-125 cursor-pointer duration-200' />
                                        </a>
                                        </motion.div>

                                        <motion.div
                                        variants={container(0.4)}
                                        initial="hidden"
                                        whileInView="show">
                                       <a href="https://www.linkedin.com/in/pauline-taillemite-%F0%9F%91%A9%F0%9F%8F%BB%E2%80%8D%F0%9F%8E%A4-1aa80a5b/" target="_blank" rel="noopener noreferrer">
                                            <FaLinkedinIn className='text-2xl hover:scale-125 cursor-pointer duration-200' />
                                        </a>
                                        </motion.div>

                                        <motion.div
                                        variants={container(0.8)}
                                        initial="hidden"
                                        whileInView="show">
                                        <a href="https://www.instagram.com/polinetlmt/" target="_blank" rel="noopener noreferrer">
                                            <FaInstagram className='text-2xl hover:scale-125 cursor-pointer duration-200' />
                                        </a>
                                        </motion.div>

                                        <motion.div
                                        variants={container(1.0)}
                                        initial="hidden"
                                        whileInView="show">
                                        <a href="https://bento.me/pauline-tlmt" target="_blank" rel="noopener noreferrer">
                                            <SiBento className='text-2xl hover:scale-125 cursor-pointer duration-200' />
                                        </a>
                                        </motion.div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Contactform