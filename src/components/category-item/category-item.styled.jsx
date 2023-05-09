import { Link } from "react-router-dom";
import styled from "styled-components";



export const CategoryContainer = styled(Link)`
    min-width: 30%; 
    height: 240px; 
    flex: 1 1 auto; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    margin: 0 2.5px 10px; 
    overflow: hidden; 
    
    &:hover { 
        cursor: pointer; 
        & .background-image {
        transform: scale(1.1); 
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95); } 
        & .category-body-container { 
            opacity: 0.9; 
        } 
    } 
    &.large { height: 380px; } 
    &:first-child { 
        margin-right: 7.5px; 
    } 
    &:last-child { 
        margin-left: 7.5px; 
    }
    
    &.large { height: 380px; } 
    &:first-child { 
        margin-right: 7.5px; 
    } 
    &:last-child { 
        margin-left: 7.5px; 
    } 
    .background-image 
    { 
        width: 100%; 
        height: 100%; 
        background-size: cover; 
        background-position: center; 
    }        
`


export const CategoryBody = styled.div`
        height: 90px; 
        padding: 10px 0px; 
        display: flex; 
        flex-direction: column; 
        align-items: center; 
        justify-content: center; 
        background-color: white; 
        opacity: 0.7; 
        position: absolute; 
        h2 { 
            font-weight: bold;
            text-align:center;
            margin: 0 6px 0; 
            font-size: 22px; 
            color: #4a4a4a; 
        } 
        p { 
            font-weight: lighter; 
            font-size: 16px; 
        } 
    }
`