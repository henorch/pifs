import styled from "styled-components";


export const CartDropDn = styled.div`
    position: absolute; 
    width: 240px; 
    height: 340px; 
    display: flex; 
    flex-direction: column; 
    padding: 20px; 
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.quoteBorder};
    top: 90px; 
    right: 40px; 
    z-index: 5;
`

export const EmptyMessage = styled.div`
    font-size: 18px; 
    margin: 50px auto;
    text-align: center;
`

export const CartItemed = styled.div`
     height: 240px; 
    display: flex; 
    flex-direction: column; 
    overflow: scroll; 
`

export const CartButton = styled.button`
    margin-top: auto; 
`
