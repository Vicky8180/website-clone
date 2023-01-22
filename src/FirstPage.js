import React from "react";

import Navbar  from './component/Navbar/Navbar';
import Middle  from './component/Middle/Middle';
import Middletwo  from './component/Middletwo/Middletwo';
import { ToDoList,ShoppingList ,InputTag} from './component/Practice/pra';
import Crud from "./component/Practice/Crud";
import {Third,Fourth} from "./component/Thirdbox/Thirdbox"
import  Footer from "./component/Footer/Footer"
import Sign from "./component/Sign/Sign"

import Vijay from "./component/Signin/vijay"



function FirstPage(){

    return <>
      {/* <Navbar/> */}
    <Middle/>
    <Middletwo/>
    <Third/>
    <Fourth/>
    <Fourth/> 
     <Fourth/> <Fourth/> 

<Fourth/> <Fourth/>
    <Footer/>



    </>
}

export default FirstPage;