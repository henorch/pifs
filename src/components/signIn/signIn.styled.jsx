import styled from "styled-components";



export const SignInContainer = styled.div`
    width:98%;
    display:flex;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    border-bottom: 1px solid ${({ theme }) => theme.colors.quoteBorder};
    flex-direction:column;
    align-content:center;
    text-align:center;
    padding:10px;
`

export const SignInTitle = styled.h1`
    font-style:bold;
`

export const SubText = styled.p`
    font-style: italic;
    margin-bottom:20px;
`

export const Link = styled.a`
    font-style: italic;
    margin-top:10px;
`

export const ErrorShow = styled.div`
        display: flex;
        padding: 10px 5px;
        margin-left: 20px;
        margin-top: -15px;
        color: red;
        text-align:left;
`