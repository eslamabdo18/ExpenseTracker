import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {

  const dataPointValue = props.dataPoint.map(data => data.value)
  const totMax = Math.max(...dataPointValue);

  return (
    <div className="chart">
      {props.dataPoint.map((data) => (
        <ChartBar
          value={data.value}
          maxValue={totMax}
          label={data.label}
          key={data.id}
        />
      ))}
    </div>
  );
};

export default Chart;
