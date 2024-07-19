import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Project1 from '../assets/project1.png'
import Project2 from '../assets/project2.png'
import Project3 from '../assets/project3.png'

const projectList = [
    { id: 1, title: "Chrome ", img: Project1, link: "#" },
    { id: 2, title: "Web App Api", img: Project2, link: "#" },
    { id: 3, title: "Full Stack Project", img: Project3, link: "#" },
]

const Projects = () => {
    return (
        <div className='bg-[#9cd4d9] py-20 text-darkcolor '>

            <div className="container  ">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center gap-4">

                    <section className=' space-y-7 lg:max-w-[380px]'>
                        <p className='text-sm opacity-70 tracking-widest translate-y-3 '>- Projects</p>
                        <h1 className='text-2xl lg:text-3xl'>All creative works and group projects.</h1>
                        <p className='text-sm leading-6 opacity-70'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi cum quidem amet accusantium. Doloremque dignissimos tenetur, maxime laborum odit ipsa laboriosam omnis ducimus deleniti.</p>
                        <button className=' border-b-2 border-darkcolor text-xl font-bold p-1 flex items-center gap-4 group' > More Projects {" "} <FaArrowRight className='text-sm group-hover:translate-x-2 transition duration-200' /> </button>

                    </section>

                    {/* PROJECT LIST MAPPING */}

                    {
                        projectList.map((project) =>{
                            return(
                                <div 
                                  key={project.id}
                                  className='space-y-4 px-4 items-center justify-center'
                                  >
                                  <img src={project.img} alt="" className='w-full  hover:scale-110 hover:shadow-lg duration-300'/>
                                  <p className='text-2xl font-semibold'>{project.title}</p>
                                </div>
                                
                            );
                        })
                    }

                    

                </div>
            </div>
        </div>
    )
}

export default Projects