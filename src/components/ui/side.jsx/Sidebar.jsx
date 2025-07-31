// components/sidebar.jsx
import React from 'react'
import './sidebar.css'; 
import { Home, Settings, User } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <h2>Control Panel</h2>
      <nav>
        <a href="#">
          <Home size={20} />
          <span>Home</span>
        </a>
        <a href="#">
          <User size={20} />
          <span>Profile</span>
        </a>
        <a href="#">
          <Settings size={20} />
          <span>Settings</span>
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
