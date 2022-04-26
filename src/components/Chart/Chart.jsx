import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as chartjs } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import styles from './Chart.module.css';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

chartjs.register(ChartDataLabels);
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const BarChart = ({ data, country }) => {
    if (typeof country === 'undefined' ) {
        return 'Choose Country';
    }
    console.log(data,country);
    if(!country)
        country="India";
    console.log(data.Countries);
    const TotalConfirmed = data.Countries.find(x => x.Country === country).TotalConfirmed;
    const NewConfirmed = data.Countries.find(x => x.Country === country).NewConfirmed;
    const TotalDeaths = data.Countries.find(x => x.Country === country).TotalDeaths;

  const barChart = (
    country ? (
      <Bar
        data={{
          labels: ['TotalConfirmed', 'NewConfirmed', 'TotalDeaths'],
          datasets: [
            {
              label: '',
              backgroundColor: [ 'red', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [TotalConfirmed, NewConfirmed, TotalDeaths],
            },
          ],
        }}
      />
    ) : null
   );

  return (
    <div className={styles.container}>
      {barChart}
    </div>
  );
};

export default BarChart;