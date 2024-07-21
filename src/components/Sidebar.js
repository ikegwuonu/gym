import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-item active">
        <i className="fas fa-home"></i>
      </div>
      <div className="sidebar-item">
        <i className="fas fa-chart-bar"></i>
      </div>
      <div className="sidebar-item">
        <i className="fas fa-wallet"></i>
      </div>
      <div className="sidebar-item">
        <i className="fas fa-cog"></i>
      </div>
    </div>
  );
}

export default Sidebar;
