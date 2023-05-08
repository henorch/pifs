import { Outlet, Routes } from "react-router-dom";
import { AuthContainer, Tab } from "./auth.styled";



const AuthComponent = () => {
    return(
        <div>
          <AuthContainer>
            <Tab to='/auth'>SIGN IN</Tab>
            <Tab to='signUp'>SIGN UP</Tab>
          </AuthContainer>
           <Outlet/>
        </div>
    )
  }

export default AuthComponent;