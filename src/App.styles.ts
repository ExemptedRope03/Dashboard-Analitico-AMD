import { Box, Modal } from "@mui/material";
import { styled } from "styled-components";

export const Container = styled.div`

  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  width: 100%;
  height: 95%;
 
`;

export const StyledModal = styled(Modal)`
  &:focus {
    outline: none;
  }
  *:focus {
    outline: none;
  }
`;

export const StyledBox = styled(Box)`
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: ${(props) => props.theme.background};
  padding: 16px;
`