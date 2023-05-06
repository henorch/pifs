import { Outlet} from 'react-router-dom';
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
import { useState } from 'react';
import Search from '../../components/search/search.component';


const SideBar = ({handleToggle}) => {
    return(
        <SideBarNav>
            <ProfileContainer>
                I am here
            </ProfileContainer>
            <DivTitle>CATEGORIES</DivTitle>
            <SideBarBody>
                    <NavLinkSide onClick={handleToggle}>Home</NavLinkSide>
                    <NavLinkSide onClick={handleToggle}>Home Appliances</NavLinkSide>
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
            <p>Bottom Page</p>
        </div>
        

    )
}

export default Navigation;