import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cupon from './components/coupon';
import Redeem from './components/redeem';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cupon" element={<Cupon />} />
        <Route path="/redeem" element={<Redeem />} />
      </Routes>
    </Router>
  );
}

export default App;

