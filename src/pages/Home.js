import React, { useState, useEffect } from 'react'
import { FaReact } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Aperture, Atom, Box, Chrome, LaptopMinimalCheck, RadioTower, Rss, Cpu, Share2, ChevronRight } from 'lucide-react'
import { Globe, Radical, MessageCircleReply, CalendarDays } from 'lucide-react'
import { ArrowUp, ArrowDown } from 'lucide-react';
import './Home.css'
import { Link } from 'react-router-dom';
import Pencil from './pencil.png'
import Loc from './loc.png'
import toast from 'react-hot-toast';
import Foimg from './formsub1.png';
import SAE from './wlogo.png';


const Home = () => {

  const [scrollToTop, setScrollToTop] = useState(false) ;
  const [formVis, setFormVis] = useState(false) ;

  useEffect(() => {
    const scrollBehave = () => {
      const scrollY = window.scrollY ;  // Maximum scrollable height
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight ;  // Maximum scrollable height

      setScrollToTop(scrollY > maxScroll / 2) ;
    }

    window.addEventListener('scroll', scrollBehave) ;
    return () => {
      // Cleanup function
      window.removeEventListener('scroll', scrollBehave) ;
    }
  }, [])
  
  

  const handleScroll = () => {
    if(scrollToTop)
      {
        // Scroll to top
        window.scrollTo(
          { top: 0, 
            behavior: "smooth" }
        );
      }
      else{
        // Scroll to bottom
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        window.scrollTo (
          { top: maxScroll, 
            behavior: 'smooth' }
        );
      } 
  };
  

  const sendmsg = () => {
    toast.success("Form Submitted Successfully");
    setFormVis(false) ; // Hide the form after successful submission
  }

  const openForm = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    setFormVis(true); // Show the form
  }

  const closeform = () => {
    setFormVis(false); // close the form when clicked
  }

  useEffect(() => {
    if(formVis)
      {
        document.body.style.overflow = 'hidden';
      }
      else{
        document.body.style.overflow = 'auto';
      }
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [formVis])
  

  function formcheck(event)
  {
    event.preventDefault() ;
    const name = document.getElementById("name").value.trim() ;
    const email = document.getElementById("email").value.trim()  ;
    const msg = document.getElementById("msg").value.trim()  ;

    if(!name || !email || !msg)
      {
        toast.error("All fields are required");
        return false ;
      }

    if(!/^[a-zA-Z\s]+$/.test(name)){
      toast.error("Name should contain only letters and spaces");
      return false ;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email))
      {
        toast.error("Invalid Email Address");
        return false ;
      }

      sendmsg();
      return true ;
  }


  return (
  <div className='bodycontainer'>

    <div className="mainc">

      <button className="scrollbtn" onClick={handleScroll} aria-label='Scroll to Top/Down'>
        {scrollToTop ? <ArrowUp size={24} /> : <ArrowDown size={24} />}
      </button>

      {formVis && (
         <>
          <div className="backdrop"></div>

          <div className="gform">
            <div className='formimg'>
              <img id="foimg" src={Foimg} alt="Form Image"></img>
            </div>
            <form className='formsae' onSubmit={formcheck}>
              <label htmlFor="name"></label>
              <input type='text' id='name' name='name' placeholder='Your Name'></input>

              <label htmlFor="email"></label>
              <input type='email' id='email' name='email' placeholder='Your Email'></input>

              <label htmlFor="msg"></label>
              <textarea type="text" id='msg' rows="6" cols="50" placeholder="Your Message"></textarea>

              <div className='fbtn'>
              <button type="submit" className='subbtn'>Submit</button>
              <button className='closef' onClick={closeform}>Close</button>
              </div>
            </form>
          </div>
          </>
        )}

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
            <Link id="mail" href="#" onClick={openForm}>Click to mail us!</Link>
            <p id="saemail">sae@uiet.pu</p>
          </div>
          <div className='gmap'>
            <img id="loc" src={Loc}></img>
            <p id="visit">Visit Us</p>
            <Link to="https://www.google.com/maps/place/UIET+Punjab+University/@30.7480771,76.7545404,17z/data=!3m1!4b1!4m6!3m5!1s0x390febffe47a7419:0x267dc179dae933b6!8m2!3d30.7480771!4d76.7571153!16s%2Fg%2F11m468rsbt?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D" 
            id="map">Get Directions!</Link>
            <p id="saeloc">University Institute of Engineering and Technology, PU, Chandigarh, India</p>
          </div>
        </div><hr/>

        <div className='footer'>

          <div className='foot1'>
          <div className='footdesc'>
            <img src={SAE} alt="sae_img" id="simg"></img>
            <h2 id="sname">SAE UIET PU</h2>
          </div>
          <div className='social'>
            <a href="#"><FaFacebook size={30} /></a>
            <a href="#"><FaTwitter size={30} /></a>
            <a href="#"><FaInstagram size={30} /></a>
            <a href="#"><FaLinkedin size={30} /></a>
          </div>
          </div>

          <div className='foot2'>
            <div className='steams'>
              <h4 id='teamh'>SAE Teams</h4>
              <p id='alpha'>Alpha One</p>
              <p id='garuda'>Garuda Motorsports</p>
              <p id='vayu'>Team Vayuveer</p>
              <p id='robo'>Robotics Team</p>
              <Link to='/team' id='mteam'>Meet the Team</Link>
            </div>
            <div className='quicklinks'>
              <h4 id='quickh'>Quick Links</h4>
              <Link to='/' id='home'>Home</Link>
              <Link to='/gallery' id='gallery'>Gallery</Link>
              <Link to='/events' id='events'>Events</Link>
              <Link to='/sponsor' id='sponsor'>Sponsor</Link>
              <Link to='#' id='projects' target=''>Projects</Link>
              <Link to='#' id='cont' onClick={openForm}>Contact</Link>
            </div>
          </div>
        </div>

        <div className='copyright'>
          <p id="footerp">&copy; 2025 SAE UIET PU. All rights reserved.</p>
          <div className='lastf'>
            Learn Code Collaborate
          </div>
        </div>

    </div>

  </div>
  )
}

export default Home
