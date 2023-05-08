import styled from "styled-components"
import { device } from "../utils/breakpoint"

export const HomeApplianceContainer = styled.div`
    display:grid;
    grid-template-columns: auto auto;

    @media ${device.tablet}{
        grid-template-columns: auto auto auto;
    }
    @media ${device.laptop}{
        grid-template-columns: auto auto auto auto;
    }
`

export const ItemsHolder =styled.div`
    border: 1px solid black;
    height: 40vh;
    margin:5px;
    border-radius:15px;
`