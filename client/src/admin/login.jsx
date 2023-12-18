import '../assects/styles/Login&signup.css'
import logo from '../assects/Image&Svg/Logo.png';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { object } from 'yup';

function Login() {
    const navigate =useNavigate();
    const [action, setaction] = useState("Signup");
    const [values, setvalues] = useState({ name: "", email: "", pass: "", cpass: "" })
    const [erorrvalues, seterrorvalues] = useState({});
    const [isSubmit, setisSubmit] = useState(false)
    function handleInput(e) {
        const { name, value } = e.target;
        setvalues({ ...values, [name]: value })
    }
    function handlesignup(e) {
        e.preventDefault();
        seterrorvalues(validate(values));
        setisSubmit(true);
    }
    useEffect(() => {
        console.log("erorrvalues")
        if (Object.keys(erorrvalues).length === 0 && isSubmit) {
         axios.post("http://localhost:9000/signup",values)
         .then((res)=>{console.log(res.data)})
         .catch(err=>console.log(err))
        }
    }, [erorrvalues])

    const validate = (values) => {
        const err = {};
        const regex=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!values.name) {err.name = "name Required";} 
        else if (values.name.length > 8) { err.name = "Name must be only 8 character" }
        if(!values.email){err.email="Email Required!"}
        else if (!regex.test(values.email)){
        err.email="Not valid email";
        }
        if(!values.pass){err.pass="Password required"}
        else if(values.pass.length>8){err.pass="password must be 8 character"}
        if(!values.cpass){err.cpass="confirm the password"}
        else if(values.pass!=values.cpass){
            err.cpass="Password must be match"
        }
        return err;
    }
    return (
        <div className="login-container">
            <div className="login-Nav">
                <img id="login-logo" src={logo} />
            </div>
            <div className="signup flex">
                <form id="signup-con" autoComplete='off' method="get" className="login-right">
                    <h1 id="input-head">{action}</h1>
                    <ul type="none">
                        <li id="input-name">Name</li>
                        <li><input id="input-field" type="text" name="name" value={values.name} onChange={handleInput} /></li>
                        {erorrvalues.name ?<div id="error-msg">{erorrvalues.name}</div>:null}
                        <li id='input-name'>Email</li>
                        <li><input id="input-field" type="text" name="email" value={values.email} onChange={handleInput} /></li>
                        {erorrvalues.email ?<div id="error-msg">{erorrvalues.email}</div>:null}
                        <li id='input-name'>Password</li>
                        <li><input id="input-field" type="password" name="pass" value={values.pass} onChange={handleInput} /> </li>
                        {erorrvalues.pass ?<div id="error-msg">{erorrvalues.pass}</div>:null}
                        <li id='input-name'>Confirm-Password</li>
                        <li><input id="input-field" type="password" name="cpass" value={values.cpass} onChange={handleInput} /></li>
                        {erorrvalues.cpass ?<div id="error-msg">{erorrvalues.cpass}</div>:null}
                        <button id="inputbutton" onClick={handlesignup} type='submit'>{action}</button>
                         <div className='Login-tranction switcher'><p>Already have a account?</p>
                            <button id="trans-button" onClick={() => { setaction("Login") }}>Login</button></div> 
                      
                    </ul>
                </form>
            </div>
        </div>
    )
}
export default Login;