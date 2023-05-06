import { Outlet, Routes } from "react-router-dom";
import { AuthContainer, Tab } from "./auth.styled";



const AuthComponent = () => {
    return(
        <div>
          <AuthContainer>
            <Tab to='/sign'>SIGN IN</Tab>
            <Tab to='/signUp'>SIGN OUT</Tab>
          </AuthContainer>
           <Outlet/>
        </div>
    )
  }

export default AuthComponent;