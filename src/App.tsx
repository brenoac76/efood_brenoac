import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Footer from './components/Footer';
import { ProductsList } from './components/ProductsList';
import { GlobalCss } from './styles';
import Home from './pages/Home';
import Restaurants from './pages/Restaurants';

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/restaurants',
    element: <Restaurants />,
  },
]);

function App() {
  return (
    <>
      <GlobalCss />
      <div>
        <RouterProvider router={rotas} />
        <ProductsList foods={[]} />
        <Footer />
      </div>
    </>
  );
}

export default App;
