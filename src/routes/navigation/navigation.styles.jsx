import styled, { keyframes } from "styled-components";
import { device } from "../../utils/breakpoint";
import { Link } from "react-router-dom";



export const NavigationContainer = styled.div`
    display:flex;
    flex:1;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    border-bottom: 1px solid ${({ theme }) => theme.colors.quoteBorder};
    padding:10px 20px;
    positon:fixed; 
    top:0;
    left:0;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;

    @media ${device.mobileS}{
        border-radius:0px;
    }

    @media ${device.tablet}{
        border-radius:  0px  0px 30px  50px; 
    }
`

export const Logo = styled.h2`
    width: 30%x;
    height:98%;
    color: ${({ theme }) => theme.colors.text};
    display:flex;
    flex:1;
    font-size:2em;

`

export const MobileIcon = styled.button`
    background:transparent;
    border:none;
    color: ${({ theme }) => theme.colors.text};
    font-size:40px;

    @media ${device.laptop}{
        display:none;
    }
`

export const NavLink = styled(Link)`
    color: ${({ theme }) => theme.colors.text};
    text-align:center;
`

export const NavLinkSide = styled(Link)`
    color:black;
    text-align:center;
    padding:10px;
    margin-bottom: 2px;
    text-align:left;
    background: #ccdccc;

    &: hover{
        background: #fff
    }
`

export const NavBody = styled.div`
    display:flex;
    flex-direction:row;
    flex:2;
    justify-content:space-between;
    align-items: center;
    @media ${device.mobileS}{
        display:none;
    }
    @media ${device.laptop}{
        display:flex;
    }

`

const slideIn = keyframes`
  from {
    left:-50vh
  }

  to {
    left:0vh;
  }
`;


export const SideBarNav = styled.div`
    width: 80vw;
    height: 100vh;
    animation: ${slideIn} 0.09s linear;
    z-index:1;
    box-shadow: 20px 20px 50px 15px grey;
    position:fixed;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    border-bottom: 1px solid ${({ theme }) => theme.colors.quoteBorder};
`

//Profile

export const ProfileContainer = styled.div`
  background: grey;
  width:96%;
  height:20vh;
  margin:2px auto;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
`

export const SideBarBody = styled.div`
  display:flex;
  flex-direction:column
`

export const DivTitle = styled.div`
  margin-top:20px;
  width:100%;
  padding:10px;

`