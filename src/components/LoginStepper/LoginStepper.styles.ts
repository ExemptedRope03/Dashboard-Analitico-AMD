import { Button, MobileStepper } from "@mui/material";
import styled from "styled-components";

export const MainHeader = styled.h1`
    color:${(props) => props.theme.text};
    text-align:center;
`

export const NameInfoDiv = styled.div`
    text-align: center;
`

export const LabelName = styled.p`
    margin: 10px 0 0 0;
    color:${(props) => props.theme.text}
`
export const InputName = styled.input`
    padding:5px;
    font-size:17px;
    border-radius: 5px;
    margin: 1vh 0 5vh 0;
    text-align: center;
`
export const SyledMobileStepper = styled(MobileStepper)`
    max-width:400px;
    flex-grow:1;
    background-color: ${(props) => props.theme.background} !important;
`
export const StyledButton = styled(Button)`
    color:${(props) => props.theme.text} !important;
    &.Mui-disabled {
        color: gray !important;
    }
`
