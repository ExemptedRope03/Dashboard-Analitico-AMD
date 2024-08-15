import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import styled from "styled-components";


export const ContainerDivMenu = styled.div `
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.accentText};
    width: 100%;
    height: 50px;
    align-content:center;
    .p{
    margin:0;
    }
`
export const MenuItems = styled.div`

    margin-left:5px;
    display:flex;
    justify-content:space-between;
`
export const GreetingsText = styled.p`
    margin:0;
    font-size:25px;
    font-weight:bold;
    align-content: center;
`

export const RightItems = styled.div`
    display : flex ;
    align-items: center;
` 

export const BorderButton = styled.div`
    border-left:1px solid ${(props) => props.theme.accentText};
`

export const StyledExitIcon = styled(ExitToAppIcon)`
    color: ${(props) => props.theme.accentText};
`

export const LabelSwitch = styled.p`
    margin:0;
    color: ${(props) => props.theme.accentText};
    font-weight:bold;
`
