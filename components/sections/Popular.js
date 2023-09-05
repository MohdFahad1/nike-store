import Image from 'next/image';
import React from 'react';
import shoe4 from '../../Assets/shoe4.svg';
import shoe5 from '../../Assets/shoe5.svg';
import shoe6 from '../../Assets/shoe6.svg';
import shoe7 from '../../Assets/shoe7.svg';
import { FaStar } from 'react-icons/fa';
import { BsArrowRightShort } from 'react-icons/bs';
import Link from 'next/link';


const Popular = () => {
    const data = [
        {
            id:1,
            img: shoe4,
            name: "Nike Air Jordan-01",
            price: "200.20"
        },
        {
            id:2,
            img: shoe5,
            name: "Nike Air Jordan-10",
            price: "210.20"
        },
        {
            id:3,
            img: shoe6,
            name: "Nike Air Jordan-100",
            price: "220.20"
        },
        {
            id:4,
            img: shoe7,
            name: "Nike Air Jordan-001",
            price: "230.20"
        },

    ]

    return (
        <section className='lg:h-[130vh] md:h-auto h-auto flex flex-col justify-center lg:py-10 py-24'>
            <div>
                <h1 className="text-5xl font-semibold capitalize">our <span className="text-[#FF6452]">popular</span> products</h1>
                <p className="text-[#6D6D6D] text-lg font-light lg:w-[530px] md:w-auto mt-8 mb-20">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-10 lg:place-items-start md:place-items-start place-items-center">
                {data.map((shoe) => (
                    <div key={shoe.id}>
                        <div>
                            <Image src={shoe.img} alt={shoe.name} priority={true}/>
                        </div>
                        <div className="mt-5">
                            <h1 className="flex gap-1 text-[#6D6D6D]"><span className="text-[#FF6542]"><FaStar /></span> {"("}4.5{")"}</h1>
                            <h1 className="font-bold text-xl">{shoe.name}</h1>
                            <p className="text-[#FF6452] font-medium">${shoe.price}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex lg:justify-end md:justify-center justify-center lg:mt-20 md:mt-10 mt-10">
                <div className="group">
                    <Link href={"/products"}>
                        <button className="flex justify-center items-center gap-2 rounded-full bg-[#FF6452] text-white px-7 py-4 text-xl">Shop Now <span className="bg-white text-[#FF6452] rounded-full h-5 w-5"><BsArrowRightShort /></span></button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Popular