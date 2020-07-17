import React from 'react';
import ReactFC from 'react-fusioncharts';
import FushionCharts from 'fusioncharts';
import Chart from 'fusioncharts/fusioncharts.charts';
import FushionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FushionCharts, Chart, FushionTheme);

const Column3D = ({ data }) => {
  const chartConfigs = {
    type: "column3d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: 'Most popular',
        theme: 'fusion',
        decimals: 0,
        yAxisName: 'Stars',
        xAxisName: 'Repos',
        showPercentValues: 0,
      },
      data
    }
  };
  return <ReactFC {...chartConfigs} />;
};

export default Column3D;