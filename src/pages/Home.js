import React from 'react'
import { FaReact } from "react-icons/fa";
import { Aperture, Atom, Box, Chrome, LaptopMinimalCheck, RadioTower, Rss, Cpu, Share2, ChevronRight } from 'lucide-react'
import { Globe, Radical, MessageCircleReply, CalendarDays } from 'lucide-react'
import './Home.css'

const Home = () => {
  return (
    <div className="mainc">
      <div className="icons">
        <FaReact className="tech-icon react" />
        <Aperture className="tech-icon apert" />
        <Box className="tech-icon box" />
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
  )
}

export default Home
