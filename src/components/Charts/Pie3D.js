import React from 'react';
import ReactFC from 'react-fusioncharts';
import FushionCharts from 'fusioncharts';
import Chart from 'fusioncharts/fusioncharts.charts';
import FushionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
ReactFC.fcRoot(FushionCharts, Chart, FushionTheme);

const Pie3D = ({ data }) => {
  const chartConfigs = {
    type: "pie3d",
    width: "400",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: 'Languages',
        theme: 'fusion',
        decimals: 0,
        pieRadius: '45%',

      },
      data
    }
  };
  return <ReactFC {...chartConfigs} />;
};

export default Pie3D;
