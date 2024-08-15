import React from 'react';

import { CRMSimulated } from '../../utils/simulatedData';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend, ChartData, ChartOptions } from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend);




const nombresLeads = CRMSimulated.leads.map((lead) => lead.nombre);
const costoAdquisición = CRMSimulated.leads.map((lead) => lead.costoAdquisición);
const valorDeVida = CRMSimulated.leads.map((lead) => lead.valorDeVida);


const data = {
  labels: nombresLeads, // Nombres de los leads en el eje X
  datasets: [
    {
      type: 'bar'as const,
      label: 'Costo de Adquisición',
      data: [200,150], // Datos del costo de adquisición
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
    {
      type: 'line' as const,
      label: 'Valor de Vida',
      data: [1000,750], // Datos del valor de vida
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
      text: 'Costo de Adquisición vs Valor de Vida',
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Leads',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Valor',
      },
    },
  },
};

const CombinedChart: React.FC = () => {
  return <Chart data={data} options={options} type={'bar'} />;
};

export default CombinedChart;
