import React, { useRef, useEffect } from 'react';
import { Chart as ChartJS } from 'chart.js';

const Grafikon = () => {
  const chartRef = useRef();

  useEffect(() => {
    const myChartRef = chartRef.current.getContext('2d');
    new ChartJS(myChartRef, {
      type: 'doughnut',
      data: {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [
          {
            data: [10, 20, 30],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          },
        ],
      },
      options: {
        legend: {
          display: true,
          labels: {
            generateLabels: function (chart) {
              const { data } = chart;
              if (data.labels.length && data.datasets.length) {
                return data.labels.map((label, i) => {
                  const meta = chart.getDatasetMeta(0);
                  const ds = data.datasets[0];
                  const arc = meta.data[i];
                  const custom = (arc && arc.custom) || {};
                  const getValueAtIndexOrDefault =
                    ChartJS.helpers.getValueAtIndexOrDefault;
                  const arcOpts = chart.options.elements.arc;
                  const fill = custom.backgroundColor
                    ? custom.backgroundColor
                    : getValueAtIndexOrDefault(
                        ds.backgroundColor,
                        i,
                        arcOpts.backgroundColor
                      );
                  const stroke = custom.borderColor
                    ? custom.borderColor
                    : getValueAtIndexOrDefault(
                        ds.borderColor,
                        i,
                        arcOpts.borderColor
                      );
                  const bw = custom.borderWidth
                    ? custom.borderWidth
                    : getValueAtIndexOrDefault(
                        ds.borderWidth,
                        i,
                        arcOpts.borderWidth
                      );

                  return {
                    text: `${label} : ${ds.data[i]}`,
                    fillStyle: fill,
                    strokeStyle: stroke,
                    lineWidth: bw,
                    hidden: isNaN(ds.data[i]) || meta.data[i].hidden,

                    // Extra data used for toggling the correct item
                    index: i,
                  };
                });
              }
              return [];
            },
          },
        },
      },
    });
  }, []);

  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
};

export default Grafikon;
