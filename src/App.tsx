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
import { CRMSimulated, GoogleAdsSimulated, GoogleAnalyticsSimulated, MetaAdsSimulated } from "./utils/simulatedData";



function App() {

  //Declare main variables with use state 
  const [theme, setTheme] = useState<DefaultTheme>(lightTheme);
  const [open, setOpen] = useState(localStorage.getItem("sessionStart") ? false:true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  //Function declarations
  const toggleTheme = () => {
    setTheme ( theme === lightTheme ? darkTheme:lightTheme);
  }

  //Tablas google analytics
  const bounceRateLabels = GoogleAnalyticsSimulated.sesiones.map(sesiones => sesiones.fecha);
  const bounceRateLabel = ["Tasa de rebote"];
  const bounceRateData = GoogleAnalyticsSimulated.sesiones.map(sesiones => [sesiones.tasaRebote]);
  const viewTimeLabels = GoogleAnalyticsSimulated.vistasPagina.map(views => views.fecha);
  const viewTimeLabel = ["Vistas","Sesiones"];
  const vistas = GoogleAnalyticsSimulated.vistasPagina.map(views => views.vistas);
  const sesiones = GoogleAnalyticsSimulated.sesiones.map(sesiones => sesiones.sesiones);
  const viewTimeData: number[][] = vistas.map((value, index) => [value, sesiones[index]]);
  const demographicsByAgeLabels = GoogleAnalyticsSimulated.demografía.edad.map((item) => item.rango);
  const demographicsByAgeData = GoogleAnalyticsSimulated.demografía.edad.map((item) => [item.porcentaje]);
  const demographicsByAgeLabel = ["Distribución por Edad"];
  const seseVsBounceLabels =  GoogleAnalyticsSimulated.sesiones.map((session) => session.fecha);
  const seseVsBounceLabel =  ["Sesiones","Tasa de rebote"];
  const seseVsBounceDataSes =  GoogleAnalyticsSimulated.sesiones.map((session) => session.sesiones);
  const seseVsBounceDataBou =  GoogleAnalyticsSimulated.sesiones.map((session) => session.tasaRebote);
  const seseVsBounceData = [seseVsBounceDataSes,seseVsBounceDataBou]
  
  
  //Tablas google adds
  type Campana = {
    
    impresiones: number;
    clics: number;
    conversiones: number;
    costo: number;
  };
  type CampanaKeys = keyof Campana;
  const infoCampGooLabels = GoogleAdsSimulated.campañas.map(campañas => campañas.nombre);
  const allKeys = Object.keys(GoogleAdsSimulated.campañas);
  const infoCampGooLabel: CampanaKeys[] = ['impresiones', 'clics', 'conversiones', 'costo']
  const t:Campana[] = GoogleAdsSimulated.campañas
  const infoCampGooData = t.map(campana => 
    infoCampGooLabel.map(key => campana[key])
  );
  const evolGooLabels = GoogleAdsSimulated.campañas.map(campañas => campañas.nombre);
  const evolGooLabel = ["impresiones","clics"]
  const evolGooData = GoogleAdsSimulated.campañas.map(campaña => [campaña.impresiones, campaña.clics]);
  const campaignCostLabels = GoogleAdsSimulated.campañas.map(campañas => campañas.nombre);
  const campaignCostLabel = ["Costo de campaña"];
  const campaignCostData = GoogleAdsSimulated.campañas.map(campañas => [campañas.costo]);
  const clicsCostLabels = GoogleAdsSimulated.campañas.map(campañas => campañas.nombre);
  const clicsCostLabel = ["clics","costo"];
  const clicsCostData= GoogleAdsSimulated.campañas.map(campañas => [campañas.clics,campañas.costo]);

  //Tablas meta adds
  const infoAddMetaLabels = MetaAdsSimulated.anuncios.map(anuncios => anuncios.nombre);
  const infoAddMetaLabel = ["alcance","participación","gastoPublicidad","conversiones"];
  const infoAddMetaData = MetaAdsSimulated.anuncios.map(anuncios =>[anuncios.alcance,anuncios.participación,anuncios.gastoPublicidad,anuncios.conversiones])
  const reachMetaLabel = ["alcance","participacion"];
  const reachMetaData = MetaAdsSimulated.anuncios.map(anuncios =>[anuncios.alcance,anuncios.participación])
  const spendMetaLabel = ["Gasto de publicidad"];
  const spendMetaData = MetaAdsSimulated.anuncios.map(anuncios =>[anuncios.gastoPublicidad])
  const participationSpendLabel = ["Participacion","Gasto de publicidad"];
  const participationSpendData = MetaAdsSimulated.anuncios.map(anuncios =>[anuncios.participación,anuncios.gastoPublicidad])

  //Tablas CRMS
  const CRMSLabels = CRMSimulated.leads.map(lead => lead.nombre);
  const CRMSLabel = ["Costo de adquisicion", "valor de vida"];
  const CRMSData = CRMSimulated.leads.map(lead => [lead.costoAdquisición,lead.valorDeVida]);

  return (

    <ThemeProvider theme={theme}>
      <UserProvider>

      <NavMenu modalSession={handleOpen} toggleTheme={toggleTheme} />
      <Container>

        <SectionContainer >
          <HeaderGraph >Google Analytics</HeaderGraph>
          
          <ScrollDivGraph>

            <GraphSpace >
              <BarChart labels={bounceRateLabels} label={bounceRateLabel} data={bounceRateData}/>
            </GraphSpace>

            <GraphSpace>
              <LineChart labels={viewTimeLabels} label={viewTimeLabel} data={viewTimeData}/>
            </GraphSpace>

            <GraphSpace>
              <PieChart labels={demographicsByAgeLabels} label={demographicsByAgeLabel} data={demographicsByAgeData}/>
            </GraphSpace>

            <GraphSpace>
              <CombinedChart labels={seseVsBounceLabels} label={seseVsBounceLabel} data={seseVsBounceData}/>
            </GraphSpace>

          </ScrollDivGraph>
          
        </SectionContainer>
        
        <SectionContainer >
          <HeaderGraph >Google Adds</HeaderGraph>
          
          <ScrollDivGraph>

            <GraphSpace >
              <BarChart labels={infoCampGooLabels} label={infoCampGooLabel} data={infoCampGooData}/>
            </GraphSpace>

            <GraphSpace>
              <LineChart labels={evolGooLabels} label={evolGooLabel} data={evolGooData}/>
            </GraphSpace>

            <GraphSpace>
              <PieChart labels={campaignCostLabels} label={campaignCostLabel} data={campaignCostData}/>
            </GraphSpace>

            <GraphSpace>
              <CombinedChart labels={clicsCostLabels} label={clicsCostLabel} data={clicsCostData}/>
            </GraphSpace>

          </ScrollDivGraph>
          
        </SectionContainer>

        <SectionContainer >
          <HeaderGraph >Meta Adds</HeaderGraph>
          
          <ScrollDivGraph>

            <GraphSpace >
              <BarChart labels={infoAddMetaLabels} label={infoAddMetaLabel} data={infoAddMetaData}/>
            </GraphSpace>

            <GraphSpace>
              <LineChart labels={infoAddMetaLabels} label={reachMetaLabel} data={reachMetaData}/>
            </GraphSpace>

            <GraphSpace>
              <PieChart labels={infoAddMetaLabels} label={spendMetaLabel} data={spendMetaData}/>
            </GraphSpace>

            <GraphSpace>
              <CombinedChart labels={infoAddMetaLabels} label={participationSpendLabel} data={participationSpendData}/>
            </GraphSpace>

          </ScrollDivGraph>
          
        </SectionContainer>

        <SectionContainer >
          <HeaderGraph >CRM</HeaderGraph>
          
          <ScrollDivGraph>

            <GraphSpace >
              <BarChart labels={CRMSLabels} label={CRMSLabel} data={CRMSData}/>
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
