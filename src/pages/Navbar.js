import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css';
import logo from './wlogo.png'
import { Home } from 'lucide-react';
import { Images } from 'lucide-react'
import { Calendar } from 'lucide-react'



export default function Navbar() {

  const navigate = useNavigate() ;

  const learn = () => {
    navigate('/about') ;
  }

  return (
    <div className="mnav">
      <div className="slogo">
        <img src={logo} alt="sae_logo" id="sai"></img>
        <h3 id="hsae">SAE UIET PU</h3>
      </div>
      <div className="slink">
        <NavLink to="/">
        <span className="nav-item">
        <Home size={18} className="home-icon" />
        Home
        </span>
        </NavLink>

        <NavLink to="/gallery">
        <span className="nav-item">
        <Images size={18} className="gallery-icon" />  
        Gallery
        </span>
        </NavLink>

        <NavLink to="/events">
        <span className="nav-item">
        <Calendar size={18} className="calendar-icon" />   
        Events</span>
        </NavLink>

        <NavLink to="/sponsor">
        <span className="nav-item">
        <Calendar size={18} className="calendar-icon" />   
        Sponsor</span>
        </NavLink>
      </div>
      <div>
        <button onClick={learn}>Learn More</button>
      </div>
    </div>
  )
}
