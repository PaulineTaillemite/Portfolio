import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Contact = () => {
  return (
    <main className='bg-darkcolor text-white '>
        
        <div className="container py-10 lg:py-20 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                
                {/* left side */}
                <section className=' space-y-7 lg:max-w-[380px]'>
                            <p className='text-sm opacity-70 tracking-widest translate-y-3 '>- About me</p>
                            <h1 className='text-2xl lg:text-3xl'>Put here a catch phrase.</h1>
                            <p className='text-sm leading-6 opacity-70'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi cum quidem amet accusantium. Doloremque dignissimos tenetur, maxime laborum odit ipsa laboriosam omnis ducimus deleniti. Ut, officiis minima odio consectetur non aliquid dignissimos similique sapiente. In molestias quisquam quidem accusantium vel animi? Deleniti dicta ut culpa placeat itaque saepe eaque nam?.</p>
                            <button className='text-lightcolor  border-b-2 border-lightcolor text-xl font-bold p-1 flex items-center gap-4 group' > Download my resume {" "} <FaArrowRight className='text-sm group-hover:translate-x-2 transition duration-200' /> </button>

                        </section>
                {/* right side */} 
                <div className='space-y-7 lg:max-w-[500]' >
                <h1 className='text-2xl lg:text-3xl'>Driven by creative and accessible design, commited to dynamic interface.</h1>
                     <p className='text-sm leading-6 opacity-70'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse iure itaque temporibus animi ducimus, perspiciatis iste vitae dolore harum earum?</p>
                     

                    {/* stacks sections */}
                     <div className='grid grid-cols-2 gap-4'>
                     <div className='flex gap-3 items-center'>
                        <p className='text-6xl font-bold text-lightcolor'>2</p>
                        <p className='font-semibold'>Years of Fullstack Web Development education in Ada Tech School.</p>
                     </div>

                     <div className='flex gap-3 items-center'>
                        <p className='text-6xl font-bold text-lightcolor'>120</p>
                        <p className='font-semibold'>Completed projects </p>
                     </div>

                     </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Contact