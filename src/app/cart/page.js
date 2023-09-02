"use client"
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../../../redux/slices/cartSlice';
import Image from 'next/image';
// import { FaMinus, FaPlus } from 'react-icons/fa';
import { BiSolidChevronLeft } from 'react-icons/bi'
import { ImBin } from 'react-icons/im'
import Lottie from 'lottie-react';
import Empty from '../../../components/Animation/EmptyCart.json';

const page = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart);
  const total = items.reduce((a, b) => a + b.price, 0);
  console.log("CART ITEMS: ", items);

  return (
    <section className="contaner mx-auto lg:px-20 md:px-3 px-3 my-10">
      <h1 className="text-5xl capitalize font-bold lg:text-left md:text-center text-center mb-10">{items.length !== 0 ? ('items in cart') : ('no items in the cart')}</h1>

      <div className="lg:w-[90vw] md:w-[90vw]  flex flex-col justify-center items-center">

        {/* ITEMS IN CART */}
        <div>

          {/* RENDERING ITEMS */}
          <div className="lg:w-[90vw] md:w-[90vw]">

            {items.length !== 0 ? (items.map((item) => (
              <div key={item.id} className="border-b-2 border-[#6D6D6D] flex justify-between items-center pb-2 mb-10">
                <div>
                  <Image src={item.img} alt={item.name} className="h-[100px] w-[200px]" />
                  <h1 className='text-2xl font-bold mt-2'>{item.name}</h1>
                </div>
                {/* <div className="flex justify-center items-center gap-2 text-xl rounded-full border-2 border-[#6D6D6D] px-2 py-1">
                  <FaMinus />
                  <span className="text-3xl text-[#FF6452]">1</span>
                  <FaPlus />
                </div> */}
                <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center lg:gap-0 md:gap-20 gap-10 lg:w-[500px] md:w-[250px]">
                  <h1 className="text-xl font-bold text-[#6D6D6D]">${item.price.toFixed(2)}</h1>
                  <ImBin className='text-2xl text-red-600 cursor-pointer' onClick={e => dispatch(removeItem())} />
                </div>
              </div>
            ))) : (
              <div className="w-[90vw] flex items-center justify-center lg:mb-0 md:mb-0 mb-10">
                <div>
                  <Lottie animationData={Empty} loop={true} className="lg:h-[500px] lg:w-[500px] md:h-
                        [350px] md:w-[350px] h-[300px] w-[300px]"
                  />
                </div>
              </div>)}
          </div>


          {/* TOTAL SUMMARY */}
          <div className='flex lg:flex-row md:flex-col-reverse flex-col-reverse lg:gap-0 md:gap-10 gap-10 lg:justify-between md:justify-center justify-center lg:items-end md:items-center items-center'>
            <div>
              <button className="flex justify-center items-center gap-2 rounded-full bg-[#FF6452] text-white px-7 py-4 text-xl w-auto capitalize font-bold"><span className="bg-white text-[#FF6452] rounded-full h-5 w-5"><BiSolidChevronLeft /></span>continue shopping</button>
            </div>

            {/* TOTAL AMOUNT */}
            <div className="bg-[#F0F0F0] flex flex-col justify-center items-center p-4 w-[300px]">
              <h1 className='text-2xl font-bold capitalize flex justify-between w-full'>subtotal: <span className='font-medium'>${items.length === 0 ? ('0') : (total.toFixed(2))}</span></h1>
              <h1 className='text-2xl font-bold capitalize flex justify-between w-full'>shipping: <span className='font-medium'>$50.00</span></h1>
              <div className="w-full h-[2px] bg-gray-500 my-5"></div>
              <h1 className='text-2xl font-bold capitalize flex justify-between w-full text-[#FF6452]'>total: <span className='font-medium'>${items.length === 0 ? ('0') : ((total+50.00).toFixed(2))}</span></h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page