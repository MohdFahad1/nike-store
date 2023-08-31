"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../Assets/header-logo.svg';
import { IoBagOutline } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="container mx-auto lg:px-20 px-3 flex justify-between items-center h-20 text-xl lg:relative static z-10">
        <div>
            <Image src={logo} alt="NIKE" priority={true} className="cursor-pointer"/>
        </div>
            <ul className="lg:flex gap-14 hidden">
                <li className="cursor-pointer text-[#6D6D6D] font-light">Home</li>
                <li className="cursor-pointer text-[#6D6D6D] font-light">About Us</li>
                <li className="cursor-pointer text-[#6D6D6D] font-light">Products</li>
                <li className="cursor-pointer text-[#6D6D6D] font-light">Contact Us</li>
            </ul>
        <div className="lg:block lg:gap-0 flex gap-10">
            <div className="relative">
                <div className="bg-[#FF6452] h-4 w-4 rounded-full absolute -right-2 top-0 text-sm flex justify-center items-center text-white">
                    0
                </div>
                <div>
                <IoBagOutline className="cursor-pointer text-2xl"/>
                </div>
            </div>
            
            <FaBars className="lg:hidden block text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}/>
        </div>
    </nav>
  )
}

export default Navbar;