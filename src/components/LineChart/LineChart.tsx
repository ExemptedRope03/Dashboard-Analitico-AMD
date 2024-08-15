import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement } from 'chart.js';
import { GoogleAnalyticsSimulated } from "../../utils/simulatedData";

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement);


export const LineChart = () => {

    const fechas = GoogleAnalyticsSimulated.vistasPagina.map((dato) => dato.fecha);
    const vistasPagina = GoogleAnalyticsSimulated.vistasPagina.map((dato) => dato.vistas);
    const sesiones = GoogleAnalyticsSimulated.sesiones.map((dato) => dato.sesiones);

    const data = {
        labels: fechas, // Fechas en el eje X
        datasets: [
          {
            label: 'Vistas de Página',
            data: vistasPagina, // Datos de vistas de página
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: false,
            tension: 0.1,
          },
          {
            label: 'Sesiones',
            data: sesiones, // Datos de sesiones
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: false,
            tension: 0.1,
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
            text: 'Vistas de Página y Sesiones',
            },
        },
        scales: {
            x: {
            title: {
                display: true,
                text: 'Fecha',
            },
            },
            y: {
            title: {
                display: true,
                text: 'Cantidad',
            },
            },
        },
    };

    
    return <Line height={"250px"} width={"500px"} data={data} options={options} />;
    
}