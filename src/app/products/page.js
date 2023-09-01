"use client"
import React, { useState, useEffect } from 'react';
import { data } from './data';
import Image from 'next/image';
import { FaSearch, FaShoppingBag, FaStar } from 'react-icons/fa';
import NotFound from '../../../components/Animation/NotFound.json';
import Loader from '../../../components/Animation/Loader.json';
import Lottie from 'lottie-react';

const page = () => {
    const [filteredData, setFilteredData] = useState(data);
    const [searchQuery, setSearchQuery] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [sortOption, setSortOption] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSearch = () => {
        setLoading(true);
        setTimeout(() => {

            const filteredShoes = data.filter((shoe) =>
                shoe.name.toLowerCase().includes(searchQuery.toLowerCase())
            );

            const filteredShoesWithCheckBox = isChecked ? filteredShoes.filter((shoe) => shoe.rating >= 4.5) : filteredShoes;

            setFilteredData(filteredShoesWithCheckBox);
            
        setLoading(false);
        }, 1000);
    }

    const handleCheckBox = (e) => {
        setIsChecked(e.target.checked);
    }

    const handleSortChange = (e) => {
        setLoading(true);
        setTimeout(() => {
            
        const selectedOption = e.target.value;
        setSortOption(selectedOption);

        const sortedData = [...filteredData];


        if (selectedOption === 'Sort By') {
            sortedData.sort((a, b) => a.id - b.id);
        }
        else if (selectedOption === 'Highest') {
            sortedData.sort((a, b) => b.price - a.price);
        }
        else if (selectedOption === 'Lowest') {
            sortedData.sort((a, b) => a.price - b.price);
        }

        setFilteredData(sortedData);
        
        setLoading(false);
        }, 1000);
    }


    useEffect(() => {
        handleSearch();
    }, [isChecked])

    return (
        <section className="container mx-auto lg:px-20 px-3 my-10">

            {/* FILTERING SECTION */}
            <div className="mb-10 lg:flex lg:flex-row md:flex-row flex-col lg:justify-between md:justify-between justify-start lg:items-center md:items-center items-start">

                <div className="flex justify-center items-center py-2 pl-3 rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-[300px] lg:mb-0 md:mb-10 mb-0">
                    <input type="text" placeholder='Search' className="outline-none" value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} />
                    <button className="rounded-full p-2 flex justify-center items-center font-bold text-xl bg-[#FF6452] text-white" onClick={handleSearch}><FaSearch /></button>
                </div>

                <div className='flex lg:flex-row md:flex-row flex-col lg:gap-10 md:gap-10 gap-0'>
                    <div className='flex items-center gap-2 lg:my-0 md:my-0 my-10'>
                        <label className="text-[#6D6D6D] text-xl font-bold">Rating {"("}4.5+{")"}</label>
                        <input type="checkbox" className="h-[18px] w-[18px]" onChange={handleCheckBox} checked={isChecked} />
                    </div>

                    <div className="border-2 border-black py-2 px-3 text-xl font-bold rounded-full w-[130px]">
                        <select className="outline-none" value={sortOption} onChange={handleSortChange}>
                            <option>Sort By</option>
                            <option>Highest</option>
                            <option>Lowest</option>
                        </select>
                    </div>
                </div>

            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:place-items-start md:place-items-start place-items-center gap-10">
                {loading ? ((
                    <div className='flex justify-center items-center w-[90vw]'>
                        <Lottie animationData={Loader} loop={true} className="lg:h-[500px] lg:w-[500px] md:h-
                        [350px] md:w-[350px] h-[300px] w-[300px]"/>
                    </div>)) : (filteredData.length > 0 ? (filteredData.map((shoe) => (
                    <div key={shoe.id} className="flex flex-col justify-center items-center rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 transhtmlForm transition-transhtmlForm hover:scale-[1.05] duration-300">
                        <h1 className="text-2xl font-bold">{shoe.name}</h1>
                        <p className="flex items-center gap-1 text-[#6D6D6D] text-lg"><FaStar className="text-[#FF6452] text-xl" />{"("}{shoe.rating}{")"}</p>
                        <Image src={shoe.img} alt={shoe.name} className='h-[150px] w-[300px] hover:-rotate-12 duration-500 my-5' />
                        <div className='flex justify-between w-full items-center mt-5'>
                            <h1 className="text-[#6D6D6D] text-xl font-bold">${shoe.price}</h1>
                            <button className="flex justify-around items-center gap-2 rounded-full bg-[#FF6452] text-white px-4 py-2 text-xl">Add <FaShoppingBag /></button>
                        </div>

                    </div>
                ))) : (
                    <div className='flex justify-center items-center w-[90vw]'>
                        <Lottie animationData={NotFound} loop={true} className="lg:h-[500px] lg:w-[500px] md:h-
                        [350px] md:w-[350px] h-[300px] w-[300px]"/>
                    </div>))}
            </div>
        </section>
    )
}

export default page