import './App.css';
import Navbar from './pages/Navbar';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Sponsor from './pages/Sponsor';
import Events from './pages/Events';
import About from './pages/About';
import NotFound from './pages/NotFound';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <div>
        <Navbar />
        <Home />
      </div>
    },
    {
      path: '/gallery',
      element: <div>
        <Navbar />
        <Gallery />
      </div>
    },
    
    {
      path: '/sponsor',
      element: <div>
        <Navbar />
        <Sponsor />
      </div>
    },

    {
      path: '/events',
      element: <div>
        <Navbar />
        <Events />
      </div>
    },

    {
      path: '/about',
      element: <div>
        <Navbar />
        <About />
      </div>
    },

    {
      path: '*',
      element: <div>
        <NotFound />
      </div>
    },
  ]
);


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
