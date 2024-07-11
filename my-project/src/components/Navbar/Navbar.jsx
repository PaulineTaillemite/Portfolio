import React from 'react';
import Logo from '../assets/cat_logo.svg'
import Logo2 from '../assets/logo_gurl.svg'

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

            <div className='bg-lightcolor text-white'>
                <div className="container flex justify-between items-center ">

                    {/* Logo section */}
                    <div><img src={Logo2} alt="" className='w-40'/></div>

                    {/*  Navbar Menu mapping du Navbar Tableau d'objet*/}
                    <div>
                        <ul className='flex justify-center gap-5'>
                            {NavMenu.map((item) => {
                                return(
                                    <li key={item.id}>
                                    <a href={item.link}>{item.title}</a>
                                    </li>
                                    )
                                })}
                        </ul>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Navbar