import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import { GlobalCss } from './styles';
import Home from './pages/Home';
import Restaurants from './pages/Restaurants';
import RestaurantDetail from './pages/RestaurantDetail';
import Checkout from './pages/Checkout';
import Cart from './components/Cart';
import { store } from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PreviousPageProvider } from './utils/PreviousPageContext';

function App() {
  return (
    <Provider store={store}>
      <GlobalCss />
      <Router>
        <PreviousPageProvider>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/restaurants" element={<Restaurants />} />
              <Route path="/restaurant/:id" element={<RestaurantDetail />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
            <Footer />
            <Cart />
            <ToastContainer />
          </div>
        </PreviousPageProvider>
      </Router>
    </Provider>
  );
}

export default App;
