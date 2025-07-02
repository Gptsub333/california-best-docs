'use client';

import React, { useState } from 'react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Heart, 
  Trash2, 
  Bell, 
  User, 
  Search,
  Filter,
  X
} from 'lucide-react';

// Dummy doctor data
const doctorsData = [
  {
    id: 1,
    name: "Dr. Matthew Leonard Wilner",
    specialty: "Urology Physician",
    address: "8230 WALNUT HILL LANE",
    suite: "SUITE 700",
    city: "DALLAS",
    state: "TX",
    zipCode: "75231"
  },
  {
    id: 2,
    name: "Dr. James Damian Hakert",
    specialty: "Gastroenterology Physician",
    address: "8220 WALNUT HILL LANE",
    suite: "STE 710, LB 101",
    city: "DALLAS",
    state: "TX",
    zipCode: "75231"
  },
  {
    id: 3,
    name: "Dr. Carter Anthony King",
    specialty: "Interventional Cardiology Physician",
    address: "8230 WALNUT HILL LANE",
    suite: "SUITE # 220 BUILDING 3",
    city: "DALLAS",
    state: "TX",
    zipCode: "75231"
  },
  {
    id: 4,
    name: "Dr. Theodore John Carlson",
    specialty: "Pediatric Cardiology Physician",
    address: "8210 WALNUT HILL LN, STE 208",
    suite: "PRESBYTERIAN PROFESSIONAL BLDG 1",
    city: "DALLAS",
    state: "TX",
    zipCode: "75231"
  },
  {
    id: 5,
    name: "Dr. Ricardo Guerra",
    specialty: "Interventional Cardiology Physician",
    address: "8440 WALNUT HILL LN, STE 700",
    suite: "",
    city: "DALLAS",
    state: "TX",
    zipCode: "75231"
  },
  {
    id: 6,
    name: "Dr. Carrie Evans Herbert",
    specialty: "Pediatric Cardiology Physician",
    address: "7777 FOREST LANE A 337",
    suite: "",
    city: "DALLAS",
    state: "TX",
    zipCode: "75230"
  },
  {
    id: 7,
    name: "Dr. William Hugo Dillin",
    specialty: "Orthopaedic Surgery of the Spine Physician",
    address: "10440 N CENTRAL EXPRESSWAY",
    suite: "SUITE 110",
    city: "DALLAS",
    state: "TX",
    zipCode: "75231"
  },
  {
    id: 8,
    name: "Dr. Sarah Michelle Chen",
    specialty: "Dermatology Physician",
    address: "9320 FOREST LANE",
    suite: "SUITE 200",
    city: "DALLAS",
    state: "TX",
    zipCode: "75243"
  },
  {
    id: 9,
    name: "Dr. Michael Robert Thompson",
    specialty: "Oncology Physician",
    address: "8200 WALNUT HILL LANE",
    suite: "SUITE 450",
    city: "DALLAS",
    state: "TX",
    zipCode: "75231"
  },
  {
    id: 10,
    name: "Dr. Jennifer Anne Martinez",
    specialty: "Orthopedic Surgery Physician",
    address: "8150 BROOKRIVER DRIVE",
    suite: "SUITE 300",
    city: "DALLAS",
    state: "TX",
    zipCode: "75247"
  }
];

export default function DocWatchPage() {
  const [watchList, setWatchList] = useState(doctorsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSpecialty, setFilterSpecialty] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  const hoverVariants = { 
    y: -4,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: { type: "spring" as const, stiffness: 400, damping: 10 }
  };

  // Remove doctor from watch list
  const removeFromWatchList = (doctorId: number) => {
    setWatchList(watchList.filter(doctor => doctor.id !== doctorId));
  };

  // Get unique specialties for filter
  const specialties = [...new Set(doctorsData.map(doctor => doctor.specialty))];

  // Filter doctors based on search and specialty
  const filteredDoctors = watchList.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = filterSpecialty === '' || doctor.specialty === filterSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-8 h-8 mr-3" />
              <h1 className="text-3xl md:text-4xl font-bold">Manage your DocWatch List</h1>
            </div>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              You will be notified if anything appears for the doctors on this list
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Search and Filter Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search doctors or specialties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </button>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 pt-4 border-t border-gray-200"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <select
                  value={filterSpecialty}
                  onChange={(e) => setFilterSpecialty(e.target.value)}
                  className="w-full sm:w-auto min-w-0 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                >
                  <option value="">All Specialties</option>
                  {specialties.map(specialty => (
                    <option key={specialty} value={specialty}>
                      {specialty}
                    </option>
                  ))}
                </select>
                {filterSpecialty && (
                  <button
                    onClick={() => setFilterSpecialty('')}
                    className="w-full sm:w-auto px-3 py-2 bg-gray-200 text-gray-700 rounded-md text-sm hover:bg-gray-300 transition-colors"
                  >
                    Clear Filter
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* DocWatch List Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6"
        >
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <Bell className="w-6 h-6 mr-3 text-blue-600" />
              Your DocWatch List
              <span className="ml-3 text-sm font-normal text-gray-500">
                ({filteredDoctors.length} doctors)
              </span>
            </h2>
          </div>

          {/* Table Header - Desktop */}
          <div className="hidden md:block">
            <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50 text-sm font-medium text-gray-500 uppercase tracking-wider">
              <div className="col-span-3">Name</div>
              <div className="col-span-3">Specialty</div>
              <div className="col-span-4">Location</div>
              <div className="col-span-2 text-center">Actions</div>
            </div>
          </div>
        </motion.div>

        {/* Doctor Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          {filteredDoctors.length === 0 ? (
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center"
            >
              <User className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No doctors found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
            </motion.div>
          ) : (
            filteredDoctors.map((doctor) => (
              <motion.div
                key={doctor.id}
                variants={cardVariants}
                whileHover={hoverVariants}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                {/* Desktop Layout */}
                <div className="hidden md:grid md:grid-cols-12 md:gap-4 md:items-center md:px-6 md:py-4">
                  <div className="col-span-3">
                    <h3 className="font-semibold text-gray-900">{doctor.name}</h3>
                  </div>
                  <div className="col-span-3">
                    <p className="text-gray-600">{doctor.specialty}</p>
                  </div>
                  <div className="col-span-4">
                    <div className="flex items-start text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 mt-0.5 text-gray-400 flex-shrink-0" />
                      <div>
                        <p>{doctor.address}</p>
                        {doctor.suite && <p>{doctor.suite}</p>}
                        <p>{doctor.city}, {doctor.state} {doctor.zipCode}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 text-center">
                    <button
                      onClick={() => removeFromWatchList(doctor.id)}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-md hover:bg-red-100 transition-colors"
                    >
                      <Trash2 className="w-4 h-4 mr-1" />
                      Remove DocWatch
                    </button>
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden p-4">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-gray-900 text-lg">{doctor.name}</h3>
                    <button
                      onClick={() => removeFromWatchList(doctor.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <p className="text-blue-600 font-medium mb-3">{doctor.specialty}</p>
                  
                  <div className="flex items-start text-sm text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2 mt-0.5 text-gray-400 flex-shrink-0" />
                    <div>
                      <p>{doctor.address}</p>
                      {doctor.suite && <p>{doctor.suite}</p>}
                      <p>{doctor.city}, {doctor.state} {doctor.zipCode}</p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => removeFromWatchList(doctor.id)}
                    className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-md hover:bg-red-100 transition-colors"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Remove DocWatch
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>

        {/* Empty State when all doctors are removed */}
        {watchList.length === 0 && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center"
          >
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-6" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Your DocWatch list is empty</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Start building your DocWatch list by searching for doctors and adding them to your watchlist.
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium">
              <Search className="w-5 h-5 mr-2" />
              Search Doctors
            </button>
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  );
}
