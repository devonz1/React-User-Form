import React from "react"
import Image3 from '../images/accounting-img1.jpg';
import Image4 from '../images/accounting-img1.jpg';
import Image5 from '../images/architecture-img2.jpg';
import Image6 from '../images/business-img 5.jpg';
import Image7 from '../images/arts-technology-img 4.jpg';
import Image8 from '../images/sca- img 9.jpg';
import Image9 from '../images/letter-arts-sciences- img 8.jpg';




const Card = () => {


  const cardobj = [

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
      "description": "Arts and Technology",
      url: Image7
    },
    {
      "id": 5,
      "description": "Film",
      url: Image8
    },
    {
      "id": 6,
      "description": " Arts and Sciences",
      url: Image9
    },
    /*  line 16 we have declared a variable called cardobj to hold our object array that we will 
    be mapping through.  down below line 56 we create a arrow function
     that will help us map through our array we will assign cardobj as 
     our parameter in our function and we will be assigning a react key to cardobj.id  
    so that react can keep track of any changes within our key-value pairs inside
    our object */
  ]
  const cardob = cardobj.map((cardobj) => (
    <div className='objitem' key={cardobj.id}>
      <h2 className="objname">{cardobj.description}</h2>
      <img src={cardobj.url} width={350} alt={cardobj.description} />

    </div>

  ))






  return (
    <>

      <div className="flex-contain">
        {cardob}
      </div>



    </>
  );


}

export default Card;