import * as yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(yup)
export const initialvalues={
    name:'',
    email:'',
    password:'',
    confirmpassword:''
}
export  const Loginandsignup=yup.object({
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
    .min(4,'password must contain 4 or more characters '),                                     
    confirmpassword:yup.string()
    .required("Confirm the password")
    .oneOf([yup.ref('password'),null],"Password must match")
})

