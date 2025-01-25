import React, { useState } from "react";
import CyberpunkNavbar from "./Navbar";
import { Cpu, Zap, Box } from 'lucide-react';
import Footer from "./Footer";
import img9 from "../Gallery/image1.jpg";
import img10 from "../Gallery/image2.jpg";
import img11 from "../Gallery/image3.jpg";
import img12 from "../Gallery/image4.jpg";
import img13 from "../Gallery/image5.jpg";
import img14 from "../Gallery/image6.jpg";
import img15 from "../Gallery/image7.jpeg";
import img16 from "../Gallery/image8.jpg";
import img17 from "../Gallery/image9.jpg";
import img18 from "../Gallery/image10.jpg";
import img19 from "../Gallery/image11.jpeg";
import img20 from "../Gallery/image12.jpg";
import img21 from "../Gallery/image13.png";
import img22 from "../Gallery/image14.jpg";
import img23 from "../Gallery/image15.png";
import img24 from "../Gallery/image16.jpeg";
import img25 from "../Gallery/image17.jpeg";
import img26 from "../Gallery/image18.jpg";
import img27 from "../Gallery/image19.jpg";
import img28 from "../Gallery/image20.jpg";
import img29 from "../Gallery/image21.jpg";

const teamMembers = [
  { category: "Executive Board", name: "Akshit Kain", title: "Chairperson", image: img9, linkedin: "#", instagram: "#" },
  { category: "Executive Board", name: "Parth Bansal", title: "Vice Chairperson", image: img10, linkedin: "#", instagram: "#" },
  { category: "Executive Board", name: "Vinayak Sharma", title: "Club Co-ordinator", image: img11, linkedin: "#", instagram: "#" },
  { category: "Executive Board", name: "Prashant Singh", title: "Secretary", image: img12, linkedin: "#", instagram: "#" },
  { category: "Executive Board", name: "Baba Tillu", title: "Treasurer", image: img13, linkedin: "#", instagram: "#" },
  { category: "Executive Board", name: "Gaurav Patel", title: "Software & IT Chair", image: img14, linkedin: "#", instagram: "#" },
  { category: "Executive Board", name: "Harsh Bassal", title: "Technical Chair", image: img15, linkedin: "#", instagram: "#" },
  { category: "Executive Board", name: "Shubham Kumar", title: "Program Chair", image: img16, linkedin: "#", instagram: "#" },
  { category: "Executive Board", name: "Yeeshu", title: "Finance Chair", image: img17, linkedin: "#", instagram: "#" },
  { category: "Core Committee", name: "Ambar Chaurasiya", title: " Member", image: img18, linkedin: "#", instagram: "#" },
  { category: "Core Committee", name: "Moksh Garg", title: " Member", image: img19, linkedin: "#", instagram: "#" },
  { category: "Core Committee", name: "Nikhil Mathuriya", title: " Member", image: img20, linkedin: "#", instagram: "#" },
  { category: "Core Committee", name: "Pratimaan Tripathi", title: "Member", image: img21, linkedin: "#", instagram: "#" },
  { category: "Core Committee", name: "Rounak Kumar Jha", title: " Member", image: img22, linkedin: "#", instagram: "#" },
  { category: "Core Committee", name: "Sahil Minz", title: " Member", image: img23, linkedin: "#", instagram: "#" },
  { category: "Core Committee", name: "Shreyvardhan Singh", title: " Member", image: img24, linkedin: "#", instagram: "#" },
  { category: "Core Committee", name: "Shubham Garg", title: " Member", image: img25, linkedin: "#", instagram: "#" },
  { category: "Core Committee", name: "Sudhanshu Rajput", title: " Member", image: img26, linkedin: "#", instagram: "#" },
  { category: "Core Committee", name: "Vinay Kumar", title: " Member", image: img27, linkedin: "#", instagram: "#" },
  { category: "Core Committee", name: "Waquee Mubarak", title: " Member", image: img28, linkedin: "#", instagram: "#" },
  { category: "Core Committee", name: "Yatharth Pal", title: " Member", image: img29, linkedin: "#", instagram: "#" },
];

const GlowingText = ({ children }) => (
  <span className="relative">
    <span className="absolute inset-0 -z-10 blur-[2px] text-blue-500 opacity-70">{children}</span>
    <span className="relative">{children}</span>
  </span>
);

const MeetTheTeam = () => {
  const [selectedCategory, setSelectedCategory] = useState("Executive Board");

  const filteredMembers = teamMembers.filter((member) => member.category === selectedCategory);

  return (
    <section className="min-h-screen flex flex-col items-center bg-black text-white overflow-hidden relative z-0">
      {/* Background Decorations */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black"></div>
      </div>

      {/* Header Section */}
      <div className="flex flex-col items-center text-center mt-4">
        <h1 className="text-5xl font-bold">
          <GlowingText>Meet Our Team</GlowingText>
        </h1>
        <div className="flex justify-center mb-8 space-x-4 pt-12">
          <button
            onClick={() => setSelectedCategory("Executive Board")}
            className={`px-4 py-2 rounded-full ${selectedCategory === "Executive Board" ? "bg-blue-500 text-white" : "bg-gray-800 text-gray-300"}`}
          >
            Executive Board
          </button>
          <button
            onClick={() => setSelectedCategory("Core Committee")}
            className={`px-4 py-2 rounded-full ${selectedCategory === "Core Committee" ? "bg-blue-500 text-white" : "bg-gray-800 text-gray-300"}`}
          >
            Core Committee
          </button>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8 lg:px-12 py-12">
        {filteredMembers.map((member, index) => (
          <div
            key={index}
            className="relative group bg-gray-900 rounded-lg  hover:shadow-cyan-500/50 transform transition duration-500 shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105"
          >
            {/* Member Image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            {/* Always Visible Content */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>
            <div className="p-6 absolute inset-x-0 bottom-0 text-center">
              <h3 className="text-2xl font-semibold opacity-50 group-hover:opacity-0 transition-opacity duration-300 text-white mb-2">{member.name}</h3>
              <p className="text-sm text-cyan-400 opacity-50 group-hover:opacity-0 transition-opacity duration-300">
                {member.title}
              </p>
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/50">
              <h3 className="text-2xl font-semibold text-white">{member.name}</h3>
              <p className="text-cyan-400 font-medium">{member.title}</p>
              <div className="flex space-x-4 mt-4">
                <a href={member.linkedin} target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
                  <i className="fab fa-linkedin text-white text-xl"></i>
                </a>
                <a href={member.instagram} target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
                  <i className="fab fa-instagram text-white text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <Footer />

      {/* Decorations */}
      <div className="absolute top-1/4 right-1/4 z-[-1]">
        <Box className="w-8 h-8 text-blue-500 animate-pulse" />
      </div>
      <div className="absolute bottom-1/4 left-1/4 z-[-1]">
        <Zap className="w-10 h-10 text-blue-400 animate-ping" />
      </div>
      <div className="absolute top-1/2 right-1/3 z-[-1]">
        <Cpu className="w-6 h-6 text-blue-300 animate-bounce" />
      </div>
    </section>
  );
};

export default MeetTheTeam;

