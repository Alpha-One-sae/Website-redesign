import logo from './logo.svg';
import './App.css';

// import Navbar from './pages/CyberpunkSAEHomepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CyberpunkSAEHomepage from './pages/CyberpunkSAEHomepage';
import CyberpunkNavbar from './pages/CyberpunkNavbar';
import CyberpunkGallery from './pages/CyberpunkGallery';
import Footer from './pages/Footer';
import MeetTheTeam from './pages/MeettheTeam';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CyberpunkSAEHomepage />} />
        <Route path="/gallery" element={<CyberpunkGallery />} />
        <Route path="/Meet-team" element={<MeetTheTeam/>} />
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
    {/* <CyberpunkSAEHomepage/>
    <CyberpunkGallery/> */}
   </>
  );
}

export default App;
