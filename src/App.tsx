import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import { GlobalCss } from './styles';
import Home from './pages/Home';
import Restaurants from './pages/Restaurants';
import RestaurantDetail from './pages/RestaurantDetail';

function App() {
  return (
    <>
      <GlobalCss />
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/restaurant/:id" element={<RestaurantDetail />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
