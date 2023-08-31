import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from '../../Assets/footer-logo.svg';

const Footer = () => {
  return (
    <footer className="bg-black text-white lg:px-20 md:px-10 px-5 lg:py-20 md:py-20 py-10">


        <div className="grid lg:grid-cols-[450px_minmax(900px,_1fr)_100px] md:grid-cols-1 lg:gap-0 md:gap-20 gap-20">
            <div>
                <Image src={logo} alt="nike"/>
                <p className="font-light w-[350px] mt-10">Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
                <div className="flex gap-10 mt-10">
                    <div className="flex justify-center items-center h-10 w-10 text-xl bg-white text-black hover:bg-[#FF6452] hover:text-white duration-200 rounded-full cursor-pointer "><FaFacebookF /></div>
                    <div className="flex justify-center items-center h-10 w-10 text-xl bg-white text-black hover:bg-[#FF6452] hover:text-white duration-200 rounded-full cursor-pointer "><FaTwitter /></div>
                    <div className="flex justify-center items-center h-10 w-10 text-xl bg-white text-black hover:bg-[#FF6452] hover:text-white duration-200 rounded-full cursor-pointer "><FaInstagram /></div>
                </div>
            </div>


            {/* PRODUCT HELP CONTACT */}
            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 lg:gap-0 md:gap-0 gap-20">

            {/* PRODUCTS LIST */}
                <div>
                    <h1 className="text-2xl font-semibold">Products</h1>
                    <ul>
                        <li className="font-light mt-2 cursor-pointer hover:text-[#FF6452] duration-200">Air Force 1</li>
                        <li className="font-light mt-2 cursor-pointer hover:text-[#FF6452] duration-200">Air Max 1</li>
                        <li className="font-light mt-2 cursor-pointer hover:text-[#FF6452] duration-200">Air Jordan 1</li>
                        <li className="font-light mt-2 cursor-pointer hover:text-[#FF6452] duration-200">Air Force 2</li>
                        <li className="font-light mt-2 cursor-pointer hover:text-[#FF6452] duration-200">Nike Waffle Racer</li>
                        <li className="font-light mt-2 cursor-pointer hover:text-[#FF6452] duration-200">Nike Cortez</li>
                    </ul>
                </div>


                {/* HELP CENTER */}
                <div>
                    <h1 className="text-2xl font-semibold">Help</h1>
                    <ul>
                        <li className="font-light mt-2 cursor-pointer hover:text-[#FF6452] duration-200">About us</li>
                        <li className="font-light mt-2 cursor-pointer hover:text-[#FF6452] duration-200">FAQs</li>
                        <li className="font-light mt-2 cursor-pointer hover:text-[#FF6452] duration-200">How it works</li>
                        <li className="font-light mt-2 cursor-pointer hover:text-[#FF6452] duration-200">Privacy policy</li>
                        <li className="font-light mt-2 cursor-pointer hover:text-[#FF6452] duration-200">Payment policy</li>
                    </ul>
                </div>


                {/* CONTACT DETAILS */}
                <div>
                    <h1 className="text-2xl font-semibold">Get in touch</h1>
                    <p className="font-light mt-2 cursor-pointer hover:text-[#FF6452] duration-200">customer@nike.com</p>
                    <p className="font-light mt-2 cursor-pointer hover:text-[#FF6452] duration-200">+92554862354</p>
                </div>
            </div>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center lg:mt-20 mt-10">
            <p>&#169; Copyright. All rights reserved.</p>
            <p>Terms & Conditions</p>
        </div>
    </footer>
  )
}

export default Footer