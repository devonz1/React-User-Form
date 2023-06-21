import { Component, useState } from "react";
import backgroundImage from '../images/background.jpg';
import Image from '../images/college-classroom.jpg';
import Image2 from '../images/college-library.jpg';
import  {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
 import {RxDotFilled} from 'react-icons/rx'

const About = () => {

    const slides = [
        {
            url: backgroundImage
        },
        {
            url: Image
        },
        {
            url: Image2
        },
    ];

    const [currentIndex, setCurrentIndex]= useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1  : currentIndex -1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);

    };
    
    return (
        <>
            <body className="about">
                 
                <h3 className="center">About</h3>
                
                <div className='max-w-[700px] h-[480px] w-full m-auto py-16 px-4 relative group'>
                    <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className='w-full h-full rounded-2xl bg-center bg-cover duration 500'>

                  {/*left arrow*/}
                   <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                   </div>

                   {/*right arrow*/}
                    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                    </div>
                    </div>
                 <p>
                   


                 </p>
                </div>


            </body>
        </>

    );

  


};

 export default About;

/*line 9 we created a array named slides that will hold all of our images for
our slides and we use the url as a way to gab our images se that they can be used
inside of the div below and at the top we Have imported our images into our 
component  

line 21 We have created the state for our Image slides called CurrentIndex
 
 the ?  at line 25 is the conditional (ternary) operator.

line 23 we have created a function called prevslide to go back a slide if needed to toggle through
the images we set  a variable called  isfisrstlide  to check if the currentIndex is equal to 
0 and we do that with the srtict equality operator if it is equal to 0 if true
 We execute the slides.length-1 condition which will put us at index 2 if the currentIndex is 
 not Equal to 0 we will execute the second condition  which will be whatever the currentIndex is -1.

 On line 24 we have to add the relative group class at the end since its the parent div
 so that we can  make a hover effect over the image that will show the image pointers 
 so we have to group the parent div which is the first div line 24 by adding the class group
 then add hidden-group hover to both  the child divs
 */