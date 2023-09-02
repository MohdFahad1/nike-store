"use client"
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { removeItem } from '../../../redux/slices/cartSlice';
import Image from 'next/image';
import { FaMinus, FaPlus } from 'react-icons/fa';

const page = () => {
  const dispatch = useDispatch();
    const items = useSelector((state) => state.cart);
    console.log("CART ITEMS: ", items);

  return (
    <section>
    </section>
  )
}

export default page