import { Outlet, useNavigate} from 'react-router-dom';
import { Logo, 
    MobileIcon,
     NavBody, 
     NavLink, 
     NavigationContainer, 
     SideBarNav,
     SideBarBody,
    ProfileContainer,
    NavLinkSide,
    DivTitle} from './navigation.styles';
import { useContext, useState } from 'react';
import Search from '../../components/search/search.component';
import { UserContext } from '../../contexts/user.context';
import Button from '../../components/button/button.components';
import { signOutUser } from '../../utils/firebase/firebase';
import{ ReactComponent as ReactLogo } from "../../images/shopping-cart.svg";

const SideBar = ({handleToggle}) => {
    const { currentUser } = useContext(UserContext);
    const navigate = useNavigate();

    const goTo = () => {
        navigate("auth")
    }

   
    return(
        <SideBarNav>
            {currentUser && <ProfileContainer>
                <h2>{currentUser?.email}</h2>
            </ProfileContainer>}
            <DivTitle>CATEGORIES</DivTitle>
            <SideBarBody>
                    <NavLinkSide to="/">Home</NavLinkSide>
                    <NavLinkSide to="/homeappliances" onClick={handleToggle}>Home Appliances</NavLinkSide>
                    <NavLinkSide onClick={handleToggle}>Furnitures</NavLinkSide>
                    <NavLinkSide onClick={handleToggle}>Kitchen equipments</NavLinkSide>
                    <NavLinkSide onClick={handleToggle}>Clothings</NavLinkSide>
                    <NavLinkSide onClick={handleToggle}>Others</NavLinkSide>
            </SideBarBody>
        <DivTitle>PREFRENCE</DivTitle>
        <SideBarBody>
        <NavLinkSide style={{
            display:'flex',
            justifyContent: 'space-between'
        }}>
            <span>Night Mode</span> <input type ="checkbox"/>
        </NavLinkSide>
                    
            </SideBarBody>
            <div style={{
                display: "flex",
                flex:1,
                justifyContent:"center",
                padding:"20px"
            }}>{currentUser ?
            <Button onClick={signOutUser}>LOGOUT</Button> : 
            <Button onClick={goTo}>SIGN IN</Button> }
            </div>
        </SideBarNav>
    )
}



const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        
        setIsOpen(!isOpen)
    }
    return (
        <div>
            {isOpen && <SideBar handleToggle={handleToggle}/>}
            <NavigationContainer>
                <Logo alt="logo">PIFS</Logo>
                <ReactLogo
                    style={{
                        width:"35px",
                        height:"35px",
                        paddingTop:"15px",
                        marginRight:"15px"
                    }}
                ><sup 
                style={{
                    fontSize:'0.6em',
                }}
            >0</sup></ReactLogo>
                
                <MobileIcon onClick={handleToggle}>&#9776;</MobileIcon>
                
                <NavBody>
                    <NavLink>Home</NavLink>
                    <NavLink>Home Appliances</NavLink>
                    <NavLink>Furnitures</NavLink>
                    <NavLink>Kitchen equipments</NavLink>
                    <NavLink>Clothings</NavLink>
                    <NavLink>Others</NavLink>
                </NavBody>
            </NavigationContainer>
            <Search/>
            <Outlet/>
        </div>
        

    )
}

export default Navigation;