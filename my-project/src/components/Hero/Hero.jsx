import React from 'react'
import Logo from './../assets/cat_logo.svg'
import Logo3 from './../assets/study_logo.svg'
import { FaArrowRight} from "react-icons/fa"
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiBento } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";



const Hero = () => {
  return (
    <div>
        <main className='bg-lightcolor text-white'>

            <div className="container">

            {/* DIV QUI PREND L'IMAGE ET LA PRESENTATGION */}
            <div className='grid grid-cols-1 md:grid-cols-4 gap-10 min-h-[600px] place-items-center'>

                

            {/* IMAGE SECTION */}
            <div className='grid col-span-2 relative'>

                <div>
                    <h1 className='text-6xl font-bold relative z-20'>Pauline Taillemite.</h1>

                    {/* petit bar sous le titre */}
                    <div className='h-[4px] w-[30px] bg-primary mt-4'></div>        
                </div>

                {/* social media section */}
                <div className='flex gap-5 mt-8'>
                    <FaGithub className='text-2xl hover:scale-125 cursor-pointer duration-200' />
                    <FaLinkedinIn className='text-2xl hover:scale-125 cursor-pointer duration-200' />
                    <FaInstagram className='text-2xl hover:scale-125 cursor-pointer duration-200'/>
                    <SiBento className='text-2xl hover:scale-125 cursor-pointer duration-200'/>

                </div>


                <div>
                    <img src={Logo3} alt="" className='w-[400px] scale-150 relative z-10'/>
                </div>

            </div>

            {/* PRESENTATION SECTION */}
            <div className='space-y-7'>
                <p className='text-sm opacity-70 tracking-widest translate-y-3 '>- Introduction</p>
                <h1 className='text-3xl'>Developer FullStack, based in Paris.</h1>
                <p className='text-sm leading-6 opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias id soluta tenetur ut, iste dolores. Dolor sit amet consectetur adipisicing.</p>
                <button className='text-primary  border-b-2 border-primary text-xl font-bold p-1 flex items-center gap-4 group' >About me <FaArrowRight className='text-sm group-hover:translate-x-2 transition duration-200'/> </button>

            </div>

         


            </div>
            </div>
        </main>
    </div>
  )
}

export default Hero