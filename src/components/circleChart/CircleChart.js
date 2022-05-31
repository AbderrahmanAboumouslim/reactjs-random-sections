// STEP 1 - Include Dependencies
// Include react
import React from 'react';

// Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Include the fusioncharts library
import FusionCharts from 'fusioncharts';

// Include the chart type
import Chart from 'fusioncharts/fusioncharts.charts';

// Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';

// Styling
import styled from 'styled-components';

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const CircleChart = ({ data }) => {
  const chartConfigs = {
    type: 'doughnut3D', // The chart type
    width: '700', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: 'Trending SOLANA NFTs',

        theme: 'candy',
        decimals: 0,
        showPercentValues: 0,
        doughnutRadius: '40%',
      },
      // Chart Data
      data,
    },
  };

  return (
    <Wrapper>
      <ReactFC {...chartConfigs} />
      <Hide />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: red;
  &:first-child {
    position: relative;
  }
`;
const Hide = styled.div`
  position: absolute;
  width: 9rem;
  height: 5rem;
  color: green;

  bottom: 2rem;
  left: 2rem;
  z-index: 100000000000000000000;
`;

export default CircleChart;
