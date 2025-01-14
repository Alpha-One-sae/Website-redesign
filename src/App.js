import './App.css';
import Navbar from './pages/Navbar';
import { Toaster } from 'react-hot-toast';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Sponsor from './pages/Sponsor';
import Events from './pages/Events';
import About from './pages/Team';
import NotFound from './pages/NotFound';
import Team from './pages/Team'

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
      path: '/team',
      element: <div>
        <Navbar />
        <Team />
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
      <Toaster />
    </div>
  );
}

export default App;
