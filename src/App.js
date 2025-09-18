import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import VTUResultPortal from './components/VTUResultPortal';
// import ResultDisplay from './components/ResultDisplay';
// import About from './components/About';
// import Contact from './components/Contact';
// import NotFound from './components/NotFound';
// import './App.css';
import ResultPage from './pages/ResultPage';
import Result from './pages/Result';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        
          <Route path="/" element={<ResultPage />} />
          <Route path="/vtuJJ25" element={<Result />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;