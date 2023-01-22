import React, { useState } from "react";
import Footer from "../Footer/Footer"

import Middle from "../Middle/Middle";
import Data from "./datatransfer";

const images=["https://rukminim1.flixcart.com/fk-p-flap/1800/1800/image/48f547043e6e6fb2.jpg?q=80",
"https://rukminim1.flixcart.com/fk-p-flap/1800/1800/image/1851f458f808e6f9.jpg?q=80",
"https://rukminim1.flixcart.com/fk-p-flap/1800/1800/image/5c454d0c52c2e357.jpg?q=80",
"https://rukminim1.flixcart.com/fk-p-flap/1800/1800/image/80ff242fc0ef36c6.jpg?q=80",
 "https://rukminim1.flixcart.com/fk-p-flap/1800/1800/image/7794d3ed10a070ea.jpg?q=80"
// "https://rukminim1.flixcart.com/fk-p-flap/2000/2000/image/2889ee5bf5df484f.jpg?q=50"
 ]

function Temp(){
   return <>
    <Middle/>

    <div className="temp">
    {/* <h5>Offers</h5> */}
    {
        images.map((user)=>(
            <Data pr={user}/>
        )
        )
    }

    
    </div>
    <img   className="lastone" src="https://rukminim1.flixcart.com/fk-p-flap/2000/2000/image/2889ee5bf5df484f.jpg?q=50" width={1800}/>
    <Footer/>

    </>
}
export default Temp;