import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { GoogleAdsSimulated } from "../../utils/simulatedData";


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const BarChart = () => {

    const listColors = ["rgba(75, 192, 192, 0.5)",'rgba(54, 162, 235, 0.5)','rgba(255, 206, 86, 0.5)','rgba(255, 99, 132, 0.5)']

    const nombresCampañas = GoogleAdsSimulated.campañas.map((campaña) => campaña.nombre);
    const impresionesCampañas = GoogleAdsSimulated.campañas.map((campaña) => campaña.impresiones);
    const clicsCampañas = GoogleAdsSimulated.campañas.map((campaña) => campaña.clics);
    const conversionesCampañas = GoogleAdsSimulated.campañas.map((campaña) => campaña.conversiones);
    const costoCampañas = GoogleAdsSimulated.campañas.map((campaña) => campaña.costo);

    const data = {
        labels: nombresCampañas,
        datasets: [
            {
              label: 'Impresiones',
              data: impresionesCampañas, // Datos para las impresiones
              backgroundColor: 'rgba(75, 192, 192, 0.5)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
            {
              label: 'Clics',
              data: clicsCampañas, // Datos para los clics
              backgroundColor: 'rgba(54, 162, 235, 0.5)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
            },
            {
              label: 'Conversiones',
              data: conversionesCampañas, // Datos para las conversiones
              backgroundColor: 'rgba(255, 206, 86, 0.5)',
              borderColor: 'rgba(255, 206, 86, 1)',
              borderWidth: 1,
            },
            {
              label: 'Costo',
              data: costoCampañas, // Datos para el costo
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
          ],
    };
      
    const options = {
        responsive: true,
        plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Campañas Google Ads',
        },
        },
    };

    return(
        <Bar height={"250px"} width={"500px"} data={data} options={options} />
    );
}