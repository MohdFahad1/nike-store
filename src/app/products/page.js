import React from 'react';
import {data} from './data';
import Image from 'next/image';
import { FaPlus,  FaSearch,  FaStar } from 'react-icons/fa';

const page = () => {
  return (
    <section className="container mx-auto lg:px-20 px-3 my-10">

    {/* FILTERING SECTION */}
    <div className="mb-10 flex justify-between items-center">

        <div className="flex justify-center items-center py-2 pl-3 rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-[300px]">
            <input type="text" placeholder='Search' className="outline-none"/>
            <button className="rounded-full p-2 flex justify-center items-center font-bold text-xl bg-[#FF6452] text-white"><FaSearch /></button>
        </div>

        <div className="flex gap-4">
            <div className="flex gap-1 text-xl text-[#6D6D6D] font-bold">
                <lable for="female">Female</lable>
                <input type="radio" id="female" value="FEMALE" name="gender"/>
            </div>
            <div className="flex gap-1 text-xl text-[#6D6D6D] font-bold">
                <lable for="male">Male</lable>
                <input type="radio" id="male" value="MALE" name="gender"/>
            </div>
        </div>

        <div className='flex items-center gap-2'>
            <label className="text-[#6D6D6D] text-xl font-bold">Rating {"("}4.5+{")"}</label>
            <input type="checkbox" className="h-[18px] w-[18px]"/>
        </div>

        <div className="border-2 border-black py-2 px-3 text-xl font-bold rounded-full">
            <select className="outline-none">
                <option>Sort By</option>
                <option>Highest</option>
                <option>Lowest</option>
            </select>
        </div>

    </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 lg:place-items-start md:place-items-start place-items-center gap-10">
            {data.map((shoe) => (
                <div key={shoe.id} className="flex flex-col justify-center items-center rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 duration-200">
                    <h1 className="text-2xl font-bold">{shoe.name}</h1>
                    <p className="flex items-center gap-1 text-[#6D6D6D] text-lg"><FaStar className="text-[#FF6452] text-xl"/>{"("}{shoe.rating}{")"}</p>
                    <Image src={shoe.img} alt={shoe.name} className='h-[150px] w-[300px] hover:-rotate-12 duration-500 my-5'/>
                    <div className='flex justify-between w-full items-center mt-5'>
                        <h1 className="text-[#6D6D6D] text-xl font-bold">${shoe.price}</h1>
                        <button className="flex justify-around items-center gap-2 rounded-full bg-[#FF6452] text-white px-4 py-2 text-xl">Add <FaPlus /></button>
                    </div>
                    
                </div>
            ))}
        </div>
    </section>
  )
}

export default page