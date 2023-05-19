import styled from "styled-components"
import { device } from "../../utils/breakpoint"
import { Link } from "react-router-dom"

export const CategoryContainer = styled.div`
    display:grid;
    grid-template-columns: auto;

    @media ${device.tablet}{
        grid-template-columns: auto auto;
    }
    @media ${device.laptop}{
        grid-template-columns: auto auto auto auto;
    }
`

export const ItemsHolder =styled.button`
    background:white;
    display:flex;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    border-bottom: 1px solid ${({ theme }) => theme.colors.quoteBorder};
    justify-content:center;
    align-items:center;
    padding:2px;
    margin:2px;
`
export const ItemImage = styled.div`
    disiplat:flex;
    flex:1
`
export const ItemInfo = styled.div`
    display:flex;
    flex:1;
    align-items:center;
    flex-direction:column;
    margin:20px;
`
export const TitleHolder = styled.h3`
    width:100%;
    text-align:center;
    
`