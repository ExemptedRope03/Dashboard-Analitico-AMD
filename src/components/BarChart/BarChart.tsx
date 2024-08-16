import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { GoogleAdsSimulated } from "../../utils/simulatedData";


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps{
  labels:string[];
  label:string[];
  data:number[][];


}

export const BarChart:React.FC<BarChartProps> = ({labels,label,data}) => {

   

    const backgroundColors = ['rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(153, 102, 255, 0.2)'];
    const borderColors = ['rgba(75, 192, 192, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(153, 102, 255, 1)'];
    const borderWidth = 1;


    const datas1: {
      labels: string[];
      datasets: {
          label: string;
          data: number[];
          backgroundColor: string;
          borderColor: string;
          borderWidth: number;
      }[];
  } = {
      labels: labels,
      datasets: label.map((lbl, index) => ({
          label: lbl,
          data: data.map(d => d[index]),
          backgroundColor: backgroundColors[index],
          borderColor: borderColors[index],
          borderWidth: borderWidth
      }))
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
        <Bar height={"250px"} width={"500px"} data={datas1} options={options} />
    );
}