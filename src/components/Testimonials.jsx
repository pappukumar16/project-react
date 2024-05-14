import React, { useState } from 'react'
import Card from "./Card";
import { FiChevronLeft,FiChevronRight } from "react-icons/fi";


function Testimonials(props) {
  const [index,setIndex] = useState(0);
  let reviews = props.reviews;


  function leftShiftHandler(){
  
   if(index-1 < 0){
      setIndex(reviews.length-1)
   }else{
         setIndex(index-1)
   }
  }

  function rightShiftHandler(){
     if(index+1 >=reviews.length){
      setIndex(0);
     }else{
      setIndex(index+1);
     }
  }

  function surpriceHandler(){
      let randomIdex = Math.floor( Math.random() * reviews.length);
      setIndex(randomIdex);
  }






  return (
    <div className='w-[85vw]  md:w-[700px] bg-white flex flex-col rounded-md
    justify-center items-center mt-10 p-10 transition-all duration-700  hover:shadow-md'>
     
         <Card reviews={reviews[index]}></Card>
     
         <div className=' flex justify-center mx-auto text-3xl mt-5 gp-6 text-violet-400 font-bold'>
            <button
            onClick={leftShiftHandler}
            className='hover:text-violet-700'><FiChevronLeft /></button>
            <button 
            onClick={rightShiftHandler}
            className='hover:text-violet-700'><FiChevronRight /></button>
          </div>

         <div className='mt-3 text-center' >
            <button
            onClick={surpriceHandler}
            className='font-bold bg-violet-500 px-10 py-2 rounded
             hover:bg-violet-800 transition-all duration-200'>Surprise Me</button>
         </div>



    </div>
  )
}

export default Testimonials