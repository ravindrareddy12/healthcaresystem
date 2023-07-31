// Dashboard.js
import React from 'react';
import '../Remain.css';

const Alerts = () => {
  // Sample data for medicine alerts
  const medicineAlertsData = [
    { id: 1, medicineName: 'Aspirin', dosage: '500mg', message: 'Time to take your morning dose of Aspirin.' },
    { id: 2, medicineName: 'Ibuprofen', dosage: '200mg', message: 'Time to take your afternoon dose of Ibuprofen.' },
    { id: 3, medicineName: 'Paracetamol', dosage: '650mg', message: 'Time to take your evening dose of Paracetamol.' },
    { id: 4, medicineName: 'Loratadine', dosage: '10mg', message: 'Time to take your daily dose of Loratadine for allergies.' },
  ];

  return (
    <div className="reminders-container" style={{marginTop: '-20px', marginLeft: '-10px'}}>
      <div style={styles.container}>
      <h1 style={styles.header}>Medicine Alerts</h1>
      {/* Displaying the sample medicine alerts data */}
      {medicineAlertsData.map((alert) => (
        <div key={alert.id} style={styles.alert}>
          <div style={styles.medicineInfo}>
            <div style={styles.medicineName}>{alert.medicineName}</div>
            <div style={styles.dosage}>{alert.dosage}</div>
          </div>
          <div style={styles.message}>{alert.message}</div>
        </div>
      ))}
    </div>
    </div>
  );
};

// CSS styles for the component
const styles = {
  container: {
  
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    background: '#f0f0f0', /* Background color added */
    maxWidth: '400px',
    margin: 'auto',
    marginTop: '70px'
  },
  header: {
    fontSize: '24px',
    textAlign: 'center',
    marginBottom: '20px',
  },
  alert: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
    background: '#ffffff', /* Background color added */
  },
  medicineInfo: {
    flex: 1,
    marginRight: '10px',
  },
  medicineName: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  dosage: {
    fontSize: '14px',
    color: '#888',
  },
  message: {
    fontSize: '16px',
  },
};

export default Alerts;
