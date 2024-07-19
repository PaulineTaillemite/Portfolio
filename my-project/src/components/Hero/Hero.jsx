import React from 'react'
import Navbar from '../Navbar/Navbar';
import Logo from './../assets/cat_logo.svg';
import Logo3 from './../assets/study_logo.svg';
import myFace from './../assets/myface/8.png'

import backgroundMp42 from './../assets/my2.mp4';

import { FaArrowRight, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiBento } from "react-icons/si";
import { motion } from "framer-motion";


/* fonction qui retourne un objet qui contient deux états d'animation : hidden et show. */

const container = (delay) => ({
    /* état initial de l'objet invisible et position initial de +100 dans l'axe horizontal*/
    hidden: {
        opacity: 0,
        x: 100,
    },
    /* état final de l'objet avec une opacity de 1 et une position à 0 */
    show: {
        opacity: 1,
        x: 0,
        /* L'objet transition à l'intérieur de show définit comment la transition entre ces deux états se déroule :
        duration : durée de la transition en secondes (ici 0.5 secondes).
        delay : délai avant le début de la transition, passé en paramètre à la fonction container. */
        transition: {
            duration: 0.4,
            delay: delay,
        },
    },
});



const Hero = () => {
    return (
        <div >
            <Navbar />
            <main className=' text-white'>
                <video
                    src={backgroundMp42}
                    autoPlay
                    loop
                    muted
                    className="w-full h-screen absolute z-[-1] object-cover top-0"
                />

                <div className="container ">
                    <div className='grid grid-cols-1 md:grid-cols-3  gap-12 min-h-[600px] lg:overflow-y-hidden lg:overflow-x-hidden place-items-center py-20 md:py-0'>
                        {/* IMAGE SECTION */}
                        <div className='grid col-span-2 relative h-full justify-center items-center'>
                            <div className='w-[280px] sm:w-[400px] md:w-[450px]'>

                                <motion.h1
                                    variants={container(0.2)} /* fonction container appelé avec un delay de 0.2 */
                                    initial="hidden"
                                    whileInView="show" /* définit que l'élement doit passé à l'état show lorsqu'il entre dans la vue  */
                                    className='text-4xl md:text-6xl font-bold relative z-20'>Pauline <br /> Taillemite.
                                </motion.h1>

                                <motion.div
                                    variants={container(0.6)}
                                    initial="hidden"
                                    whileInView="show"
                                    className='h-[4px] w-[30px] bg-darkcolor mt-4 relative z-20'></motion.div>

                                {/* social media section */}
                                <div className='flex gap-6 mt-12 relative z-20'>
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
                            <div className='absolute -right-6 md:-right-32 bottom-0 z-10'>
                                <motion.img
                                    initial={{ x: -100 }}
                                    whileInView={{ x: 0 }}
                                    transition={{ duration: 1.1, type: "spring" }}
                                    src={myFace}
                                    alt=""
                                    className='scale-100 w-[150px] sm:w-[250px] md:w-full'
                                />
                            </div>
                        </div>

                        {/* PRESENTATION SECTION */}
                        <div className='space-y-7'>

                            <motion.p
                                variants={container(0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                className='text-sm opacity-70 tracking-widest translate-y-3 '>
                                - Introduction</motion.p>


                            <motion.h1
                                variants={container(0.4)}
                                initial="hidden"
                                whileInView={"show"}
                                className='text-2xl lg:text-3xl'>Developer FullStack, based in Paris.</motion.h1>

                            <motion.p
                                variants={container(0.6)}
                                initial="hidden"
                                whileInView={"show"}
                                className='text-sm leading-6 opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias id soluta tenetur ut, iste dolores. Dolor sit amet consectetur adipisicing.</motion.p>


                            <motion.button
                                variants={container(0.8)}
                                initial="hidden"
                                whileInView={"show"}
                                className='text-darkcolor  border-b-2 border-darkcolor text-xl font-bold p-1 flex items-center gap-4 group' >About me <FaArrowRight className='text-sm group-hover:translate-x-2 transition duration-200' /> </motion.button>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Hero