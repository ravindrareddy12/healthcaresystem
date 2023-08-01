import React from 'react';
import '../Dash.css';

const Dashboard = () => {
  // Sample data to display in the dashboard
  const weight = '62.9kg';
  const bmi = '22.8kg/M2';
  const fatPercentage = '17.7%';
  const proteinMass = '8.5kg';
  const bodyMineralContent = '2.9kg';
  const boneMineralContent = '2.3kg';
  const totalBodyWater = '35.1L  '; // You should provide the actual value for TBW

  return (
    <div className='container'>
      <div className="dashboard-container" style={{ marginLeft: '250px', boxShadow: '40px 20px 60px rgba(0, 0, 0, 0.3)' }}>
      <h1 className="dashboard-heading">Better Peformance</h1>
      <div className="dashboard-item">
        <div className="circle" style={{ backgroundColor: '#FF5733' }}></div>
        <strong>Weight:</strong> {weight}
      </div>
      <div className="dashboard-item">
        <div className="circle" style={{ backgroundColor: '#33FF57' }}></div>
        <strong>BMI:</strong> {bmi}
      </div>
      <div className="dashboard-item">
        <div className="circle" style={{ backgroundColor: '#5733FF' }}></div>
        <strong>Fat %:</strong> {fatPercentage}
      </div>
      <div className="dashboard-item">
        <div className="circle" style={{ backgroundColor: '#FF33E6' }}></div>
        <strong>Protein Mass:</strong> {proteinMass}
      </div>
      <div className="dashboard-item">
        <div className="circle" style={{ backgroundColor: '#E6FF33' }}></div>
        <strong>Body Mineral Content:</strong> {bodyMineralContent}
      </div>
      <div className="dashboard-item">
        <div className="circle" style={{ backgroundColor: '#33E6FF' }}></div>
        <strong>Bone Mineral Content:</strong> {boneMineralContent}
      </div>
      <div className="dashboard-item">
        <div className="circle" style={{ backgroundColor: '#BEBEBE' }}></div>
        <strong>Total Body Water (TBW):</strong> {totalBodyWater}
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
