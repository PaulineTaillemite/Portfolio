import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";

const Skills = () => {
  return (
    <div className='bg-lightcolor'>

        <div className="container py-10 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center">

                {/* front end section */}
                <div className='bg-[#f55bbc]/30 flex items-center gap-6 p-7 '>
                    <FaReact className='text-4xl' />
                    <div className='space-y-3'>
                        <p className='text-3xl'>Front End</p>
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                </div>

                {/* back end section */}
                <div className='bg-[#f55bbc]/30 flex items-center gap-6 p-7'>
                    <FaServer className='text-4xl' />
                    <div className='space-y-3'>
                        <p className='text-3xl'>Back End</p>
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                </div>

                {/* soft skills section */}
                <div className='bg-[#f55bbc]/30 flex items-center gap-6 p-7'>
                    <FaCodepen className='text-4xl' />
                    <div className='space-y-3'>
                        <p className='text-3xl'>Project Design</p>
                        {/* <p>Lorem ipsum dolor sit.</p> */}
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills