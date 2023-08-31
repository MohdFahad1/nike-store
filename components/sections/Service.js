import React from 'react'
import { FaTruck, FaHandHoldingHeart } from 'react-icons/fa';
import { BsShieldFillCheck } from 'react-icons/bs';

const Service = () => {
  return (
    <section className="flex lg:flex-row md:flex-col flex-col justify-center items-center gap-10 py-20">
        <div className="px-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] h-[250px] lg:w-[400px] md:w-[500px] w-auto flex flex-col justify-center">
            <div className="h-10 w-10 bg-[#FF6452] text-white flex justify-center items-center rounded-full">
                <FaTruck className="text-2xl"/>
            </div>
            <h1 className="font-bold text-3xl my-5">Free shipping</h1>
            <p className="text-[#6D6D6D] text-lg font-light">Enjoy seamless shopping with our complimentary shipping service.</p>
        </div>
        <div className="px-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] h-[250px] lg:w-[400px] md:w-[500px] w-auto flex flex-col justify-center">
            <div className="h-10 w-10 bg-[#FF6452] text-white flex justify-center items-center rounded-full">
                <BsShieldFillCheck className="text-2xl"/>
            </div>
            <h1 className="font-bold text-3xl my-5">Secure Payment</h1>
            <p className="text-[#6D6D6D] text-lg font-light">Experience worry-free transactions with our secure payment options.</p>
        </div>
        <div className="px-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] h-[250px] lg:w-[400px] md:w-[500px] w-auto flex flex-col justify-center">
            <div className="h-10 w-10 bg-[#FF6452] text-white flex justify-center items-center rounded-full">
                <FaHandHoldingHeart className="text-2xl"/>
            </div>
            <h1 className="font-bold text-3xl my-5">Love to help you</h1>
            <p className="text-[#6D6D6D] text-lg font-light">Our dedicated team is here to assist you every step of the way.</p>
        </div>
    </section>
  )
}

export default Service