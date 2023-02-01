import React, { Component } from 'react';
import { RadialChart } from 'react-vis';
import '../Chart.css';

class Chart extends Component {
  render() {
    const labelsStyle = { fontSize: 8 };

    const myData = [
      { label: 'Below poverty line', angle: 15.4 },
      { label: 'Non-White', angle: 49.8 },
      { label: 'Linguistically isolated', angle: 7.8 },
      { label: 'Less than a High School education', angle: 14.9 },
      { label: 'Other', angle: 12.1 },
    ];
    return (
      <div className="App">
        <div className="pie-chart-container">
          <h3>
            Proportion of Key Demographics Living Within 1 Mile of All Sites
          </h3>
          <RadialChart
            data={myData}
            width={250}
            height={250}
            showLabels={true}
            labelsRadiusMultiplier={0.92}
            labelsStyle={labelsStyle}
          />
        </div>
      </div>
    );
  }
}

export default Chart;
