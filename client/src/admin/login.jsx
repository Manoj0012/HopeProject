import '../assects/styles/Login&signup.css'
import logo from '../assects/Image&Svg/Logo.png';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import {validate, validateLogin} from "./Login&signupval";

function Login() {
    const navigate = useNavigate();
    const [action, setaction] = useState("Login");
    const [values, setvalues] = useState({  email: "", pass: ""})
    const [erorrvalues, seterrorvalues] = useState({});
    const [isSubmit, setisSubmit] = useState(false)
    function handleInput(e) {
        const { name, value } = e.target;
        setvalues({ ...values, [name]: value })
    }
    function handlesignup(e) {
        e.preventDefault();
        seterrorvalues(validateLogin(values));
        setisSubmit(true);
    }
    useEffect(() => {
        console.log(erorrvalues)
        if (Object.keys(erorrvalues).length === 0 && isSubmit) {
            axios.post("http://localhost:9000/login", values)
                .then((res) => {
                    let data = res.data;
                    if(data){
                        navigate("/")
                        alert("sucess")
                    }
                    else{
                        console.log("user exits")
                        navigate("/login")
                    }
                })
                .catch(err => console.log(err))
        }
    }, [erorrvalues])

    
    return (
        <div className="login-container">
            <div className="login-Nav">
                <img id="login-logo" src={logo} />
            </div>
            <div className="signup flex">
                <form id="signup-con" autoComplete='off' method="get" className="login-right">
                    <h1 id="input-head">{action}</h1>
                    <ul type="none">
                        <li id='input-name'>Email</li>
                        <li><input id="input-field" type="text" name="email" value={values.email} onChange={handleInput} /></li>
                        {erorrvalues.email ? <div id="error-msg">{erorrvalues.email}</div> : null}
                        <li id='input-name'>Password</li>
                        <li><input id="input-field" type="password" name="pass" value={values.pass} onChange={handleInput} /> </li>
                        {erorrvalues.pass ? <div id="error-msg">{erorrvalues.pass}</div> : null}
                        <button id="inputbutton" onClick={handlesignup} type='submit'>{action}</button>
                        <div className='Login-tranction switcher'><p>Need a account?</p>
                        <a href="/signup"id="trans-button">Signup</a></div>

                    </ul>
                </form>
            </div>
        </div>
    )
}
export default Login;