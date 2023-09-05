"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../Assets/header-logo.svg';
import { IoBagOutline } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import {Link as ScrollLink} from 'react-scroll'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const items = useSelector((state) => state.cart);

  return (
    <nav className="container mx-auto lg:px-20 px-3 flex justify-between items-center h-20 text-xl lg:relative static z-10">
      <div>
        <Link href={"/"}>
          <Image src={logo} alt="NIKE" priority={true} className="cursor-pointer" />
        </Link>
      </div>
      <ul className={`lg:flex gap-14 ${isOpen ? 'block' : 'hidden'} lg:block absolute top-20 left-0 bg-white w-full text-center lg:static lg:bg-transparent lg:w-auto lg:shadow-none md:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] z-10`}>
        <Link href={"/"}>
          <li className="cursor-pointer text-[#6D6D6D] font-light py-2 lg:hover:bg-transparent hover:bg-gray-100" onClick={() => setIsOpen(false)}>Home</li>
        </Link>
        <Link href={"/products"}>
          <li className="cursor-pointer text-[#6D6D6D] font-light py-2 lg:hover:bg-transparent hover:bg-gray-100" onClick={() => setIsOpen(false)}>Products</li>
        </Link>
        <ScrollLink to="about" smooth={true} duration={1000}>
        <li className="cursor-pointer text-[#6D6D6D] font-light py-2 lg:hover:bg-transparent hover:bg-gray-100" onClick={() =>setIsOpen(false)}>About Us</li>
        </ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={1000}>
        <li className="cursor-pointer text-[#6D6D6D] font-light py-2 lg:hover:bg-transparent hover:bg-gray-100" onClick={() => setIsOpen(false)}>Contact Us</li>
        </ScrollLink>
      </ul>
      <div className="lg:block lg:gap-0 flex gap-10">
        <div className="relative">
          <div className="bg-[#FF6452] h-5 w-5 rounded-full absolute -right-2 -bottom-2 text-sm flex justify-center items-center text-white">
            {items.length}
          </div>
          <div>
            <Link href={"/cart"}>
              <IoBagOutline className="cursor-pointer text-3xl" />
            </Link>
          </div>
        </div>
        <div className="lg:hidden block text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
