import React, { Component } from 'react';
import {
  VerticalBarSeries,
  XYPlot,
  XAxis,
  YAxis,
  LabelSeries,
} from 'react-vis';
import './Chart.css';
class Chart extends Component {
  render() {
    const data = [
      { x: 'Below poverty line', y: 15.4 },
      { x: 'Non-White', y: 49.8 },
      { x: 'Linguistically\nisolated', y: 7.8 },
      { x: '> Highschool Education', y: 14.9 },
      { x: 'Other', y: 12.1 },
    ];
    const chartWidth = 500;
    const chartHeight = 350;
    const chartDomain = [0, 60];
    return (
      <div>
        <h2 className="chart-title">
          Percentage of Key Demographics Living Within 1 Mile of All Superfund
          Sites
        </h2>
        <div className="chart">
          <XYPlot
            xType="ordinal"
            width={chartWidth}
            height={chartHeight}
            yDomain={chartDomain}
          >
            {/* <XAxis /> */}
            <YAxis />
            <VerticalBarSeries data={data} />
            <LabelSeries
              className="lable-series"
              data={data.map((obj) => {
                return { ...obj, label: obj.y.toString() };
              })}
              labelAnchorX="start"
              labelAnchorY="text-after-edge"
            />
          </XYPlot>
        </div>
      </div>
    );
  }
}

export default Chart;
