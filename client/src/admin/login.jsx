import '../assects/styles/Login&signup.css'
import logo from '../assects/Image&Svg/Logo.png'
import {Formik, useFormik} from 'formik';
import * as yup from 'yup';
import YupPassword from 'yup-password';
import { useState } from 'react';
YupPassword(yup)

function Login(){
    const [action,setaction]=useState("Signup")
    function validationSchema(){
    if(formval.errors.name){return formval.errors.name;}
    if(formval.errors.email){return formval.errors.email;}
    if(formval.errors.password){return formval.errors.password;}
    if(formval.errors.password){return formval.errors.confirmpassword}
}
const formval=useFormik({
 initialValues:{
    name:'',
    email:'',
    password:'',
    confirmpassword:''
    },
 validationSchema:yup.object({
    name:yup.string()
    .required("!name must be entered")
     .min(4,"!name must be least of 4-charaters")
     .max(15,"!name mustn't exceed of 15 character's")
     .strict()
     .trim("remove the spaces"),
    email:yup.string()
    .email("!email must in valid form")
    .required("!enter the email"),
    password:yup.string()
    .required("Password must be entered")
    .min(4,'password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special')
    .minLowercase(1,'password must contain at least 1 lower case letter')
    .minUppercase(1, 'password must contain at least 1 upper case letter'),                                     
    confirmpassword:yup.string()
    .required("Confirm the password")
    .oneOf([yup.ref('password'),null],"Password must match")
}),
 onSubmit:(userinput)=>{
 console.log(userinput);
}
    })
    return(
        <div className="login-container">
<div className="login-Nav">
    <img id="login-logo"src={logo}/>
</div>
<div className="signup flex">
    <form id="signup-con" autoComplete='off' onSubmit={formval.handleSubmit} action="" className="login-right">
        <h1 id="input-head">{action}</h1>
        <ul type="none">
            {action=="Signup"?<div><li id="input-name">Name</li>
            <li><input id="input-field" type="text"  name="name" onChange={formval.handleChange} value={formval.values.name}/></li></div>:null}
            <li id='input-name'>Email</li>
            <li><input id="input-field" type="text"  name="email" onChange={formval.handleChange} value={formval.values.email}/></li>
            <li id='input-name'>Password</li>
            <li><input id="input-field" type="password"  name="password" onChange={formval.handleChange}/></li>
            {action==="Signup"?<div><li id='input-name'>Confirm-Password</li>
            <li><input id="input-field" type="password"   name="confirmpassword" onChange={formval.handleChange}/></li></div>:null}
            <li id="input-error"> {validationSchema ?<div id="error-msg">{validationSchema()}</div>:null}
           </li>
           <button id="inputbutton" type='submit'>{action}</button>
            {action==='Signup'?<div className='Login-tranction switcher'><p>Already have a account?</p>
                <button id="trans-button" onClick={()=>{setaction("Login")}}>Login</button></div>:null}
                {action==='Login'?<div className='Signup-tranction switcher'><p>Need a account?</p>
                <button id="trans-button" onClick={()=>{setaction("Signup")}}>Signup</button></div>:null}
    </ul>
    </form>
   </div>
        </div>
        )}
export default Login;