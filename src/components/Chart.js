import React, { Component } from 'react';
import { VerticalBarSeries, XYPlot, XAxis, LabelSeries } from 'react-vis';
import './Chart.css';

class Chart extends Component {
  render() {
    const data = [
      { x: 'A', y: 15.4 },
      { x: 'B', y: 49.8 },
      { x: 'C', y: 7.8 },
      { x: 'D', y: 14.9 },
      { x: 'E', y: 12.1 },
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
        <div>
          <XYPlot
            className="chart"
            xType="ordinal"
            width={chartWidth}
            height={chartHeight}
            yDomain={chartDomain}
          >
            <XAxis className="lables" />
            <VerticalBarSeries data={data} />
            <LabelSeries
              className="lable-series"
              data={data.map((obj) => {
                return { ...obj, label: obj.y.toString() };
              })}
              labelAnchorX="start"
              labelAnchorY="text-after-edge"
            />

            <p>
              <ul className="key">
                <li>A : "Below poverty line"</li>
                <li>B: "Non-White" </li>
                <li>C: Linguistically Isolated</li>
                <li>D: Less Than Highschool Education</li>
                <li>E: Other</li>
              </ul>
            </p>
          </XYPlot>
        </div>
      </div>
    );
  }
}

export default Chart;
