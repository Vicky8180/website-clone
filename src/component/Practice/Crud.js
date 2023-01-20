import React, { useState } from 'react';
// import ReactDOM from



const Crud=()=>{

const [s, setS]= useState("a");

function takename(event){


let temp=event.target.value

setS(temp);


}
function checker(){

  console.log(s);
}









    return <div>

    <form  >
      <input type="texr"  onChange={takename } ></input>
      {/* <input type="texr" onChange={takeid}></input> */}
    </form>
       <h1 className='crud'>Anoop Yadav</h1>
       <button  onClick={checker}> press me </button>
    </div>
}
export default Crud;