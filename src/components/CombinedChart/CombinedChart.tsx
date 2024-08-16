import React from 'react';


import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend, ChartData, ChartOptions } from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend);

interface CombinedChartProps{
  labels:string[];
  label:string[];
  data:number[][];

}




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

const CombinedChart:React.FC<CombinedChartProps> = ({labels,label,data}) => {
  
  const datas = {
    labels: labels, // Nombres de los leads en el eje X
    datasets: [
      {
        type: 'bar'as const,
        label: label[0],
        data: data[0], // Datos del costo de adquisición
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        type: 'line' as const,
        label: label[1],
        data: data[1], // Datos del valor de vida
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: false,
        tension: 0.1,
      },
    ],
  };




  
  return <Chart height={"250px"} width={"500px"} data={datas} options={options} type={'bar'} />;
};

export default CombinedChart;
