'use client';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { FaExclamationTriangle } from 'react-icons/fa';
import EventCard from './EventCard';
import InternCard from './InternCard';

const teamMembers = [
  {
    id: "intern-1",
    name: "Workshop-1",
    designation: "EKYA School",
    date: "5TH DEC 2025",
    video: "/images/workshop1.mp4",
            social: {
            linkedin: "#",
            instagram: "#",
        },
  },
  {
    id: "intern-3",
    name: "Workshop-3",
    designation: "Alliance University",
    date: "12TH DEC 2025",
    video: "/images/WORKSHOP-3.mp4",
            social: {
            linkedin: "#",
            instagram: "#",
        }
  }, {
    id: "intern-4",
    name: "Workshop-4",
    designation: "Venue- Choss Chambridge institute of Technology",
    date: "14TH DEC 2025",
    video: "/images/workshop4.mp4",
            social: {
            linkedin: "#",
            instagram: "#",
        }
  }, 
];

export default function Events() {
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
    const [mounted, setMounted] = useState(false);
    const [showScarcityToast, setShowScarcityToast] = useState(true);

    useEffect(() => {
        setMounted(true);
        
        const updateWindowSize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        // Set initial size
        updateWindowSize();

        // Add event listener for window resize
        window.addEventListener('resize', updateWindowSize);

        // Cleanup
        return () => window.removeEventListener('resize', updateWindowSize);
    }, []);

    // Don't render particles until component is mounted on client
    if (!mounted) {
        return (
            <div className="min-h-screen bg-transparent text-white relative overflow-hidden">
                <Navbar />
                <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="text-5xl md:text-7xl font-bold mb-4 text-white">
                            Loading...
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
    return (
        <div className="min-h-screen bg-transparent text-white relative overflow-hidden">
            <Navbar />
            
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                {/* Animated grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
                
                {/* Floating particles */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-red-500 rounded-full opacity-60"
                            initial={{ 
                                x: Math.random() * windowSize.width, 
                                y: windowSize.height + 10,
                                opacity: 0 
                            }}
                            animate={{ 
                                y: -10, 
                                opacity: [0, 1, 1, 0],
                                scale: [1, 1.5, 1]
                            }}
                            transition={{ 
                                duration: 8 + Math.random() * 4, 
                                repeat: Infinity,
                                delay: i * 0.5,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </div>
            </div>
             {/* Header Section */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                           Our Main{" "}
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                            Event
                          </span>
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
                          Check out our flagship workshop event.
                        </p>
                    </motion.div>

            {/* Main Content */}
            <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6">
                <div className="text-center max-w-7xl mx-auto">
                    {/* Workshop Event Card */}
                    <EventCard />

                    {/* Interns Section */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                        Our{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                            Event
                        </span>
                    </h2>
                    </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 items-stretch">
            {teamMembers.map((intern, index) => (
              <InternCard key={intern.id} intern={intern} index={index} />
            ))}
          </div>


                    {/* Scarcity Toast Notification */}
                    {showScarcityToast && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="fixed bottom-4 right-4 bg-yellow-600 text-black px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 z-50"
                        >
                            <FaExclamationTriangle className="w-5 h-5" />
                            <span className="font-semibold">Only 5 tickets left!</span>
                            <span className="text-sm">Sales end in 4 hours</span>
                            <button
                                onClick={() => setShowScarcityToast(false)}
                                className="ml-2 text-black hover:text-gray-800"
                            >
                                ×
                            </button>
                        </motion.div>
                    )}

                    {/* Live Indicator for Virtual Event */}
                    <div className="fixed top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full flex items-center gap-2 z-50">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <span className="text-sm font-semibold">LIVE</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
