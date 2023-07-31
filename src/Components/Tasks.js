// Reminders.js
import React from 'react';
import '../Remain.css'; // Import the CSS file

const Reminders = () => {
  // Dummy data for medicine reminders
  const medicineReminders = [
    {
      id: 1,
      medicineName: 'Medicine A',
      dosage: '1 pill',
      time: '8:00 AM',
    },
    {
      id: 2,
      medicineName: 'Medicine B',
      dosage: '2 pills',
      time: '12:30 PM',
    },
    {
      id: 3,
      medicineName: 'Medicine C',
      dosage: '1 pill',
      time: '6:00 PM',
    },
  ];

  return (
    <div className="reminders-container" style={{marginTop: '-20px', marginLeft: '-10px'}}>
      <h1 className="reminders-heading" style={{marginTop: '-250px'}}>Reminders</h1>
      <div className="medicine-reminders">
        {medicineReminders.map((reminder) => (
          <div key={reminder.id} className="medicine-reminder">
            <div className="medicine-name">{reminder.medicineName}</div>
            <div className="medicine-dosage">{reminder.dosage}</div>
            <div className="medicine-time">{reminder.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reminders;
