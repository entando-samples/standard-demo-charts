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
import seedscardIcon from './assets/Framecredit-card.png';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
);

export function App({dataToRender}) {
  const data = {
    labels: ['Bonds', 'ETF', 'Stocks', 'Futures', 'ETC', 'CFD'],
    datasets: [
      {
        data: dataToRender,
        backgroundColor: 'rgb(14,104,55)',
        borderColor: 'rgb(0,0,0)',
        borderWidth: 1,
      },
    ],
  };
  return(
  <div>
    <div>
      <div className="jss1">
        <div className="jss3"><img alt="interest account icon" className="jss2"
                                   src={seedscardIcon}/>
          <div className="jss4">Portfolio</div>
          <div className="jss6"><i className="fas fa-ellipsis-v"></i></div>
        </div>
        <Radar data={data} style={{"margin": "auto"}}/>;
      </div>
    </div>
  </div>
  )
}

export default App
