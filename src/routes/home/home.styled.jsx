import styled from "styled-components";


export const HomeContainer = styled.div`
    padding:2px;
    margin:5px;
    boder: 1px solid black;
` 

export const MainContainer = styled.div`
    display:flex;
    flex:1;
    color:white;
    height:35vh;
    align-content:center;
    justify-content:center;
    align-items: center;
`

export const MainContainer2 = styled.div`
    background:grey;
    display:flex;
    flex:1;
    height:20vh;
    margin-top:2px;
    border: 1px solid black;
    justify-content:center;
    align-items: center;
`
export const Main2Inner1 = styled.div`
    display: flex;
    flex: 1;
    height:100%;
    background:white;
    justify-content:center;
    align-items: center;

    &: hover{
        flex:2;
    }
`

export const Main2Inner2 = styled.div`
    display: flex;
    flex: 1;
    background:grey;
    justify-content:center;
    align-items: center;

    &: hover{
        flex:2;
    }
`

//caregory

export const CategoryContainer = styled.div`
`