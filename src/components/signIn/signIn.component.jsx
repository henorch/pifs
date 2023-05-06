import { useForm } from "react-hook-form"
import { signInWithFacebook, signInWithGooglePopups, signInWithGoogleRedirect } from "../../utils/firebase/firebase"
import Button from "../button/button.components"
import FormInput from "../form/form.component"
import { ErrorShow, Link, SignInContainer, SignInTitle, SubText } from "./signIn.styled"



const SignIn = () => {
   const { register, handleSubmit, formState: {errors}} = useForm();

   const handleSignInWithGoogle = async () => {
     await signInWithGoogleRedirect()
   }
   const onSubmit = data => {
    console.log(data);
   }

   console.log(errors);

    return(
        <SignInContainer>
            <SignInTitle>SIGN IN</SignInTitle>
            <SubText as="italic">Sign in with username/email and password</SubText>
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
            name="username"
            type="text"
            label="username"
            register={register}
            />
            <ErrorShow>{errors.username?.message}</ErrorShow>

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