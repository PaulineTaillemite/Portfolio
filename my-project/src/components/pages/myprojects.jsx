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

import { FaFigma, FaReact, FaServer, FaCodepen, FaPython, FaPhp, FaLaravel, FaGithub, FaSlack } from "react-icons/fa";
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
      <div className=' bg-black text-white  '>

        <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-2">

          {/* Image Section */}
          <div className="items-center justify-center hover:scale-105 duration-500">
            <div className="mockup-window bg-[#333] border border-[#555]">
              <div className="absolute left-6 flex space-x-2.5">
                {/* Petits ronds personnalisés */}
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="bg-[#222] flex justify-center">
                <img src={SpaceShip} alt="Project" className="rounded-lg shadow-lg" />
              </div>
            </div>
          </div>




          {/* Content Section */}
          <div className="flex flex-col justify-center gap-2">

            {/* Title */}
            <div className='bg-[#e07595]/70 rounded py-2 px-4'>
              <p className="text-2xl lg:text-3xl uppercase font-thin text-white">Enter the SpaceShip</p>
            </div>

            {/* Main Content */}
            <div className="flex gap-2">
              {/* Description */}
              <div className='flex-1 bg-[#ada2fa] rounded py-3 px-4'>
                <p className="rounded text-black text-m font-normal text-justify ">Creation of a browser extension for Google Chrome that sets a new homepage every time a tab is opened. This extension displays a NASA photo along with a description of the image, with all content fetched from the NASA API. Each time a tab is opened, a new image and description are presented. Users can also save the fetched information for later viewing.</p>
              </div>

              {/* Stacks and Button */}
              <div className="flex flex-col justify-between flex-1 gap-2">

                {/* Stacks */}
                <div className="bg-red-200/70 rounded py-3 px-4 grid grid-cols-2 gap-2 text-5xl place-content-center place-items-center">
                  <IoLogoJavascript className="hover:scale-125 transition-transform duration-200 text-white" />
                  <IoLogoHtml5 className="hover:scale-125 transition-transform duration-200 text-white" />
                  <IoLogoCss3 className="hover:scale-125 transition-transform duration-200 text-white" />
                  <FaGithub className="hover:scale-125 transition-transform duration-200 text-white" />
                </div>

                {/* Button */}
                <div className="bg-[#4a9174]  py-3 px-4 text-center">
                  <button className="relative bg-[#67ab8e] text-[#f9ffa1] text-xl font-medium p-2 flex items-center justify-center gap-2 group transition duration-200 ease-in-out transform hover:translate-x-2 tracking-tight rounded-xl">
                    View Live Demo
                    <FaArrowRight className="text-sm group-hover:translate-x-2 transition duration-200" />
                  </button>
                </div>

                <div className="bg-[#e7e3ff]  py-3 px-4 text-center">
                  <button className="relative bg-[#c3b5ff] text-black text-xl font-medium p-2 flex items-center justify-center gap-2 group transition duration-200 ease-in-out transform hover:translate-x-2 tracking-tight rounded-xl">
                    View On GitHub
                    <FaArrowRight className="text-sm group-hover:translate-x-2 transition duration-200" />
                  </button>

                </div>

              </div>
            </div>
          </div>

        </div>


      </div>
    </div>
  );
};

export default MyProjects;
