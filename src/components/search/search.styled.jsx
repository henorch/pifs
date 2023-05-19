import styled from "styled-components";


export const SearchGroup = styled.div`
    width:90%;
    margin:0 auto;
    display:flex;
    margin-top:80px;
    border-radius: 50px;
    justify-content:space-between;
    padding:15px;
    align-items:center;
    background:white;
    height:20px;
`
export const SearchInput = styled.input`
    width: 80%;
    height:100%;
    border:none;
    background:#fffcff;

    &:focus{
        border:none;
    }
`

export const SearchButton = styled.button`
    background: blue;
    border:none;
    color:white;
    font-weight:bold;
    border-radius:50%;
    width: 35px;
    height: 35px;
`
