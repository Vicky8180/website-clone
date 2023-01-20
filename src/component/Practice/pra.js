import React, { createElement, useState } from 'react';
import "./pra.css"
import ReactDOM from 'react-dom';


import Navbar  from '../Navbar/Navbar';



function ToDoList() {
  return (
    <>
      <h1 id='anoooo' className='anoop'>ToDo List</h1>
      <ul>
        <li>Eat</li>
        <li>Sleep</li>
        <li>Repeat</li>
      </ul>
    </>
  );
}

function ShoppingList() {
  return <>
    <h1 className='anoo'>ToDo List</h1>
    <ul>
      <li>Eat</li>
      <li>Sleep</li>
      <li>Repeat</li>
    </ul>

  </>
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function InputTag() {

  
  var [state, setState] = useState({ data: "nj" })
  var userValue = "";
  var rahul = '';



  const changeState = () => {

    rahul = state.data;
    console.log(rahul + rahul);
    const para = document.createElement("h1");
    const nodee = document.getElementById("asd");
    // const a = ReactDOM.findDOMNode(nodee);
    para.textContent =rahul;
    para.style.color = 'red';
    para.style.alignContent="space-between"
    document.getElementById("asd").appendChild(para);
    




  };



// this is used to update the value 

  const getInputValue = (event) => {
    // show the user input value to console
    userValue = event.target.value;

    setState({ data: userValue });
    console.log(state);
    

  };

  return (
    <div>
      <input type="text" onChange={getInputValue} />
     
      <button onClick={changeState} type='button'> anoop yafa </button>

      <div id="asd" className='asd'></div>
     
      


    </div>
  );
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const Tryy = (props) => {
//   let sd = props.tr;
//   console.log(sd);
//   return <div>
//     <h1>{sd}</h1>

//   </div>
// }




// const Try = (props) => {
//   return <div>
//     <h1> {props.tr} </h1>

//   </div>
// }

export { ToDoList, ShoppingList,  InputTag };