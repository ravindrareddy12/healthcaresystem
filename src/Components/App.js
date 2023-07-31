import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AiOutlineHome, AiFillAlert } from "react-icons/ai";
import { BiSolidDashboard } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import Dashboard from './Dashboard';
import Home from './Home';
import Task from './Tasks';
import Doctor from './Doctors';
import Alerts from './Alerts';

const SidebarItem = ({ icon: Icon, to, children }) => (
  <div className="sidebar-item">
    <Icon size={30} style={{ marginRight: '30px' }} />
    <Link to={to}>{children}</Link>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <div className="sidebar">
          <SidebarItem icon={AiOutlineHome} to="/">Home</SidebarItem>
          <SidebarItem icon={BiSolidDashboard} to="/dashboard">Dashboard</SidebarItem>
          <SidebarItem icon={FaTasks} to="/task"> Remainders </SidebarItem>
          <SidebarItem icon={AiFillAlert} to="/alerts">Alerts</SidebarItem>
          <SidebarItem icon={FcAbout} to="/doctors">Help with doctors</SidebarItem>
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Home />} />
            <Route path="/task" element={<Task />} />
            <Route path="/doctors" element={<Doctor />} />
            <Route path="/alerts" element={<Alerts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
