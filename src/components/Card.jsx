import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Card(props) {

    let reviews = props.reviews;


  return (
    <div className='flex flex-col md:relative'>
        <div className='absolute top-[-7rem] z-[20]' >
            <img src={reviews.image}
            className='aspect-square rounded-full w-[140px] h-[140px] z-[30] mx-auto'
            ></img>
            <div className='absolute h-[140px] w-[140px] bg-violet-500 rounded-full
             top-[-6px] z-[-10] left-[10px]'></div>
        </div>
        <div className='text-center mt-7'>
            <p className='font-bold text-2xl text-black tracking-wider'> {reviews.name} </p>
        </div>
        <div  className='text-center mt-1'>
            <p className='text-violet-300 uppercase text-sm'>{reviews.job}</p>
        </div>

        <div className='mt-5 text-violet-500 mx-auto'>
            <FaQuoteLeft/>
        </div>

        <div className='text-violet-400 mt-4 font-light'>
            <p>
                {reviews.text}
             </p>
        </div>

        <div className='mt-5 text-violet-500 mx-auto'>
        <FaQuoteRight />
        </div>

    </div>
  )
}

export default Card