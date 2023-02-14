import React, { Component } from "react";
import { VerticalBarSeries, XYPlot, XAxis, LabelSeries } from "react-vis";
import "./Chart.css";

class Chart extends Component {
  render() {
    const data = [
      { x: "A", y: 15.4 },
      { x: "      ", y: 13.7, color: "other" },
      { x: "B", y: 49.8 },
      { x: "   ", y: 39.6, color: "other" },
      { x: "C", y: 7.8 },
      { x: "    ", y: 5.1, color: "other" },
      { x: "D", y: 14.9 },
      { x: "", y: 12.5, color: "other" },
    ];
    const chartWidth = 400;
    const chartHeight = 350;
    const chartDomain = [0, 60];
    return (
      <div>
        <h2 className="chart-title">
          Percentage of Key Demographics Living Within 1 Mile of All Superfund
          Sites Compared to National Averages
        </h2>
        <div>
          <XYPlot
            className="chart"
            xType="ordinal"
            width={chartWidth}
            height={chartHeight}
            yDomain={chartDomain}
            colorType="category"
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
          </XYPlot>
          <p>
            <ul className="key">
              <li>
                A: 15% Households Below Poverty Level compared to 13.7% of total
                population
              </li>
              <li>
                B: 49.8% People of Color compared to 39.6% of total population
              </li>
              <li>
                C: People Speaking a Language Other than English compared to
                5.1% of total population
              </li>
              <li>
                D: 14.9% of people with less than a high school education
                compated to 12.5% of total population
              </li>
            </ul>
          </p>
        </div>
      </div>
    );
  }
}

export default Chart;
