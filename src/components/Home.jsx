import React from "react";
import {Link} from "react-router-dom";

export default function Home(){
    return(


        <div className="background" >
            
         <nav class="navbar bg-body-tertiary">
  <div class="container-fluid bg-white">
    <a class="navbar-brand" href="#">
      <img src="https://logosandtypes.com/wp-content/uploads/2020/11/Shopify.png" alt="Logo" width="120" height="120" class=" "/>
      <span id="title">Street Bazaar</span> 
    </a>
  </div>
</nav>
            <h2 id="title" ></h2>  
            <ul>  
                <Link to="/" class="ps-5 m-1 text-light text-decoration-none  fw-bold">Home</Link>   
                <Link to="/Product" class="ps-5 m-1 text-light text-decoration-none  fw-bold">Product</Link>
                <Link to="/Contact" class=" ps-5 m-1 text-light text-decoration-none  fw-bold">Contact</Link>     
                <Link to="/Services" class="ps-5 m-1 text-light text-decoration-none fw-bold" >Services</Link>     
                <Link to="/Signup" class="ps-5 m-1 text-light text-decoration-none fw-bold">Sign Up</Link>
            </ul>
               </div>   
    
    );
}