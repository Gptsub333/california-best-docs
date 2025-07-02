'use client';
import React from 'react';
import { Search, MapPin, Heart, Brain, Bone, Sparkles, Users, Calendar, Star, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from './Header';
import Link from 'next/link';

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
                        <p>Search for Verified doctors and specialists in your area, <br/> Discover the quality of care you deserve.</p>
                        
                    </motion.div>
                    <br />

                    {/* Search Form - Responsive */}
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
                </motion.section>
                 <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-white"></div> 
            </div>

            {/* Specialties Section - Responsive */}
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
                        {[
                            { icon: Heart, name: 'Cardiology', subtext: 'Find Doctor →' },
                            { icon: Brain, name: 'Neurology', subtext: 'Find Doctor →' },
                            { icon: Bone, name: 'Orthopaedic', subtext: 'Find Doctor →' },
                            { icon: Sparkles, name: 'Dermatology', subtext: 'Find Doctor →' }
                        ].map((specialty, index) => (
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
                    {[
                        {
                            step: '1',
                            title: 'Search',
                            description: 'Enter your medical need and location.',
                            icon: Search
                        },
                        {
                            step: '2',
                            title: 'Compare',
                            description: 'Review profiles, qualifications, and reviews.',
                            icon: Star
                        },
                        {
                            step: '3',
                            title: 'Connect',
                            description: 'Contact or book with your chosen doctor.',
                            icon: Calendar
                        }
                    ].map((step, index) => (
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
        {/* Closing tag for min-h-screen bg-white */}
    </div>
    );
};

export default LandingPage;