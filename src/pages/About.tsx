import React, { useState } from 'react';
import { ACHIEVEMENTS } from '../data/mockData';
import AchievementCard from '../components/ui/AchievementCard';
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';

const VISION_MISSION_VALUES = [
  {
    key: 'mission',
    title: 'Our Mission',
    content: "To be the leading facilitator of Sino-Ethiopian trade, delivering expert services grounded in professionalism, integrity, and thorough knowledge of Ethiopia’s commercial and logistical environment. We are committed to simplifying complex trade processes for our partners.",
  },
  {
    key: 'vision',
    title: 'Our Vision',
    content: "To create a seamless, efficient, and highly compliant trade corridor, establishing Sabolla International as the indispensable partner for global manufacturers seeking sustainable growth and deep market penetration within the rapidly developing Ethiopian economy.",
  },
  {
    key: 'values',
    title: 'Core Values',
    content: "Integrity (Uncompromising ethics in all dealings), Reliability (Consistent and timely delivery), Expertise (Deep regulatory and market knowledge), and Partnership (Long-term, mutually beneficial relationships).",
  },
];

const AboutPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(VISION_MISSION_VALUES[0].key);
  const activeContent = VISION_MISSION_VALUES.find(item => item.key === activeTab);

  return (
    <div className="bg-[#F9F2D6] w-full min-h-screen overflow-hidden font-['Montserrat'] font-medium selection:bg-[#308667] selection:text-[#F9F2D6]">

      {/* ================= HERO - BRAND PATTERN BACKGROUND ================= */}
      <section className="relative w-full py-32 md:py-48 bg-[#122C21] overflow-hidden">
        {/* Geometric Brand Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L5 30l5 5 20-20 20 20 5-5L30 5z' fill='%23F9F2D6' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
               backgroundSize: '80px 80px'
             }}>
        </div>
        
        {/* Gradient Mesh for Depth */}
        <div className="absolute inset-0 bg-linear-to-tr from-[#09140F] via-transparent to-[#387663]/30"></div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-black text-[#F9F2D6] mb-8 uppercase tracking-tighter leading-none"
          >
            A Legacy of Trust
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-[#F9F2D6]/80 max-w-4xl mx-auto leading-relaxed"
          >
            Two decades of connecting global manufacturers with Ethiopian markets through{' '}
            <span className="text-[#308667] font-black uppercase tracking-wider">
              Precision and Reliability.
            </span>
          </motion.p>
        </div>
      </section>

      {/* ================= FOUNDATION - INTERACTIVE TABS ================= */}
      <section className="relative py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-xs font-black text-[#308667] uppercase tracking-[0.3em] mb-4 bg-[#308667]/10 px-4 py-2 rounded-full">
              Our Foundation
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-[#09140F] mb-10 leading-[1.1] uppercase">
              Defining <span className="text-[#387663]">Global Trade</span>
            </h2>

            {/* TAB NAVIGATION */}
            <div className="flex flex-wrap gap-2 mb-10">
              {VISION_MISSION_VALUES.map((item) => (
                <button
                  key={item.key}
                  onClick={() => setActiveTab(item.key)}
                  className={`py-3 px-8 text-sm font-black transition-all duration-300 rounded-full border-2 uppercase tracking-widest
                    ${activeTab === item.key
                      ? 'bg-[#122C21] text-[#F9F2D6] border-[#122C21] shadow-lg scale-105'
                      : 'text-[#122C21]/40 border-transparent hover:border-[#122C21]/20 hover:text-[#122C21]'}
                  `}
                >
                  {item.title}
                </button>
              ))}
            </div>

            {/* TAB CONTENT */}
            <div className="relative min-h-[250px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#F9F2D6] border-l-8 border-[#308667] p-10 rounded-r-3xl shadow-sm"
                >
                  <h3 className="text-2xl font-black text-[#122C21] mb-6 uppercase tracking-tight">
                    {activeContent?.title}
                  </h3>
                  <p className="text-lg text-[#09140F]/80 leading-relaxed font-medium">
                    {activeContent?.content}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* SERVICE CARDS GRID */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {[
              { title: "Advisory Services", desc: "Strategic market entry guidance and regulatory navigation." },
              { title: "Global Sourcing", desc: "Direct access to trusted international manufacturers." },
              { title: "Supply Chain", desc: "End-to-end logistics and compliance management." },
              { title: "Import Facilitation", desc: "Smooth cross-border trade with full regulatory alignment." },
            ].map((item, i) => (
              <div key={i} className="group p-8 bg-[#122C21] rounded-4xl transition-all duration-500 hover:-translate-y-2 border-b-4 border-transparent hover:border-[#308667]">
                <h4 className="text-xl font-black text-[#F9F2D6] mb-4 uppercase tracking-tight">
                  {item.title}
                </h4>
                <p className="text-[#F9F2D6]/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= METRICS ================= */}
      <section className="py-32 bg-[#122C21]">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center text-3xl md:text-5xl font-black text-[#F9F2D6] mb-20 uppercase tracking-tighter"
          >
            Key Metrics of Our <span className="text-[#308667]">Success</span>
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {ACHIEVEMENTS.map((achievement, index) => (
              <AchievementCard
                key={index}
                value={achievement.value}
                label={achievement.label}
                delay={0.1 * index}
                // Note: Ensure AchievementCard uses Montserrat Black for numbers
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="relative py-40 overflow-hidden bg-white">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h3
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-7xl font-black text-[#09140F] mb-10 uppercase leading-[0.9] tracking-tighter"
          >
            Ready to <span className="text-[#387663]">Expand?</span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xl text-[#09140F]/70 mb-14 max-w-2xl mx-auto"
          >
            Partner with Sabolla International for compliant, efficient, and profitable trade solutions in Ethiopia.
          </motion.p>
          
          <Link to='/contact'>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-[#387663] text-[#F9F2D6] px-16 py-6 text-lg font-black rounded-full uppercase tracking-widest shadow-2xl hover:bg-[#122C21] transition-colors cursor-pointer"
            >
              Start Trading Today
            </motion.div>
          </Link>
        </div>
        
        {/* Subtle Decorative Elements */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#F9F2D6] rounded-full blur-[100px] -translate-y-1/2"></div>
      </section>
    </div>
  );
};

export default AboutPage;