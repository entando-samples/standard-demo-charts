import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

export function App({dataToRender}) {
  const data = {
    labels: ['Rome', 'Milan', 'Naples', 'Florence', 'Venice', 'Turin'],
    datasets: [
      {
        label: '# of Failures',
        data: dataToRender,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };
  return <Radar data={data} />;
}

export default App
