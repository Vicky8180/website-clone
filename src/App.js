import React from 'react';
import './App.css';
import Navbar  from './component/Navbar/Navbar';
import Middle  from './component/Middle/Middle';
import Middletwo  from './component/Middletwo/Middletwo';
import { ToDoList,ShoppingList ,InputTag} from './component/Practice/pra';
import Crud from "./component/Practice/Crud";
import {Third,Fourth} from "./component/Thirdbox/Thirdbox"
import  Footer from "./component/Footer/Footer"
import Sign from "./component/Sign/Sign"
import FirstPage from "./FirstPage";
import Vijay from "./component/vijay/vijay"
import { Routes ,Route } from 'react-router-dom';
import Temp from "./component/Temppage/temp"




function App() {

 
  return (
    <div className="App">
    




      <Navbar/>
  
   
   <Routes>
    

<Route path="/"  element={<FirstPage/>}/>
<Route path="/vijay" element={<Vijay/>}/>
<Route path="/temp" element={<Temp/>}/>



</Routes>







 {/* <Crud/>        this one is for practicing crud operations in react js means taking input from user  */}

{/* 
    1.this one is just for practing the concepts 

    <ToDoList/>
    <ShoppingList/> 

    2.in this input tag i learned about how data is moving from function to function using
    usestate ,
    3. i learned about how to add any type of elememnt at any position in root 
    element 
    <InputTag/>
  
    */}
   
    </div>
  );
}

export default App;
