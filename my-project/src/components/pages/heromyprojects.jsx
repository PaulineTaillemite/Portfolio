import React from 'react';
import backgroundMp42 from './../assets/my2.mp4';
import { FaArrowRight, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiBento } from "react-icons/si";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

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

            <main className='text-white'>
                <video
                    src={backgroundMp42}
                    autoPlay
                    loop
                    muted
                    className="w-full h-screen absolute z-[-1] object-cover top-0"
                />

                <div className=" px-20"> {/* Réduction du padding horizontal du container */}
                    <div className=' grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[600px] lg:overflow-y-hidden lg:overflow-x-hidden '> {/* Réduction du gap */}
                        {/* TITLE SECTION */}
                        <div className='grid  relative justify-center items-center'>
                            <div className=''>
                                <motion.h1
                                    variants={container(0.2)}
                                    initial="hidden"
                                    whileInView="show"
                                    className='text-4xl md:text-8xl font-bold relative z-20'>
                                    WORKS <br /> & PROJECTS
                                </motion.h1>

                                <motion.div
                                    variants={container(0.6)}
                                    initial="hidden"
                                    whileInView="show"
                                    className='h-[4px] w-[30px] bg-darkcolor mt-2 relative z-20'> {/* Réduction du margin-top */}
                                </motion.div>

                                {/* Social media section */}
                                <div className='flex gap-6 mt-8 relative z-20'> {/* Réduction du margin-top */}
                                    <motion.div
                                        variants={container(1.0)}
                                        initial="hidden"
                                        whileInView="show">
                                        <a href="https://github.com/PaulineTaillemite" target="_blank" rel="noopener noreferrer">
                                            <FaGithub className='text-2xl hover:scale-125 cursor-pointer duration-200' />
                                        </a>
                                    </motion.div>

                                    <motion.div
                                        variants={container(1.2)}
                                        initial="hidden"
                                        whileInView="show">
                                        <a href="https://www.linkedin.com/in/pauline-taillemite-%F0%9F%91%A9%F0%9F%8F%BB%E2%80%8D%F0%9F%8E%A4-1aa80a5b/" target="_blank" rel="noopener noreferrer">
                                            <FaLinkedinIn className='text-2xl hover:scale-125 cursor-pointer duration-200' />
                                        </a>
                                    </motion.div>

                                    <motion.div
                                        variants={container(1.4)}
                                        initial="hidden"
                                        whileInView="show">
                                        <a href="https://www.instagram.com/polinetlmt/" target="_blank" rel="noopener noreferrer">
                                            <FaInstagram className='text-2xl hover:scale-125 cursor-pointer duration-200' />
                                        </a>
                                    </motion.div>

                                    <motion.div
                                        variants={container(1.6)}
                                        initial="hidden"
                                        whileInView="show">
                                        <a href="https://bento.me/pauline-tlmt" target="_blank" rel="noopener noreferrer">
                                            <SiBento className='text-2xl hover:scale-125 cursor-pointer duration-200' />
                                        </a>
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        {/* PRESENTATION SECTION */}
                        <div className='  justify-start place-content-center space-y-6 md:pr-36'> {/* Réduction de l'espace vertical */}
                            <motion.p
                                variants={container(0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                className='text-sm opacity-70 tracking-widest translate-y-3'>
                                - Introduction
                            </motion.p>

                            <motion.h1
                                variants={container(0.4)}
                                initial="hidden"
                                whileInView={"show"}
                                className='text-2xl lg:text-3xl'>
                                Discover My Latest Works.
                            </motion.h1>

                            <motion.p
                                variants={container(0.6)}
                                initial="hidden"
                                whileInView={"show"}
                                className='text-sm leading-6 opacity-90'>
                                Explore a collection of my recent projects, demonstrating my skills in full-stack development. Each project is a testament to my dedication to crafting innovative and efficient solutions.
                            </motion.p>

                            <Link to="/projects">
                            <motion.button
                                variants={container(0.8)}
                                initial="hidden"
                                whileInView={"show"}
                                className='text-darkcolor border-b-2 border-darkcolor text-xl font-bold p-1 flex items-center gap-4 group'>
                                View Projects <FaArrowRight className='text-sm group-hover:translate-x-2 transition duration-200' />
                            </motion.button>
                            </Link>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Hero;
