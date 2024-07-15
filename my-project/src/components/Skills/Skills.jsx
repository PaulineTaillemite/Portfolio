import React from 'react'
import { FaFigma, FaReact, FaServer, FaCodepen, FaPython, FaPhp, FaLaravel, FaGithub, FaSlack } from "react-icons/fa";
import { IoLogoJavascript, IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";
import { RiTailwindCssFill, RiNotionFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { DiDjango } from "react-icons/di";
import { SiAsana, } from "react-icons/si";
  


const Skills = () => {
  return (
    <div className='bg-lightcolor'>

       {/*  card section */}
        <div className="container py-10 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center">

                {/* front end section */}
                <div className='bg-[#f55bbc]/30 flex items-center gap-6 px-7 py-12 '>
                    <FaReact className='text-4xl' />
                    <div className='space-y-3'>
                        <p className='text-3xl'>Front End</p>
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                </div>

                {/* back end section */}
                <div className='bg-[#f55bbc]/30 flex items-center gap-6 px-7 py-12'>
                    <FaServer className='text-4xl' />
                    <div className='space-y-3'>
                        <p className='text-3xl'>Back End</p>
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                </div>

                {/* soft skills section */}
                <div className='bg-[#f55bbc]/30 flex items-center gap-6 px-7 py-12'>
                    <FaCodepen className='text-4xl' />
                    <div className='space-y-3'>
                        <p className='text-3xl'>Project Design</p>
                         <p>Lorem ipsum dolor sit.</p> 
                    </div>
                </div>

            </div>
        </div>

        {/* logo stacks section */}
        <div className='container text-white '>
            <div className='container py-10  text-6xl gap-5 place-items-center justify-center grid grid-cols-3 md:grid-cols-4 '>
                <FaReact className='hover:rotate-45 duration-200  ' />
                <IoLogoJavascript className='hover:scale-125 duration-200 ' />
                <IoLogoHtml5 className='hover:scale-125 duration-200' />
                <IoLogoCss3 className='hover:scale-125 duration-200'/>
                <RiTailwindCssFill className='hover:scale-125 duration-200'/>
                {/* <TbBrandFramerMotion className='hover:scale-125 duration-200'/> */}
                <FaPython className='hover:rotate-45 duration-200'/>
                <DiDjango className='hover:scale-125 duration-200'/>
                <FaPhp className='hover:scale-125 duration-200'/>
             {/*    <FaLaravel className='hover:scale-125 duration-200'/> */}
                <FaGithub className='hover:scale-125 duration-200'/>
                <FaFigma className='hover:scale-125 duration-200'/>
                <RiNotionFill className='hover:scale-125 duration-200'/>
               {/*  <FaSlack className='hover:rotate-45 duration-200'/> */}
                <SiAsana className='hover:scale-125 duration-200'/>
            </div>
        </div>


    </div>
  )
}

export default Skills