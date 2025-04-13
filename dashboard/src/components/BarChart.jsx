import React from 'react';
import Chart from 'react-apexcharts';

const BarChart = ({ chartState }) => {
  return (
    <div className="w-full bar-chart  bg-[var(--primary-color)]   px-6 py-8 md:h-[350px] md:w-7/12 overflow-hidden rounded-md">
      <Chart
        options={chartState.options}
        series={chartState.series}
        type="bar"
        width="100%"
      />
    </div>
  );
};

export default BarChart;
