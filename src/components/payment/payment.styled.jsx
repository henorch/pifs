import styled from "styled-components";
import { device } from "../../utils/breakpoint";

export const PaymentContainer = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
    background:white;
    min-width:100%;
    margin-top:20px;
    justify-content:center;
    padding-bottom:40px;

    @media ${device.tablet}{
        min-width:50%;
    }
`

export const FormContainer = styled.div`
    height:60px;
    min-width: 250px;
    display:flex;
    flex-direction:column;
`