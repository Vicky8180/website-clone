
import React, { useEffect, useState } from "react"
import ReactDom from "react-dom"
import  "./Thirdbox.css"






const Temp=(props)=>{
let [i, setI]=useState("https://rukminim1.flixcart.com/fk-p-flap/464/708/image/a845d2a1a99210bb.jpeg?q=70");


window.onload = function hu () {

    console.log(props.argu[0].image)
    let real=props.argu[5].image;
    setI(real);
    };





    return <>
        <div className="fourth">
    <button className="left"> 
    <img  className="leftimage"src="https://rukminim1.flixcart.com/fk-p-flap/464/708/image/a845d2a1a99210bb.jpeg?q=70" width={255} height={360} />
    </button>
<div className="fourthcontent">
<div className="fcsize">
    <div className="fc1">
        <img  className="imagefc1"src={i}  width={200} height={210}/>
        <div className="kuchbhi">
        <h6 className="h6">Gaming TWS</h6>
        {/* <h5 className="h5">From {props.argu[15].price}</h5> */}
        <h6 className="h62">Shop Now</h6>
        </div>
    </div>
    </div>

 </div>

    
    <button className="right"><img  className="rightimage"src="https://rukminim1.flixcart.com/fk-p-flap/464/708/image/be824fa979cd44bf.jpeg?q=70" width={253} height={360} /> </button>

    </div>
    </>
}


const Fourthh=()=>{
 let API="https://fakestoreapi.com/products"
 const[dataa, setData]=useState([]);

 const fetchAPI= async(url)=>{
    try{
        const res=await fetch("https://fakestoreapi.com/products");
         const data =await res.json();
         setData(data);
        // console.log(data);
        // console.log(data[0].image);

    }catch(error){
        console.log(error);
    }
 }

useEffect(()=>{
    fetchAPI(API);},[]);

return <>

    <Temp argu={dataa}/>

    </>
}
export  default Fourthh;