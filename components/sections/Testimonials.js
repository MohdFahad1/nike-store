import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import customer1 from '../../Assets/customer1.jpeg';
import customer2 from '../../Assets/customer2.png';

const Testimonials = () => {
  return (
    <section className="lg:h-[100vh] md:h-auto h-auto flex flex-col justify-center items-center text-center bg-[#F5F6FF] py-20 my-10">
        <div>
            <h1 className="text-5xl font-bold capitalize">what our <span className="text-[#FF6452]">customers</span> say?</h1>
            <div className="flex justify-center items-center">
                <p className="text-[#6D6D6D] font-light text-lg mt-3 mb-20 lg:w-[500px] md:w-[500px] w-auto">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
            </div>
        </div>


        {/* REVIEWS */}
        <div className="flex lg:flex-row md:flex-col flex-col lg:gap-32 md:gap-20 gap-20 justify-around items-center">

            {/* FIRST CUSTOMER */}
            <div className="flex flex-col justify-center items-center w-[350px]">
                <div className="flex justify-center items-center bg-cover overflow-hidden rounded-full h-[150px] w-[150px] mb-5">
                    <Image src={customer1} alt="pfp" priority={true}/>
                </div>
                <p className="text-lg text-[#6D6D6D] font-light">The attention to detail and the quality of the product exceeded my expectations. Highly recommended!</p>
                <p className="text-[#6D6D6D] flex gap-1 items-center mt-2 mb-4"><FaStar className="text-[#FF6452] text-xl"/> {"("}4.5{")"}</p>
                <h1 className="text-2xl font-bold capitalize">morich brown</h1>
            </div>

            {/* SECOND CUSTOMER */}
            <div className="flex flex-col justify-center items-center w-[350px]">
                <div className="flex justify-center items-center bg-cover overflow-hidden bg-[#DCDCDC] rounded-full h-[150px] w-[150px] mb-5">
                    <Image src={customer2} alt="pfp" className="h-[200px] w-[200px]" priority={true}/>
                </div>
                <p className="text-lg text-[#6D6D6D] font-light">The product not only met but exceeded my expectations. I'll definitely be a returning customer!</p>
                <p className="text-[#6D6D6D] flex gap-1 items-center mt-2 mb-4"><FaStar className="text-[#FF6452] text-xl"/> {"("}4.5{")"}</p>
                <h1 className="text-2xl font-bold capitalize">Christine Jane</h1>
            </div>
        </div>
    </section>
  )
}

export default Testimonials