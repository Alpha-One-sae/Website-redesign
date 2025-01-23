import React from 'react';
// import { Hexagon } from 'lucide-react';
import CyberpunkNavbar from './CyberpunkNavbar';
import { Cpu, Zap, Box, Share2, ChevronRight, Clock, Activity, Hexagon } from 'lucide-react';

const months = [
    { name: 'January', images: ['event-jan1.jpg', 'event-jan2.jpg', 'event-jan3.jpg'] },
    { name: 'February', images: ['event-feb1.jpg', 'event-feb2.jpg'] },
    { name: 'March', images: ['event-mar1.jpg', 'event-mar2.jpg', 'event-mar3.jpg', 'event-mar4.jpg'] },
];

const GlowingText = ({ children }) => (
    <span className="relative">
      <span className="absolute inset-0 -z-10 blur-[2px] text-blue-500 opacity-70">{children}</span>
      <span className="relative">{children}</span>
    </span>
  );

const GlowingCard = ({ imageSrc }) => (
    <div className="relative group overflow-hidden rounded-lg border border-blue-500/30 bg-black/50 hover:border-blue-500 transition-all duration-300">
        <img
            src={imageSrc}
            alt="Event"
            className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="absolute bottom-2 left-2 text-blue-300 text-sm">Event Name</p>
        </div>
    </div>
);

export default function CyberpunkGallery() {
    return (
        <div className="min-h-screen bg-black text-white overflow-hidden relative z-0">
            <CyberpunkNavbar />
            {/* Animated Background Grid */}
            <div className="fixed inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-[-1]">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black"></div>
            </div>

            <div className="container mx-auto px-6 pt-12">
                <h1 className="text-4xl font-bold mb-8 text-center">
                    <span className="relative">
                       <span className="relative"><GlowingText>SAE UIET PU Gallery</GlowingText></span>
                    </span>
                </h1>

                {months.map((month, index) => (
                    <div key={index} className="mb-16">
                        <h2 className="text-3xl text-blue-400 font-semibold mb-4">{month.name}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {month.images.map((image, idx) => (
                                <GlowingCard key={idx} imageSrc={image} />
                            ))}
                        </div>
                    </div>
                ))}

                <div className="absolute bottom-1/4 right-1/4">
                    <Hexagon className="w-10 h-10 text-blue-500 animate-pulse opacity-40 z-[-1]" />
                </div>
                <div className="absolute top-1/4 right-1/4">
                    <Box className="w-8 h-8 text-blue-500 animate-pulse z-[-1]" />
                </div>
                <div className="absolute bottom-1/4 left-1/4">
                    <Zap className="w-10 h-10 text-blue-400 animate-ping z-[-1]" />
                </div>
                <div className="absolute top-1/2 right-1/3">
                    <Cpu className="w-6 h-6 text-blue-300 animate-bounce z-[-1]" />
                </div>
            </div>
        </div>
    );
}