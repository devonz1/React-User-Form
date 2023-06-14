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
                   <div>
                    <BsChevronCompactLeft size />
                   </div>

                   {/*right arrow*/}
                    <div>
                    <BsChevronCompactRight />
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