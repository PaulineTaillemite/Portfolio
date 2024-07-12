import React from 'react'
import Logo from './../assets/cat_logo.svg'
import Logo3 from './../assets/study_logo.svg'
import { FaArrowRight } from "react-icons/fa"
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiBento } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";



const Hero = () => {
    return (
        <div>
            <main className='bg-lightcolor text-white'>
                <div className="container">
                    <div className='grid grid-cols-1 md:grid-cols-3  gap-12 min-h-[600px] lg:overflow-y-hidden place-items-center py-20 md:py-0'>
                        {/* IMAGE SECTION */}
                        <div className='grid col-span-2 relative h-full justify-center items-center'>
                            <div className='w-[280px] sm:w-[400px] md:w-[450px]'>
                                <h1 className=' text-4xl md:text-6xl font-bold relative z-20'>Pauline <br/> Taillemite.</h1>
                                <div className='h-[4px] w-[30px] bg-primary mt-4'></div>
                            {/* social media section */}
                            <div className='flex gap-6 mt-24'>
                                <FaGithub className='text-2xl hover:scale-125 cursor-pointer duration-200' />
                                <FaLinkedinIn className='text-2xl hover:scale-125 cursor-pointer duration-200' />
                                <FaInstagram className='text-2xl hover:scale-125 cursor-pointer duration-200' />
                                <SiBento className='text-2xl hover:scale-125 cursor-pointer duration-200' />
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