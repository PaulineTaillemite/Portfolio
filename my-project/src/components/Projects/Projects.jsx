import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const lesprojets = [
    { id: 1, title: "project 1", img: "#", link: "#" },
    { id: 2, title: "project 2", img: "#", link: "#" },
    { id: 3, title: "project 3", img: "#", link: "#" },
]

const Projects = () => {
    return (
        <div className='bg-lightcolor py-10 '>

            <div className="container  ">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">

                    <section className=' space-y-7 lg:max-w-[380px]'>
                        <p className='text-sm opacity-70 tracking-widest translate-y-3 '>- Projects</p>
                        <h1 className='text-2xl lg:text-3xl'>All creative works and group projects.</h1>
                        <p className='text-sm leading-6 opacity-70'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi cum quidem amet accusantium. Doloremque dignissimos tenetur, maxime laborum odit ipsa laboriosam omnis ducimus deleniti.</p>
                        <button className=' border-b-2 border-lightcolor text-xl font-bold p-1 flex items-center gap-4 group' > More Projects {" "} <FaArrowRight className='text-sm group-hover:translate-x-2 transition duration-200' /> </button>

                    </section>

                </div>
            </div>
        </div>
    )
}

export default Projects