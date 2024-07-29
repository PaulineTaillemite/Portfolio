import React from 'react'
import { motion } from 'framer-motion'
import Background from './../assets/my2.mp4'
import Navbar from './../Navbar/Navbar'



const aboutme = () => {
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
    </div>
);
}

export default aboutme