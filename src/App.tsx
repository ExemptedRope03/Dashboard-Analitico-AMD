import { useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./themes";
import {  Container, StyledBox, StyledModal } from "./App.styles";
import { NavMenu } from "./components/NavMenu/NavMenu";
import { UserProvider } from "./context/userContext";
import { LoginStepper } from "./components/LoginStepper/LoginStepper";
import { BarChart } from "./components/BarChart/BarChart";
import { LineChart } from "./components/LineChart/LineChart";
import { PieChart } from "./components/PieChart/PieChart";
import CombinedChart from "./components/CombinedChart/CombinedChart";



function App() {

  //Declare main variables with use state 
  const [theme, setTheme] = useState<DefaultTheme>(lightTheme);
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  //Function declarations

  const toggleTheme = () => {
    setTheme ( theme === lightTheme ? darkTheme:lightTheme);
  }


  

  return (

    <ThemeProvider theme={theme}>
      <UserProvider>

      <NavMenu toggleTheme={toggleTheme} />
      <Container>

        <p style={{margin:0}}>Main Div</p>
        <div style={{width:"300px"}}>
          <BarChart/>
          
        </div>
        <div style={{width:"300px"}}>
          <LineChart/>
        </div>
        <div style={{width:"300px"}}>
          <PieChart/>
        </div>
        <div style={{width:"300px"}}>
          <CombinedChart/>
        </div>
        
        
        
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
