import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import PartnersShowcase from "../components/partners/PartnersShowcase";
import TestimonialsSection from "../components/sections/TestimonialsSection";

// Full data imports from your files
import { PARTNERS } from "../data/partners";
import { LOCAL_PARTNERS } from "../data/localPartners";

const PartnersPage: React.FC = () => {
  return (
    <div className="bg-[#F9F2D6] min-h-screen font-['Montserrat']">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#122C21] pt-48 pb-32 overflow-hidden">
        {/* Subtle Brand Pattern */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ backgroundImage: `url('/pattern.png')`, backgroundSize: '400px' }} 
        />
        
        <div className="container mx-auto px-6 relative z-10 max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-5 py-2 border border-[#308667] rounded-full mb-8"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#308667]">
              Global Connectivity
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-9xl font-black text-[#F9F2D6] uppercase tracking-tighter leading-[0.85] mb-8"
          >
            Strategic <br/> <span className="text-[#308667]">Synergy</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-2xl text-[#F9F2D6]/70 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            We represent the world's most innovative manufacturers, ensuring Ethiopia has 
            seamless access to mission-critical technologies and industrial solutions.
          </motion.p>
        </div>
      </section>

      {/* ================= PARTNERS SHOWCASE ================= */}
      <section className="relative py-32 bg-white rounded-t-[5rem] -mt-12 z-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-[#122C21] uppercase tracking-tighter mb-4">
              Our Trusted Partners
            </h2>
            <div className="w-24 h-2 bg-[#308667] mx-auto mb-8 rounded-full" />
            <p className="text-[#387663] max-w-2xl mx-auto text-lg font-medium">
              A curated network of international leaders and local stakeholders driving 
              national progress across aviation, safety, and infrastructure.
            </p>
          </div>

          {/* International Partners Section */}
          <section className="mb-32">
            <div className="flex items-center gap-6 mb-12">
              <div className="h-px flex-1 bg-slate-100" />
              <h3 className="text-sm font-black text-[#122C21] uppercase tracking-[0.4em] whitespace-nowrap">
                International Suppliers
              </h3>
              <div className="h-px flex-1 bg-slate-100" />
            </div>
            <PartnersShowcase partners={PARTNERS} />
          </section>

          {/* Local & Government Partners Section */}
          <section>
            <div className="flex items-center gap-6 mb-12">
              <div className="h-px flex-1 bg-slate-100" />
              <h3 className="text-sm font-black text-[#122C21] uppercase tracking-[0.4em] whitespace-nowrap">
                Local & Government Network
              </h3>
              <div className="h-px flex-1 bg-slate-100" />
            </div>
            <PartnersShowcase partners={LOCAL_PARTNERS} />
          </section>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-[#F9F2D6]">
        <TestimonialsSection />
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="bg-[#122C21] rounded-[4rem] p-12 md:p-24 text-center shadow-3xl relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-15 pointer-events-none" 
                 style={{ backgroundImage: `url('/pattern.png')`, backgroundSize: '300px' }} />
            
            <h3 className="text-4xl md:text-6xl font-black text-[#F9F2D6] uppercase mb-10 leading-none tracking-tighter relative z-10">
              Ready to Expand <br/> Together?
            </h3>
            <Link to="/contact">
              <button className="bg-[#308667] text-white px-14 py-6 rounded-full font-black uppercase tracking-[0.2em] text-sm hover:bg-[#F9F2D6] hover:text-[#122C21] transition-all relative z-10 shadow-2xl flex items-center gap-4 mx-auto">
                Partner With Us <FaArrowRight />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;