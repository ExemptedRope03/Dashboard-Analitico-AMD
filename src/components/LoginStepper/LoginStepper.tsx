import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import {  useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { LabelName, InputName, MainHeader, NameInfoDiv, SyledMobileStepper, StyledButton } from "./LoginStepper.styles";
import {  useUser } from "../../context/userContext";
import { LoginAuthGoogle } from "../LoginAuthGoogle/LoginAuthGoogle";

interface LoginStepperProps{
    handleCloseModal: () => void;
}


export const LoginStepper:React.FC<LoginStepperProps> = ({handleCloseModal}) => {
    
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const [name, setName] = useState<string>("");
    const {setUser} = useUser();

    const handleNext = () => {
        localStorage.setItem("sessionName",name);
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleName = (event:React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setName(value);
    }

    const start = () =>{
        setUser(name);
        handleCloseModal();
    }

    useEffect(() => {
        const nameS = localStorage.getItem("sessionName");
        if(nameS){
            setName(nameS);
            setActiveStep(1);
        }
        
    }, []);

    const renderStep = () =>{
        if (activeStep === 0){
            return(
                <NameInfoDiv>
                    <LabelName>Introduce tu nombre</LabelName>
                    <InputName onChange={handleName} value={name}></InputName>
                </NameInfoDiv>
            );

        }else{
            return(
                <div>

                    <LoginAuthGoogle/>
                    
                </div>
            );
        }

    }

    return(
        <>

        <MainHeader>Inicio de sesion</MainHeader>

        {renderStep()}

        <SyledMobileStepper
        variant="dots"
        steps={2}
        position="static"
        activeStep={activeStep}
        nextButton={
            activeStep === 1 ? (
              <StyledButton size="small" onClick={start} >Iniciar</StyledButton>
            ) : (
              <StyledButton size="small" onClick={handleNext} disabled={activeStep === 1}>
                Next
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </StyledButton>
            )
          }
        backButton={
            <StyledButton size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
            ) : (
                <KeyboardArrowLeft />
            )}
            Back
            </StyledButton>
        }
        />
        
        </>
    );
}