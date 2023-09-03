import Image from 'next/image';
import React from 'react';
import shoe8 from '../../Assets/shoe8.svg';
import { BsArrowRightShort } from 'react-icons/bs';
import Link from 'next/link';

const About = () => {
    return (
        <section className="lg:h-[100vh] md:h-auto h-auto flex lg:flex-row md:flex-col flex-col  lg:justify-between justify-center items-center lg:gap-0 gap-14 lg:py-0 md:py-20 py-10">
            <div className='lg:w-[600px] w-auto'>
                <h1 className="text-5xl font-semibold">We Provide You <span className="text-[#FF6452]">Super Quality</span> Shoes</h1>
                <p className="text-[#6D6D6D] font-light text-lg mt-5">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
                <p className="my-10 text-[#6D6D6D] font-light text-lg">Our dedication to detail and excellence ensures your satisfaction</p>
                <div>
                    <Link href={"/products"}>
                        <button className="flex justify-center items-center gap-2 rounded-full bg-[#FF6452] text-white px-7 py-4 text-xl">Shop Now <span className="bg-white text-[#FF6452] rounded-full h-5 w-5"><BsArrowRightShort /></span></button>
                    </Link>
                </div>
            </div>
            <div className="flex lg:justify-start justify-center lg:items-start items-center">
                <Image src={shoe8} alt="shoe" />
            </div>
        </section>
    )
}

export default About