import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Nav from './components/Nav'
import './App.css';


const App = () => {
  return (
      <div className="container">
          <Nav />
          <div className="content-wrapper">
              <Sidebar />
              <MainContent />
          </div>
      </div>
  )
}
export default App;