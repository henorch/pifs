import { signInWithFacebook, signInWithGooglePopups, signInWithGoogleRedirect } from "../../utils/firebase/firebase"
import Button from "../button/button.components"
import FormInput from "../form/form.component"
import { Link, SignInContainer, SignInTitle, SubText } from "./signIn.styled"



const SignIn = () => {
    const handleSignInWithGoogle = async () => {
        await signInWithGooglePopups()
        
    }

    const handleSignInWithFacebook = async () => {
        await signInWithGoogleRedirect()
    }

    return(
        <SignInContainer>
            <SignInTitle>SIGN IN</SignInTitle>
            <SubText as="italic">Sign in with username/email and password</SubText>

            <FormInput
            label="Email or username:"/>

        <FormInput
            label="password:"/>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                alignItems:"center"
            }}>
                <span>Forgotten password? click here</span>
                <Button type="submit">SIGN IN</Button>
            </div>
            <p>or</p>
            <Button type="button" style={{
                margin: "5px",
            }} onClick={handleSignInWithFacebook}
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