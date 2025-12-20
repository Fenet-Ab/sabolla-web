import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

// 1. IMPORT YOUR LOCAL ASSET
import bgPattern from "../assets/bg_pattern/image.png";

const PRODUCT_CATEGORIES = [
  { name: "Aviation", slug: "aviation", desc: "Critical communication, navigation, and information-management systems." },
  { name: "Military", slug: "military", desc: "Advanced defense technologies meeting exacting military standards." },
  { name: "Fire & Disaster Risk", slug: "fire-disaster", desc: "Extensive range of firefighting and emergency-response equipment." },
  { name: "Safety & Security", slug: "safety-security", desc: "Specialized protective gear for high-risk and industrial environments." },
  { name: "Agricultural Products", slug: "agriculture", desc: "Storage, post-harvest protection, and essential implements." },
  { name: "Water & Sewerage", slug: "water-sewerage", desc: "Infrastructure equipment for urban service delivery and sanitation." },
  { name: "Power & Energy", slug: "power-energy", desc: "Electrical infrastructure components for scalable energy systems." },
  { name: "Transportation & Storage", slug: "transportation", desc: "Heavy machinery, specialized tires, and storage solutions." }
];

const ProductsIndex: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F2D6] font-['Montserrat'] selection:bg-[#308667] selection:text-white">

      {/* ================= HERO SECTION (MATCHES SERVICES DESIGN) ================= */}
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
              Global Procurement
            </span>
            <h1 className="text-6xl md:text-9xl font-black text-[#F9F2D6] mb-8 uppercase tracking-tighter leading-none">
              Managed <br /> <span className="text-[#09140F]">Commodities</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#F9F2D6]/50 max-w-4xl mx-auto font-bold italic border-b-2 border-[#308667] pb-12 inline-block">
              "Facilitating global excellence across Ethiopia's eight primary industrial pillars."
            </p>
          </motion.div>
        </div>

        {/* Diagonal Angle Cut */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-[#F9F2D6]" style={{ clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}></div>
      </section>

      {/* ================= CATEGORY GRID ================= */}
      <section className="pb-32 -mt-32 container mx-auto px-6 max-w-7xl relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCT_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white p-10 rounded-[3rem] shadow-[0_30px_60px_rgba(18,44,33,0.08)] border border-[#122C21]/5 flex flex-col h-full group hover:bg-[#122C21] transition-all duration-500 min-h-[400px]"
            >
              <div className="flex justify-between items-start mb-10">
                <span className="text-[10px] font-black text-[#308667] uppercase tracking-widest bg-[#308667]/5 px-4 py-1.5 rounded-full group-hover:bg-[#308667]/20 transition-colors">
                  Pillar 0{idx + 1}
                </span>
              </div>
              
              <h2 className="text-2xl font-black text-[#122C21] mb-6 uppercase tracking-tighter leading-tight group-hover:text-[#F9F2D6] transition-colors">
                {cat.name}
              </h2>
              
              <p className="text-[#122C21]/60 mb-10 grow font-bold text-sm leading-relaxed group-hover:text-[#F9F2D6]/50 transition-colors">
                {cat.desc}
              </p>
              
              <Link
                to={`/products/${cat.slug}`}
                className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-[#308667] group-hover:text-[#F9F2D6] transition-all"
              >
                Category Intelligence <FaArrowRight className="ml-3 group-hover:translate-x-3 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= QUALITY ASSURANCE SECTION ================= */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
                <span className="text-[10px] font-black text-[#308667] uppercase tracking-[0.4em] mb-4 block">Asset Protection</span>
                <h3 className="text-4xl md:text-6xl font-black text-[#122C21] uppercase tracking-tighter mb-8 leading-none">
                    Vetted <br/> <span className="text-[#308667]">Inventory</span>
                </h3>
                <p className="text-[#122C21]/70 text-lg font-bold mb-10 leading-relaxed">
                    Every commodity managed through our protocol undergoes rigorous verification to meet Ethiopian regulatory standards and international ISO benchmarks.
                </p>
                
                <div className="space-y-6">
                    {["Compliance Auditing", "Logistics Supervision", "Warranty Lifecycle Management"].map((item, i) => (
                        <div key={i} className="flex items-center gap-4">
                            <div className="w-6 h-6 rounded-full bg-[#308667] flex items-center justify-center text-white text-[10px]">✓</div>
                            <span className="text-[#122C21] font-black uppercase tracking-widest text-[10px]">{item}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="lg:w-1/2 bg-[#F9F2D6] p-12 rounded-[4rem] border border-[#122C21]/5 shadow-inner flex items-center justify-center">
                <div className="text-center py-20">
                    <div className="w-20 h-1 bg-[#308667] mx-auto mb-6 opacity-30"></div>
                    <p className="text-[10px] font-black text-[#122C21]/40 uppercase tracking-[0.5em]">Inventory Blueprint v2.0</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CALL TO ACTION ================= */}
      <section className="relative bg-[#387663] pt-40 pb-40 text-center overflow-hidden">
        
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
                Inquire <span className="text-[#09140F]">Assets?</span>
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

export default ProductsIndex;