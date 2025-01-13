import React, { useState, useEffect } from 'react'
import { FaReact } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Aperture, Atom, Box, Chrome, LaptopMinimalCheck, RadioTower, Rss, Cpu, Share2, ChevronRight } from 'lucide-react'
import { Globe, Radical, MessageCircleReply, CalendarDays } from 'lucide-react'
import { ArrowUp } from 'lucide-react';
import './Home.css'
import { Link } from 'react-router-dom';
import Pencil from './pencil.png'
import Loc from './loc.png'


const Home = () => {

  const [visible, setVisible] = useState(false) ;

  useEffect(() => {
    const handleScroll = () =>{   
        if (window.scrollY > 300) {
          setVisible(false);
        } else {
          setVisible(true);
        }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  const scrollUp = () =>{
    window.scrollTo(
      { top: 0, 
        behavior: "smooth" }
    );
  };

  return (
  <div className='bodycontainer'>

    <div className="mainc">

      <button className="scrollbtn" onClick={scrollUp} aria-label='Scroll to Top'>
        <ArrowUp size={24} />
      </button>

      <div className="icons">
        <FaReact className="tech-icon react" />
        <Aperture className="tech-icon apert" />
        <Box className="tech-icon box" />
        <Atom className="tech-icon atom" size={35} />
        <Chrome className="tech-icon chrome" size={40} />
        <LaptopMinimalCheck className="tech-icon laptop" />
        <RadioTower className="tech-icon radio" size={38} />
        <Rss className="tech-icon rss" />
        <Rss className="tech-icon rss1" size={30} />
        <Cpu className="tech-icon cpu" size={30} />
      </div>

      <div className="hdesc">
        <h1 id="hmainsae">SAE UIET PU</h1>
        <p>Engineering the Future Through Innovation and Technology</p>
        <div className="twobox">
            <div className="fbox">
                Join Our Network &nbsp;
                <Share2 size={15} />
            </div>
            <div className="sbox">
                Explore Projects &nbsp;
                <ChevronRight size={15} />
            </div>
        </div>
      </div>

      <div className="allbox">
        <div className="box1">
            <Globe size={18} color="#4da9f0" id="luic" /><br/>
            <p className="num">98+</p>
            <p className="pdesc">Countries</p>
        </div>
        <div className="box2">
            <Radical size={18} color="#4da9f0" id="luic" /><br/>
            <p className="num">127K</p>
            <p className="pdesc">Engineers</p>
        </div>
        <div className="box3">
            <MessageCircleReply size={18} color="#4da9f0" id="luic" /><br/>
            <p className="num">50+</p>
            <p className="pdesc">Sponsors</p>
        </div>
        <div className="box4">
            <CalendarDays size={18} color="#4da9f0" id="luic" /><br/>
            <p className="num">100+</p>
            <p className="pdesc">Events</p>
        </div>
      </div>

    </div>

    <div className='contact'>
        <p id="pcontact">Contact Us!</p>
        <div className='addrbox'>
          <div className='gmail'>
            <img id="pen" src={Pencil}></img>
            <p id="write">Write Us</p>
            <Link id="mail" to="_blank">Click to mail us!</Link>
            <p id="saemail">sae@uiet.pu</p>
          </div>
          <div className='gmap'>
            <img id="loc" src={Loc}></img>
            <p id="visit">Visit Us</p>
            <Link to="_blank" id="map">Get Directions!</Link>
            <p id="saeloc">University Institute of Engineering and Technology, PU, Chandigarh, India</p>
          </div>
        </div><hr/>

        <div className='footer'>
          <div className='social'>
            <a href="#"><FaFacebook size={30} /></a>
            <a href="#"><FaTwitter size={30} /></a>
            <a href="#"><FaInstagram size={30} /></a>
            <a href="#"><FaLinkedin size={30} /></a>
          </div>
          <p id="footerp">&copy; 2022 SAE UIET PU. All rights reserved.</p>
        </div>

    </div>

  </div>
  )
}

export default Home
