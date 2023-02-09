import React, { Component } from "react";
import { RadialChart, DiscreteColorLegend } from "react-vis";

class Chart extends Component {
  render() {
    const labelsStyle = { fontSize: 15 };

    const myData = [
      { label: "Below poverty line", angle: 15.4 },
      { label: "Non-White", angle: 49.8 },
      { label: "Linguistically isolated", angle: 7.8 },
      { label: "Less than a High School education", angle: 14.9 },
      { label: "Other", angle: 12.1 },
    ];
    return (
      <div className="chart">
        <div>
          <h3>
            Proportion of Key Demographics Living Within 1 Mile of All Superfund
            Sites
          </h3>
          <RadialChart
            data={myData}
            width={400}
            height={400}
            showLabels={true}
            labelsRadiusMultiplier={0.92}
            labelsStyle={labelsStyle}
          />
          {/* <DiscreteColorLegend title={myData} /> */}
        </div>
      </div>
    );
  }
}

export default Chart;
