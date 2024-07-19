import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Project1 from '../assets/project1.png'
import Project2 from '../assets/project2.png'
import Project3 from '../assets/project3.png'
import { motion } from "framer-motion";


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

const projectList = [
    { id: 1, title: "Chrome ", img: Project1, link: "#", delay: 0.2, },
    { id: 2, title: "Web App Api", img: Project2, link: "#", delay: 0.4 },
    { id: 3, title: "Full Stack Project", img: Project3, link: "#", delay: 0.6 },
]

const Projects = () => {
    return (
        <div className='bg-[#9cd4d9] py-20 text-darkcolor '>

            <div className="container  ">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center gap-4">

                    <section className=' space-y-7 lg:max-w-[380px]'>
                        <motion.p 
                        variants={fadeUp(0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        className='text-sm opacity-70 tracking-widest translate-y-3 '>- Projects</motion.p>

                        <motion.h1 
                        variants={fadeUp(0.4)}
                        initial="hidden"
                        whileInView={"show"}
                        className='text-2xl lg:text-3xl'>All creative works and group projects.</motion.h1>

                        <motion.p 
                        variants={fadeUp(0.6)}
                        initial="hidden"
                        whileInView={"show"}
                        className='text-sm leading-6 opacity-70'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi cum quidem amet accusantium. Doloremque dignissimos tenetur, maxime laborum odit ipsa laboriosam omnis ducimus deleniti.</motion.p>

                        <motion.button 
                        variants={fadeUp(0.8)}
                        initial="hidden"
                        whileInView={"show"}
                        className=' border-b-2 border-darkcolor text-xl font-bold p-1 flex items-center gap-4 group' > More Projects {" "} <FaArrowRight className='text-sm group-hover:translate-x-2 transition duration-200' /> </motion.button>

                    </section>

                    {/* PROJECT LIST MAPPING */}

                    {
                        projectList.map((project) => {
                            return (
                                <motion.div
                                variants={fadeUp(project.delay)}
                                initial="hidden"
                                whileInView={"show"}
                                    key={project.id}
                                    className='space-y-4 px-4 items-center justify-center'
                                >
                                    <img src={project.img} alt="" className='w-full  hover:scale-110 hover:shadow-lg duration-300' />
                                    <p className='text-2xl font-semibold'>{project.title}</p>
                                </motion.div>

                            );
                        })
                    }



                </div>
            </div>
        </div>
    )
}

export default Projects