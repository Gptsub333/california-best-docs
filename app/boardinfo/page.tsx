'use client';

import React, { useState } from 'react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import { motion } from 'framer-motion';
import { 
  User, 
  AlertTriangle, 
  FileText, 
  Calendar,
  MapPin,
  Shield
} from 'lucide-react';

// Board action data
const boardActionsData = [
  {
    id: 1,
    date: "04/04/2023",
    title: "INADEQUATE MEDICAL RECORDS",
    type: "violation",
    content: "On June 9, 2023, the Board and James Kevin Kaufman, M.D., entered into an Agreed Order requiring him to within one year complete the medical recordkeeping course offered by the University of California San Diego Physician Assistant Education (PACE). The Board was told that while a surgery was urgent, he did not adequately document in his medical record the patient's follow-up care for patient health issues. In addition, according to Kaufman, he performed unspecified activities which could be attributable to the delay in the operative treatment. The patient experienced neurological outcomes which could be attributed to the delay. Dr. Kaufman's medical record for surgical treatment and delay with the transport issue could have been more robust."
  },
  {
    id: 2,
    date: "08/24/2018",
    title: "TXPHP VIOLATION",
    type: "violation",
    content: "On August 24, 2018, the Board and James Kevin Kaufman, M.D., entered into an Agreed Order under the following terms for a period of 10 years: abstain from the consumption of alcoholic beverages; abstain from the use of illicit drugs and particular drugs defined in the Order; participate in the activity of substance abuse counseling; participate in the Board's drug testing program; participate in the activities of Alcoholics Anonymous no less than five times a week; participate in programs of Caduceus no less than three times per month; within 30 days obtain a Board-Approved psychologist and follow all recommendations for care and treatment; participate in the activities of a county or state medical society committee on physician health and rehabilitation; and continue to meet with his Recovery Monitor. The Board found Dr. Kaufman had a positive screen for diazepam and was discharged from the California Physician Health Program."
  },
  {
    id: 3,
    date: "03/03/2017",
    title: "QUALITY OF CARE",
    type: "quality",
    content: "On March 3, 2017, the Board and James Kevin Kaufman, M.D., entered into an Agreed Order requiring him to have his practice monitored by another physician for eight consecutive monitoring cycles; within one year complete at least 32 hours of inperson CME, divided as follows: 8 hours in risk management, 8 hours in ethics, 8 hours in spinal surgery, including pedicle screw management and postoperative complication management, and 8 hours in physician-patient communication; and within 60 days pay an administrative penalty of $3,000. The Board found that Dr. Kaufman violated Board rules on his performance of multiple spinal surgeries on one patient within a short period of time. Dr. Kaufman was not diligent with respect to the posterior surgery and in his communications with the patient and family."
  },
  {
    id: 4,
    date: "03/04/2016",
    title: "QUALITY OF CARE",
    type: "quality",
    content: "On March 4, 2016, the Board and James Kevin Kaufman, M.D., entered into an Agreed Order requiring Dr. Kaufman to have his practice monitored by another physician for eight consecutive monitoring cycles; within one year complete at least 16 hours of CME, divided as follows: eight hours in risk management and eight hours in medical recordkeeping; and within 60 days pay an administrative penalty of $3,000. The Board found Dr. Kaufman had a positive screen for diazepam and was discharged from the California Physician Health Program."
  },
  {
    id: 5,
    date: "03/03/2017",
    title: "QUALITY OF CARE",
    type: "quality",
    content: "On March 3, 2017, the Board and James Kevin Kaufman, M.D., entered into an Agreed Order requiring him to have his practice monitored by another physician for eight consecutive monitoring cycles; within one year complete at least 32 hours of inperson CME, divided as follows: 8 hours in risk management, 8 hours in ethics, 8 hours in spinal surgery, including pedicle screw management and postoperative complication management, and 8 hours in physician-patient communication; and within 60 days pay an administrative penalty of $3,000. The Board found that Dr. Kaufman violated Board rules on his performance of multiple spinal surgeries on one patient within a short period of time. Dr. Kaufman was not diligent with respect to the posterior surgery and in his communications with the patient and family."
  },
  {
    id: 6,
    date: "03/04/2016",
    title: "QUALITY OF CARE",
    type: "quality",
    content: "On March 4, 2016, the Board and James Kevin Kaufman, M.D., entered into an Agreed Order requiring Dr. Kaufman to have his practice monitored by another physician for eight consecutive monitoring cycles; within one year complete at least 16 hours of CME, divided as follows: eight hours in risk management and eight hours in medical recordkeeping; and within 60 days pay an administrative penalty of $3,000. The Board found Dr. Kaufman had a positive screen for diazepam and was discharged from the California Physician Health Program."
  },
  {
    id: 7,
    date: "08/28/2014",
    title: "DISCIPLINARY ACTION",
    type: "disciplinary",
    content: "ON AUGUST 28, 2014, THE BOARD AND JAMES KEVIN KAUFMAN, M.D., ENTERED INTO AN AGREED ORDER REQUIRING DR. KAUFMAN TO CORRECT THE ADVERSE ENTRY AND REPRESENTATIONS IN ALL WEBSITES, INCLUDING THOSE ADVERTISING EDUCATIONAL MATERIALS DELIVERED ON HIS WEBSITES FOR WHICH HE CONTROLS THE CONTENT, REGARDING HIS BOARD CERTIFICATION(S); AND WITHIN ONE YEAR COMPLETE EIGHT HOURS OF CME IN ETHICS OR RISK MANAGEMENT. THE BOARD FOUND DR. KAUFMAN FAILED TO REMOVE WEBSITE ENTRIES STATING HE WAS BOARD CERTIFIED IN NEUROSURGERY FOR EIGHT MONTHS AFTER HIS NEUROSURGERY SPECIALTY CERTIFICATION HAD EXPIRED."
  },
  {
    id: 8,
    date: "04/11/2008",
    title: "DISCIPLINARY ACTION",
    type: "disciplinary",
    content: "ON APRIL 11, 2008, THE BOARD AND DR. KAUFMAN ENTERED INTO AN AGREED ORDER REQUIRING THAT HE COMPLETE A MEDICAL RECORD COURSE AND PAY AN ADMINISTRATIVE FINE OF $500. THE ACTION WAS BASED ON HIS FAILURE TO TIMELY RELEASE MEDICAL RECORDS UPON REQUEST AND UNPROFESSIONAL BEHAVIOR IN AN OPERATING ROOM WHERE ANOTHER PHYSICIAN WAS PROVIDING PATIENT CARE."
  }
];

const doctorInfo = {
  name: "JAMES KEVIN KAUFMAN",
  specialty: "Neurological Surgery Physician (CA)",
  image: "/xyz.png" // Using the same placeholder as your project
};

export default function BoardInfoPage() {
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

  const getActionIcon = (type: string) => {
    switch (type) {
      case 'violation':
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      case 'quality':
        return <Shield className="w-5 h-5 text-orange-500" />;
      case 'disciplinary':
        return <FileText className="w-5 h-5 text-red-600" />;
      default:
        return <FileText className="w-5 h-5 text-gray-500" />;
    }
  };

  const getActionColor = (type: string) => {
    switch (type) {
      case 'violation':
        return 'border-red-200 bg-red-50';
      case 'quality':
        return 'border-orange-200 bg-orange-50';
      case 'disciplinary':
        return 'border-red-200 bg-red-50';
      default:
        return 'border-gray-200 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section with Doctor Info */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            {/* Doctor Avatar */}
            <div className="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
              <User className="w-12 h-12 text-white" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{doctorInfo.name}</h1>
            <p className="text-xl text-blue-100">{doctorInfo.specialty}</p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        
        {/* Board Actions List - Mixed Layout */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* First Row - Single Full Width Card */}
          <motion.div
            variants={cardVariants}
            className={`bg-white rounded-lg shadow-sm border-l-4 overflow-hidden ${getActionColor(boardActionsData[0].type)}`}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {getActionIcon(boardActionsData[0].type)}
                  <div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-1">
                      <Calendar className="w-4 h-4" />
                      <span>{boardActionsData[0].date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
                      {boardActionsData[0].title}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed text-sm">
                  {boardActionsData[0].content}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Second Row - Two Cards Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {boardActionsData.slice(1, 3).map((action) => (
              <motion.div
                key={action.id}
                variants={cardVariants}
                className={`bg-white rounded-lg shadow-sm border-l-4 overflow-hidden ${getActionColor(action.type)}`}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {getActionIcon(action.type)}
                      <div>
                        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-1">
                          <Calendar className="w-4 h-4" />
                          <span>{action.date}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
                          {action.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {action.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Third Row - Three Cards in a Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {boardActionsData.slice(3, 6).map((action) => (
              <motion.div
                key={action.id}
                variants={cardVariants}
                className={`bg-white rounded-lg shadow-sm border-l-4 overflow-hidden ${getActionColor(action.type)}`}
              >
                <div className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      {getActionIcon(action.type)}
                      <div>
                        <div className="flex items-center space-x-2 text-xs text-gray-500 mb-1">
                          <Calendar className="w-3 h-3" />
                          <span>{action.date}</span>
                        </div>
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                          {action.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed text-xs">
                      {action.content.length > 200 ? action.content.substring(0, 200) + '...' : action.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Fourth Row - Two Cards Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {boardActionsData.slice(6, 8).map((action) => (
              <motion.div
                key={action.id}
                variants={cardVariants}
                className={`bg-white rounded-lg shadow-sm border-l-4 overflow-hidden ${getActionColor(action.type)}`}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {getActionIcon(action.type)}
                      <div>
                        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-1">
                          <Calendar className="w-4 h-4" />
                          <span>{action.date}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
                          {action.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {action.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Summary Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mt-12 bg-white rounded-lg shadow-sm border border-gray-200 p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <FileText className="w-6 h-6 mr-3 text-blue-600" />
            Board Actions Summary
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-red-600">Violations</p>
                  <p className="text-2xl font-bold text-red-700">
                    {boardActionsData.filter(action => action.type === 'violation').length}
                  </p>
                </div>
                <AlertTriangle className="w-8 h-8 text-red-500" />
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-orange-600">Quality of Care</p>
                  <p className="text-2xl font-bold text-orange-700">
                    {boardActionsData.filter(action => action.type === 'quality').length}
                  </p>
                </div>
                <Shield className="w-8 h-8 text-orange-500" />
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-red-600">Disciplinary Actions</p>
                  <p className="text-2xl font-bold text-red-700">
                    {boardActionsData.filter(action => action.type === 'disciplinary').length}
                  </p>
                </div>
                <FileText className="w-8 h-8 text-red-600" />
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Disclaimer:</strong> This information is compiled from public records from the California Medical Board. 
              All board actions are part of the public record and are intended to inform the public about physician discipline.
            </p>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
