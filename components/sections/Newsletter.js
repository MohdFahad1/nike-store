import React from 'react'

const Newsletter = () => {
  return (
    <section className="flex lg:flex-row md:flex-col flex-col justify-between items-center gap-10 my-20">
        <div className="lg:w-[350px] md:w-auto w-auto">
            <h1 className="text-5xl font-bold">Sign Up from <span className="text-[#FF6452]">Updates</span> & Newsletter</h1>
        </div>
        <div className='flex justify-between items-center lg:gap-1 md:gap-1 gap-0 border-2 border-[#6D6D6D] rounded-full px-3 h-[80px] lg:w-[600px] md:w-full w-full'>
            <input type="email" placeholder='subscribe@nike.com' className="outline-none px-3 lg:w-auto w-[150px]"/>
            <div>
                <button className="flex justify-center items-center gap-2 rounded-full bg-[#FF6452] text-white px-7 py-4 text-xl">Sign Up
                </button>
            </div>
        </div>
    </section>
  )
}

export default Newsletter