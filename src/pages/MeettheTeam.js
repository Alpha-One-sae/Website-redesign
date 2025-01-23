import React, { useState } from "react";
import CyberpunkNavbar from "./Navbar";
import { Cpu, Zap, Box, Share2, ChevronRight, Clock, Activity, Hexagon } from 'lucide-react';
const teamMembers = [
  { category: "Executive Board", name: "Akshit Kain", title: "Chairperson", image: "path/to/image1.jpg", linkedin: "#", instagram: "#" },
  { category: "Executive Board", name: "Parth Bansal", title: "Vice Chairperson", image: "path/to/image2.jpg", linkedin: "#", instagram: "#" },
  { category: "Executive Board", name: "Vinayak Sharma", title: "Club Co-ordinator", image: "path/to/image3.jpg", linkedin: "#", instagram: "#" },
  { category: "Core Committee", name: "Jane Doe", title: "Secretary", image: "path/to/image4.jpg", linkedin: "#", instagram: "#" },
  { category: "Core Committee", name: "John Smith", title: "Treasurer", image: "path/to/image5.jpg", linkedin: "#", instagram: "#" },
  { category: "Core Committee", name: "Emily Clark", title: "Event Manager", image: "path/to/image6.jpg", linkedin: "#", instagram: "#" },
];

const GlowingText = ({ children }) => (
  <span className="relative">
    <span className="absolute inset-0 -z-10 blur-[2px] text-blue-500 opacity-70">{children}</span>
    <span className="relative">{children}</span>
  </span>
);

const MeetTheTeam = () => {
  const [selectedCategory, setSelectedCategory] = useState("Executive Board");

  // Filter members by selected category
  const filteredMembers = teamMembers.filter((member) => member.category === selectedCategory);

  // Generate rows for the pyramid layout
  const createPyramidLayout = (members) => {
    const rows = [];
    let countInRow = 1;

    let remainingMembers = [...members];

    while (remainingMembers.length > 0) {
      rows.push(remainingMembers.slice(0, countInRow));
      remainingMembers = remainingMembers.slice(countInRow);
      countInRow++;
    }

    return rows;
  };

  const rows = createPyramidLayout(filteredMembers);

  return (
    <>
      <section className="min-h-screen bg-black text-white overflow-hidden relative z-0">
        <div className="fixed inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-[-1]">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black"></div>
        </div>
        <div className="relative min-h-screen">
          <div className="absolute inset-0 overflow-hidden z-[-1]">
            <div className="absolute w-full h-1 bg-blue-500/20 animate-pulse top-1/4 -skew-y-12 z-[-1]"></div>
            <div className="absolute w-1 h-full bg-blue-500/20 animate-pulse left-1/4 -skew-x-12 z-[-1]"></div>
            <div className="absolute w-full h-1 bg-blue-500/20 animate-pulse bottom-1/3 -skew-y-12 z-[-1]"></div>
          </div>
          {/* Category Buttons */}
          <div className="flex flex-col items-center text-center mt-4 ">
            <div className="relative">
              <h1 className="text-5xl font-bold">
                <GlowingText>
                  Meet Our Team
                </GlowingText>
              </h1>
            </div>
            <div className="flex justify-center mb-8 space-x-4 pt-12">
              <button
                onClick={() => setSelectedCategory("Executive Board")}
                className={`px-4 py-2 rounded-full ${selectedCategory === "Executive Board" ? "bg-blue-500 text-white" : "bg-gray-800 text-gray-300"
                  }`}
              >
                Executive Board
              </button>
              <button
                onClick={() => setSelectedCategory("Core Committee")}
                className={`px-4 py-2 rounded-full ${selectedCategory === "Core Committee" ? "bg-blue-500 text-white" : "bg-gray-800 text-gray-300"
                  }`}
              >
                Core Committee
              </button>
            </div>

            {/* Team Members Section */}
            <div className="flex flex-col items-center space-y-8">
              {rows.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className={`flex justify-center space-x-4 flex-wrap ${rowIndex > 0 ? `mt-[${rowIndex * 10}px]` : ""
                    }`}
                >
                  {row.map((member, index) => (
                    <div
                      key={index}
                      className="relative group w-[90%] sm:w-60 lg:w-80 h-auto bg-gray-800 rounded-lg shadow-lg hover:shadow-cyan-500/50 transform transition duration-500 overflow-hidden"
                    >
                      {/* Member Image */}
                      <img
                        src={member.image}
                        alt={`${member.name}`}
                        className="w-full h-48 object-cover rounded-t-lg group-hover:blur-sm transition duration-500"
                      />

                      {/* Hover Content */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/50">
                        <h3 className="text-2xl font-semibold text-white mb-2">{member.name}</h3>
                        <p className="text-cyan-400 font-medium">{member.title}</p>

                        {/* Social Media Icons */}
                        <div className="flex space-x-4 mt-4">
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:scale-110 transition-transform"
                          >
                            <i className="fab fa-linkedin text-white text-xl"></i>
                          </a>
                          <a
                            href={member.instagram}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:scale-110 transition-transform"
                          >
                            <i className="fab fa-instagram text-white text-xl"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="absolute top-1/4 right-1/4">
        <Box className="w-8 h-8 text-blue-500 animate-pulse" />
      </div>
      <div className="absolute bottom-1/4 left-1/4">
        <Zap className="w-10 h-10 text-blue-400 animate-ping" />
      </div>
      <div className="absolute top-1/2 right-1/3">
        <Cpu className="w-6 h-6 text-blue-300 animate-bounce" />
      </div>
    </>
  );
};

export default MeetTheTeam;
