import React from 'react'
import { motion } from 'framer-motion'
import Background from './../assets/my2.mp4'
import Navbar from './../Navbar/Navbar'

const projectList = [
    { id: 1, title: "Chrome ", img: "#", link: "https://github.com/PaulineTaillemite/SpaceShip-Chrome-Extension", delay: 0.2, },
    { id: 2, title: "Find Me A Movie ", img: "#", link: "https://github.com/PaulineTaillemite/Projet-collectif-Ada-KoiKonRegarde", delay: 0.2, },
    { id: 3, title: "Web App Api", img: "#", link: "https://github.com/PaulineTaillemite/My-Weather-App", delay: 0.4 },
    { id: 4, title: "My Own Unsplash", img: "#", link: "https://github.com/PaulineTaillemite/My-Weather-App", delay: 0.4 },
    { id: 5, title: "Full Stack Project", img: "#", link: "https://github.com/PaulineTaillemite/vipers-furnitures", delay: 0.6 },
    { id: 6, title: "The Quack Extension", img: "#", link: "https://github.com/PaulineTaillemite/The-Quack-Extension", delay: 0.6 },


]

const myprojects = () => {
  return (
    <div >
         <video
                    src={Background}
                    autoPlay
                    loop
                    muted
                    className="w-full h-screen absolute z-[-1] object-cover top-0"
                />

        <Navbar />  

       {/*  MAPPING THE PROJECTS */}
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

                                    <a href={project.link} target='blank'>
                                    <img src={project.img} alt="" className='w-full  hover:scale-110 hover:shadow-lg duration-300' />
                                    </a>


                                    <p className='text-2xl font-semibold'>{project.title}</p>
                                </motion.div>

                            );
                        })
                    }


    </div>
  )
}

export default myprojects