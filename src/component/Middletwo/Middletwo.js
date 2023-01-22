import React ,{ useState} from "react";
import "./Middletwo.css";
import {useNavigate} from "react-router-dom"



// https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/a814cb587ecbf02d.jpeg?q=50

const Middletwo = () => {

  const navigate=useNavigate();
   const [value , setValue]=useState('https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/11946434f052f86f.jpg?q=50')
    let imsource =[];
  imsource.push('https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/a01995f8c2dc7ebd.jpg?q=50');
  imsource.push('https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/448c152993ceefb3.jpeg?q=50');
  
  imsource.push('https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/483fc2547747864a.jpeg?q=50');
 
  imsource.push('https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/11946434f052f86f.jpg?q=50');
  
  imsource.push('https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/2115ae301b2c5372.jpeg?q=50');
  
 imsource.push('https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/291f71468a6eff71.jpg?q=50');
  imsource.push('https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/448c152993ceefb3.jpeg?q=50');
  
  imsource.push('https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/483fc2547747864a.jpeg?q=50');
 
  imsource.push('https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/11946434f052f86f.jpg?q=50');
  
  imsource.push('https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/2115ae301b2c5372.jpeg?q=50');

imsource.push('https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/a01995f8c2dc7ebd.jpg?q=50');
  imsource.push('https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/448c152993ceefb3.jpeg?q=50');
  imsource.push('https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/291f71468a6eff71.jpg?q=50');
  imsource.push('https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/a814cb587ecbf02d.jpeg?q=50');

  

////////////////for the manual changes of poster //////////////////////////////////////////////
  const [p, setP]= useState(0);
  
function changing(){
let k=0
  // if(p <= 0){
  // starter(k);}
 
  console.log(p+"buttonwala");
    setValue(imsource[p]);
    setP(p+1);
    
}



// for automation of poster //////////////////////////////////////////////////////////////////////////////////////
const [r, setR]= useState(0);
starter(r);
function starter(r){
    autochange(r);
}
function autochange(r){
setTimeout(()=>{
  setValue(imsource[r])
  // console.log(   "automaticwala"+ r)
 
  if(r==13){
    setR(0);
    // starter(r)
  }else {
    setR(r+1);
    // starter(r)
  }
}, 2300);


}

function posterasbutton(){

  navigate("/temp");

}





  return (
    <div>
      <Welcome text={value} />
      <div className="buttonmain">
      <button  className="buttonleft" onClick={changing }>P</button>
      <button  className="posterasbutton" onClick={posterasbutton }></button>
      <button  className="buttonright" onClick={changing }>M</button>
     

      {/* <button className="qa"  onMouseOut={changingg }>  p</button> */}
      </div>
    </div> 
  );
};







const Welcome = (props) => {
  return <div  className="middletwo"   >
   <img  className="forimage"   src={props.text}  />;
   
  </div>
};

export default Middletwo;