import React from 'react';
import { Link } from 'react-router-dom';
import Logo2 from '../assets/logo_gurl.svg';
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";


/* ICI LA COMPOSITION DU MENU DE LA NAVBAR */

const NavMenu = [
    {
        id: 1,
        title: "About Me",
        link: "/aboutme",
        delay:0.2,
    },
    {
        id: 2,
        title: "Projects",
        link: "/myprojects",
        delay:0.4,
    },
    {
        id: 3,
        title: "Send Me a Message",
        link: "#",
        delay:0.6,
    }
]


const container = (delay) => ({
    hidden: {
        opacity: 0,
        x: -100,
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

/* ICI LA NAVBAR */

const Navbar = () => {
    return (
        <div>

            <div className='py-6 text-white'>
                <div className="container flex justify-between items-center ">

                    {/* Logo section */}
                    <div><motion.img 
                    initial={{opacity:0, scale:0}}
                    whileInView={{opacity:1, scale:1}}
                    
                    src={Logo2} alt="" className=''/></div>



                    {/*  Navbar Menu mapping du Navbar Tableau d'objet*/}
                    <div>
                        <ul className='hidden md:flex justify-center gap-10 p-9 '>
                            {NavMenu.map((item) => {
                                return(
                                    <motion.li 
                                    variants={container(item.delay)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    key={item.id}>

                                    <Link 
                                    to={item.link}
                                    className='hover:text-primary text-xl font-semibold text-white duration-300'>{item.title}</Link>


                                    </motion.li>
                                    )
                                })}
                        </ul>

                        {/* mobile hamburger */}
                        <div className='md:hidden'>
                            <GiHamburgerMenu className='text-3xl'/>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar