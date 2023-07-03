import React from "react"
import Image3 from  '../images/accounting-img1.jpg';


 

const Card = (props) =>{

  
    
    


return (
<>
  <div>
   <h4>{props.title}</h4>
   <img src={props.img}  width="300"  alt='img'/>
  </div> 
  
 <div>
 <h4>{props.title}</h4>
 <img src={props.img}  width="300"  alt='img'/>
</div>

</>
);

 
}

export default Card;