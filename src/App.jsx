import React, { useState } from 'react';
import './App.css';

// Import all components
import Dashboard from './components/Dashboard/dashboard';
import Services from './components/Services/services';
import HowItWorks from './components/Howitworks/howitworks';
import Developers from './components/Developers/developers';
import Pricing from './components/Pricing/pricing';
import GetMatched from './components/Getmatched/getmatched';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch(currentPage) {
      case 'dashboard':
        return <Dashboard setCurrentPage={setCurrentPage} />;
      case 'services':
        return <Services setCurrentPage={setCurrentPage} />;
      case 'how-it-works':
        return <HowItWorks setCurrentPage={setCurrentPage} />;
      case 'developers':
        return <Developers setCurrentPage={setCurrentPage} />;
      case 'pricing':
        return <Pricing setCurrentPage={setCurrentPage} />;
      case 'get-matched':
        return <GetMatched setCurrentPage={setCurrentPage} />;
      default:
        return <Dashboard setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;