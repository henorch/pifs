import { Link, Outlet, useNavigate} from 'react-router-dom';
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
import { PRODUCTS } from '../../assets/product';
import { CartContext } from '../../contexts/cart.context';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';
import CategoriesMain from '../../components/categoriesmain/categories.component';



const SideBar = ({handleToggle}) => {
    const { currentUser } = useContext(UserContext);
    const navigate = useNavigate();

    const goTo = () => {
        navigate("auth")
    }

   
    return(
        <SideBarNav>
            <span
            onClick={handleToggle} 
            style={{
                display:"flex",
                flex:1,
                justifyContent:"flex-end",
                padding:"5px"
            }}>X</span>
            {currentUser && <ProfileContainer>
                <h2 style={{
                    marginBottom:"-3px"
                }}>{currentUser?.displayName}</h2>
                <span>{currentUser?.email}</span>
            </ProfileContainer>}
            <DivTitle>CATEGORIES</DivTitle>
            <SideBarBody>
                    <NavLinkSide to="/" onClick={handleToggle}>Home</NavLinkSide>
                    <NavLinkSide to="/homeappliances" onClick={handleToggle}>Home Appliances</NavLinkSide>
                    <NavLinkSide to="/furnitures" onClick={handleToggle}>Furnitures</NavLinkSide>
                    <NavLinkSide to="/equipments" onClick={handleToggle}>Kitchen equipments</NavLinkSide>
                    <NavLinkSide to="/wares" onClick={handleToggle}>Clothings</NavLinkSide>
                    <NavLinkSide onClick={handleToggle}>Others</NavLinkSide>
            </SideBarBody>
        <DivTitle>PREFRENCE</DivTitle>
        <SideBarBody>
        <NavLinkSide style={{
            display:'flex',
            justifyContent: 'space-between'}}>
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
    const { isCartOpen, cartCount, setIsCartOpen} = useContext(CartContext)
    const [isFocus, setIsFocus ] = useState(false);
    const handleToggle = () => {
        
        setIsOpen(!isOpen)
    }

    const ToggleCart = () => {
        setIsCartOpen(!isCartOpen)
    }
    return (
        <div>
            {isOpen && <SideBar handleToggle={handleToggle}/>}
            <NavigationContainer>
                <Logo as="Link" alt="logo">PIFS</Logo>
                <ReactLogo
                    style={{
                        width:"35px",
                        height:"35px",
                        paddingTop:"15px",
                        marginRight:"15px",
                        color: "blue"
                    }}
                    onClick={ToggleCart}
                /><sup 
                style={{
                    fontSize:'1em',
                    background:"blue",
                    width:20,
                    marginLeft:"-20px",
                    marginBottom:"-10px",
                    borderRadius:"20%",
                    textAlign:"center",
                    height:20,
                    color:"white",
                }}
            >{cartCount}</sup>
                
                <MobileIcon onClick={handleToggle}>&#9776;</MobileIcon>
                
                <NavBody>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/homeappliances">Home Appliances</NavLink>
                    <NavLink to="/furnitures">Furnitures</NavLink>
                    <NavLink to="/equipments">Kitchen equipments</NavLink>
                    <NavLink to="/wares">Clothings</NavLink>
                    <NavLink>Others</NavLink>
                </NavBody>
                {isCartOpen && <CartDropDown ToggleCart={ToggleCart}/>}
            </NavigationContainer>
            <Search isFocus={isFocus} setIsFocus={setIsFocus} products={PRODUCTS}/>
             <Outlet/>
        </div>
    )
}

export default Navigation;