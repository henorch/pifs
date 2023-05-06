import styled from "styled-components"
import { device } from "../../utils/breakpoint"

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

export const ItemsHolder =styled.div`
    background:white;
    height: 30vh;
    margin:2px;
`

export const TitleHolder = styled.h3`
    width:100%;
    background-color:white;
    text-align:center;
    
`