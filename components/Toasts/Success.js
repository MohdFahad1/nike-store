"use client"
import { useEffect } from 'react';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Success = ({ show, onClose}) => {
    useEffect(() => {
        if(show) {
            setTimeout(() => {
                onClose();
            }, 1000);
        }
    }, [show, onClose])
    
    return (
        <div
          className={`${
            show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          } fixed top-14 right-0 m-4 p-3 rounded-lg bg-green-500 text-white transition-transform  ease-in-out duration-300 transform translate-x-0 flex items-center gap-1`}
        >
          <FaCheckCircle /> Item added successfully
        </div>
  );
}

export default Success