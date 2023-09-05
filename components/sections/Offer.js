import Image from 'next/image';
import React from 'react';
import offer from '../../Assets/offer.svg';


const Offer = () => {
    return (
        <section className="flex lg:flex-row md:flex-col-reverse flex-col-reverse items-center gap-10 lg:h-[100vh] md:h-auto h-auto lg:py-20 md:py-10 py-10">
            <div>
                <Image src={offer} alt="offer" priority={true}/>
            </div>
            <div className="lg:w-[650px] md:w-auto w-auto lg:pr-0 md:pr-20 pr-0">
                <h1 className="text-5xl font-bold capitalize"><span className="text-[#FF6452]">special</span> offer</h1>
                <p className="text-[#6D6D6D] text-lg font-light mt-5">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
                <p className="text-[#6D6D6D] text-lg font-light my-10">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
                <div className="flex gap-8 lg:flex-row md:flex-row flex-col">
                    <div>
                        <button className="flex justify-center items-center gap-2 rounded-full bg-[#FF6452] text-white px-7 py-4 text-xl">View details
                        </button>
                    </div>
                    <div>
                        <button className="flex justify-center items-center gap-2 rounded-full border-2 border-[#6D6D6D] text-[#6D6D6D] px-7 py-4 text-xl">Learn more</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offer