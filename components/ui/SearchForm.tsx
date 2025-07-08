'use client';

import { useState } from 'react';
import { SearchIcon } from '../icons';
import { motion } from 'framer-motion';
import { MapPin, Stethoscope } from 'lucide-react';
import Link from 'next/link';

const fadeIn = {

  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

export default function SearchForm() {
  const [specialty, setSpecialty] = useState('');
  const [location, setLocation] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    // Simulate search

  };

  return (
    <>
      <motion.div
        className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 mb-8 max-w-4xl mx-auto border border-[#F2F4F7] transition-all duration-300"
        variants={fadeIn}
        whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
          <div className="group">
            <label className="block text-sm font-medium text-[#344054] mb-2 text-left">
              Specialty, condition, or doctor
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Stethoscope className="h-5 w-5 text-[#98A2B3]" />
              </div>

              <motion.input
                type="text"
                placeholder="e.g. Cardiologist"
                className="w-full pl-10 pr-3 py-3 border border-[#D0D5DD] rounded-xl focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] text-[#344054] placeholder-[#98A2B3] text-sm bg-white"
                whileFocus={{ boxShadow: "0 0 0 4px rgba(37, 99, 235, 0.1)" }}
              />
            </div>
          </div>
          <div className="group">
            <label className="block text-sm font-medium text-[#344054] mb-2 text-left">
              Location
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-[#98A2B3]" />
              </div>
              <motion.input
                type="text"
                placeholder="e.g. City or Zip Code"
                className="w-full pl-10 pr-3 py-3 border border-[#D0D5DD] rounded-xl focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] text-[#344054] placeholder-[#98A2B3] text-sm bg-white"
                whileFocus={{ boxShadow: "0 0 0 4px rgba(37, 99, 235, 0.1)" }}
              />
            </div>
          </div>
        </div>

        <motion.button
          className="w-full bg-[#2563EB] text-white py-3 md:py-3.5 rounded-xl font-semibold text-base"
          whileHover={{ backgroundColor: "#1D4ED8", scale: 1.01 }}
          whileTap={{ scale: 0.98 }}

        >
          <Link href="/search">
            Search Doctor
          </Link>
        </motion.button>

      </motion.div>
    </>
  );
}