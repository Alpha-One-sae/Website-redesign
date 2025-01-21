import React from "react";
import "./Team.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Pentagon, Triangle, Square, Hexagon } from "lucide-react";
import {
  Aperture,
  Atom,
  Box,
  Chrome,
  LaptopMinimalCheck,
  RadioTower,
  Rss,
  Cpu,
  Share2,
  ChevronRight,
  Image,
} from "lucide-react";
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.jpeg';
import img8 from '../assets/img8.jpg';
import img9 from '../assets/img9.jpg';


const Team = () => {
  return (
    <div className="mtcontainer">
      <div className="htmec">
        <h2 id="our">Our Team</h2>
        <div className="tname">
          <a href="#exboard" id="eb">
            EXECUTIVE BOARD
          </a>
          <a href="#cboard" id="cm">
            CORE MEMBERS
          </a>
        </div>
      </div>

      <div className="ebcmcontainer">
        <div className="lucicon">
          <Pentagon size={50} className="shape pent" />
          <Triangle size={50} className="shape tri" />
          <Square size={50} className="shape sq" />
          <Hexagon size={50} className="shape hex" />
          <Atom size={30} className="shape latom" />
          <Box size={30} className="shape lbox" />
          <Rss size={30} className="shape lrss" />
          <Cpu size={30} className="shape lcpu" />
          <Chrome size={30} className="shape lchrome" />
          <RadioTower size={30} className="shape lradio" />
        </div>

        <h1 id="ebh">EXECUTIVE BOARD</h1>
        <div className="exboard" id="exboard">
          <div className="exd1">
            <div className="img1">
              <img src={img1} alt="chairperson" id="chair" className="team-image"></img>
              <h3 id="hchair">Akshit Kain</h3>
              <p id="pchair">Chairperson</p>
              <div className="imgicon">
                <a href="#" title="Linkedin">
                  {" "}
                  <FaLinkedin size={25}></FaLinkedin>{" "}
                </a>
                <a href="#" title="Instagram">
                  {" "}
                  <FaInstagram size={25}></FaInstagram>{" "}
                </a>
              </div>
            </div>

            <div className="img2">
              <img src={img2} alt="vice-chairperson" id="vchair"></img>
              <h3 id="hvchair">Parth Bansal</h3>
              <p id="pvchair">Vice Chairperson</p>
              <div className="imgicon">
                <a href="#" title="Linkedin">
                  {" "}
                  <FaLinkedin size={25}></FaLinkedin>{" "}
                </a>
                <a href="#" title="Instagram">
                  {" "}
                  <FaInstagram size={25}></FaInstagram>{" "}
                </a>
              </div>
            </div>

            <div className="img3">
              <img src={img3} alt="coordinator" id="coord"></img>
              <h3 id="hcoord">Vinayak Sharma</h3>
              <p id="pcoord">Club Co-ordinator</p>
              <div className="imgicon">
                <a href="#" title="Linkedin">
                  {" "}
                  <FaLinkedin size={25}></FaLinkedin>{" "}
                </a>
                <a href="#" title="Instagram">
                  {" "}
                  <FaInstagram size={25}></FaInstagram>{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="exd2">
            <div className="img4">
              <img src={img4} alt="secretary" id="sec"></img>
              <h3 id="hsec">Prashant Singh</h3>
              <p id="psec">Secretary</p>
              <div className="imgicon">
                <a href="#" title="Linkedin">
                  {" "}
                  <FaLinkedin size={25}></FaLinkedin>{" "}
                </a>
                <a href="#" title="Instagram">
                  {" "}
                  <FaInstagram size={25}></FaInstagram>{" "}
                </a>
              </div>
            </div>

            <div className="img5">
              <img src={Image} alt="treasurer" id="tre"></img>
              <h3 id="htre">Saksham Rathore</h3>
              <p id="ptre">Treasurer</p>
              <div className="imgicon">
                <a href="#" title="Linkedin">
                  {" "}
                  <FaLinkedin size={25}></FaLinkedin>{" "}
                </a>
                <a href="#" title="Instagram">
                  {" "}
                  <FaInstagram size={25}></FaInstagram>{" "}
                </a>
              </div>
            </div>

            <div className="img6">
              <img src={img6} alt="software" id="soft"></img>
              <h3 id="hsoft">Gaurav Patel</h3>
              <p id="psoft">Software & IT Chair</p>
              <div className="imgicon">
                <a href="#" title="Linkedin">
                  {" "}
                  <FaLinkedin size={25}></FaLinkedin>{" "}
                </a>
                <a href="#" title="Instagram">
                  {" "}
                  <FaInstagram size={25}></FaInstagram>{" "}
                </a>
              </div>
            </div>
          </div>
          {/* mycode */}

          <div className="exd3">
            <div className="img7">
              <img src={img7} alt="technical" id="tech"></img>
              <h3 id="htech">Harsh Bassal</h3>
              <p id="ptech">Technical Chair</p>
              <div className="imgicon">
                <a href="#" title="Linkedin">
                  {" "}
                  <FaLinkedin size={25}></FaLinkedin>{" "}
                </a>
                <a href="#" title="Instagram">
                  {" "}
                  <FaInstagram size={25}></FaInstagram>{" "}
                </a>
              </div>
            </div>

            <div className="img8">
              <img src={img8} alt="program" id="prog"></img>
              <h3 id="hprog">Shubham Kumar</h3>
              <p id="pprog">Program Chair</p>
              <div className="imgicon">
                <a href="#" title="Linkedin">
                  {" "}
                  <FaLinkedin size={25}></FaLinkedin>{" "}
                </a>
                <a href="#" title="Instagram">
                  {" "}
                  <FaInstagram size={25}></FaInstagram>{" "}
                </a>
              </div>
            </div>

            <div className="img9">
              <img src={Image} alt="finance" id="fin"></img>
              <h3 id="hfin">Yeeshu</h3>
              <p id="pfin">Finance Chair</p>
              <div className="imgicon">
                <a href="#" title="Linkedin">
                  {" "}
                  <FaLinkedin size={25}></FaLinkedin>{" "}
                </a>
                <a href="#" title="Instagram">
                  {" "}
                  <FaInstagram size={25}></FaInstagram>{" "}
                </a>
              </div>
            </div>
          </div>
        </div>

        <h1 id="ch">CORE</h1>

        <div className="cboard" id="cboard">

          <div className="exd4">
            <div className="img10">
              <img src={Image} alt="member" id="mem"></img>
              <h3 id="hmem">Ambar Chaurasiya</h3>
              <p id="pmem">Core Executive</p>
              <div className="imgicon">
                <a href="#" title="Linkedin">
                  {" "}
                  <FaLinkedin size={25}></FaLinkedin>{" "}
                </a>
                <a href="#" title="Instagram">
                  {" "}
                  <FaInstagram size={25}></FaInstagram>{" "}
                </a>
              </div>
            </div>

            <div className="img11">
              <img src={Image} alt="member" id="mem"></img>
              <h3 id="hmem">Moksh Garg</h3>
              <p id="pmem">Core Executive</p>
              <div className="imgicon">
                <a href="#" title="Linkedin">
                  {" "}
                  <FaLinkedin size={25}></FaLinkedin>{" "}
                </a>
                <a href="#" title="Instagram">
                  {" "}
                  <FaInstagram size={25}></FaInstagram>{" "}
                </a>
              </div>
            </div>

            <div className="img12">
              <img src={Image} alt="member" id="mem"></img>
              <h3 id="hmem">Nikhil Mathuriya</h3>
              <p id="pmem">Core Executive</p>
              <div className="imgicon">
                <a href="#" title="Linkedin">
                  {" "}
                  <FaLinkedin size={25}></FaLinkedin>{" "}
                </a>
                <a href="#" title="Instagram">
                  {" "}
                  <FaInstagram size={25}></FaInstagram>{" "}
                </a>
              </div>
            </div>

            <div className="img13">
              <img src={Image} alt="member" id="mem"></img>
              <h3 id="hmem">Vinay Kumar</h3>
              <p id="pmem">Core Executive</p>
              <div className="imgicon">
                <a href="#" title="Linkedin">
                  {" "}
                  <FaLinkedin size={25}></FaLinkedin>{" "}
                </a>
                <a href="#" title="Instagram">
                  {" "}
                  <FaInstagram size={25}></FaInstagram>{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="exd5">
            <div className="img14">
              <img src={Image} alt="member" id="mem"></img>
              <h3 id="hmem">Pratimaan Tripathi</h3>
              <p id="pmem">Core Executive</p>
              <div className="imgicon">
                <a href="#" title="Linkedin">
                  {" "}
                  <FaLinkedin size={25}></FaLinkedin>{" "}
                </a>
                <a href="#" title="Instagram">
                  {" "}
                  <FaInstagram size={25}></FaInstagram>{" "}
                </a>
              </div>
            </div>

            <div className="img15">
              <img src={Image} alt="member" id="mem"></img>
              <h3 id="hmem">Rounak Kumar Jha</h3>
              <p id="pmem">Core Executive</p>
              <div className="imgicon">
                <a href="#" title="Linkedin">
                  {" "}
                  <FaLinkedin size={25}></FaLinkedin>{" "}
                </a>
                <a href="#" title="Instagram">
                  {" "}
                  <FaInstagram size={25}></FaInstagram>{" "}
                </a>
              </div>
            </div>

            <div className="img16">
              <img src={Image} alt="member" id="mem"></img>
              <h3 id="hmem">Sahil Minz</h3>
              <p id="pmem">Core Executive</p>
              <div className="imgicon">
                <a href="#" title="Linkedin">
                  {" "}
                  <FaLinkedin size={25}></FaLinkedin>{" "}
                </a>
                <a href="#" title="Instagram">
                  {" "}
                  <FaInstagram size={25}></FaInstagram>{" "}
                </a>
              </div>
            </div>

            <div className="img17">
              <img src={Image} alt="member" id="mem"></img>
              <h3 id="hmem">Waquee Mubarak</h3>
              <p id="pmem">Core Executive</p>
              <div className="imgicon">
                <a href="#" title="Linkedin">
                  {" "}
                  <FaLinkedin size={25}></FaLinkedin>{" "}
                </a>
                <a href="#" title="Instagram">
                  {" "}
                  <FaInstagram size={25}></FaInstagram>{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="exd6">
            <div className="img18">
              <img src={Image} alt="member" id="mem"></img>
              <h3 id="hmem">Shreyvardhan Singh</h3>
              <p id="pmem">Core Executive</p>
              <div className="imgicon">
                <a href="#" title="Linkedin">
                  {" "}
                  <FaLinkedin size={25}></FaLinkedin>{" "}
                </a>
                <a href="#" title="Instagram">
                  {" "}
                  <FaInstagram size={25}></FaInstagram>{" "}
                </a>
              </div>
            </div>

            <div className="img19">
              <img src={Image} alt="member" id="mem"></img>
              <h3 id="hmem">Shubham Garg</h3>
              <p id="pmem">Core Executive</p>
              <div className="imgicon">
                <a href="#" title="Linkedin">
                  {" "}
                  <FaLinkedin size={25}></FaLinkedin>{" "}
                </a>
                <a href="#" title="Instagram">
                  {" "}
                  <FaInstagram size={25}></FaInstagram>{" "}
                </a>
              </div>
            </div>

            <div className="img20">
              <img src={Image} alt="member" id="mem"></img>
              <h3 id="hmem">Sudhanshu Rajput</h3>
              <p id="pmem">Core Executive</p>
              <div className="imgicon">
                <a href="#" title="Linkedin">
                  {" "}
                  <FaLinkedin size={25}></FaLinkedin>{" "}
                </a>
                <a href="#" title="Instagram">
                  {" "}
                  <FaInstagram size={25}></FaInstagram>{" "}
                </a>
              </div>
            </div>

            <div className="img21">
              <img src={Image} alt="member" id="mem"></img>
              <h3 id="hmem">Yatharth Pal</h3>
              <p id="pmem">Core Executive</p>
              <div className="imgicon">
                <a href="#" title="Linkedin">
                  {" "}
                  <FaLinkedin size={25}></FaLinkedin>{" "}
                </a>
                <a href="#" title="Instagram">
                  {" "}
                  <FaInstagram size={25}></FaInstagram>{" "}
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div className="footer1">
        <div className="soicon">
          <FaInstagram size={30} className="s-icon" />
          <FaLinkedin size={30} className="s-icon" />
          <FaTwitter size={30} className="s-icon" />
          <FaYoutube size={30} className="s-icon" />
        </div>
        <div className='foothd'>
          <p id='foothd'>&copy; SAE UIET PU</p>
        </div>
        <div className="lcc">
          <p id='lcc'>Learn Code Collaborate</p>
        </div>
      </div>
      

    </div>
  );
};

export default Team;
