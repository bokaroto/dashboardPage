// import { createStyles, Text } from "@mantine/core";
import DoughnutChart from './DoughnutWidget';
// import {
//   WidgetCard,
//   WidgetCardContent,
//   WidgetCardHeader,
// } from "./widgets/widget-card";

// const useStyles = createStyles((theme) => ({
//   doughnutWrapper: {
//     height: "220px",
//     width: "100%",
//     position: "absolute",
//     left: "50%",
//     top: "50%",
//     transform: "translate(-50%, -50%)",
//     [`@media (max-width: ${theme.breakpoints.md}px)`]: {
//       position: "relative",
//       left: "0",
//       top: "0",
//       transform: "unset",
//       width: "100%",
//       marginTop: "0px",
//       marginBottom: "25px",
//     },
//     [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
//       marginTop: "25px",
//     },
//   },
// }));

type TDoughnutChartModuleProps = {
  title: string;
  data: number[];
  labels: string[];
  currency?: string;
};

function DoughnutChartModule({
  title,
  data,
  labels,
  currency = 'EUR',
}: TDoughnutChartModuleProps) {
  // const { classes } = useStyles();
  return (
    <div className="border-2 border-solid rounded-md bg-tertiary border-tertiary">
      <div className="px-4 py-2 sm:px-6 lg:px-8 sm:flex sm:items-center rounded-t-md">
        <div className="py-2 sm:flex-auto text-textPrimary">
          <h1 className="text-base font-semibold leading-6 text-gray-200">
            {title}
          </h1>
        </div>
      </div>
      <div className="flow-root ">
        <DoughnutChart
          data={data}
          labels={labels}
          cutout={40}
          currency={currency}
        />
      </div>
    </div>
  );
}
export default DoughnutChartModule;
