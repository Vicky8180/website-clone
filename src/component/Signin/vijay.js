import { useState } from "react";

import { Button, Input, Label } from "reactstrap";
import {useNavigate} from "react-router-dom"
import "./vijay.css";



export default function ThemedForm() {
    
    const navigate=useNavigate();
const [email, setEmail] = useState("");

const [password, setPassword] = useState("");

const showData = () => {

if (email === "" || password === "") {

alert("Please enter your email and password");

return;

}

 alert(`Email: ${email}, Password: ${password}`);
 navigate("/");

};

return (
    <div className="trans">

<div className="themed-login-form">

<p className="header">Sign in to your account</p>

<Input

className="input-field input-login"

placeholder="Email address"

type="email"

onChange={(e) => { setEmail(e.target.value) }}

/>

<Input

className="input-field input-password"

placeholder="Password"

type="password"

onChange={(e) => { setPassword(e.target.value) }}

/>

<div className="actions">

<Label check>

<Input type="checkbox" />

<span className="checkbox-label">Remember me</span>

</Label>

<Button color="link" >Forgot password?</Button>

</div>

<Button className="sign-in-button" color="primary" onClick={showData}>Sign In</Button>

</div>
</div>

);

}