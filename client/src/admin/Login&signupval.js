
   export const validate = (values) => {
        const err = {};
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!values.name) { err.name = "name Required"; }
        else if (values.name.length > 8) { err.name = "Name must be only 8 character" }
        if (!values.email) { err.email = "Email Required!" }
        else if (!regex.test(values.email)) { err.email = "Not valid email"; }
        if (!values.pass) { err.pass = "Password required" }
        else if (values.pass.length > 8) { err.pass = "password must be 8 character" }
        if (!values.cpass) { err.cpass = "confirm the password" }
        else if (values.pass != values.cpass) { err.cpass = "Password must be match" }
        return err;
    }
    export const validateLogin=(values)=>{
        const err = {};
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!values.email) { err.email = "Email Required!" }
        else if (!regex.test(values.email)) { err.email = "Not valid email"; }
        if (!values.pass) { err.pass = "Password required"}
        return err;
    }

