import React from "react";
import Link from "next/link";
import Image from 'next/image';
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Achievements - Innov8ors",
  description: "Our achievements and milestones.",
};

const images = [
  {
    src: encodeURI("/images/achievement1 (2).jpeg"),
    title: "TechHuddleX 2K25 - Tech Skit!   Cambridge Institute of Technology",
    desc: "Shubham Gupta, Soibam Erica Chanu, Moulya R, and Nethan secured First Place in the Tech Skit Competition, showcasing creativity, technical awareness, teamwork, and effective communication.",
  },
  {
    src: encodeURI("/images/achivement1 (1).jpeg"),
    title: "TechHuddleX 2K25 - Tech Talk!   Cambridge Institute of Technology",
    desc: "Shubham Gupta, Director of Innov8ors, winning First Place in a Tech Talk competition, representing the spirit of innovation, confidence, and knowledge-sharing that Innov8ors stands for.",
  },
  {
    src: encodeURI("/images/achivement (3).jpeg"),
    title: "TechHuddleX 2K25 - Code Quiz!   Cambridge Institute of Technology",
    desc: "Shubham Gupta and Nethan secured First Place in the Code Quiz Competition, demonstrating strong problem-solving skills, technical knowledge, and logical thinking.",
  },
];

export default function AchievementsPage() {
  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-600 to-zinc-300">
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-black">Our Achievements</h1>
          <p className="mt-4 text-lg text-zinc-700 max-w-2xl mx-auto">
            Milestones, awards and highlights from Innov8ors — built with passion and
            delivered with impact.
          </p>
        </header>

        <main>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((it, idx) => (
              <article
                key={idx}
                className="relative rounded-2xl overflow-hidden shadow-lg bg-white/80 backdrop-blur-sm border border-zinc-200 hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="h-56 w-full overflow-hidden bg-zinc-100 relative">
                  <Image
                    src={it.src}
                    alt={it.title}
                    className="object-cover"
                    fill={true}
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-2">{it.title}</h3>
                  <p className="text-zinc-600 mb-4">{it.desc}</p>
                  <div className="flex items-center justify-between">
                    <Link
                      href="#"
                      className="text-sm font-medium text-red-600 hover:underline"
                    >
                      Learn more
                    </Link>
                    <span className="text-xs text-zinc-500">2025</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
}
