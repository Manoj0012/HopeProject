import '../assects/styles/Login&signup.css'
import logo from '../assects/Image&Svg/Logo.png'
import { Formik, useFormik } from 'formik';
import * as yup from 'yup';
import YupPassword from 'yup-password';
import { useState } from 'react';
import { Loginandsignup, initialvalues } from './Login&signupval'
YupPassword(yup)

function Login() {
    const [action, setaction] = useState("Signup")
    const formval = useFormik({
        initialValues: initialvalues,
        validationSchema: Loginandsignup,
        onSubmit: (userinput) => {
            console.log(userinput);
        }
    })
    return (
        <div className="login-container">
            <div className="login-Nav">
                <img id="login-logo" src={logo} />
            </div>
            <div className="signup flex">
                <form id="signup-con" autoComplete='off' onSubmit={formval.handleSubmit} action="/about" method="get" className="login-right">
                    <h1 id="input-head">{action}</h1>
                    <ul type="none">
                        {action == "Signup" ? <div><li id="input-name">Name</li>
                            <li><input id="input-field" type="text" name="name" onChange={formval.handleChange} value={formval.values.name} /></li>
                            {formval.errors.name && <div id="error-msg">{formval.errors.name}</div>}</div> : null}
                        <li id='input-name'>Email</li>
                        <li><input id="input-field" type="text" name="email" onChange={formval.handleChange} value={formval.values.email} />
                            {formval.errors.email && <div id="error-msg">{formval.errors.email}</div>}
                        </li>
                        <li id='input-name'>Password</li>
                        <li><input id="input-field" type="password" name="password" onChange={formval.handleChange} />
                            {formval.errors.password && <div id="error-msg">{formval.errors.password}</div>}
                        </li>
                        {action === "Signup" ? <div><li id='input-name'>Confirm-Password</li>
                            <li><input id="input-field" type="password" name="confirmpassword" onChange={formval.handleChange} /></li>
                            {formval.errors.confirmpassword && <div id="error-msg">{formval.errors.confirmpassword}</div>}</div> : null}
                        <button id="inputbutton" type='submit'>{action}</button>
                        {action === 'Signup' ? <div className='Login-tranction switcher'><p>Already have a account?</p>
                            <button id="trans-button" onClick={() => { setaction("Login") }}>Login</button></div> : null}
                        {action === 'Login' ? <div className='Signup-tranction switcher'><p>Need a account?</p>
                            <button id="trans-button" onClick={() => { setaction("Signup") }}>Signup</button></div> : null}
                    </ul>
                </form>
            </div>
        </div>
    )
}
export default Login;