import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Photos from './components/photos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/album" element={<Photos />} />
      </Routes>
    </Router>
  );
}

export default App;

