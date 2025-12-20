import * as React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import GlobalFootprint from "../components/sections/GlobalFootprint";
import PartnersShowcase from "../components/partners/PartnersShowcase";
import { PARTNERS } from "../data/partners";
import { LOCAL_PARTNERS } from "../data/localPartners";
import TestimonialsSection from "../components/sections/TestimonialsSection";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Home: React.FC = () => {
  return (
    <div className="w-full overflow-x-hidden font-['Montserrat'] font-medium text-[#09140F] bg-[#F9F2D6]">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center text-[#F9F2D6] overflow-hidden py-50">
        {/* Background Image with optimized scale */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        
        {/* Elite Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#122C21]/90 via-[#122C21]/70 to-[#122C21]" /> 
        
        {/* Geometric Background Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#308667]/5 skew-x-[-15deg] translate-x-1/4" />

        <div className="relative z-10 container mx-auto px-6 max-w-7xl text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1 border border-[#308667] rounded-full mb-8"
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#308667] font-black">
              Sabolla International Trading PLC
            </span>
          </motion.div>

          <h1 className="text-6xl md:text-9xl font-black mb-10 leading-[0.85] tracking-tighter">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="block"
            >
              Your Gateway to
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[#308667]"
            >
              Ethiopia’s Market
            </motion.span>
          </h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-[#F9F2D6]/70 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            SABOLLA INTERNATIONAL TRADING PLC connects international businesses with Ethiopia’s
            growing market. With over 20 years of expertise in trade representation, we provide
            comprehensive solutions including advisory services, market insights, and supply chain management.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              to="/services"
              className="group relative overflow-hidden bg-[#308667] text-[#F9F2D6] font-black py-5 px-12 rounded-full transition-all duration-300 hover:shadow-[0_20px_40px_rgba(48,134,103,0.4)]"
            >
              <span className="relative z-10 text-xs uppercase tracking-[0.2em]">Explore Our Services</span>
              <div className="absolute inset-0 bg-[#122C21] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>

            <Link
              to="/contact"
              className="text-xs font-black tracking-[0.2em] uppercase py-5 px-12 rounded-full border-2 border-[#F9F2D6]/20 hover:border-[#F9F2D6] hover:bg-[#F9F2D6] hover:text-[#122C21] transition-all duration-300"
            >
              Talk to an Expert
            </Link>
          </motion.div>

          {/* ================= HERO STATS ================= */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
            {[
              { value: "20+", label: "Years Experience" },
              { value: "100+", label: "Intl. Suppliers" },
              { value: "150+", label: "Shipments" },
              { value: "50+", label: "Categories" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="group p-8 rounded-[2rem] bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="text-4xl font-black text-[#F9F2D6] mb-2 group-hover:text-[#308667] transition-colors">{stat.value}</div>
                <div className="text-[9px] uppercase tracking-[0.3em] text-[#308667] font-black leading-none">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHO WE ARE (INTRO) ================= */}
      <section className="relative py-32 bg-[#F9F2D6] overflow-hidden">
        <div className="absolute left-0 top-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('/pattern.png')", backgroundSize: '400px' }} />
        
        <div className="relative container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <h2 className="text-5xl md:text-7xl font-black text-[#122C21] leading-[0.9] uppercase tracking-tighter mb-8">
                Who <br/> <span className="text-[#308667]">We Are</span>
              </h2>
              <div className="w-20 h-2 bg-[#308667] mb-8" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-xl text-[#122C21] leading-relaxed font-bold">
                SABOLLA INTERNATIONAL TRADING PLC is a trusted bridge between international suppliers
                and Ethiopia’s rapidly growing marketplace.
              </p>
              <p className="text-lg text-[#122C21]/70 leading-relaxed">
                We deliver market entry strategies, regulatory guidance, sourcing, logistics coordination, 
                and long-term partnership development. Our mission is to facilitate seamless trade 
                that empowers both our global partners and the Ethiopian economy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <GlobalFootprint />

      {/* ================= PARTNERS SECTION ================= */}
      <section className="relative py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black text-[#122C21] uppercase tracking-tighter mb-6">
              Trusted <span className="text-[#308667]">Partners</span>
            </h2>
            <p className="text-lg text-[#122C21]/60 max-w-2xl mx-auto font-medium">
              We collaborate with globally recognized manufacturers and technology leaders
              to deliver premium solutions into Ethiopia.
            </p>
          </div>

          <div className="space-y-32">
            <div className="relative">
              <div className="absolute -left-10 top-0 text-[12rem] font-black text-[#122C21]/5 leading-none pointer-events-none">INTL</div>
              <h3 className="relative z-10 text-xs font-black text-[#308667] uppercase tracking-[0.5em] mb-12 text-center lg:text-left">
                International Partners
              </h3>
              <PartnersShowcase partners={PARTNERS} />
            </div>

            <div className="relative">
              <div className="absolute -right-10 top-0 text-[12rem] font-black text-[#122C21]/5 leading-none pointer-events-none text-right">LOCAL</div>
              <h3 className="relative z-10 text-xs font-black text-[#308667] uppercase tracking-[0.5em] mb-12 text-center lg:text-right">
                Local & Government Partners
              </h3>
              <PartnersShowcase partners={LOCAL_PARTNERS} />
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS WRAPPER ================= */}
      <section >
        <TestimonialsSection />
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative py-40 text-[#F9F2D6] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-fixed bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1920')" }}
        />
        <div className="absolute inset-0 bg-[#122C21]/90" />
        
        <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black mb-12 uppercase leading-[0.85] tracking-tighter"
          >
            Ready to Expand <br/> <span className="text-[#308667]">Into Ethiopia?</span>
          </motion.h3>

          <Link
            to="/contact"
            className="inline-block bg-[#F9F2D6] text-[#122C21] font-black py-6 px-16 rounded-full text-xs uppercase tracking-[0.3em] hover:bg-[#308667] hover:text-[#F9F2D6] transition-all duration-500 shadow-2xl"
          >
            Contact Our Strategists
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;