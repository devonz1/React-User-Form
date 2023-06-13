import { Component, useState } from "react";
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
       <body className="about"> 
     <div className='max-w-[900px] h-[680px] w-full m-auto py-16 px-4 relative'>
        <div style={{backgroundImage:`url(${slides[2].url})`}}className='w-full h-full rounded-2xl bg-center bg-cover duration 500'>

            
            </div>
             
            </div>
     
           
            </body>
          </>
   
        );

 


};

export default About;