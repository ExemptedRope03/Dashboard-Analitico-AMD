import { Box, Modal } from "@mui/material";
import { styled } from "styled-components";

export const Container = styled.div`

  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  width: 100%;
  height: 94%;
  overflow-y: auto;
 
`;

export const StyledModal = styled(Modal)`
  &:focus {
    outline: none;
  }
  *:focus {
    outline: none;
  }
`;

export const SectionContainer = styled.div`
  padding: 2%;
  

`

export const ScrollDivGraph = styled.div`
  overflow-x: auto;
  width: 100%;
  white-space: nowrap;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  height: 300px;
  display:flex;
  align-items: center;

  /* Estilos para el scroll */
  &::-webkit-scrollbar {
    height: 4px; 
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888; 
    border-radius: 10px; 
  }

  &::-webkit-scrollbar-track {
    background-color: #f5f5f5; 
  }
`

export const HeaderGraph = styled.h1`
  font-size:20px;
`

export const GraphSpace = styled.div`
  margin: 0 25px;
  height:250px;
  width:500px;
`


export const StyledBox = styled(Box)`
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: ${(props) => props.theme.background};
  padding: 16px;

  @media (max-width: 550px) {
    width: 300px;
  }
`