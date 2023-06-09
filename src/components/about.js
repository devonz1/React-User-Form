import { useState } from "react";
import { Image } from './'


const About = ()=> {

    const slides = [
        {
          url: backgroundImage
        },
        {
           url:"C:/Users/devon/Downloads/college-images/college-classroom.jpg"
        },
        {
            url:"C:/Users/devon/Downloads/college-images/college-library.jpg"
        },
    ];

    return(
        <>
     <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative'>
        <div style={{backgroundImage:`url(${slides[0].url})`}}className='w-full h-full rounded-2xl bg-center bg-cover duration 500'>
            </div>
             
            </div>
     
           
            
          </>
   
        );

 


};

export default About;