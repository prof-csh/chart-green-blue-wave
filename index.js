import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

import { Line, Pie } from 'react-chartjs-2';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      lineData: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "Old User",
            backgroundColor: '#08AEEA',
            borderColor: '#08AEEA',
            data: [0, 10, 5, 14, 30, 40, 55],
        },
        {
            label: "New User",
            backgroundColor: '#2AF598',
            borderColor: '#2AF598',
            data: [100, 104, 120, 80, 95, 80, 70],
        }]
    },

    pieData: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            backgroundColor: ['rgba(255, 0, 0, 0.7)','rgba(255, 100, 50, 0.7)','rgba(10, 100, 200, 0.7)','rgba(20, 110, 250, 0.7)','rgba(50, 210, 350, 0.7)','rgba(255, 100, 255, 0.7)','rgba(250, 200, 10, 0.7)'],
            borderColor: ['rgba(255, 0, 0, 0.7)','rgba(255, 100, 50, 0.7)','rgba(10, 100, 200, 0.7)','rgba(20, 110, 250, 0.7)','rgba(50, 210, 350, 0.7)','rgba(255, 100, 255, 0.7)','rgba(250, 200, 10, 0.7)'],
            data: [25, 10, 5, 14, 30, 40, 55],
        }]
    },
    lineChartOptions:{
      maintainAspectRatio: true,
      legend: {
        position: 'bottom',
        fillStyle: Color,
        color: 'rgba(0,0,0,0)',
      }
    },
    pieChartOptions:{
      maintainAspectRatio: true,
      legend: {
        position: 'bottom',
      }
    },
    };
  }

  render() {
    return (
      <div>
        <h2>Line Chart</h2>
        <Hello name={this.state.name} />
        <p>
        <Line data={this.state.lineData} options={this.state.lineChartOptions} redraw/>
        <br/>
        <br/>
        <br/>
        <h2>Pie Chart</h2>
        <Pie data={this.state.pieData} options={this.state.pieChartOptions} width={600} height={400} redraw/>
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
