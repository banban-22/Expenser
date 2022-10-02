// // Step 1 - Include react
import React from 'react';

// // Step 2 - Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// // Step 3 - Include the fusioncharts library
// import FusionCharts from 'fusioncharts';

// // Step 4 - Include the chart type
// import Column2D from 'fusioncharts/fusioncharts.charts';

// // Step 5 - Include the theme as fusion
// import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// // Step 6 - Adding the chart and theme as dependency to the core fusioncharts
// ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFusioncharts from 'react-fusioncharts';

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: 'Everyday Expense Summary (CAD$)',
    showpercentvalues: '1',
    defaultcenterlabel: 'Total',
    aligncaptionwithcanvas: '0',
    showLegend: '1',
    defaultCenterLabel: 'Total revenue: $64.08K',
    centerLabel: 'Revenue from $label: $value',
    captionpadding: '0',
    decimals: '1',
    theme: 'fusion',
    bgColor: '#ffffff',
    doughnutRadius: '120',
    pieRadius: '120',
    showBorder: '0',
  },
  data: [
    {
      label: 'Ice Cream Sandwich',
      value: '1000',
    },
    {
      label: 'Jelly Bean',
      value: '5300',
    },
    {
      label: 'Kitkat',
      value: '10500',
    },
    {
      label: 'Lollipop',
      value: '18900',
    },
    {
      label: 'Marshmallow',
      value: '17904',
    },
  ],
};

class MyComponent extends React.Component {
  render() {
    return (
      <ReactFusioncharts
        type="doughnut2d"
        width="100%"
        height="450"
        dataFormat="JSON"
        dataSource={dataSource}
        className="chart"
      />
    );
  }
}
export default MyComponent;
