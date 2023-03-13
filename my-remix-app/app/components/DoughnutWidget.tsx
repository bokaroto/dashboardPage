import { useMemo } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  registerables,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import type { TDoughnutWidgetProps } from '~/utils/types';

ChartJS.register(...registerables, ArcElement, Tooltip, Legend);
const averageOrder = {
  dataUnit: 'People',
};

function DoughnutChart({
  data,
  position = 'right' as 'right',
  cutout = 55,
  currency = 'EUR',
}: TDoughnutWidgetProps) {
  const myRatios = data.map((item) => item.data.ratio);
  const myLabels = data.map((item) => item.label);

  const chart = useMemo(() => {
    return (
      <Doughnut
        className="p-4 bg-secondary w-60 h-60 "
        data={{
          ...averageOrder,
          labels: myLabels,
          datasets: [
            {
              label: 'Active Users',
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
              data: myRatios,
            },
          ],
        }}
        options={{
          cutout: cutout,
          rotation: 1,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
              position: position,
              labels: {
                usePointStyle: true,
                pointStyle: 'rect',
                color: 'rgba(255, 206, 86, 1)',
                padding: 20,
                font: {
                  size: 16,
                },
              },
            },
            tooltip: {
              callbacks: {
                title: (context: any) => {
                  return `${context[0].label}`;
                },
                label: (context: any) => {
                  const newLineArray = [];
                  newLineArray.push(
                    `Balance: ${data[context.dataIndex].data.balance}`
                  );
                  newLineArray.push(
                    `Value: ${data[context.dataIndex].data.value}`
                  );
                  newLineArray.push(
                    `Ratio: ${data[context.dataIndex].data.ratio}`
                  );
                  return newLineArray;
                },
              },
            },
          },
        }}
      />
    );
  }, [data]);

  return chart;
}

export default DoughnutChart;
