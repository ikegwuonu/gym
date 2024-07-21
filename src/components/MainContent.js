import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './MainContent.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function MainContent() {
  const data = {
    labels: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Statistics',
        data: [3000, 4000, 3200, 5000, 4200, 4800, 5300, 4100],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Statistics',
      },
    },
  };

  return (
    <div className="main-content">
      <div className="header">
        <div className="header-item">
          <h3>Visitors</h3>
          <p>10,320</p>
        </div>
        <div className="header-item">
          <h3>Customers</h3>
          <p>4,628</p>
        </div>
        <div className="header-item">
          <h3>Orders</h3>
          <p>2,980</p>
        </div>
      </div>
      <div className="statistics">
        <Line data={data} options={options} />
      </div>
      <div className="spent-time">
        <h3>Spent Time</h3>
        <p>4h 26min</p>
      </div>
      <div className="info-card">
        <h3>How to properly manage your personal budget?</h3>
        <p>Lilly Donovan</p>
      </div>
      <div className="my-card">
        <h3>My Card</h3>
        <div className="card-details">
          <p>Alex Smith</p>
          <p>**** **** **** 9546</p>
          <p>07/24</p>
        </div>
      </div>
      <div className="transaction">
        <h3>Transaction</h3>
        <ul>
          <li>Taxi - $9.20</li>
          <li>Shopping - $142.00</li>
          <li>Netflix - $24.99</li>
        </ul>
      </div>
    </div>
  );
}

export default MainContent;
