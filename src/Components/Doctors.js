import React from 'react';

const HelpWithDoctors = () => {
  // Dummy data for doctors
  const doctors = [
    {
      name: 'Dr. John Doe',
      specialty: 'Cardiologist',
      contact: 'john.doe@example.com',
    },
    {
      name: 'Dr. Jane Smith',
      specialty: 'Dermatologist',
      contact: 'jane.smith@example.com',
    },
    {
      name: 'Dr. Michael Johnson',
      specialty: 'Pediatrician',
      contact: 'michael.johnson@example.com',
    },
  ];

  // Styles for the component
  const containerStyle = {
    margin: '20px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
  };

  const headerStyle = {
    fontSize: '30px',
    fontWeight: 'bold',
    marginBottom: '20px',
    borderBottom: '2px solid #333',
    paddingBottom: '10px',
  };

  const doctorStyle = {
    margin: '10px 0',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)',
  };

  const nameStyle = {
    fontSize: '20px',
    color: '#333',
  };

  const specialtyStyle = {
    marginBottom: '8px',
    color: '#777',
  };

  const contactStyle = {
    color: '#008080',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Help With Doctors</h1>
      {/* Display the list of doctors */}
      {doctors.map((doctor) => (
        <div key={doctor.name} style={doctorStyle}>
          <h2 style={nameStyle}>{doctor.name}</h2>
          <p style={specialtyStyle}>Specialty: {doctor.specialty}</p>
          <p style={contactStyle}>Contact: {doctor.contact}</p>
        </div>
      ))}
    </div>
  );
};

export default HelpWithDoctors;
