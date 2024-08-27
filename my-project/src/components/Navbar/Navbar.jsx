import React from 'react';
import { Link } from 'react-router-dom';
import Logo2 from '../assets/logo_gurl.svg';
import { motion } from "framer-motion";

/* ICI LA COMPOSITION DU MENU DE LA NAVBAR */

const NavMenu = [
    {
        id: 1,
        title: "Home",
        link: "/",
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
        link: "mailto:pauline.taillemite@gmail.com",
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
            <div className='sm:py-0 md:py-6 lg:py-6 text-white'>
                <div className="container flex justify-between items-center ">
                    {/* Logo section */}
                    <div>
                        <motion.img 
                            initial={{opacity:0, scale:0}}
                            whileInView={{opacity:1, scale:1}}
                            src={Logo2} 
                            alt="" 
                            className='' 
                        />
                    </div>

                    {/*  Navbar Menu mapping du Navbar Tableau d'objet*/}
                    <div className='w-full flex justify-end'>
                        <ul className='flex justify-center gap-10 p-5 '>
                            {NavMenu.map((item) => (
                                <motion.li 
                                    variants={container(item.delay)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    key={item.id}
                                >
                                    <Link 
                                        to={item.link}
                                        className='text-sm md:text-xl font-semibold text-white hover:text-primary duration-300'
                                    >
                                        {item.title}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
