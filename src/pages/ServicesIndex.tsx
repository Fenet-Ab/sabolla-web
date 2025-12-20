import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGlobeAfrica, FaChartLine, FaShip, FaCubes, FaArrowRight } from 'react-icons/fa';

// IMPORT LOCAL ASSET
import bgPattern from "../assets/bg_pattern/image.png";

const SERVICES_LIST = [
  { 
    name: "Advisory & Consultancy", 
    slug: "advisory", 
    icon: <FaGlobeAfrica />,
    shortDesc: "Guiding international companies through Ethiopia’s complex legal, regulatory, and commercial landscape." 
  },
  { 
    name: "Market Assessments", 
    slug: "market-assessments", 
    icon: <FaChartLine />,
    shortDesc: "Comprehensive field intelligence and data analytics to evaluate demand and competitor activity." 
  },
  { 
    name: "Import & Export", 
    slug: "import-export", 
    icon: <FaShip />,
    shortDesc: "End-to-end support for regulatory compliance, documentation, and efficient movement of goods." 
  },
  { 
    name: "Sourcing & Supply Chain", 
    slug: "sourcing", 
    icon: <FaCubes />,
    shortDesc: "Full-spectrum sourcing, rigorous supplier verification, and supervising procurement workflows." 
  }
];

const ServicesIndex: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F2D6] font-['Montserrat'] selection:bg-[#308667] selection:text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#387663] pt-40 pb-56 overflow-hidden">
        
        {/* LOCAL IMAGE PATTERN */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ 
            backgroundImage: `url(${bgPattern})`,
            backgroundSize: '150px 150px',
            backgroundRepeat: 'repeat'
          }}
        />
        
        <div className="relative z-10 container mx-auto px-6 max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block text-[10px] font-black text-[#09140F] uppercase tracking-[0.5em] mb-6 px-6 py-2 border border-[#09140F]/30 rounded-full">
              Operational Solutions
            </span>
            <h1 className="text-6xl md:text-9xl font-black text-[#F9F2D6] mb-8 uppercase tracking-tighter leading-none">
              Strategic <span className="text-[#09140F]">Trade</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#F9F2D6]/50 max-w-4xl mx-auto font-bold italic border-b-2 border-[#308667] pb-12 inline-block">
              "Navigating complex markets with 20 years of localized intelligence."
            </p>
          </motion.div>
        </div>

        {/* Diagonal Angle Cut */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-[#F9F2D6]" style={{ clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}></div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="pb-32 -mt-32 container mx-auto px-6 max-w-7xl relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_LIST.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[3.5rem] shadow-[0_30px_60px_rgba(18,44,33,0.08)] border border-[#122C21]/5 flex flex-col h-full group hover:bg-[#122C21] transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#308667]/10 text-[#308667] flex items-center justify-center mb-8 text-2xl group-hover:bg-[#308667] group-hover:text-white transition-all duration-500 rotate-3 group-hover:rotate-0">
                {service.icon}
              </div>
              
              <h2 className="text-xl font-black text-[#122C21] mb-4 uppercase tracking-tighter leading-tight group-hover:text-[#F9F2D6] transition-colors">
                {service.name}
              </h2>
              
              <p className="text-[#122C21]/60 mb-10 grow font-bold text-[13px] leading-relaxed group-hover:text-[#F9F2D6]/50 transition-colors">
                {service.shortDesc}
              </p>
              
              <Link
                to={`/services/${service.slug}`}
                className="inline-flex items-center text-[9px] font-black uppercase tracking-[0.3em] text-[#308667] group-hover:text-[#F9F2D6] transition-all"
              >
                Explore Protocol <FaArrowRight className="ml-3 group-hover:translate-x-3 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= THE PROCESS BLUEPRINT ================= */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
                <span className="text-[10px] font-black text-[#308667] uppercase tracking-[0.4em] mb-4 block">The Sabolla Edge</span>
                <h3 className="text-4xl md:text-6xl font-black text-[#122C21] uppercase tracking-tighter mb-8 leading-none">
                    How We <br/> <span className="text-[#308667]">Facilitate</span>
                </h3>
                <p className="text-[#122C21]/70 text-lg font-bold mb-10 leading-relaxed">
                    Our multi-layered service model ensures that global manufacturers remain compliant while maximizing their market penetration in Ethiopia.
                </p>
                
                <div className="space-y-6">
                    {["Deep Regulatory Knowledge", "Verified Local Supply Chains", "End-to-End Documentation Control"].map((item, i) => (
                        <div key={i} className="flex items-center gap-4">
                            <div className="w-6 h-6 rounded-full bg-[#308667] flex items-center justify-center text-white text-[10px]">✓</div>
                            <span className="text-[#122C21] font-black uppercase tracking-widest text-[10px]">{item}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="lg:w-1/2 bg-[#F9F2D6] p-12 rounded-[4rem] border border-[#122C21]/5 shadow-inner relative flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                    <div className="w-24 h-24 bg-[#308667]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FaShip className="text-4xl text-[#308667]" />
                    </div>
                    <p className="text-[10px] font-black text-[#122C21]/40 uppercase tracking-[0.3em]">Closed-Loop Trade Lifecycle</p>
                    <div className="mt-4 h-1 w-20 bg-[#308667] mx-auto opacity-30"></div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CALL TO ACTION ================= */}
      <section className="relative bg-[#387663] pt-40 pb-40 text-center overflow-hidden">
        
        {/* LOCAL IMAGE PATTERN */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ 
            backgroundImage: `url(${bgPattern})`,
            backgroundSize: '150px 150px',
            backgroundRepeat: 'repeat'
          }}
        />

         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#308667] to-transparent"></div>
         
         <div className="container mx-auto px-6 relative z-10">
            <h4 className="text-4xl md:text-7xl font-black text-[#F9F2D6] uppercase tracking-tighter mb-10">
                Ready for <span className="text-[#308667]">Ethiopia?</span>
            </h4>
            <Link to="/contact">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#F9F2D6] text-[#122C21] px-16 py-6 rounded-full font-black uppercase tracking-[0.3em] text-xs shadow-2xl hover:bg-[#308667] hover:text-white transition-all"
                >
                    Contact Strategy Team
                </motion.button>
            </Link>
         </div>
      </section>
    </div>
  );
};

export default ServicesIndex;