import React from 'react';
import ReactFC from 'react-fusioncharts';
import FushionCharts from 'fusioncharts';
import Chart from 'fusioncharts/fusioncharts.charts';
import FushionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
ReactFC.fcRoot(FushionCharts, Chart, FushionTheme);

const ExampleChart = ({ data }) => {
  const chartConfigs = {
    type: "column2d",
    width: "800",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Countries With Most Oil Reserves [2017-18]",
        subCaption: "In MMbbl = One Million barrels",
        xAxisName: "Country",
        yAxisName: "Reserves (MMbbl)",
        numberSuffix: "K",
        theme: "fusion"
      },
      data
    }
  };
  return <ReactFC {...chartConfigs} />;
};

export default ExampleChart;
