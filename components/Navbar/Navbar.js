"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../Assets/header-logo.svg';
import { IoBagOutline } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const items = useSelector((state) => state);

  return (
    <nav className="container mx-auto lg:px-20 px-3 flex justify-between items-center h-20 text-xl lg:relative static z-10">
        <div>
            <Link href={"/"}>
                <Image src={logo} alt="NIKE" priority={true} className="cursor-pointer"/>
            </Link>
        </div>
            <ul className="lg:flex gap-14 hidden">
                <Link href={"/"}>
                    <li className="cursor-pointer text-[#6D6D6D] font-light">Home</li>
                </Link>
                <Link href={"/products"}>
                    <li className="cursor-pointer text-[#6D6D6D] font-light">Products</li>
                </Link>
                <li className="cursor-pointer text-[#6D6D6D] font-light">About Us</li>
                    <li className="cursor-pointer text-[#6D6D6D] font-light">Contact Us</li>
            </ul>
        <div className="lg:block lg:gap-0 flex gap-10">
            <div className="relative">
                <div className="bg-[#FF6452] h-5 w-5 rounded-full absolute -right-2 -bottom-2 text-sm flex justify-center items-center text-white">
                    {items.cart.length}
                </div>
                <div>
                <Link href={"/cart"}>
                    <IoBagOutline className="cursor-pointer text-3xl"/>
                </Link>
                </div>
            </div>
            
            <FaBars className="lg:hidden block text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}/>
        </div>
    </nav>
  )
}

export default Navbar;