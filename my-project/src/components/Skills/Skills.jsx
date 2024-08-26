import React from 'react'
import { FaFigma, FaReact, FaServer, FaCodepen, FaPython, FaPhp, FaLaravel, FaGithub, FaSlack } from "react-icons/fa";
import { IoLogoJavascript, IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";
import { RiTailwindCssFill, RiNotionFill } from "react-icons/ri";
import { DiDjango } from "react-icons/di";
import { SiAsana, } from "react-icons/si";
import { motion } from "framer-motion"; 
  
const fadeUp = (delay) =>({
    hidden:{
        opacity:0,
        y:60
    },
    show:{
        opacity:1,
        y:0,
        transition:{
            duration:0.2,
            delay:delay,
        }
    }
})


const Skills = () => {
  return (
    <div className='bg-[#9cd4d9]'>

       {/*  card section */}
        <div className="container py-10 text-black">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center transform -translate-y-20">

                {/* front end section */}
                <motion.div 
                variants={fadeUp(0.2)}
                initial="hidden"
                whileInView={"show"}
                
                className='bg-[#fae7e6]/30 flex items-center gap-6 px-7 py-12 hover:shadow-lg hover:bg-[#e07595]/70 hover:scale-105 duration-500'>
                    <FaReact className='text-4xl' />
                    <div className='space-y-3'>
                        <p className='text-3xl'>Front End</p>
                        <p>Crafting interfaces</p>
                    </div>
                </motion.div>

                {/* back end section */}
                <motion.div 
                variants={fadeUp(0.4)}
                initial="hidden"
                whileInView={"show"}
                className='bg-[#fae7e6]/30 flex items-center gap-6 px-7 py-12 hover:shadow-lg hover:bg-[#e07595]/70 hover:scale-105 duration-500'>
                    <FaServer className='text-4xl' />
                    <div className='space-y-3'>
                        <p className='text-3xl'>Back End</p>
                        <p>Connecting people & data</p>
                    </div>
                </motion.div>

                {/* soft skills section */}
                <motion.div 
                variants={fadeUp(0.6)}
                initial="hidden"
                whileInView={"show"}
                className='bg-[#fae7e6]/30 flex items-center gap-6 px-7 py-12 hover:shadow-lg hover:bg-[#e07595]/70 hover:scale-105 duration-500'>
                    <FaCodepen className='text-4xl' />
                    <div className='space-y-3'>
                        <p className='text-3xl'>Project Design</p>
                        <p>From vision to Figma</p>
                         
                    </div>
                </motion.div>

            </div>
        </div>

        {/* logo stacks section */}
        <motion.div 
        initial={{opacity:0, scale:0}}
        whileInView={{opacity:1, scale:1, transition:{duration:1.2}}}
        className='container text-darkcolor '>
            <div className='container py-2  text-6xl gap-5 place-items-center justify-center grid grid-cols-3 md:grid-cols-4 '>
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
        </motion.div>


    </div>
  )
}

export default Skills