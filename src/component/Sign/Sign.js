import React, { useState } from "react";
import "./Sign.css";


const Sign=()=>{
var[val, setVal]=useState("a");
var[val2, setVal2]=useState("b");

function takename(event){
    let temp=event.target.value;
    setVal(temp);
   


}
function takename2(event){
    var temp=event.target.value;
    setVal2(temp);
   


}
function checker(){
    console.log(val2);
    console.log(val);
    
}

    




    return <>
    <div className="rahul">
        <div className="sign">
     <h1 className="h1">Sign-In</h1>  

     <div className="input">
     <div className="name">
        <h3> Name/E-mail</h3>
        <form className="forn">
        
        <input type="text"  onChange={takename2 } className="TAKING" ></input>
        </form>
     </div>   
     <div className="pass">
        <h3> Password</h3>
        <form className="form2">
        <input type="text"  onChange={takename } className="TAKING" ></input>
        </form>
     </div>       
</div>

<button  className="button" onClick={checker}> Click</button>
        </div>
        </div>
    </>
}
export default  Sign;


