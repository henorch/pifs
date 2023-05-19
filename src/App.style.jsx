import styled from "styled-components";




export const Switch = styled.button`
  padding:20px;
  z-index:1;
  border-radius:50%;
  position: fixed;
  bottom: 0;
  right: 0;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border-bottom: 1px solid ${({ theme }) => theme.colors.quoteBorder};
  box-shadow: 5px 5px 5px solid grey inset;
`
