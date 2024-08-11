import React from 'react'
import { motion } from 'framer-motion'
import Background from './../assets/my2.mp4'
import Navbar from './../Navbar/Navbar'
import SpaceShip from './../assets/ProjectPageCarroussel/spaceship.png'
import Koikonregarde from './../assets/ProjectPageCarroussel/koikonregarde.png'
import Weather from './../assets/ProjectPageCarroussel/weather.png'
import Unsplash from './../assets/ProjectPageCarroussel/unsplash.png'
import Meuble from './../assets/ProjectPageCarroussel/meuble.png'
import HeroProject from './../pages/heromyprojects'

const projectList = [
    { id: 1, title: "Chrome ", img: SpaceShip, link: "https://github.com/PaulineTaillemite/SpaceShip-Chrome-Extension", delay: 0.2, },
    { id: 2, title: "Find Me A Movie ", img: Koikonregarde, link: "https://github.com/PaulineTaillemite/Projet-collectif-Ada-KoiKonRegarde", delay: 0.2, },
    { id: 3, title: "Web App Api", img: Weather, link: "https://github.com/PaulineTaillemite/My-Weather-App", delay: 0.4 },
    { id: 4, title: "My Own Unsplash", img: Unsplash, link: "https://github.com/PaulineTaillemite/My-Weather-App", delay: 0.4 },
    { id: 5, title: "Full Stack Project", img: Meuble, link: "https://github.com/PaulineTaillemite/vipers-furnitures", delay: 0.6 },
/*     { id: 6, title: "The Quack Extension", img: "#", link: "https://github.com/PaulineTaillemite/The-Quack-Extension", delay: 0.6 },
 */

]

const MyProjects = () => {
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
      <HeroProject />


      {/* Grid container */}


      
    </div>
  );
};

export default MyProjects;