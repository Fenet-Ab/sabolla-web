import * as React from 'react';
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";
// Updated Icons for better relevance
import {
  FaTrophy,     // For Awards
  FaHandshake,  // For Partners
  FaFileContract, // For Tenders
  FaHistory,    // For Experience
  FaTruckLoading // For Shipments
} from "react-icons/fa";

import GlobalFootprint from "../components/sections/GlobalFootprint";
import PartnersShowcase from "../components/partners/PartnersShowcase";
import { PARTNERS } from "../data/partners";
import { LOCAL_PARTNERS } from "../data/localPartners";
import TestimonialsSection from "../components/sections/TestimonialsSection";

/**
 * Animated Counter Component for Milestones
 */
const Counter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  React.useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalFrames = duration * 60;
      const increment = end / totalFrames;
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);
  return <span ref={ref}>{count}</span>;
};

const Home: React.FC = () => {
  const dynamicTexts = ["Gateway", "Trade Representation", "Market Solution", "Trade Pathway"];
  const [textIndex, setTextIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => setTextIndex((prev) => (prev + 1) % dynamicTexts.length), 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full overflow-x-hidden font-['Montserrat'] font-medium text-[#09140F] bg-[#FCFAF2]">

      {/* ================= HERO SECTION (FIXED: CENTERED & NO SHADOWS) ================= */}
      <section className="relative h-screen min-h-[700px] flex flex-col items-center justify-center text-[#F9F2D6] overflow-hidden pt-20">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80')",
            filter: "blur(8px) brightness(0.65)",
          }}
        />

        {/* Smoothed Gradient for better image visibility and transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1A13]/80 via-transparent to-[#FCFAF2]" />

        <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-black leading-[1.1] tracking-tighter uppercase text-white">
            <span className="block mb-2">Your</span>
            <div className="relative h-[1.2em] flex justify-center items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={dynamicTexts[textIndex]}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "circOut" }}
                  className="text-[#4adea2] absolute whitespace-nowrap"
                >
                  {dynamicTexts[textIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
            <span className="block text-2xl md:text-4xl lg:text-5xl mt-6 font-bold tracking-widest opacity-90">
              to Ethiopia’s Market
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link to="/services" className="group relative px-12 py-5 rounded-full bg-[#308667] text-white font-black text-[12px] uppercase tracking-widest overflow-hidden transition-all">
              <span className="relative z-10">Expand Your Reach</span>
              <div className="absolute inset-0 bg-[#0B1A13] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
            <Link to="/contact" className="px-12 py-5 rounded-full border-2 border-white text-white font-black text-[12px] uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              Consult an Expert
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= MILESTONES SECTION ================= */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black text-[#308667] uppercase tracking-[0.4em]">Proven Track Record</span>
            <h3 className="text-4xl md:text-5xl font-black text-[#0B1A13] mt-2 uppercase">Milestones of Excellence</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <motion.div
              whileHover={{ y: -10 }}
              className="md:col-span-7 bg-[#0B1A13] rounded-[2.5rem] p-12 relative overflow-hidden group border border-[#308667]/20 shadow-2xl min-h-[400px] flex flex-col justify-center"
            >
              <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
                <FaTrophy size={180} className="text-[#308667]" />
              </div>
              <div className="relative z-10">
                <div className="bg-[#308667] w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#308667]/20">
                  <FaTrophy size={32} className="text-white" />
                </div>
                <h4 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6 uppercase">
                  Winner of <br /><span className="text-[#308667]">Kalmar's 2016</span> <br />Global Award
                </h4>
                <p className="text-white/60 text-lg max-w-md leading-relaxed">
                  Recognized for unparalleled operational excellence and strategic market growth within the East African heavy machinery sector.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="md:col-span-5 bg-[#308667] rounded-[2.5rem] p-12 flex flex-col justify-between items-center text-center text-white relative overflow-hidden shadow-2xl"
            >
              <div className="relative z-10 mt-8">
                <FaHandshake size={64} className="mx-auto mb-6 opacity-80" />
                <span className="text-8xl font-black block tracking-tighter mb-4">
                  <Counter value={100} />+
                </span>
                <p className="text-xl font-black uppercase tracking-[0.2em] opacity-90">Global Industrial Partners</p>
              </div>
              <div className="w-full h-1 bg-white/20 mt-8" />
              <p className="mt-4 text-white/70 text-sm">Forging links with the world's most trusted manufacturers.</p>
            </motion.div>

            {[
              { label: "Active Tenders", val: 500, icon: <FaFileContract />, color: "bg-white text-[#0B1A13] border-gray-100" },
              { label: "Years Experience", val: 20, icon: <FaHistory />, color: "bg-[#F9F2D6] text-[#0B1A13] border-transparent" },
              { label: "Shipments Logged", val: 150, icon: <FaTruckLoading />, color: "bg-[#122C21] text-white border-transparent" }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className={`md:col-span-4 rounded-[2rem] p-10 flex flex-col items-center justify-center shadow-lg border ${item.color}`}
              >
                <div className="mb-4 text-3xl opacity-80">{item.icon}</div>
                <span className="text-5xl font-black mb-2 tracking-tighter"><Counter value={item.val} />+</span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60 text-center">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="relative py-24 bg-[#FCFAF2] overflow-hidden border-y border-black/5">
        <div className="relative container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
              <h2 className="text-5xl font-black text-[#122C21] uppercase tracking-tighter">
                Who <span className="text-[#308667]">We Are</span>
              </h2>
              <div className="w-20 h-2 bg-[#308667] mt-4" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-6">
              <p className="text-xl text-[#122C21] font-bold leading-snug">
                SABOLLA INTERNATIONAL TRADING PLC is the premier bridge between global technology and the Ethiopian market.
              </p>
              <p className="text-lg text-[#122C21]/80 leading-relaxed font-medium">
                We simplify the complexities of East African trade through localized expertise, logistics mastery, and a relentless commitment to our partners' success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <GlobalFootprint />

      {/* ================= PARTNERS SECTION ================= */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-[#122C21] mb-4 uppercase tracking-tighter">
              Strategic <span className="text-[#308667]">Partners</span>
            </h2>
            <div className="w-16 h-1 bg-[#308667] mx-auto mb-6" />
          </div>
          <div className="space-y-32">
            <div className="relative">
              <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar cursor-grab">
                <PartnersShowcase partners={PARTNERS} variant="scrollable" />
              </div>
            </div>
            <div className="relative">
              <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar">
                <PartnersShowcase partners={LOCAL_PARTNERS} variant="scrollable" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* ================= FINAL CTA ================= */}
      <section className="relative py-32 text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-fixed bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1920')" }} />
        <div className="absolute inset-0 bg-[#0B1A13]/80" />
        <div className="relative z-10 container mx-auto px-6 max-w-4xl text-center">
          <h3 className="text-4xl md:text-6xl font-black mb-10 leading-tight uppercase">Ready to Expand <br /> <span className="text-[#4adea2]">Into Ethiopia?</span></h3>
          <Link to="/contact" className="inline-block bg-[#4adea2] text-[#0B1A13] font-black py-5 px-12 rounded-full text-[12px] uppercase tracking-widest hover:bg-white transition-all shadow-2xl">
            Talk to our Strategists
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;