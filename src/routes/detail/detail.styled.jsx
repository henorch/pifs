import styled from "styled-components";
import { device } from "../../utils/breakpoint";

export const MainContainer = styled.div`  
    width:100%;
    @media ${device.laptop}{
        width:600px
    }
`
export const DetailContainer = styled.div`
    display:flex;    
    flex:1;
    flex-direction: column;
    padding:4px;
    background:white;
    margin:2px;
    @media ${device.tablet}{
        flex-direction:row;
    }
    
`

export const ImageContainer = styled.img`
    min-width:50vw;
    min-height:40vh;
    padding:20px;
    background:white;
    margin:2px auto;
    flex:1;
    @media ${device.tablet}{
        min-width:50vw;
    }
    @media ${device.laptop}{
        min-width:40vw;
    }
`

export const DetailPad = styled.div`
    width:100%;
    height:48vh;
    @media ${device.tablet}{
        background:white;
        display:flex;
        margin-top:-4px;
        flex-direction:column;
        justify-content:center;
    }
`
export const InfoPad = styled.div`
    background:white;
    margin:2px auto;
    padding:20px
`