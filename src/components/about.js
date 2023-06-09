import { useState } from "react";
import backgroundImage from '../images/background.jpg';
import  Image from '../images/college-classroom.jpg';
import Image2 from '../images/college-library.jpg';


const About = ()=> {

    const slides = [
        {
          url: backgroundImage
        },
        {
           url:Image
        },
        {
            url:Image2
        },
    ];

    return(
        <>
     <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative'>
        <div style={{backgroundImage:`url(${slides[1].url})`}}className='w-full h-full rounded-2xl bg-center bg-cover duration 500'>
            </div>
             
            </div>
     
           
            
          </>
   
        );

 


};

export default About;