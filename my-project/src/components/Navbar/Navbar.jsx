import React from 'react';
import Logo from '../assets/cat_logo.svg';
import Logo2 from '../assets/logo_gurl.svg';
import { GiHamburgerMenu } from "react-icons/gi";

/* ICI LA COMPOSITION DU MENU DE LA NAVBAR */

const NavMenu = [
    {
        id: 1,
        title: "About Me",
        link: "#",
    },
    {
        id: 2,
        title: "Projects",
        link: "#",
    },
    {
        id: 3,
        title: "Send Me a Message",
        link: "#",
    }
]

/* ICI LA NAVBAR */

const Navbar = () => {
    return (
        <div>

            <div className='py-6 text-white'>
                <div className="container flex justify-between items-center ">

                    {/* Logo section */}
                    <div><img src={Logo2} alt="" className='w-[150px]'/></div>

                    {/*  Navbar Menu mapping du Navbar Tableau d'objet*/}
                    <div>
                        <ul className='hidden md:flex justify-center gap-10 '>
                            {NavMenu.map((item) => {
                                return(
                                    <li key={item.id}>
                                    <a href={item.link}
                                    className='hover:text-primary text-xl font-semibold text-white duration-300'>{item.title}</a>
                                    </li>
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