import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaShieldAlt, FaTruck, FaCogs, FaHandshake, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// 1. IMPORT YOUR LOCAL ASSET
import bgPattern from "../assets/bg_pattern/image.png";

// --- DATA STRUCTURE (UNTOUCHED) ---
const PRODUCT_DATA: Record<string, any> = {
  "aviation": {
    name: "Aviation",
    desc: "Critical communication and navigation systems.",
    content: "We support the aviation sector with a comprehensive suite of critical systems including VHF AM base stations, communication and navigation spare parts, AMHS, AIM, and AIS systems. Each product is carefully sourced from trusted manufacturers, with detailed verification to ensure technical compliance with international aviation safety standards.",
    lifecycle: "Beyond procurement, we coordinate supplier engagement, manage import documentation, and oversee the certification process. We provide full lifecycle support, including installation guidance.",
    impact: "Our approach ensures that airports and air traffic control authorities receive reliable equipment that enhances safety and operational efficiency."
  },
  "military": {
    name: "Military",
    desc: "Advanced defense technologies.",
    content: "We deliver advanced technologies designed to meet the exacting standards of defense and military operations. Our services include sourcing verified equipment from specialized manufacturers and managing secure procurement workflows.",
    lifecycle: "Each process is structured to meet security requirements and operational confidentiality. Our support extends to logistics planning and documentation management.",
    impact: "We ensure reliability and mission-critical performance, allowing defense institutions to focus on strategic objectives."
  },
  "fire-disaster": {
    name: "Fire & Disaster Risk",
    desc: "Ready-to-deploy emergency-response equipment.",
    content: "Our category encompasses firefighting trucks, aerial ladder trucks, firefighting foam, and dry chemical powders. We manage technical assessment and delivery logistics to ensure fully functional equipment.",
    lifecycle: "Every item is vetted for quality and compliance with international standards. We provide operational support and technical training.",
    impact: "Our holistic approach helps fire departments respond effectively to crises, minimizing risks and safeguarding lives."
  },
  "safety-security": {
    name: "Safety & Security",
    desc: "Specialized protective gear.",
    content: "Our offerings include firefighting clothing, breathing apparatus, aluminized suits, and full diving suits. Each product undergoes strict verification for material quality.",
    lifecycle: "Our services include full logistics management, regulatory clearance, and after-sales support.",
    impact: "By ensuring access to gear that meets safety standards, we reduce workplace risks in hazardous conditions."
  },
  "agriculture": {
    name: "Agricultural Products",
    desc: "Post-harvest protection materials.",
    content: "We supply a wide array of inputs, including food-grade hermetic bags and jute bags. Our process emphasizes supplier verification and quality inspection.",
    lifecycle: "We provide technical guidance and collaboration with cooperatives to implement effective storage systems.",
    impact: "By supporting storage efficiency, we help strengthen supply chains and improve profitability for agricultural operations."
  },
  "water-sewerage": {
    name: "Water & Sewerage",
    desc: "Infrastructure for the water sector.",
    content: "We support the sector by supplying sewerage trucks, jetting trucks, water meters, and pumps. Our team manages sourcing and coordinates export/import procedures.",
    lifecycle: "We assist utilities in deploying solutions efficiently, providing operational guidance and maintaining quality standards.",
    impact: "Ensuring timely equipment delivery enables improved urban service delivery and sustainable water management."
  },
  "power-energy": {
    name: "Power & Energy",
    desc: "Electrical infrastructure components.",
    content: "We provide electric meters, generators, transformers, and network cables. Our support covers sourcing and specification verification.",
    lifecycle: "Our involvement extends to planning assistance and installation coordination to ensure efficiency in real-world operations.",
    impact: "By delivering reliable power solutions, we help clients implement scalable energy systems that drive growth."
  },
  "transportation": {
    name: "Transport & Storage",
    desc: "Logistics solutions and heavy machinery.",
    content: "Our solutions cover freight containers, reachstackers, forklifts, and specialized tires. We provide full supply-chain support.",
    lifecycle: "We advise clients on equipment suitability and integration to optimize warehouse operations.",
    impact: "By ensuring reliable supply, we help logistics companies maintain uninterrupted operations."
  }
};

const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const productKeys = Object.keys(PRODUCT_DATA);
  const currentIndex = productKeys.indexOf(slug || "aviation");
  const product = PRODUCT_DATA[slug || "aviation"] || PRODUCT_DATA["aviation"];

  const nextSlug = productKeys[(currentIndex + 1) % productKeys.length];
  const prevSlug = productKeys[(currentIndex - 1 + productKeys.length) % productKeys.length];

  return (
    <div className="bg-[#F9F2D6] min-h-screen font-['Montserrat'] selection:bg-[#308667] selection:text-white">
      
      {/* ================= HERO - MATCHES PRODUCT INDEX ================= */}
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

        <div className="container mx-auto px-6 relative z-10">
          <Link to="/products" className="group flex items-center gap-3 text-[#09140F] font-black uppercase tracking-[0.4em] text-[10px] mb-12 hover:text-[#F9F2D6] transition-all">
            <FaArrowLeft className="group-hover:-translate-x-2 transition-transform" />
            Back to Categories
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[#09140F] font-black uppercase tracking-[0.5em] text-xs mb-4 block">Sector Intelligence 0{currentIndex + 1}</span>
            <h1 className="text-5xl md:text-8xl font-black text-[#F9F2D6] uppercase leading-none tracking-tighter">
              {product.name} <br/>
              <span className="text-[#09140F]">Infrastructure</span>
            </h1>
          </motion.div>
        </div>

        {/* Diagonal Angle Cut */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-[#F9F2D6]" style={{ clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}></div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <div className="container mx-auto px-6 py-24 max-w-7xl relative -mt-32 z-20">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left Column: Storytelling */}
          <motion.div 
            className="lg:col-span-8 bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-[#122C21]/5"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4 mb-10">
                <div className="h-px flex-1 bg-[#122C21]/10"></div>
                <h2 className="text-xs font-black text-[#308667] uppercase tracking-[0.4em]">Operational Brief</h2>
                <div className="h-px flex-1 bg-[#122C21]/10"></div>
            </div>

            <p className="text-2xl text-[#122C21] leading-relaxed font-bold mb-16 tracking-tight">
              {product.content}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
               <div className="p-10 bg-[#F9F2D6] rounded-[2.5rem] border-t-8 border-[#308667]">
                  <h4 className="text-[10px] font-black text-[#308667] uppercase tracking-[0.3em] mb-6">Lifecycle Integration</h4>
                  <p className="text-[#122C21] font-bold leading-relaxed text-sm opacity-80 italic">"{product.lifecycle}"</p>
               </div>
               <div className="p-10 bg-[#122C21] rounded-[2.5rem] text-[#F9F2D6] shadow-xl">
                  <h4 className="text-[10px] font-black text-[#308667] uppercase tracking-[0.3em] mb-6">Strategic Impact</h4>
                  <p className="font-medium leading-relaxed text-sm opacity-90">{product.impact}</p>
               </div>
            </div>
          </motion.div>

          {/* Right Column: Technical Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="bg-[#122C21] text-[#F9F2D6] p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity" 
                     style={{ backgroundImage: `url(${bgPattern})`, backgroundSize: '60px 60px' }} />
                
                <h3 className="text-lg font-black uppercase tracking-widest mb-10 border-b border-[#F9F2D6]/10 pb-4 relative z-10">Compliance Framework</h3>
                <div className="space-y-8 relative z-10">
                    {[
                    { icon: <FaShieldAlt />, t: "Verification", d: "Strict safety certification checks." },
                    { icon: <FaTruck />, t: "Logistics", d: "Coordinated global supply chains." },
                    { icon: <FaCogs />, t: "Maintenance", d: "Technical operational support." },
                    { icon: <FaHandshake />, t: "Partnership", d: "Direct manufacturer access." }
                    ].map((item, i) => (
                    <div key={i} className="flex gap-5 group/item">
                        <div className="text-[#308667] text-2xl group-hover/item:scale-125 transition-transform">{item.icon}</div>
                        <div>
                        <h4 className="font-black text-[10px] uppercase tracking-widest mb-1">{item.t}</h4>
                        <p className="text-[#F9F2D6]/40 text-[10px] font-bold leading-tight">{item.d}</p>
                        </div>
                    </div>
                    ))}
                </div>
                
                <Link to="/contact">
                    <button className="w-full mt-12 py-5 bg-[#308667] text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-[#122C21] transition-all shadow-lg relative z-10">
                    Request Consultation
                    </button>
                </Link>
              </div>

              {/* Navigation Pager */}
              <div className="grid grid-cols-2 gap-4">
                 <Link to={`/products/${prevSlug}`} className="bg-white p-6 rounded-[2rem] border border-[#122C21]/5 hover:bg-[#F9F2D6] transition-all text-center">
                    <span className="text-[10px] font-black text-[#122C21]/30 uppercase block mb-1">Previous</span>
                    <span className="text-[10px] font-black text-[#308667] uppercase">← Sector</span>
                 </Link>
                 <Link to={`/products/${nextSlug}`} className="bg-white p-6 rounded-[2rem] border border-[#122C21]/5 hover:bg-[#F9F2D6] transition-all text-center">
                    <span className="text-[10px] font-black text-[#122C21]/30 uppercase block mb-1">Next</span>
                    <span className="text-[10px] font-black text-[#308667] uppercase">Sector →</span>
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CATEGORY QUICK-SWITCHER ================= */}
      <section className="py-24 bg-[#122C21]/5 border-t border-[#122C21]/5">
         <div className="container mx-auto px-6">
            <h5 className="text-[10px] font-black text-[#308667] uppercase tracking-[0.5em] text-center mb-12">Browse Other Commodities</h5>
            <div className="flex flex-wrap justify-center gap-4">
                {productKeys.map((key) => (
                    <Link 
                        key={key} 
                        to={`/products/${key}`}
                        className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border-2
                            ${key === slug 
                                ? 'bg-[#122C21] text-[#F9F2D6] border-[#122C21]' 
                                : 'bg-transparent text-[#122C21]/40 border-[#122C21]/10 hover:border-[#122C21] hover:text-[#122C21]'}
                        `}
                    >
                        {PRODUCT_DATA[key].name}
                    </Link>
                ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default ProductDetail;