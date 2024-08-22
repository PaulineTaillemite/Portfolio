import React from 'react';
import { motion } from 'framer-motion';
import Background from './../assets/my2.mp4';
import Navbar from './../Navbar/Navbar';
import SpaceShip from './../assets/ProjectPageCarroussel/spaceship.png';
import Koikonregarde from './../assets/ProjectPageCarroussel/koikonregarde.png';
import Weather from './../assets/ProjectPageCarroussel/weather.png';
import Unsplash from './../assets/ProjectPageCarroussel/unsplash.png';
import Meuble from './../assets/ProjectPageCarroussel/meuble.png';
import HeroProject from './../pages/heromyprojects';

import { FaFigma, FaReact, FaServer, FaCodepen, FaPython, FaPhp, FaLaravel, FaGithub, FaSlack} from "react-icons/fa";
import { IoLogoJavascript, IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";
import { RiTailwindCssFill, RiNotionFill } from "react-icons/ri";
import { DiDjango } from "react-icons/di";
import { SiAsana, } from "react-icons/si";
import { FaArrowRight, FaInstagram, FaLinkedinIn } from "react-icons/fa";



const projectList = [
    { id: 1, title: "Chrome", img: SpaceShip, link: "https://github.com/PaulineTaillemite/SpaceShip-Chrome-Extension", delay: 0.2 },
    { id: 2, title: "Find Me A Movie", img: Koikonregarde, link: "https://github.com/PaulineTaillemite/Projet-collectif-Ada-KoiKonRegarde", delay: 0.2 },
    { id: 3, title: "Web App Api", img: Weather, link: "https://github.com/PaulineTaillemite/My-Weather-App", delay: 0.4 },
    { id: 4, title: "My Own Unsplash", img: Unsplash, link: "https://github.com/PaulineTaillemite/My-Weather-App", delay: 0.4 },
    { id: 5, title: "Full Stack Project", img: Meuble, link: "https://github.com/PaulineTaillemite/vipers-furnitures", delay: 0.6 },
    // { id: 6, title: "The Quack Extension", img: "#", link: "https://github.com/PaulineTaillemite/The-Quack-Extension", delay: 0.6 },
];

const MyProjects = () => {
  return (
    <div className="relative">
      <video
        src={Background}
        autoPlay
        loop
        muted
        className="w-full h-screen absolute z-[-1] object-cover top-0"
      />

      <Navbar />
      <HeroProject />

      {/* Grid container */}
      <div className=' bg-darkcolor text-white  '>

      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Image Section */}
      <div className="flex items-center justify-center hover:scale-105 duration-500">
        <img src={SpaceShip} alt="Project" className="rounded-lg shadow-lg max-w-full h-auto" />
      </div>


      <div className='bg-[#fae7e6]/30 flex items-center gap-6 px-7  hover:shadow-lg hover:bg-[#e07595]/70 hover:scale-105 duration-500'> 
      {/* Content Section */}
      <div className="flex flex-col justify-center">
        <p className="text-2xl lg:text-3xl uppercase font-thin mb-4">Enter the SpaceShip</p>
        <p className="text-sm opacity-70 tracking-widest mb-6">Creation of a browser extension for Google Chrome that sets a new homepage every time a tab is opened. This extension displays a NASA photo along with a description of the image, with all content fetched from the NASA API. Each time a tab is opened, a new image and description are presented. Users can also save the fetched information for later viewing.

</p>
        
        {/* Icons */}
        <div className="flex gap-6 opacity-70 text-4xl mb-6 ">
          <IoLogoJavascript className="hover:scale-125 transition-transform duration-200" />
          <IoLogoHtml5 className="hover:scale-125 transition-transform duration-200" />
          <IoLogoCss3 className="hover:scale-125 transition-transform duration-200" />
          <FaGithub className="hover:scale-125 transition-transform duration-200" />
          {/* Ajoutez d'autres icônes ici si nécessaire */}
        </div>

    
      <button className="text-white  text-xl font-thin p-1 flex items-center gap-4 group transition duration-200 ease-in-out transform hover:translate-x-2">
        View Project
        <FaArrowRight className="text-sm group-hover:translate-x-2 transition duration-200" />
      </button>

      </div>

 
      </div>
      
    </div>

      </div>
    
    </div>
  );
};

export default MyProjects;
