import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const EventCard = () => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="group relative mb-16"
    >
        <div className="relative bg-gradient-to-b from-zinc-900/90 to-black/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-zinc-800/50 hover:border-red-500/50 transition-all duration-500 shadow-2xl shadow-red-500/10">
            <div className="h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

            <div className="p-8 md:p-12">
                {/* Workshop Image */}
                <div className="relative mb-8">
                    <motion.div
                        className="relative w-full max-w-2xl mx-auto h-64 md:h-96 rounded-2xl overflow-hidden border-2 border-zinc-700 group-hover:border-red-500/70 transition-all duration-500 shadow-lg shadow-red-500/20"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <video
                            autoPlay
                            loop
                            muted
                            src="/images/workshop-2.mp4"
                            alt="Robotics Workshop"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </motion.div>
                </div>

                {/* Event Details */}
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-6xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                        Robotics Workshop
                    </h2>
                    <p className="text-red-500 font-medium text-xl md:text-2xl uppercase tracking-widest">
                        Build Your First Drone
                    </p>
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                        Join us for an exciting hands-on workshop where you&apos;ll learn to build and program your very first autonomous drone. Perfect for beginners and enthusiasts alike!
                    </p>
                </div>

                {/* Social Media Links */}
                <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent my-8"></div>

                <div className="flex justify-center gap-4">
                    <Link href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-zinc-800/80 hover:bg-blue-600 text-zinc-400 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 border border-zinc-700/50 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 cursor-target">
                        <FaLinkedin className="w-6 h-6" />
                    </Link>
                        <Link href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-zinc-800/80 hover:bg-gray-900 text-zinc-400 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 border border-zinc-700/50 hover:border-pink-500/50 cursor-target">
                        <FaInstagram className="w-6 h-6" />
                    </Link>
                        <Link href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-zinc-800/80 hover:bg-gray-900 text-zinc-400 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 border border-zinc-700/50 hover:border-gray-500/50 cursor-target">
                        <FaTwitter className="w-6 h-6" />
                    </Link>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
    </motion.div>
);

export default EventCard;