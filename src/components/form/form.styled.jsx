import styled from "styled-components";



export const Group = styled.div`
    margin: 20px;
    display:flex;
    flex-direction:column;
    padding:10px;
    border: 1px solid grey;
`
export const Label = styled.label`
    text-align:left;

    
`

export const Input = styled.input`
    padding:5px;
    border: none;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    &:focus{
        border: none;
    }
    &:hover{
        border: none;
    }
`