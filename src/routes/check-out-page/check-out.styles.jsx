import styled from "styled-components";


export const CheckOutContainer = styled.div`
    width: 90%; 
    min-height: 90vh;
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    margin: 2px auto;
`

export const CheckOutHeader = styled.div`
    width: 94%; 
    padding: 10px 0; 
    display: flex; 
    justify-content: space-between; 
    border-bottom: 1px solid darkgrey;
    
    .header-block { 
        text-transform: capitalize; 
        width: 23%;

        &:last-child { 
            width: 8%; 
        } 
    } 
`
export const EmptyCart = styled.div`
        height:40vh;
        width:50vh;
        margin:10px;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
`

export const Total = styled.div`
    margin-top: 30px; 
    margin-left: auto; 
    font-size: 36px; 
`