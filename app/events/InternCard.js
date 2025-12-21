import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const InternCard = ({ intern, index }) => (
    <motion.div
        key={intern.id}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
        className="group relative"
    >
        <div className="relative bg-gradient-to-b from-zinc-900/80 to-black/80 backdrop-blur-sm rounded-xl overflow-hidden border border-zinc-800/50 hover:border-red-500/40 transition-all duration-500 p-6 h-full">
            <div className="relative mb-4">
                <div className="relative w-20 h-20 mx-auto">
                    <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/10 to-red-600/10 blur-sm"
                        animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    />

                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-zinc-700 group-hover:border-red-500/50 transition-all duration-500">
                        <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
                            {intern.video ? (
                                <video
                                    src={intern.video}
                                    autoPlay
                                    loop
                                    muted
                                    className="object-cover w-full h-full"
                                />
                            ) : intern.image ? (
                                <Image src={intern.image} alt={intern.name} width={120} height={120} className="object-cover w-full h-full" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold" />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center space-y-2">
                <h3 className="text-base font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                    {intern.name}
                </h3>
                <p className="text-red-500/90 font-medium text-xs tracking-wide">
                    {intern.designation}
                </p>
                {intern.date && (
                    <p className="text-gray-400 text-xs pt-1">
                        {intern.date}
                    </p>
                )}
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent my-4"></div>

            <div className="flex justify-center gap-2">
                {intern.social.linkedin && (
                    <Link href={intern.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-zinc-800/80 hover:bg-blue-600 text-zinc-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 border border-zinc-700/50 hover:border-blue-500/50 cursor-target">
                        <FaLinkedin className="w-4 h-4" />
                    </Link>
                )}
                {intern.social.instagram && (
                    <Link href={intern.social.instagram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-zinc-800/80 hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 text-zinc-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 border border-zinc-700/50 hover:border-pink-500/50 cursor-target">
                        <FaInstagram className="w-4 h-4" />
                    </Link>
                )}
            </div>
        </div>
    </motion.div>
);

export default InternCard;