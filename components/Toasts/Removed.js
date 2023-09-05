"use client"
import { useEffect } from 'react';
import React from 'react';

const Removed = ({ show, onClose}) => {
    useEffect(() => {
        if(show) {
            setTimeout(() => {
                onClose();
            }, 800);
        }
    }, [show, onClose])
    
    return (
        <div
          className={`${
            show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          } fixed top-14 right-0  m-4 p-3 rounded-lg bg-red-500 text-white transition-transform  ease-in-out duration-300 transform translate-x-0`}
        >
          Item Removed Successfully
        </div>
  );
}

export default Removed