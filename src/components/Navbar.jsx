// import React, { useState } from 'react'
// import logo from '../assets/icon.jpg'
// import { NavLink, useNavigate } from 'react-router-dom'
// import Testimonials from '../pages/Testimonials';
// import Services from '../pages/Services';
// const Navbar = () => {

//     const navigate = useNavigate();
//     return (
//         <nav className="text-white fixed top-0 left-0 w-full  bg-black  shadow-md  z-50">
//             <div className='mx-4 sm:mx-[10%] flex items-center justify-between text-sm py-1'>
//                 <img onClick={() => navigate('/')} className='h-10 cursor-pointer' src={logo} alt="" />
//                 <ul className='hidden md:flex item-start  font-medium '>
//                     <NavLink to='/'>
//                         <li className='m-4' >Home</li>
//                         <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
//                     </NavLink>

//                     <NavLink to='/about'>
//                         <li className='m-4' >About</li>
//                         <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
//                     </NavLink>

//                     <NavLink to='/services'>
//                         <li className='m-4' >Services</li>
//                         <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
//                     </NavLink>

//                     <NavLink to='/testimonials'>
//                         <li className='m-4' >Testimonials</li>
//                         <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
//                     </NavLink>


//                     <NavLink to='/contact'>
//                         <li className='m-4' >Contact</li>
//                         <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
//                     </NavLink>

//                     {/* <button className='hidden m-4 p-1 border border-primary md:block hover:cursor-pointer hover:bg-primary'>Get Quote</button> */}

//                 </ul>
//                 <button className='text-3xl md:hidden'> &#8801; </button>

//             </div>
//         </nav>
//     )
// }

// export default Navbar


// import { useState } from "react";
// import logo from "../assets/icon.jpg";

// const Navbar = () => {
//     const [open, setOpen] = useState(false);

//     const scrollToSection = (id) => {
//         document.getElementById(id)?.scrollIntoView({
//             behavior: "smooth",
//             block: "start",
//         });
//         setOpen(false); // close mobile menu after click
//     };

//     return (
//         <nav className="fixed top-0 left-0 w-full bg-black text-white z-50">
//             <div className="mx-4 sm:mx-[10%] flex items-center justify-between py-3">

//                 {/* LOGO */}
//                 <img
//                     src={logo}
//                     className="h-10 cursor-pointer"
//                     onClick={() => scrollToSection("home")}
//                     alt="logo"
//                 />

//                 {/* DESKTOP MENU */}
//                 <ul className="hidden md:flex font-medium">
//                     {["home", "about", "services", "testimonials", "contact"].map((item) => (
//                         <li
//                             key={item}
//                             className="m-4 cursor-pointer hover:text-primary transition"
//                             onClick={() => scrollToSection(item)}
//                         >
//                             {item.charAt(0).toUpperCase() + item.slice(1)}
//                         </li>
//                     ))}
//                 </ul>

//                 {/* MOBILE MENU BUTTON */}
//                 <button
//                     onClick={() => setOpen(!open)}
//                     className="text-3xl md:hidden"
//                 >
//                     {open ? "✕" : "☰"}
//                 </button>
//             </div>

//             {/* MOBILE MENU */}
//             <div
//                 className={`md:hidden bg-black transition-all duration-300 overflow-hidden ${open ? "max-h-96" : "max-h-0"
//                     }`}
//             >
//                 <ul className="flex flex-col items-center py-4 font-medium">
//                     {["home", "about", "services", "testimonials", "contact"].map((item) => (
//                         <li
//                             key={item}
//                             className="py-3 cursor-pointer hover:text-primary"
//                             onClick={() => scrollToSection(item)}
//                         >
//                             {item.charAt(0).toUpperCase() + item.slice(1)}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;


import { useEffect, useState } from "react";
import logo from "../assets/icon.jpg";
// , "services"
const sections = ["home", "about", "testimonials", "contact"];

const Navbar = () => {
    const [active, setActive] = useState("home");
    const [open, setOpen] = useState(false);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
        setOpen(false);
    };

    // 🔥 SCROLL SPY LOGIC
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY + 220; // navbar offset

            sections.forEach((sec) => {
                const el = document.getElementById(sec);
                if (!el) return;

                const top = el.offsetTop;
                const height = el.offsetHeight;

                if (scrollY >= top && scrollY < top + height) {
                    setActive(sec);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full bg-black text-white z-50">
            <div className="mx-4 sm:mx-[10%] flex items-center justify-between py-3">

                {/* LOGO */}
                <img
                    src={logo}
                    alt="logo"
                    className="h-10 cursor-pointer"
                    onClick={() => scrollToSection("home")}
                />

                {/* DESKTOP MENU */}
                <ul className="hidden md:flex font-medium">
                    {sections.map((item) => (
                        <li
                            key={item}
                            onClick={() => scrollToSection(item)}
                            className="relative m-4 cursor-pointer"
                        >
                            <span
                                className={`transition ${active === item ? "text-primary" : ""
                                    }`}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </span>

                            {/* 🔥 ACTIVE LINE */}
                            <span
                                className={`absolute left-1/2 -bottom-1 h-0.5 bg-primary transition-all duration-300
                  ${active === item
                                        ? "w-3/5 -translate-x-1/2"
                                        : "w-0"
                                    }`}
                            />
                        </li>
                    ))}
                </ul>

                {/* MOBILE BUTTON */}
                <button
                    className="text-lg md:hidden"
                    onClick={() => setOpen(!open)}
                >
                    {open ? "✕" : "☰"}
                </button>
            </div>

            {/* MOBILE MENU */}
            <div
                className={`md:hidden bg-black overflow-hidden transition-all duration-300 ${open ? "max-h-96" : "max-h-0"
                    }`}
            >
                <ul className="flex flex-col items-center py-4">
                    {sections.map((item) => (
                        <li
                            key={item}
                            onClick={() => scrollToSection(item)}
                            className={`py-3 cursor-pointer ${active === item ? "text-primary" : ""
                                }`}
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
