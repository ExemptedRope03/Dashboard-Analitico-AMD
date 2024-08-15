import { useEffect, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./themes";
import {  Container, GraphSpace, HeaderGraph, ScrollDivGraph, SectionContainer, StyledBox, StyledModal } from "./App.styles";
import { NavMenu } from "./components/NavMenu/NavMenu";
import { UserProvider, useUser } from "./context/userContext";
import { LoginStepper } from "./components/LoginStepper/LoginStepper";
import { BarChart } from "./components/BarChart/BarChart";
import { LineChart } from "./components/LineChart/LineChart";
import { PieChart } from "./components/PieChart/PieChart";
import CombinedChart from "./components/CombinedChart/CombinedChart";



function App() {

  //Declare main variables with use state 
  const [theme, setTheme] = useState<DefaultTheme>(lightTheme);
  const [open, setOpen] = useState(localStorage.getItem("sessionName") ? false:true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  //Function declarations
  const toggleTheme = () => {
    setTheme ( theme === lightTheme ? darkTheme:lightTheme);
  }



  return (

    <ThemeProvider theme={theme}>
      <UserProvider>

      <NavMenu modalSession={handleOpen} toggleTheme={toggleTheme} />
      <Container>

        <SectionContainer >
          <HeaderGraph >Google Analytics</HeaderGraph>
          
          <ScrollDivGraph>

            <GraphSpace >
              <BarChart/>
            </GraphSpace>

            <GraphSpace>
              <LineChart/>
            </GraphSpace>

            <GraphSpace>
              <PieChart/>
            </GraphSpace>

            <GraphSpace>
              <CombinedChart/>
            </GraphSpace>

          </ScrollDivGraph>
          
        </SectionContainer>
        
        <SectionContainer >
          <HeaderGraph >Google Adds</HeaderGraph>
          
          <ScrollDivGraph>

            <GraphSpace >
              <BarChart/>
            </GraphSpace>

            <GraphSpace>
              <LineChart/>
            </GraphSpace>

            <GraphSpace>
              <PieChart/>
            </GraphSpace>

            <GraphSpace>
              <CombinedChart/>
            </GraphSpace>

          </ScrollDivGraph>
          
        </SectionContainer>

        <SectionContainer >
          <HeaderGraph >Meta Adds</HeaderGraph>
          
          <ScrollDivGraph>

            <GraphSpace >
              <BarChart/>
            </GraphSpace>

            <GraphSpace>
              <LineChart/>
            </GraphSpace>

            <GraphSpace>
              <PieChart/>
            </GraphSpace>

            <GraphSpace>
              <CombinedChart/>
            </GraphSpace>

          </ScrollDivGraph>
          
        </SectionContainer>

        <SectionContainer >
          <HeaderGraph >CRM</HeaderGraph>
          
          <ScrollDivGraph>

            <GraphSpace >
              <BarChart/>
            </GraphSpace>

            <GraphSpace>
              <LineChart/>
            </GraphSpace>

            <GraphSpace>
              <PieChart/>
            </GraphSpace>

            <GraphSpace>
              <CombinedChart/>
            </GraphSpace>

          </ScrollDivGraph>
          
        </SectionContainer>
        
        
      </Container>
      <StyledModal
        open={open}
      >
        <StyledBox>
          <LoginStepper handleCloseModal={handleClose}/>
        </StyledBox>
      </StyledModal>

      </UserProvider>
    </ThemeProvider>

  );
}

export default App;
