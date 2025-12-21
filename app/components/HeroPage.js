'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

const HeroPage = () => {
  const pathname = usePathname();
  const router = useRouter();

  // Typewriter effect states
  const [displayText1, setDisplayText1] = useState('');
  const [displayText2, setDisplayText2] = useState('');

  const text1 = "We are your";
  const text2 = "makers of innovation";

  // Redirect from "/" to "/home"
  useEffect(() => {
    if (pathname === "/") {
      router.push("/home");
    }
  }, [pathname, router]);

  // Typewriter effect
  useEffect(() => {
    let timeout1, timeout2;
    let index1 = 0;
    let index2 = 0;

    // First text typewriter
    const typeText1 = () => {
      if (index1 < text1.length) {
        setDisplayText1(text1.substring(0, index1 + 1));
        index1++;
        timeout1 = setTimeout(typeText1, 100);
      } else {
        // Start second text after a delay
        setTimeout(() => {
          typeText2();
        }, 500);
      }
    };

    // Second text typewriter
    const typeText2 = () => {
      if (index2 < text2.length) {
        setDisplayText2(text2.substring(0, index2 + 1));
        index2++;
        timeout2 = setTimeout(typeText2, 100);
      }
    };

    // Start first typewriter after initial delay
    const startDelay = setTimeout(typeText1, 1000);

    return () => {
      clearTimeout(startDelay);
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Main Background (Home.jpg) */}
      <div className="absolute inset-0 z-10">
        
      </div>

      {/* Gradient Overlay - made transparent so global background shows through */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-transparent to-transparent"></div>

      {/* All other content (drone, text, buttons) */}
      <div className="absolute inset-0 z-30">
        {/* Top-left text with typewriter effect */}
        <div className="absolute top-56 sm:top-40 left-0 px-4 sm:px-8">
          <motion.h1
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className={` text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold iceland-regular`}
          >
            {displayText1}
          </motion.h1>
        </div>

        {/* Centered Drone image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
            <Image
              src="/inno.png"
              alt="inve8"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Bottom-right text with typewriter effect */}
        <div className="absolute bottom-64 sm:bottom-44 right-0 px-4 sm:px-8">
          <motion.h1
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-right font-bold iceland-regular"
          >
            {displayText2}
          </motion.h1>
        </div>

        {/* Bottom-left CTA section */}
        {/* <div className="absolute bottom-12 sm:bottom-20 left-0 px-4 sm:px-8 w-full sm:w-[30vw]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="text-white text-sm sm:text-base mt-1 italic"
          >
            From Filament to Flight –
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.2 }}
            className="text-white text-sm sm:text-base mt-1 italic"
          >
            Customized Robotics & Industry Automation
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <button
              className="bg-red-700 hover:bg-transparent cursor-target hover:border-red-700 border border-red-700 transition duration-300 text-white px-6 py-2 rounded-full z-10"
              onClick={handleExploreClick}
            >
              Explore
            </button>
            <button
              className="bg-transparent hover:bg-white cursor-target hover:text-black transition duration-300 border border-white text-white px-6 py-2 rounded-full flex items-center z-10"
              onClick={handleOurProductsClick}
            >
              Our Products <IoArrowForwardSharp className="ml-2" />
            </button>
          </motion.div>
        </div> */}
      </div>
    </div>
  );
};

export default HeroPage;