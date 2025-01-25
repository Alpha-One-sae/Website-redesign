import React from "react";
import { Cpu, Zap, Box, ChevronRight } from "lucide-react";

const EventPage = () => {
  
  const events = []; 

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative z-0">
    
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black"></div>
      </div>

      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-1 bg-blue-500/20 animate-pulse top-1/4 -skew-y-12"></div>
        <div className="absolute w-1 h-full bg-blue-500/20 animate-pulse left-1/4 -skew-x-12"></div>
        <div className="absolute w-full h-1 bg-blue-500/20 animate-pulse bottom-1/3 -skew-y-12"></div>
      </div>

      <div className="relative container mx-auto px-6 pt-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="text-5xl font-bold">
            <span className="relative">
              <span className="absolute inset-0 -z-10 blur-[2px] text-blue-500 opacity-70">
                Events
              </span>
              <span className="relative">Events</span>
            </span>
          </h1>
          <p className="text-2xl text-blue-300 max-w-2xl">
            Join us in shaping the future through innovative and exciting events.
          </p>
        </div>
        {events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {events.map((event, index) => (
              <div
                key={index}
                className="relative group p-6 border border-blue-500/30 rounded-xl bg-black/50 backdrop-blur-sm hover:border-blue-500 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-blue-500/10 blur-xl group-hover:bg-blue-500/20 transition-all duration-300"></div>
                <div className="text-3xl font-bold text-white mb-1">{event.title}</div>
                <p className="text-blue-300 mb-4">{event.description}</p>
                <button className="group relative px-8 py-4 bg-blue-500 rounded-lg overflow-hidden hover:bg-blue-600 transition-all duration-300">
                  <div className="absolute inset-0 bg-blue-600 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  <span className="relative flex items-center gap-2">
                    Learn More <ChevronRight size={20} />
                  </span>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-16 text-center text-xl text-blue-300">
            <div className="p-6 border border-blue-500/30 rounded-xl bg-black/50 backdrop-blur-sm inline-block">
              <p>No upcoming events at the moment.</p>
              <p>Stay tuned for updates!</p>
            </div>
          </div>
        )}
      </div>
      <div className="absolute top-1/4 right-1/4">
        <Box className="w-8 h-8 text-blue-500 animate-pulse" />
      </div>
      <div className="absolute bottom-1/4 left-1/4">
        <Zap className="w-10 h-10 text-blue-400 animate-ping" />
      </div>
      <div className="absolute top-1/2 right-1/3">
        <Cpu className="w-6 h-6 text-blue-300 animate-bounce" />
      </div>
    </div>
  );
};

export default EventPage;
