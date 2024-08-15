import { IconButton, Switch } from "@mui/material";
import { BorderButton, ContainerDivMenu, GreetingsText, LabelSwitch, MenuItems, RightItems, StyledExitIcon } from "./NavMenu.styles"
import React from 'react';
import { useUser } from "../../context/userContext";

interface NavMenuProps {
    toggleTheme: () => void;
    
}

export const  NavMenu:React.FC<NavMenuProps> = ({toggleTheme}) =>{

    const {userName} = useUser();

    return(

        <ContainerDivMenu>

            <MenuItems>

                <GreetingsText>Bienvenido a AMD - {userName}  </GreetingsText>

                <RightItems>

                    <LabelSwitch>Modo Oscuro</LabelSwitch>
                    <Switch onClick={toggleTheme} />
                    <BorderButton >
                       <IconButton aria-label="delete" size="large">
                        <StyledExitIcon  />
                    </IconButton> 
                    </BorderButton>
                    

                </RightItems>   
                 
            </MenuItems>

        </ContainerDivMenu>
        
    )
}

