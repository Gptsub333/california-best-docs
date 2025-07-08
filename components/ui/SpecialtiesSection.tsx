'use client';

import { motion } from 'framer-motion';
import SpecialtyCard from "./SpecialtyCard";
import { HeartIcon, BrainIcon, BoneIcon, SkinIcon } from '../icons';
import { Specialty } from '@/types';
import { Bone, Brain, Calendar, Heart, Search, Sparkles, Star } from 'lucide-react';
import Link from 'next/link';


const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 }
  },
  hover: {
    y: -8,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: { type: "spring" as const, stiffness: 400, damping: 10 }
  }
};

const specialties: any = [
  { icon: Heart, name: 'Cardiology', subtext: 'Find Doctor →' },
  { icon: Brain, name: 'Neurology', subtext: 'Find Doctor →' },
  { icon: Bone, name: 'Orthopaedic', subtext: 'Find Doctor →' },
  { icon: Sparkles, name: 'Dermatology', subtext: 'Find Doctor →' }
];
const steps = [
  { step: '1', title: 'Search', description: 'Enter your medical need and location.', icon: Search },
  { step: '2', title: 'Compare', description: 'Review profiles, qualifications, and reviews.', icon: Star },
  { step: '3', title: 'Connect', description: 'Contact or book with your chosen doctor.', icon: Calendar }
]

export default function SpecialtiesSection() {
  return (
    <div className="bg-white -mt-2">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-[#101828] mb-6 md:mb-10 text-center pt-2 px-4"
        variants={fadeIn}
      >
        Browse by Top Specialties
      </motion.h2>

      <motion.div
        className="mb-16 md:mb-20 rounded-2xl shadow-xl p-6 md:p-10 border border-[#F2F4F7] bg-white max-w-5xl mx-4 md:mx-auto"
        variants={fadeIn}
      >
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {specialties.map((specialty: any, index: number) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-5 shadow-md border border-[#F2F4F7] cursor-pointer"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div
                className="w-14 h-14 bg-[#EFF4FF] rounded-xl flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.05, backgroundColor: "#E0EAFF" }}
              >
                <specialty.icon className="w-7 h-7 text-[#2563EB]" />
              </motion.div>
              <h3 className="font-bold text-[#101828] text-base mb-2">{specialty.name}</h3>
              <Link href="/search" >
                <p className="text-[#2563EB] text-sm font-medium">{specialty.subtext}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* How It Works Section - Responsive */}
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-[#101828] mb-6 md:mb-12 text-center px-4"
        variants={fadeIn}
      >
        How California Best Doc Works
      </motion.h2>
      <motion.div
        className="mb-16 md:mb-20 bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-[#F2F4F7] max-w-5xl mx-4 md:mx-auto"
        variants={fadeIn}
      >
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={cardVariants}
            >
              <motion.div
                className="w-20 h-20 bg-[#EFF4FF] rounded-full flex items-center justify-center mx-auto mb-6 shadow-md"
                whileHover={{ scale: 1.05, backgroundColor: "#E0EAFF" }}
              >
                <step.icon className="w-9 h-9 text-[#2563EB]" />
              </motion.div>
              <motion.span
                className="inline-block bg-[#EFF4FF] text-[#2563EB] text-xs px-2.5 py-1 rounded-full font-medium mb-2"
              >
                {`Step ${step.step}`}
              </motion.span>
              <motion.h3
                className="text-lg font-bold text-[#101828] mb-3"
              >
                {step.title}
              </motion.h3>
              <motion.p
                className="text-[#475467] leading-relaxed"
              >
                {step.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}