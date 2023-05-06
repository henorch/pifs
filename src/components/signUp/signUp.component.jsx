import { useState } from "react"
import Button from "../button/button.components"
import FormInput from "../form/form.component"
import { Link, SignUpContainer, SignUpTitle, SubText } from "./signUp.styled"
import { createUserAurhWithEmailAndPAssword } from "../../utils/firebase/firebase"

const defaultValue = {
    username:"",
    email:"",
    password:"",
    confirmedPassword: ""
}

const Validation = (password, password2) => {
    const errors = []
    if(password.length < 8){
        errors.push("password is too short") 
    } else if(password !== password2){
        errors.push("password doesnot match")
    }else{
        console.log("no error");
    }
    return errors
}


const SignUp = () => {
    const [formField, setFormField] = useState(defaultValue);

    const { username, email, password, confirmedPassword} = formField;
    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setFormField({
            ...formField,
            [name]: value
        })
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const error = Validation(password, confirmedPassword)
        console.log(formField);
    }
    return(
        <SignUpContainer>
            <SignUpTitle>SIGN OUT</SignUpTitle>
            <SubText as="italic">Register with username/email and password</SubText>
    <form onSubmit={handleOnSubmit}>
            <FormInput
                type="text"
                required
                label="username:"
                name="username"
                onChange={handleOnChange}
                value={username}
            />

        <FormInput
            name="email"
            type="email"
            required
            value={email}
            onChange={handleOnChange}
            label="email:"/>

        <FormInput
            name="password"
            type="password"
            required
            value={password}
            onChange={handleOnChange}
            label="password:"/>
       
        <FormInput
             name="confirmedPassword"
             type="password"
             value={confirmedPassword}
             onChange={handleOnChange}
            label="confirm password:"/>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                alignItems:"center"
            }}>
                <Button type="submit">SUBMIT</Button>
            </div>
            </form>
            <p>or</p>
            <Button type="button" style={{
                margin: "5px",
            }} buttonType="google">FACEBOOK</Button>
            <Button style={{
                margin: "5px",
            }} 
            type="button" buttonType="google">GOOGLE SIGN-IN</Button>
            <Link to='/sign'> I already Member?</Link>
        </SignUpContainer>
    )
}

export default SignUp;