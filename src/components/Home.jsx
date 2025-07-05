import React from "react";
import {Link} from "react-router-dom";

export default function Home(){
    return(
    <div class="">
        <div className="background" >
             
           

        
            <h2 id="title" >Street Bazaar</h2>
              

            
               
                 <ul>
                   
  <Link to="/" class="ps-5 m-1 text-light text-decoration-none  fw-bold">Home</Link>
                   
<Link to="/Product" class="ps-5 m-1 text-light text-decoration-none  fw-bold">Product</Link>
                   
<Link to="/Contact" class=" ps-5 m-1 text-light text-decoration-none  fw-bold">Contact</Link>
                    
<Link to="/Services" class="ps-5 m-1 text-light text-decoration-none fw-bold" >Services</Link>
                    
                
                
                
                 
            
           </ul>

            <Link to="/Signup" class="sign">Sign Up</Link>

               </div>

    
          
          
        
     
        
           

        
    </div>


    
    );
}