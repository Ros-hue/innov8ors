'use client'
import React from 'react';
import {
  SiApple,
  SiSamsung,
  SiGoogle,
  SiAmazon,
  SiTesla,
  SiNetflix,
  SiSpotify,
  SiAdobe,
  SiIntel,
  SiNvidia,
  SiMeta,
} from "react-icons/si";

const BrandsCollaboration = () => {
  const brands = [
    { name: 'Apple', logo: <SiApple className="text-[#000000]" /> },
    { name: 'Samsung', logo: <SiSamsung className="text-[#1428A0]" /> },
    { name: 'Google', logo: <SiGoogle className="text-[#4285F4]" /> },
    { name: 'Amazon', logo: <SiAmazon className="text-[#FF9900]" /> },
    { name: 'Tesla', logo: <SiTesla className="text-[#CC0000]" /> },
    { name: 'Netflix', logo: <SiNetflix className="text-[#E50914]" /> },
    { name: 'Spotify', logo: <SiSpotify className="text-[#1DB954]" /> },
    { name: 'Adobe', logo: <SiAdobe className="text-[#FF0000]" /> },
    { name: 'Intel', logo: <SiIntel className="text-[#0071C5]" /> },
    { name: 'NVIDIA', logo: <SiNvidia className="text-[#76B900]" /> },
    { name: 'Meta', logo: <SiMeta className="text-[#1877F2]" /> },
  ];

  // Duplicate brands for seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="w-full bg-white py-12 overflow-hidden">
      <div className="max-w-8xl mx-auto relative">
        {/* Sliding Brands Container */}
        <div className="relative">
          {/* Scrolling Container */}
          <div className="flex animate-scroll">
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 mx-8 group text-center"
              >
                {/* Brand Logo */}
                <div className="text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {brand.logo}
                </div>

                {/* Brand Name */}
                <span className="text-gray-700 font-semibold text-sm group-hover:text-red-600 transition-colors">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for infinite scroll animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default BrandsCollaboration;
