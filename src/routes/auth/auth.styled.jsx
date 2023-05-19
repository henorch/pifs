import { Link } from "react-router-dom";
import styled from "styled-components";


export const AuthContainer = styled.div`
    width:100%;
    height:40px;
    margin: 0 auto;
    display:flex;
    box-shadow: 20px 20px 50px 15px;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    border-bottom: 1px solid ${({ theme }) => theme.colors.quoteBorder};
    justify-content: space-evenly;
    margin-bottom:40px;
   
`

export const Tab = styled(Link)`
    width:100%;
    height: 50px;
    padding:10px;background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-context:center;
    text-align: center;
    text-decoration:none;

    &:hover{
        background: white;
    }

    &:focus{
        background: white;
    }
`