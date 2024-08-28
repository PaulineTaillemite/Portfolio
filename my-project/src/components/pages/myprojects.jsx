import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './../Navbar/Navbar';
import SpaceShip from './../assets/ProjectPageCarroussel/spaceship.png';
import Koikonregarde from './../assets/ProjectPageCarroussel/koikonregarde.png';
import Weather from './../assets/ProjectPageCarroussel/weather.png';
import Unsplash from './../assets/ProjectPageCarroussel/unsplash.png';
import Meuble from './../assets/ProjectPageCarroussel/meuble.png';
import HeroProject from './../pages/heromyprojects';
import Logo from '.././assets/logo_gurl.svg'

import { FaFigma, FaReact, FaServer, FaCodepen, FaPython, FaPhp, FaLaravel, FaGithub, FaSlack } from "react-icons/fa";
import { IoLogoJavascript, IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";
import { RiTailwindCssFill, RiNotionFill } from "react-icons/ri";
import { DiDjango } from "react-icons/di";
import { FaArrowRight, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// Fonction pour gérer les animations avec framer-motion
const container = (delay) => ({
  hidden: {
    opacity: 0,
    x: 300,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      delay: delay,

    },
  },
});

const container2 = (delay) => ({
  hidden: {
    opacity: 0,
    x: -300,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      delay: delay,
    },
  },
});

const iconAnimation = (delay) => ({
  hidden: {
    opacity: 0,
    x: 300,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      delay: delay,
    },
  },
});
const iconAnimation2 = (delay) => ({
  hidden: {
    opacity: 0,
    x: -300,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      delay: delay,
    },
  },
});

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
    <div className="relative bg-black overflow-x-hidden">


      <Navbar />
      <HeroProject />

      {/* PROJECT UNSPLASH */}
      <div className='bg-black text-white'>
        <div className="container mx-auto pt-24 px-4 sm:px-6 md:px-8 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Image */}
          <motion.div
            variants={container2(0.2)}
            initial="hidden"
            whileInView="show"
            className="flex items-center justify-center">
            <div className="mockup-window bg-[#333] border border-[#555] max-w-full w-full mx-auto hover:scale-105 duration-500">

              <div className="bg-[#222] flex justify-center">
                <img src={Unsplash} alt="Project" className="rounded-lg shadow-lg w-full" />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="flex flex-col justify-center gap-4">

            {/* Titre du projet */}
            <motion.div
              variants={container(0.2)}
              initial="hidden"
              whileInView="show"
              className="bg-black py-3 pl-2 text-left">
              <p className="text-white text-5xl sm:text-6xl md:text-6xl font-medium group hover:scale-105 duration-500 tracking-tight lowercase">
                My own unsplash
              </p>
            </motion.div>

            {/* Main Content */}
            <div className="flex flex-col md:flex-row gap-4">

              {/* Description */}
              <motion.div
                variants={container(0.4)}
                initial="hidden"
                whileInView="show"
                className='flex-1 bg-[#ada2fa] py-3 px-4'>
                <p className="rounded text-black text-base md:text-lg font-normal text-justify">
                  Developed a personalized web application that mimics the functionality of Unsplash. This app allows users to search for and display images based on their input. It leverages the Unsplash API to fetch and present high-quality images in real-time.
                </p>
              </motion.div>

              {/* Stacks and Button */}
              <div className="flex flex-col justify-between flex-1 gap-4">

                {/* Stacks */}
                <motion.div
                  variants={container(0.5)}
                  initial="hidden"
                  whileInView="show"
                  className="bg-[#f9ff9e] py-3 px-4 grid grid-cols-2 gap-4 text-4xl sm:text-5xl place-content-center place-items-center">
                  <motion.div variants={iconAnimation(0.8)}>
                    <IoLogoJavascript className="hover:scale-125 transition-transform duration-200 text-darkcolor" />
                  </motion.div>
                  <motion.div variants={iconAnimation(1)}>
                    <IoLogoHtml5 className="hover:scale-125 transition-transform duration-200 text-darkcolor" />
                  </motion.div>
                  <motion.div variants={iconAnimation(1.2)}>
                    <IoLogoCss3 className="hover:scale-125 transition-transform duration-200 text-darkcolor" />
                  </motion.div>
                  <motion.div variants={iconAnimation(1.4)}>
                    <FaGithub className="hover:scale-125 transition-transform duration-200 text-darkcolor" />
                  </motion.div>
                </motion.div>

                {/* Button */}
                <div className="flex flex-col gap-4">
                  <motion.div
                    variants={container(0.7)}
                    initial="hidden"
                    whileInView="show"
                    className="bg-[#4a9174] py-3 px-4 text-center">
                    <motion.div variants={iconAnimation(0.8)}>
                      <a href="https://my-own-unsplash.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <button className="relative bg-[#67ab8e] text-[#f9ffa1] text-lg md:text-xl font-medium p-2 flex items-center justify-center gap-2 group transition duration-200 ease-in-out transform hover:translate-x-2 tracking-tight rounded-xl">
                          View Live Demo
                          <FaArrowRight className="text-sm group-hover:translate-x-2 transition duration-200" />
                        </button>
                      </a>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    variants={container(0.9)}
                    initial="hidden"
                    whileInView="show"
                    className="bg-[#e7e3ff] py-3 px-4 text-center">
                    <motion.div variants={iconAnimation(1.1)}>
                      <a href="https://github.com/PaulineTaillemite/My-Own-Unsplash/blob/main/readme.md" target='_blank' rel='noopener noreferrer'>
                        <button className="relative bg-[#c3b5ff] text-black text-lg md:text-xl font-medium p-2 flex items-center justify-center gap-2 group transition duration-200 ease-in-out transform hover:translate-x-2 tracking-tight rounded-xl">
                          View On GitHub
                          <FaArrowRight className="text-sm group-hover:translate-x-2 transition duration-200" />
                        </button>
                      </a>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PROJECT VIPERS */}
      <div className='bg-black text-white'>
        <div className="container mx-auto pt-36 md:pt-0 lg:pt-0 px-4 sm:px-6 md:px-8 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Content Section */}
          <div className="flex flex-col justify-center gap-4">

            {/* Title */}
            <motion.div
              variants={container2(0.2)}
              initial="hidden"
              whileInView="show"
              className="bg-black py-3 px-2 text-right md:text-right">
              <p className="text-white text-5xl sm:text-6xl md:text-6xl  font-medium group hover:scale-105 duration-500 tracking-tight lowercase">
                Furnitures Website
              </p>
            </motion.div>

            {/* Main Content */}
            <div className="flex flex-col md:flex-row gap-4">

              {/* Description */}
              <motion.div
                variants={container2(0.4)}
                initial="hidden"
                whileInView="show"
                className='flex-1 bg-[#ada2fa] py-3 px-4'>
                <p className="rounded text-black text-base md:text-lg font-normal text-justify">
                  Web application for furniture sales created collaboratively. The front-end was designed with React and Tailwind for a modern and responsive interface, while the back-end was developed with Django to ensure robust and secure data management. The project was executed using Agile methodology, promoting effective communication and rapid adaptation.
                </p>
              </motion.div>

              {/* Stacks and Button */}
              <div className="flex flex-col justify-between flex-1 gap-4">

                {/* Stacks */}
                <motion.div
                  variants={container2(0.9)}
                  initial="hidden"
                  whileInView="show"
                  className="bg-[#f9ff9e] py-3 px-4 grid grid-cols-2 gap-4 text-4xl sm:text-5xl place-content-center place-items-center">
                  <motion.div variants={iconAnimation2(0.8)}>
                    <FaReact className="hover:scale-125 transition-transform duration-200 text-darkcolor" />
                  </motion.div>
                  <motion.div variants={iconAnimation2(1)}>
                    <RiTailwindCssFill className="hover:scale-125 transition-transform duration-200 text-darkcolor" />
                  </motion.div>
                  <motion.div variants={iconAnimation2(1.2)}>
                    <FaPython className="hover:scale-125 transition-transform duration-200 text-darkcolor" />
                  </motion.div>
                  <motion.div variants={iconAnimation2(1.4)}>
                    <DiDjango className="hover:scale-125 transition-transform duration-200 text-darkcolor" />
                  </motion.div>
                </motion.div>

                {/* Buttons */}
                <div className="flex flex-col gap-4">
                  <motion.div
                    variants={container2(0.5)}
                    initial="hidden"
                    whileInView="show"
                    className="bg-[#4a9174] py-3 px-4 text-center">
                    <motion.div variants={iconAnimation2(0.8)}>
                      <a href="https://github.com/PaulineTaillemite/vipers-furnitures/blob/main/README.md" target='_blank' rel='noopener noreferrer'>
                        <button className="relative bg-[#67ab8e] text-[#f9ffa1] text-lg md:text-xl font-medium p-2 flex items-center justify-center gap-2 group transition duration-200 ease-in-out transform hover:translate-x-2 tracking-tight rounded-xl">
                          View Live Demo
                          <FaArrowRight className="text-sm group-hover:translate-x-2 transition duration-200" />
                        </button>
                      </a>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    variants={container2(0.7)}
                    initial="hidden"
                    whileInView="show"
                    className="bg-[#e7e3ff] py-3 px-4 text-center">
                    <motion.div variants={iconAnimation2(1)}>
                      <a href="https://github.com/PaulineTaillemite/vipers-furnitures/blob/main/README.md" target='_blank' rel='noopener noreferrer'>
                        <button className="relative bg-[#c3b5ff] text-black text-lg md:text-xl font-medium p-2 flex items-center justify-center gap-2 group transition duration-200 ease-in-out transform hover:translate-x-2 tracking-tight rounded-xl">
                          View On GitHub
                          <FaArrowRight className="text-sm group-hover:translate-x-2 transition duration-200" />
                        </button>
                      </a>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <motion.div
            variants={container(0.2)}
            initial="hidden"
            whileInView="show"
            className="flex items-center justify-center">
            <div className="mockup-window bg-[#333] border border-[#555] max-w-full mx-auto hover:scale-105 duration-500">

              <div className="bg-[#222] flex justify-center">
                <img src={Meuble} alt="Project" className="rounded-lg shadow-lg w-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>


      {/* PROJECT SPACESHIP */}
      <div className='bg-black text-white'>
        <div className="container mx-auto pt-36 md:pt-0 lg:pt-0 px-4 sm:px-6 md:px-8 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Image Section */}
          <motion.div
            variants={container2(0.2)}
            initial="hidden"
            whileInView="show"
            className="flex items-center justify-center">
            <div className="mockup-window bg-[#333] border border-[#555] max-w-full w-full mx-auto hover:scale-105 duration-500">
              <div className="bg-[#222] flex justify-center">
                <img src={SpaceShip} alt="Project" className="rounded-lg shadow-lg w-full" />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="flex flex-col justify-center gap-4">

            {/* Title */}
            <motion.div
              variants={container(0.2)}
              initial="hidden"
              whileInView="show"
              className="bg-black py-3 px-4 text-left">
              <p className="text-white text-5xl sm:text-6xl md:text-6xl  font-medium group hover:scale-105 duration-500 tracking-tight lowercase">
                Enter the SpaceShip
              </p>
            </motion.div>

            {/* Main Content */}
            <div className="flex flex-col md:flex-row gap-4">

              {/* Description */}
              <motion.div
                variants={container(0.4)}
                initial="hidden"
                whileInView="show"
                className='flex-1 bg-[#ada2fa] py-3 px-4'>
                <p className="rounded text-black text-base md:text-lg font-normal text-justify">
                  Creation of a browser extension for Google Chrome that sets a new homepage every time a tab is opened. This extension displays a NASA photo along with a description of the image, with all content fetched from the NASA API. Each time a tab is opened, a new image and description are presented. Users can also save the fetched information for later viewing.
                </p>
              </motion.div>

              {/* Stacks and Button */}
              <div className="flex flex-col justify-between flex-1 gap-4">

                {/* Stacks */}
                <motion.div
                  variants={container(0.5)}
                  initial="hidden"
                  whileInView="show"
                  className="bg-[#f9ff9e] py-3 px-4 grid grid-cols-2 gap-4 text-4xl sm:text-5xl place-content-center place-items-center">
                  <motion.div variants={iconAnimation(0.8)}>
                    <IoLogoJavascript className="hover:scale-125 transition-transform duration-200 text-darkcolor" />
                  </motion.div>
                  <motion.div variants={iconAnimation(1)}>
                    <IoLogoHtml5 className="hover:scale-125 transition-transform duration-200 text-darkcolor" />
                  </motion.div>
                  <motion.div variants={iconAnimation(1.2)}>
                    <IoLogoCss3 className="hover:scale-125 transition-transform duration-200 text-darkcolor" />
                  </motion.div>
                  <motion.div variants={iconAnimation(1.4)}>
                    <FaGithub className="hover:scale-125 transition-transform duration-200 text-darkcolor" />
                  </motion.div>
                </motion.div>

                {/* Buttons */}
                <div className="flex flex-col gap-4">
                  <motion.div
                    variants={container(0.7)}
                    initial="hidden"
                    whileInView="show"
                    className="bg-[#4a9174] py-3 px-4 text-center">
                    <motion.div variants={iconAnimation(0.8)}>
                      <a href="https://space-ship-chrome-extension.vercel.app/" target='_blank' rel='noopener noreferrer'>
                        <button className="relative bg-[#67ab8e] text-[#f9ffa1] text-lg md:text-xl font-medium p-2 flex items-center justify-center gap-2 group transition duration-200 ease-in-out transform hover:translate-x-2 tracking-tight rounded-xl">
                          View Live Demo
                          <FaArrowRight className="text-sm group-hover:translate-x-2 transition duration-200" />
                        </button>
                      </a>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    variants={container(0.9)}
                    initial="hidden"
                    whileInView="show"
                    className="bg-[#e7e3ff] py-3 px-4 text-center">
                    <motion.div variants={iconAnimation(1.1)}>
                      <a href="https://github.com/PaulineTaillemite/SpaceShip-Chrome-Extension/blob/main/README.md" target='_blank' rel='noopener noreferrer'>
                        <button className="relative bg-[#c3b5ff] text-black text-lg md:text-xl font-medium p-2 flex items-center justify-center gap-2 group transition duration-200 ease-in-out transform hover:translate-x-2 tracking-tight rounded-xl">
                          View On GitHub
                          <FaArrowRight className="text-sm group-hover:translate-x-2 transition duration-200" />
                        </button>
                      </a>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* PROJECT WEATHER APP */}
      <div className='bg-black text-white'>
        <div className="container mx-auto pt-36 md:pt-0 lg:pt-0 px-4 sm:px-6 md:px-8 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Content Section */}
          <div className="flex flex-col justify-center gap-4">

            {/* Title */}
            <motion.div
              variants={container2(0.2)}
              initial="hidden"
              whileInView="show"
              className="bg-black py-3 px-2 text-left md:text-right">
              <p className="text-white text-5xl sm:text-6xl md:text-6xl font-medium group hover:scale-105 duration-500 tracking-tight lowercase">
                My Weather App
              </p>
            </motion.div>

            {/* Main Content */}
            <div className="flex flex-col md:flex-row gap-4">

              {/* Description */}
              <motion.div
                variants={container2(0.4)}
                initial="hidden"
                whileInView="show"
                className='flex-1 bg-[#ada2fa] py-3 px-4'>
                <p className="rounded text-black text-base md:text-lg font-normal text-justify">
                  "My Weather App" is a web application that provides a clear and instant view of weather conditions. By leveraging the Open Weather API, this app displays real-time weather updates and forecasts for any global location. With its user-friendly and responsive interface, it keeps you informed of weather changes wherever you are.
                </p>
              </motion.div>

              {/* Stacks and Buttons */}
              <div className="flex flex-col justify-between flex-1 gap-4">

                {/* Stacks */}
                <motion.div
                  variants={container2(0.9)}
                  initial="hidden"
                  whileInView="show"
                  className="bg-[#f9ff9e] py-3 px-4 grid grid-cols-2 gap-4 text-4xl sm:text-5xl place-content-center place-items-center">
                  <motion.div variants={iconAnimation2(0.8)}>
                    <IoLogoJavascript className="hover:scale-125 transition-transform duration-200 text-darkcolor" />
                  </motion.div>
                  <motion.div variants={iconAnimation2(1)}>
                    <IoLogoHtml5 className="hover:scale-125 transition-transform duration-200 text-darkcolor" />
                  </motion.div>
                  <motion.div variants={iconAnimation2(1.2)}>
                    <IoLogoCss3 className="hover:scale-125 transition-transform duration-200 text-darkcolor" />
                  </motion.div>
                  <motion.div variants={iconAnimation2(1.4)}>
                    <FaGithub className="hover:scale-125 transition-transform duration-200 text-darkcolor" />
                  </motion.div>
                </motion.div>

                {/* Buttons */}
                <div className="flex flex-col gap-4">

                  {/* Button - View Live Demo */}
                  <motion.div
                    variants={container2(0.5)}
                    initial="hidden"
                    whileInView="show"
                    className="bg-[#4a9174] py-3 px-4 text-center">
                    <motion.div variants={iconAnimation2(0.8)}>
                      <a href="https://my-weather-app-orpin.vercel.app/" target='_blank' rel='noopener noreferrer'>
                        <button className="relative bg-[#67ab8e] text-[#f9ffa1] text-lg md:text-xl font-medium p-2 flex items-center justify-center gap-2 group transition duration-200 ease-in-out transform hover:translate-x-2 tracking-tight rounded-xl">
                          View Live Demo
                          <FaArrowRight className="text-sm group-hover:translate-x-2 transition duration-200" />
                        </button>
                      </a>
                    </motion.div>
                  </motion.div>

                  {/* Button - View On GitHub */}
                  <motion.div
                    variants={container2(0.7)}
                    initial="hidden"
                    whileInView="show"
                    className="bg-[#e7e3ff] py-3 px-4 text-center">
                    <motion.div variants={iconAnimation2(1)}>
                      <a href="https://github.com/PaulineTaillemite/My-Weather-App/blob/main/README.md" target='_blank' rel='noopener noreferrer'>
                        <button className="relative bg-[#c3b5ff] text-black text-lg md:text-xl font-medium p-2 flex items-center justify-center gap-2 group transition duration-200 ease-in-out transform hover:translate-x-2 tracking-tight rounded-xl">
                          View On GitHub
                          <FaArrowRight className="text-sm group-hover:translate-x-2 transition duration-200" />
                        </button>
                      </a>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <motion.div
            variants={container2(0.2)}
            initial="hidden"
            whileInView="show"
            className="flex items-center justify-center">
            <div className="mockup-window bg-[#333] border border-[#555] max-w-full mx-auto hover:scale-105 duration-500">
              <div className="bg-[#222] flex justify-center">
                <img src={Weather} alt="Project" className="rounded-lg shadow-lg w-full" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* PROJECT KOIKONREGARDE */}
      <div className='bg-black text-white'>
        <div className="container mx-auto pt-36 md:pt-0 lg:pt-0 px-4 sm:px-6 md:px-8 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Image Section */}
          <motion.div
            variants={container2(0.2)}
            initial="hidden"
            whileInView="show"
            className="flex items-center justify-center">
            <div className="mockup-window bg-[#333] border border-[#555] max-w-full mx-auto hover:scale-105 duration-500">
              <div className="bg-[#222] flex justify-center">
                <img src={Koikonregarde} alt="Project" className="rounded-lg shadow-lg w-full" />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="flex flex-col justify-center gap-4">

            {/* Title */}
            <motion.div
              variants={container(0.2)}
              initial="hidden"
              whileInView="show"
              className="bg-black py-3 px-4 text-left">
              <p className="text-white text-5xl sm:text-6xl md:text-6xl font-medium group hover:scale-105 duration-500 tracking-tight lowercase">
                Find Me A Movie
              </p>
            </motion.div>

            {/* Main Content */}
            <div className="flex flex-col md:flex-row gap-4">

              {/* Description */}
              <motion.div
                variants={container(0.4)}
                initial="hidden"
                whileInView="show"
                className='flex-1 bg-[#ada2fa] py-3 px-4'>
                <p className="rounded text-black text-base md:text-lg font-normal text-justify">
                  Creation of a browser extension for Google Chrome that sets a new homepage every time a tab is opened. This extension displays a NASA photo along with a description of the image, with all content fetched from the NASA API. Each time a tab is opened, a new image and description are presented. Users can also save the fetched information for later viewing.
                </p>
              </motion.div>

              {/* Stacks and Buttons */}
              <div className="flex flex-col justify-between flex-1 gap-4">

                {/* Stacks */}
                <motion.div
                  variants={container(0.5)}
                  initial="hidden"
                  whileInView="show"
                  className="bg-[#f9ff9e] py-3 px-4 grid grid-cols-2 gap-4 text-4xl sm:text-5xl place-content-center place-items-center">
                  <motion.div variants={iconAnimation(0.8)}>
                    <IoLogoJavascript className="hover:scale-125 transition-transform duration-200 text-darkcolor" />
                  </motion.div>
                  <motion.div variants={iconAnimation(1)}>
                    <IoLogoHtml5 className="hover:scale-125 transition-transform duration-200 text-darkcolor" />
                  </motion.div>
                  <motion.div variants={iconAnimation(1.2)}>
                    <IoLogoCss3 className="hover:scale-125 transition-transform duration-200 text-darkcolor" />
                  </motion.div>
                  <motion.div variants={iconAnimation(1.4)}>
                    <FaGithub className="hover:scale-125 transition-transform duration-200 text-darkcolor" />
                  </motion.div>
                </motion.div>

                {/* Buttons */}
                <div className="flex flex-col gap-4">
                  <motion.div
                    variants={container(0.7)}
                    initial="hidden"
                    whileInView="show"
                    className="bg-[#4a9174] py-3 px-4 text-center">
                    <motion.div variants={iconAnimation(0.8)}>
                      <a href="https://find-me-a-movie.vercel.app/" target='_blank' rel='noopener noreferrer'>
                        <button className="relative bg-[#67ab8e] text-[#f9ffa1] text-lg md:text-xl font-medium p-2 flex items-center justify-center gap-2 group transition duration-200 ease-in-out transform hover:translate-x-2 tracking-tight rounded-xl">
                          View Live Demo
                          <FaArrowRight className="text-sm group-hover:translate-x-2 transition duration-200" />
                        </button>
                      </a>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    variants={container(0.9)}
                    initial="hidden"
                    whileInView="show"
                    className="bg-[#e7e3ff] py-3 px-4 text-center">
                    <motion.div variants={iconAnimation(1.1)}>
                      <a href="https://github.com/PaulineTaillemite/Projet-collectif-Ada-KoiKonRegarde" target='_blank' rel='noopener noreferrer'>
                        <button className="relative bg-[#c3b5ff] text-black text-lg md:text-xl font-medium p-2 flex items-center justify-center gap-2 group transition duration-200 ease-in-out transform hover:translate-x-2 tracking-tight rounded-xl">
                          View On GitHub
                          <FaArrowRight className="text-sm group-hover:translate-x-2 transition duration-200" />
                        </button>
                      </a>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='bg-black py-14'>

        <div className="container flex flex-col gap-3 justify-center items-center">
          <img src={Logo} alt="" className='w-[150px]' />
          <p className='text-white text-center text-sm'> Copyright &copy; 2024. All Rights Reserved.</p>

        </div>

      </div>
    </div>
  );
};

export default MyProjects;
