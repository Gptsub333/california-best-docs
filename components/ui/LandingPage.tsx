'use client';
import React from 'react';
import { Search, MapPin, Heart, Brain, Bone, Sparkles, Users, Calendar, Star, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from './Header';
import Link from 'next/link';
import SearchForm from './SearchForm';
import HeroSection from './HeroSection';
import SpecialtiesSection from './SpecialtiesSection';

const LandingPage = () => {
    // Animation variants
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

    return (
        <div className="min-h-screen bg-[#F3F4F6]">
            {/* Header */}
            <Header />


            {/* Hero Section with Precisely Constrained Gradient Background */}
            <div className="w-full pb-10 md:pb-20 relative bg-white">
                {/* Gradient background overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_170%_110%_at_50%_50%,_rgba(96,165,250,0.4)_0%,_rgba(147,197,253,0.3)_20%,_rgba(186,219,255,0.2)_40%,_rgba(255,255,255,0.3)_70%,_transparent_100%)]"></div>
                <motion.section
                    className="px-4 md:px-6 py-8 md:py-16 text-center max-w-5xl mx-auto relative z-10"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <HeroSection />
                    <br />
                    {/* Search Form - Responsive */}
                    <SearchForm />
                </motion.section>
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-white"></div>
            </div>
            {/* Specialties Section - Responsive */}
            <SpecialtiesSection />

        </div>
    );
};

export default LandingPage;