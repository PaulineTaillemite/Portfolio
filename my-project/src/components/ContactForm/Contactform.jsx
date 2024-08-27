import React from 'react';
import backgroundMp42 from './../assets/my2.mp4';
import { FaArrowRight, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiBento } from "react-icons/si";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";

// Fonction pour gérer les animations avec framer-motion
const container = (delay) => ({
    hidden: {
        opacity: 0,
        x: 100,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4,
            delay: delay,
        },
    },
});

const Hero = () => {
    return (
        <div>

            <main className='bg-black text-white'>

                <div className="container"> {/* Réduction du padding horizontal du container */}
                    <div className=' grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[400px] lg:overflow-y-hidden lg:overflow-x-hidden '> {/* Réduction du gap */}
                        {/* TITLE SECTION */}
                        <div className='grid  relative justify-start items-center'>
                            <div className=''>
                                <motion.h1
                                    variants={container(0.2)}
                                    initial="hidden"
                                    whileInView="show"
                                    className='text-4xl md:text-7xl font-bold relative z-20'>
                                    LOOKING FOR <br />AN APPRENTICE ?
                                </motion.h1>

                                <motion.div
                                    variants={container(0.6)}
                                    initial="hidden"
                                    whileInView="show"
                                    className='h-[4px] w-[30px] bg-red-200 mt-2 relative z-20'> {/* Réduction du margin-top */}
                                </motion.div>

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
                        {/*    CONTACT INFOS */}

                        <div className='  justify-start place-content-center space-y-6 '> {/* Réduction de l'espace vertical */}
                            <motion.p
                                variants={container(0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                className='text-sm opacity-70 tracking-widest translate-y-3'>
                                Let’s Connect and Explore How I Can Be Your Next Developer!
                                <br />
                                #DebugTheWorldTogether
                            </motion.p>

                            <div className='w-[280px] sm:w-[400px] md:w-[1000px]'>

                                <motion.h1
                                    variants={container(0.2)}
                                    initial="hidden"
                                    whileInView="show"
                                    className=' text-4xl md:text-6xl font-bold relative z-20 pb-4'>Pauline Taillemite.</motion.h1>


                                <div className='grid gap-3'>
                                    <motion.div
                                        variants={container(0.4)}
                                        initial="hidden"
                                        whileInView="show"
                                        className="flex gap-3">
                                        <IoLocationOutline />
                                        <p className='text-sm font-extralight opacity-70'> Boulevard de Grenelle, Paris 15, France.</p>
                                    </motion.div>

                                    <motion.div
                                        variants={container(0.6)}
                                        initial="hidden"
                                        whileInView="show"
                                        className="flex gap-3">
                                        <IoMailOutline />
                                        <a href={`mailto:pauline.taillemite@gmail.com`} className='text-sm font-extralight opacity-70'>
                                            pauline.taillemite@gmail.com
                                        </a>
                                    </motion.div>

                                    <motion.div
                                        variants={container(0.8)}
                                        initial="hidden"
                                        whileInView="show"
                                        className="flex gap-3 ">
                                        <IoIosPhonePortrait />
                                        <p className='text-sm font-extralight opacity-70'> +33 6 58 91 09 43</p>
                                    </motion.div>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </main>
        </div>
    );
}

export default Hero;
