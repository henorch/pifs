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

    const { register, handleSubmit, reset, formState: {errors}} = useForm();

    const onSubmit = async (data) => {
        const {displayName, email, password} = data;
      
        try {
            const {user} =  await createUserAurhWithEmailAndPAssword(email, password);
            await createUserDocumentFromAuth(user, {displayName})
            alert("You are successfully registered")
            reset()
        } catch (error) {
            console.log(error, error.message);
        }
       
    }

    return(
        <SignUpContainer>
            <SignUpTitle>SIGN UP</SignUpTitle>
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
            <Link to='/sign'> I already Member?</Link>
        </SignUpContainer>
    )
}

export default SignUp;