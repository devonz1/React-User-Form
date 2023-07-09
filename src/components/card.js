import React from "react"
import Image3 from '../images/accounting-img1.jpg';
import Image4 from '../images/accounting-img1.jpg';
import Image5 from '../images/architecture-img2.jpg';
import Image6 from '../images/business-img 5.jpg';
import Image7 from '../images/arts-technology-img 4.jpg';
import Image8 from '../images/sca-img 9.jpg'
import Image9 from '/images/letter-arts-sciences-img 8.jpg'




const Card = () => {
  
  
  const img = [

    {
      "id": 1,
      "description": "Accounting",
      url: Image4
    },
      
    {
     "id": 2,
     "description": "Architecture",
      url: Image5
    },

    {
      "id": 3,
      "description": "Business",
      url: Image6
    },
    {
       "id": 4,
      "description" : "Arts and Technology",
       url: Image7
    },
   {
       "id": 5,
       "description": "Film",
       url:Image8
   },
   {
      "id": 6,
      "description": "Letters, Arts, and Sciences",
      url: Image9
   },
   
]




  return (
    <>
      <div>
        <h4>{props.title}</h4>
        <img src={props.img} width="300" alt='img' />
      </div>



    </>
  );


}

export default Card;