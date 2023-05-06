import { useState } from "react"
import Button from "../button/button.components"
import FormInput from "../form/form.component"

import { Link, 
    SignUpContainer, 
    SignUpTitle, 
    SubText, 
    ErrorShow 
} from "./signUp.styled"

import { createUserDocumentFromAuth, 
    createUserAurhWithEmailAndPAssword 
} from "../../utils/firebase/firebase"
import { useForm } from "react-hook-form"



const SignUp = () => {

    const { register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = async (data) => {
        const {displayName, email, password, confirmPassword} = data;
      
        try {
            const {user} =  await createUserAurhWithEmailAndPAssword(email, password);
            await createUserDocumentFromAuth(user, {displayName})
            console.log(user);
        } catch (error) {
            console.log(error, error.message);
        }
       
    }
    
    return(
        <SignUpContainer>
            <SignUpTitle>SIGN OUT</SignUpTitle>
            <SubText as="italic">Register with username/email and password</SubText>
    <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
                type="text"
                label="displayName"
                name="displayName"
                register={register}
            />
            <ErrorShow>{errors.displayName?.message}</ErrorShow>
        <FormInput
            name="email"
            type="email"
            register={register}
            label="email"/>
          <ErrorShow>{errors.email?.message}</ErrorShow>
        <FormInput
            name="password"
            type="password"
            register={register}
            label="password"/>
         <ErrorShow>{errors.password?.message}</ErrorShow>
        <FormInput
             name="confirmedPassword"
             type="password"
             register={register}
            label="confirmpassword"/>
          <ErrorShow>{errors.confirmpassword?.message}</ErrorShow>
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