import React, { useState } from 'react';
import { Box, Zap, Hexagon, Share2, X } from 'lucide-react';
import Footer from './Footer';

const sponsors = [
    { id: 1, name: 'Sponsor 1', logo: 'path/to/logo1.png' },
    { id: 2, name: 'Sponsor 2', logo: 'path/to/logo2.png' },
    { id: 3, name: 'Sponsor 3', logo: 'path/to/logo3.png' },
    { id: 4, name: 'Sponsor 4', logo: 'path/to/logo4.png' },
    { id: 5, name: 'Sponsor 5', logo: 'path/to/logo5.png' },
    { id: 6, name: 'Sponsor 6', logo: 'path/to/logo6.png' },
    { id: 7, name: 'Sponsor 7', logo: 'path/to/logo7.png' },
    { id: 8, name: 'Sponsor 8', logo: 'path/to/logo8.png' },
];
const GlowingText = ({ children }) => (
    <span className="relative">
        <span className="absolute inset-0 -z-10 blur-[2px] text-black-500 opacity-70">{children}</span>
        <span className="relative">{children}</span>
    </span>
);

export default function Sponsors() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden relative z-0">
            {/* Animated Background Grid */}
            <div className="fixed inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-[-1]">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black"></div>
            </div>

            {/* Why Sponsor Us Section */}
            <div className="relative min-h-[60vh] flex items-center justify-center text-center px-6">
                <div className="absolute inset-0 overflow-hidden">
                    <Hexagon className="absolute w-48 h-48 text-blue-500/10 animate-spin-slow top-1/4 left-1/3" />
                    <Hexagon className="absolute w-64 h-64 text-blue-700/10 animate-spin-slow bottom-1/4 right-1/3" />
                </div>
                <div className="relative space-y-6">
                    <h1 className="text-5xl font-bold text-white">
                        <GlowingText>WHY SPONSOR US?</GlowingText>
                    </h1>
                    <p className="text-lg text-blue-300 mt-10 max-w-2xl mx-auto">
                        Garuda Formula Racing is a Formula SAE team of UIET, PU. The team comprises around 25 undergraduate students from various departments who fabricate an open-wheel electric formula race car. <br />
                        We innovate, design, and excel!
                    </p>
                    <div className="flex gap-6 justify-center mt-6">
                        <button
                            onClick={openModal}
                            className="group relative px-8 py-4 border border-blue-500 bg-transparent overflow-hidden rounded-lg hover:bg-blue-500 hover:text-black transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-blue-500 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                            <span className="relative flex items-center gap-2">
                                Connect to Sponsor Us <Share2 size={20} />
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal for Sponsor Form */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[9999]">
                    <div className="bg-black p-8 rounded-lg max-w-lg w-full relative border border-blue-500">
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-white hover:text-red-500 transition"
                        >
                            <X size={24} />
                        </button>
                        <h2 className="text-2xl font-bold mb-4 text-blue-500 text-center">
                            Sponsor Us
                        </h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="companyName" className="block text-white mb-2">
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    id="companyName"
                                    className="w-full px-4 py-2 border border-blue-500 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                                    placeholder="Your Company Name"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="ceoName" className="block text-white mb-2">
                                    CEO Name
                                </label>
                                <input
                                    type="text"
                                    id="ceoName"
                                    className="w-full px-4 py-2 border border-blue-500 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                                    placeholder="CEO's Name"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="companyLogo" className="block text-white mb-2">
                                    Company Logo
                                </label>
                                <input
                                    type="file"
                                    id="companyLogo"
                                    className="w-full px-4 py-2 border border-blue-500 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                                    accept="image/*"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="sweetMessage" className="block text-white mb-2">
                                    Sweet Message for SAE
                                </label>
                                <textarea
                                    id="sweetMessage"
                                    className="w-full px-4 py-2 border border-blue-500 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                                    placeholder="Write a heartfelt message for SAE!"
                                    rows="3"
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="sponsorshipWing" className="block text-white mb-2">
                                    Which Wing Do You Want to Sponsor?
                                </label>
                                <select
                                    id="sponsorshipWing"
                                    className="w-full px-4 py-2 border border-blue-500 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                                >
                                    <option value="" disabled selected>
                                        Select a Wing
                                    </option>
                                    <option value="mechanical">Mechanical</option>
                                    <option value="electrical">Electrical</option>
                                    <option value="aerodynamics">Aerodynamics</option>
                                    <option value="business">Business & Marketing</option>
                                    <option value="software">Software Development</option>
                                </select>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition text-white font-bold"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Sponsors Section */}
            <div id="sponsors-section" className="container px-6 pt-24 mt-[-129px]">
                <h2 className="text-5xl font-bold mb-12 text-center">
                    <span className="relative">
                        <span className="relative text-blue-500">Our Sponsors</span>
                    </span>
                </h2>

                {/* Sponsor Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                    {sponsors.map((sponsor) => (
                        <div
                            key={sponsor.id}
                            className="group relative p-6 border border-blue-500/30 rounded-xl bg-black/50 backdrop-blur-sm hover:border-blue-500 transition-all duration-300 cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-blue-500/10 blur-xl group-hover:bg-blue-500/20 transition-all duration-300"></div>

                            <div className="relative text-center">
                                {/* Logo */}
                                <img
                                    src={sponsor.logo}
                                    alt={sponsor.name}
                                    className="mx-auto w-16 h-16 object-contain transition-transform duration-300 group-hover:blur-sm"
                                />

                                {/* Company Name (Hidden initially, fades in on hover) */}
                                <h3 className="text-xl font-bold mb-1 text-white opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300">
                                    {sponsor.name}
                                </h3>
                            </div>

                            <div className="absolute -bottom-1 left-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent transform -translate-x-1/2 animate-pulse"></div>
                        </div>
                    ))}
                </div>
                <div id="footer-section" className="mt-10">
                    <Footer />
                </div>
            </div>
        </div>
    );
}
