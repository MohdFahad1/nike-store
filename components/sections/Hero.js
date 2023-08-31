"use client"
import Image from 'next/image';
import React, {useState} from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import bg from '../../Assets/collection-background.svg';
import thumbnailBg from '../../Assets/thumbnail-background.svg';
import shoe1 from '../../Assets/thumbnail-shoe1.svg';
import shoe2 from '../../Assets/thumbnail-shoe2.svg';
import shoe3 from '../../Assets/thumbnail-shoe3.svg';

const Hero = () => {
    const [isImage, setIsImage] = useState(shoe1);
    
    return (
        <section className="flex lg:flex-row flex-col gap-10">
            <div className="lg:w-[530px] md:w-[530px] w-auto">
                <div className="lg:px-0 px-3">
                    <h3 className="text-[#FF6452] capitalize text-xl font-light my-14">our summer collections</h3>
                    <h1 className="lg:text-8xl md:text-8xl text-7xl font-bold capitalize lg:w-[760px] w-auto bg-white z-10 relative">the new arrival <span className="text-[#FF6452]">nike</span> shoes</h1>
                    <p className="text-[#6D6D6D] text-lg font-light lg:w-[380px] w-auto mt-10 mb-14">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
                    <div>
                        <button className="flex justify-center items-center gap-2 rounded-full bg-[#FF6452] text-white px-7 py-4 text-xl">Shop Now <span className="bg-white text-[#FF6452] rounded-full h-5 w-5"><BsArrowRightShort /></span></button>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-[65px]">
                    <div>
                        <h1 className="lg:text-5xl md:text-5xl text-4xl font-bold">1k+</h1>
                        <span className="text-[#6D6D6D] text-lg">Brands</span>
                    </div>
                    <div>
                        <h1 className="lg:text-5xl md:text-5xl text-4xl font-bold">500+</h1>
                        <span className="text-[#6D6D6D] text-lg">Shops</span>
                    </div>
                    <div>
                        <h1 className="lg:text-5xl md:text-5xl text-4xl font-bold">250k+</h1>
                        <span className="text-[#6D6D6D] text-lg">Customers</span>
                    </div>
                </div>
            </div>
            <div className="lg:static relative">
                    <Image src={bg} alt="bg" className="absolute top-0"/>
                    <div>
                        <Image src={isImage} alt="Shoe" className='relative lg:h-[500px] md:h-[500px] h-[400px] lg:w-[500px] md:w-[500px] w-[400px] lg:left-[20%] md:left-[20%] left-0 lg:top-[50px] md:top-[50px] top-0'/>
                    </div>

                    {/* SHOES SELECTOR */}
                    <div className="relative flex items-center lg:gap-12 md:gap-12 gap-3 lg:mt-[110px] md:mt-[100px] mt-0">


                        {/* FIRST SHOE */}
                        <div className="relative  overflow-hidden lg:h-[200px] md:h-[200px] after:h-[110px]  lg:w-[200px] md:w-[200px]  w-[120px]  border-2 border-[#FF6452] rounded-xl flex justify-center items-center" onClick={() => setIsImage(shoe1)}>
                            <Image src={thumbnailBg} alt="bg" className="absolute"/>
                            <Image src={shoe1} alt="Shoe" className=" lg:h-[150px] md:h-[150px] h-[110px] lg:w-[150px] md:w-[150px] w-[110px] relative"/>
                        </div>

                        {/* SECOND SHOE */}
                        <div className="relative overflow-hidden lg:h-[200px] md:h-[200px] h-[110px]  lg:w-[200px] md:w-[200px]  w-[120px]  border-2 border-[#FF6452] rounded-xl flex justify-center items-center" onClick={() => setIsImage(shoe2)}>
                            <Image src={thumbnailBg} alt="bg" className="absolute"/>
                            <Image src={shoe2} alt="Shoe" className="lg:h-[150px] md:h-[150px] h-[110px] lg:w-[150px] md:w-[150px] w-[110px] relative"/>
                        </div>

                        {/* THIRD SHOE */}
                        <div className="relative overflow-hidden lg:h-[200px] md:h-[200px] h-[110px]  lg:w-[200px] md:w-[200px]  w-[120px]  border-2 border-[#FF6452] rounded-xl flex justify-center items-center" onClick={() => setIsImage(shoe3)}>
                            <Image src={thumbnailBg} alt="bg" className="absolute"/>
                            <Image src={shoe3} alt="Shoe" className="lg:h-[150px] md:h-[150px] h-[110px] lg:w-[150px] md:w-[150px] w-[110px] relative"/>
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default Hero