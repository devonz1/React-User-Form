import Card from "./card";
import Image3 from  '../images/accounting-img1.jpg';
import Image4 from '../images/architecture-img2.jpg';
import Image5 from '../images/business-img 5.jpg';
import Image6 from '../images/arts-technology-img 4.jpg';






const Academ = () => {





    return (
        <>
              <div className="row1">
                <Card title="Accounting"
                 img={Image3}
                 
                 
                 />
                 <Card title="Architecture"
                 img={Image4}
                 
                 />
                 <Card title="Business"
                 img={Image5}
                 
                 />

                 <Card title="Arts and Technology"
                 img={Image6}
                 
                 />
                  
                 
                 

                </div>



             
        </>
    );




}

export default Academ;