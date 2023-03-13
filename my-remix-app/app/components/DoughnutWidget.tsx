// /* eslint-disable no-dupe-keys */
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Doughnut } from 'react-chartjs-2';

// ChartJS.register(ArcElement, Tooltip, Legend);

// export const data = {
//   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//   datasets: [
//     {
//       label: ['Votes', 'Total', 'Test'],
//       data: [12, 19, 3, 5, 2, 3],
// backgroundColor: [
//   'rgba(255, 99, 132, 0.2)',
//   'rgba(54, 162, 235, 0.2)',
//   'rgba(255, 206, 86, 0.2)',
//   'rgba(75, 192, 192, 0.2)',
//   'rgba(153, 102, 255, 0.2)',
//   'rgba(255, 159, 64, 0.2)',
// ],
//       borderColor: [
// 'rgba(255, 99, 132, 1)',
// 'rgba(54, 162, 235, 1)',
// 'rgba(255, 206, 86, 1)',
// 'rgba(75, 192, 192, 1)',
// 'rgba(153, 102, 255, 1)',
// 'rgba(255, 159, 64, 1)',
//       ],
//       borderWidth: 1,
// labelData: [
//   {
//     label: 'Label 1',
//     value: 'Value 1',
//     date: '2022-01-01',
//     country: 'Country 1',
//   },
//   {
//     label: 'Label 2',
//     value: 'Value 2',
//     date: '2022-01-02',
//     country: 'Country 2',
//   },
//   {
//     label: 'Label 3',
//     value: 'Value 3',
//     date: '2022-01-03',
//     country: 'Country 3',
//   },
//   {
//     label: 'Label 4',
//     value: 'Value 4',
//     date: '2022-01-04',
//     country: 'Country 4',
//   },
//   {
//     label: 'Label 5',
//     value: 'Value 5',
//     date: '2022-01-05',
//     country: 'Country 5',
//   },
//   {
//     label: 'Label 6',
//     value: 'Value 6',
//     date: '2022-01-06',
//     country: 'Country 6',
//   },
// ],
//     },
//   ],
// };

// const options = {
//   tooltips: {
// callbacks: {
//   label: function (tooltipItem: any, data: any) {
//     var dataset = data.datasets[tooltipItem.datasetIndex];
//     var index = tooltipItem.index;
//     var value = dataset.data[index];
//     var labelData = dataset.labelData[index];
//     var label = labelData.label;
//     var valueStr = labelData.value;
//     var dateStr = labelData.date;
//     var countryStr = labelData.country;
//     var total = dataset.data.reduce((a: any, b: any) => a + b, 0);
//     var percentage = ((value / total) * 100).toFixed(2);
//     return `${label}: ${valueStr}, Date: ${dateStr}, Country: ${countryStr}, Value: ${value} (${percentage}%)`;
//   },
// },
//   },
// };

// const DoughnutChart = () => {
//   return <Doughnut data={data} />;
// };

// export default DoughnutChart;

import { useMemo } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  registerables,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// import { _DeepPartialObject } from "chart.js/types/utils";

ChartJS.register(...registerables, ArcElement, Tooltip, Legend);
const averageOrder = {
  dataUnit: 'People',
};
// const useStyles = createStyles((theme) => ({
//   noDataTitle: {
//     [`@media (max-width: ${theme.breakpoints.md}px)`]: {
//       fontSize: "24px",
//     },
//   },
// }));

// const ImageToolbarItem = (props: any) => {
//   return (
//     <ToolbarItem {...props}>
//       <img
//         className="inline-block rounded-full h-9 w-9"
//         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//         alt=""
//       />
//     </ToolbarItem>
//   );
// };

function DoughnutChart({
  data,
  labels,
  position = 'right' as 'right',
  cutout = 55,
  currency = 'EUR',
}: {
  data: number[];
  labels: string[];
  cutout?: number;
  position?:
    | 'right'
    | 'left'
    | 'top'
    | 'bottom'
    | 'center'
    | 'chartArea'
    // | _DeepPartialObject<{ [scaleId: string]: number }>
    | undefined;
  currency?: string;
}) {
  // const theme = useMantineTheme();
  // const { classes } = useStyles();
  // const colors = [
  //   theme.colors.violet[3],
  //   theme.colors.yellow[3],
  //   theme.colors.pink[3],
  //   theme.colors.blue[3],
  //   theme.colors.red[3],
  //   theme.colors.orange[3],
  //   theme.colors.gray[3],
  //   theme.colors.green[3],
  // ];
  const imageUrl =
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';

  const myImage = () => {
    return (
      <img
        className="inline-block rounded-full h-9 w-9"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
    );
  };
  const chart = useMemo(() => {
    // return data && data.length > 0 ? (

    const someNames = ['pera', 'mika', 'zika', 'bole'];

    const tooltip = {
      callbacks: {
        label: function (tooltipItem: any, data: any) {
          const imageUrl =
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';

          let tooltipContent = '';

          tooltipContent += `<img src="${imageUrl}" width="50" height="50" />`;

          return tooltipContent;
        },
      },
    };

    return (
      <Doughnut
        className="p-4 bg-primary w-60 h-60 "
        data={{
          ...averageOrder,
          labels: labels,
          // labels: labels,
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
              // backgroundColor: '#bbb',
              // backgroundColor: colors,
              backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
              data: data,
            },
          ],
        }}
        options={{
          cutout: cutout,
          rotation: 1,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: position,
              labels: {
                usePointStyle: true,
                pointStyle: 'rect',
                // color: '#fff',
                color: 'rgba(255, 206, 86, 1)',
                padding: 20,
                font: {
                  size: 16,
                },
                // generateLabels: (context) => {
                //   // const original = Chart.defaults.global.legend.labels.generateLabels(chart);

                //   // original.forEach(label => {
                //   //   const data = label.dataset.data[label.index];
                //   //   label.text += ` (${data})`;
                //   // });

                //   // return original;

                //   return 'generateLabels';
                // },
              },
            },
            tooltip: {
              callbacks: {
                // label: (context: any) => {
                //   console.log('context', context);
                //   return context.label + ' ' + context.parsed.toFixed(2) + '%';
                // },
                beforeTitle: (context: any) => {
                  return 'before the title';
                },
                title: (context: any) => {
                  console.log(context);
                  return `${context[0].label} neko ime:  ${
                    someNames[context[0].dataIndex]
                  }`;
                },
                afterTitle: (context: any) => {
                  return `<img src="${imageUrl}" width="50" height="50" />`;
                },
                beforeBody: (context: any) => {
                  const newLineArray = [];
                  const imageUrl =
                    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';

                  newLineArray.push('hello');
                  newLineArray.push('bey');
                  newLineArray.push(
                    `<img src="${imageUrl}" width="50" height="50" />`
                  );
                  return newLineArray;
                },
                beforeLabel: (context: any) => {
                  return 'before label';
                },
                afterLabel: (context: any) => {
                  return 'after label';
                },
                afterBody: (context: any) => {
                  return 'after the body';
                },
                // label: (context: any) => {
                //   const imageUrl =
                //     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';

                //   let tooltipContent = '';

                //   tooltipContent += `<img src="${imageUrl}" width="50" height="50" />`;

                //   return tooltipContent;
                // },
              },
            },
          },
        }}
      />
    );
  }, [data]);

  //   ) : (
  //     <Center
  //       style={{
  //         height: "100%",
  //       }}
  //     >
  //       <Title className={classes.noDataTitle} order={3}>
  //         No data available
  //       </Title>
  //     </Center>
  //   );
  // }, [data]);

  return chart;
}

export default DoughnutChart;
