'use client';

import { motion } from 'framer-motion';
import SearchForm from './SearchForm';
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}
export default function HeroSection() {
  return (
    <>
      <motion.h1
        className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#101828] mb-4 md:mb-6 leading-tight drop-shadow-lg"
        variants={fadeIn}
      >
        Find Trusted Care, <br /><span className="text-[#2563EB] drop-shadow-xl">Effortlessly</span>
      </motion.h1>

      <motion.div
        className="space-y-2 text-base md:text-lg  text-black mb-8 md:mb-12 max-w-2xl mx-auto drop-shadow-md"
        variants={fadeIn}
      >
        <p>Search for Verified doctors and specialists in your area, <br /> Discover the quality of care you deserve.</p>

      </motion.div>
    </>
  );
}