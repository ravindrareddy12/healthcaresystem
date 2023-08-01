import '../Home.css';
import { AiFillCaretRight, AiOutlineCaretLeft } from 'react-icons/ai';
// import { BsFillPersonFill , BsFillCalendarDateFill} from "react-icons/bs";
// import { MdOutlineMedicalServices } from "react-icons/md";
const Dashboard = () => {
  

  return (
    <div className='HomeContainer'>
      <div className='home-intro'>
        <div className='left'>
          <img src='https://media.istockphoto.com/id/1373258973/photo/successful-senior-doctor-smiling.webp?b=1&s=170667a&w=0&k=20&c=yH4l2J0etNi9gnj2z1lF8uzuYMzB7234EPXRrGOm4Vk=' alt='' />
        </div>
        <div className='right'>
          <strong className='right-arrow'><AiFillCaretRight style={{ marginTop: 30 }} /></strong>
          <h1 className='heading'>
            Complete Healthcare <br></br>
            Solutions for Everyone
          </h1>
          <p className='para'>
            We're always available for our Patients with emergency problems.<br></br>
            You can easily reach us 24/7. We focus on the highest quality.
          </p>
          <strong className='left-arrow'><AiOutlineCaretLeft /></strong>
        </div>
      </div>
      <div className='appointment-container'>
      <h3 className='consult'>Need consultation?</h3>
        <h1 className='app'>Book an appointment</h1>
        <form className='appointment-form'>
          
          <label htmlFor='name' style={{marginLeft: 50}} >Name:</label>
          <input
            type='text'
            id='name'
            placeholder='Enter Your Name'
            required
            style={{
              marginLeft: '20px',
              width: 150,
              border: 'none',
              borderBottom: '1px solid #000', // Change color or style as desired
              marginBottom: '5px',
              paddingBottom: '5px',
            }}
          />
        
          <label htmlFor='email' style={{marginLeft: 50}}>Email:</label>
          <input
            type='email'
            id='email'
            placeholder='Enter Your Email'
            required
            style={{
              width: 150,
              marginLeft: '20px',
              border: 'none',
              borderBottom: '1px solid #000', // Change color or style as desired
              marginBottom: '10px',
              paddingBottom: '5px',
            }}
          /><br/>
         
          <label htmlFor='preferredDate' style={{marginLeft: 50}}>Preferred Date:</label>
          <input
            type='date'
            id='preferredDate'
            required
            style={{
              marginLeft: '20px',
              width: 100,
              border: 'none',
              borderBottom: '1px solid #000', // Change color or style as desired
              marginBottom: '10px',
              paddingBottom: '5px',
            }}
          />
          
         <small style={{ fontSize: 15, marginLeft:'40px'}}>select Services</small>
          <select style={{width: 150,marginLeft: '20px',}} >
            <option value="select1" >Select</option>
            <option value="select1" >options</option>
            <option value="select1" >options</option>
          </select><br />

          <button className='book-appointment-button' type='submit'>Book Appointment</button>
        </form>
      </div>
    </div>
  );
}

export default Dashboard;