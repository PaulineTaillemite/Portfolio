import React from 'react'
import Logo from './../assets/cat_logo.svg'
import Logo3 from './../assets/study_logo.svg'
import { FaArrowRight } from "react-icons/fa"
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiBento } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import backgroundMp42 from './../assets/my2.mp4'



const Hero = () => {
    return (
        <div>
            <main className=' text-white'>
                <video
                    src={backgroundMp42}
                    autoPlay
                    loop
                    muted
                    className="w-full h-screen absolute z-[-1] object-cover  top-0"
                />

                <div className="container">
                    <div className='grid grid-cols-1 md:grid-cols-3  gap-12 min-h-[600px] lg:overflow-y-hidden place-items-center py-20 md:py-0'>
                        {/* IMAGE SECTION */}
                        <div className='grid col-span-2 relative h-full justify-center items-center'>
                            <div className='w-[280px] sm:w-[400px] md:w-[450px]'>
                                <h1 className=' text-4xl md:text-6xl font-bold relative z-20'>Pauline <br /> Taillemite.</h1>
                                <div className='h-[4px] w-[30px] bg-primary mt-4'></div>
                                {/* social media section */}
                                <div className='flex gap-6 mt-12'>
                                    <a href="https://github.com/PaulineTaillemite" target="_blank" rel="noopener noreferrer">
                                        <FaGithub className='text-2xl hover:scale-125 cursor-pointer duration-200' />
                                    </a>
                                    <a href="https://www.linkedin.com/in/pauline-taillemite-%F0%9F%91%A9%F0%9F%8F%BB%E2%80%8D%F0%9F%8E%A4-1aa80a5b/" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedinIn className='text-2xl hover:scale-125 cursor-pointer duration-200' />
                                    </a>
                                    <a href="https://www.instagram.com/polinetlmt/" target="_blank" rel="noopener noreferrer">
                                        <FaInstagram className='text-2xl hover:scale-125 cursor-pointer duration-200' />
                                    </a>
                                    <a href="https://bento.me/pauline-tlmt" target="_blank" rel="noopener noreferrer">
                                        <SiBento className='text-2xl hover:scale-125 cursor-pointer duration-200' />
                                    </a>
                                </div>
                            </div>
                            <div className='absolute -right-6 md:-right-32 bottom-0'>
                                <img src={Logo3}
                                    alt=""
                                    className='scale-150 relative z-10 w-[150px] sm:w-[250px] md:w-full'
                                />
                            </div>
                        </div>

                        {/* PRESENTATION SECTION */}
                        <div className='space-y-7'>
                            <p className='text-sm opacity-70 tracking-widest translate-y-3 '>- Introduction</p>
                            <h1 className='text-2xl lg:text-3xl'>Developer FullStack, based in Paris.</h1>
                            <p className='text-sm leading-6 opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias id soluta tenetur ut, iste dolores. Dolor sit amet consectetur adipisicing.</p>
                            <button className='text-primary  border-b-2 border-primary text-xl font-bold p-1 flex items-center gap-4 group' >About me <FaArrowRight className='text-sm group-hover:translate-x-2 transition duration-200' /> </button>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Hero