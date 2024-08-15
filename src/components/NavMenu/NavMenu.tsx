import { IconButton, Switch } from "@mui/material";
import { BorderButton, ContainerDivMenu, GreetingsText, LabelSwitch, MenuItems, RightItems, StyledExitIcon } from "./NavMenu.styles"
import React, { useEffect, useState } from 'react';
import { useUser } from "../../context/userContext";

interface NavMenuProps {
    toggleTheme: () => void;
    modalSession:() => void;
    
}

export const  NavMenu:React.FC<NavMenuProps> = ({toggleTheme,modalSession}) =>{

    const {userName,closeUser} = useUser();

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 570);

    const endSession = () =>{
        closeUser();
        modalSession();
    }

    useEffect(() => {
        const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 570);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(

        <ContainerDivMenu>

            <MenuItems>

                {isSmallScreen ? (
                    <GreetingsText>AMD</GreetingsText>
                ) : (
                    <GreetingsText>Bienvenido a AMD - {userName}</GreetingsText>
                )}
                

                <RightItems>

                    <LabelSwitch>Modo Oscuro</LabelSwitch>
                    <Switch onClick={toggleTheme} />
                    <BorderButton >
                       <IconButton aria-label="delete" size="large">
                        <StyledExitIcon onClick={endSession}  />
                    </IconButton> 
                    </BorderButton>
                    

                </RightItems>   
                 
            </MenuItems>

        </ContainerDivMenu>
        
    )
}

