
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

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