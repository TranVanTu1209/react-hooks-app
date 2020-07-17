import React from 'react';
import ReactFC from 'react-fusioncharts';
import FushionCharts from 'fusioncharts';
import Chart from 'fusioncharts/fusioncharts.charts';
import FushionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';

ReactFC.fcRoot(FushionCharts, Chart, FushionTheme);

const Doughnut2d = ({ data }) => {
  const chartConfigs = {
    type: "doughnut2d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: 'Stars Per Language',
        theme: 'candy',
        decimals: 0,
        showPercentValues: 0,
      },
      data
    }
  };
  return <ReactFC {...chartConfigs} />;
};

export default Doughnut2d;
