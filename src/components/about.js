import { Component, useState } from "react";
import backgroundImage from '../images/background.jpg';
import Image from '../images/college-classroom.jpg';
import Image2 from '../images/college-library.jpg';
import  {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'

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

    return (
        <>
            <body className="about">
                <div className='max-w-[900px] h-[680px] w-full m-auto py-16 px-4 relative'>
                    <div style={{ backgroundImage: `url(${slides[2].url})` }} className='w-full h-full rounded-2xl bg-center bg-cover duration 500'>

                  {/*left arrow*/}
                   <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft size={30} />
                   </div>

                   {/*right arrow*/}
                    <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight size={30} />
                    </div>
                    </div>

                </div>


            </body>
        </>

    );




};

export default About;

/*line 9 we created a array named slides that will hold all of our images for
our slides and we use the url as a way to gab our images se that they can be used
inside of the div below and at the top we Have imported our images into our 
component  */