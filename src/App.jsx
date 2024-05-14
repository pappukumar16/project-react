import React from "react";
import reviews from "./data";
import Testimonials from "./components/Testimonials";


const App = () => {
  return (
   <div className="flex flex-col justify-center items-center h-[100vh] w-[100vw]">
        <div className="text-center">
        <h1 className="text-4xl font-bold">Our Testimonials</h1>
          
        <div className="h-[3px] w-1/5 bg-violet-500 mx-auto"></div>
        
        <Testimonials reviews={reviews} />

         </div>


    

   </div>
  );
};

export default App;
