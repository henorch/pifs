import { DotContainer, MainContainer, SpinnerContainer } from "./spinner.styled";

const Spinner = () => {
    return(
            <MainContainer>
        <SpinnerContainer>
            <DotContainer>P</DotContainer>
            <DotContainer>I</DotContainer>
            <DotContainer>F</DotContainer>
            <DotContainer>S</DotContainer>
            <br/>
        </SpinnerContainer>
            <b>Loading, please wait</b>
            </MainContainer>
    )
}

export default Spinner;