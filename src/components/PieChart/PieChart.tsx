import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { GoogleAnalyticsSimulated } from '../../utils/simulatedData';

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = () => {

    const rangosEdad = GoogleAnalyticsSimulated.demografía.edad.map((dato) => dato.rango);
    const porcentajesEdad = GoogleAnalyticsSimulated.demografía.edad.map((dato) => dato.porcentaje);

    const dataEdad = {
        labels: rangosEdad, // Etiquetas para el rango de edad
        datasets: [
          {
            label: 'Distribución por Edad',
            data: porcentajesEdad, // Datos para los porcentajes de edad
            backgroundColor: [
              'rgba(75, 192, 192, 0.6)',
              'rgba(255, 99, 132, 0.6)',
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(255, 99, 132, 1)',
            ],
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
            text: 'Distribución Demográfica',
          },
        },
    };

    return <Pie height={"250px"} width={"500px"} data={dataEdad} options={options} />;
}