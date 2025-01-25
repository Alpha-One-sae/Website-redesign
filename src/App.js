import logo from './logo.svg';
import './App.css';

// import Navbar from './pages/CyberpunkSAEHomepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SAEHomepage from './pages/SAEHomepage';
import CyberpunkNavbar from './pages/Navbar';
import CyberpunkGallery from './pages/Gallery';
import Footer from './pages/Footer';
import MeetTheTeam from './pages/MeettheTeam';
import Sponosor from './pages/Sponosor';
import SAEblogs from './Component/SAEblogs';
import Event from './pages/Event';

function App() {
  return (
    <>
    <BrowserRouter>
    <CyberpunkNavbar className="sticky top-0 "  />
      <Routes>
        <Route path="/" element={<SAEHomepage />} />
        <Route path="/gallery" element={<CyberpunkGallery />} />
        <Route path="/Meet-team" element={<MeetTheTeam/>} />
        <Route path="/sponsor" element={<Sponosor/>}/>
        <Route path = "/events" element={<Event/>}/>
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
    {/* <CyberpunkSAEHomepage/>
    <CyberpunkGallery/> */}
   </>
  );
}

export default App;
