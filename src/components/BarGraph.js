import React, { Component } from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries,
  LabelSeries,
} from "react-vis";

class BarGraph extends Component {
  render() {
    return (
      <div className="bar-graph">
        <h3>Demographics</h3>
        <XYPlot width={300} height={300}>
          <LabelSeries />
          <HorizontalGridLines />
          <LineSeries
            color="red"
            data={[
              { x: 0, y: 13.465608, label: "White" },
              { x: 1, y: 26.10976, label: "Black" },
              { x: 2, y: 17.59682, label: "Asian" },
            ]}
          />
          <XAxis title="X" />
          <YAxis />
        </XYPlot>
      </div>
    );
  }
}
export default BarGraph;
