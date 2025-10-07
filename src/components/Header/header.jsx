import React from 'react';
import './header.css';

export default function Header({ setCurrentPage }) {  // ✅ Must receive setCurrentPage
      console.log('setCurrentPage:', setCurrentPage);  // Should log function
     console.log('Type:', typeof setCurrentPage);     // Should log "function"
    return (
    <header>
      <nav className="container">
        <div 
          className="logo" 
          onClick={() => setCurrentPage('dashboard')}
          style={{ cursor: 'pointer' }}
        >
          ShopBuilder
        </div>
        <ul className="nav-links">
          <li>
            <a onClick={() => setCurrentPage('services')} style={{ cursor: 'pointer' }}>
              Services
            </a>
          </li>
          <li>
            <a onClick={() => setCurrentPage('how-it-works')} style={{ cursor: 'pointer' }}>
              How It Works
            </a>
          </li>
          <li>
            <a onClick={() => setCurrentPage('developers')} style={{ cursor: 'pointer' }}>
              Our Developers
            </a>
          </li>
          <li>
            <a onClick={() => setCurrentPage('pricing')} style={{ cursor: 'pointer' }}>
              Pricing
            </a>
          </li>
          <li>
            <button className="nav-btn" onClick={() => setCurrentPage('get-matched')}>
              Get Matched
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}