import { useForm } from "react-hook-form"
import { createUserAurhWithEmailAndPAssword, signInWithFacebook, signInWithGooglePopups, signInWithGoogleRedirect, signInWithUserEmailAndPAssword } from "../../utils/firebase/firebase"
import Button from "../button/button.components"
import FormInput from "../form/form.component"
import { ErrorShow, Link, SignInContainer, SignInTitle, SubText } from "./signIn.styled"
import { UserContext } from "../../contexts/user.context"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"



const SignIn = () => {
   const { register, handleSubmit, reset, formState: {errors}} = useForm();
    const { setCurrentUser } = useContext(UserContext);
    const navigate = useNavigate()

   
   const handleSignInWithGoogle = async () => {
     await signInWithGoogleRedirect()
   }
   const onSubmit = async (data) => {
    const { email, password} = data;
    try {
        const { user } = await signInWithUserEmailAndPAssword(email, password);
        reset()
        navigate("/");
    } catch (error) {
        console.log(error, error.message);
        errors.push(error.message)
    }

   }

 

    return(
        <SignInContainer>
            <SignInTitle>SIGN IN</SignInTitle>
            <SubText as="italic">Sign in with email and password</SubText>
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
            name="email"
            type="text"
            label="email"
            register={register}
            />
            <ErrorShow>{errors.email?.message}</ErrorShow>

        <FormInput
            name="password"
            type="password"
            label="password"
            register={register}/>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                alignItems:"center"
            }}>
                <ErrorShow>{errors.password?.message}</ErrorShow>
                <>
                <span>Forgotten password? click here</span>
                <Button type="submit">SIGN IN</Button>
                </>
            </div>
            </form>
            <p>or</p>
            <Button type="button" style={{
                margin: "5px",
            }} 
            buttonType="google">FACEBOOK</Button>
            <Button style={{
                margin: "5px",
            }} 
            type="button" onClick={handleSignInWithGoogle} buttonType="google">GOOGLE SIGN-IN</Button>
            <Link to='/signUp'>I am a new Member?</Link>
        </SignInContainer>
    )
}

export default SignIn