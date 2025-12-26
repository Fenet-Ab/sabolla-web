import * as React from 'react';
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaTh, FaTimes, FaPlus } from "react-icons/fa";
import { type Partner } from "../../data/partners";

interface PartnersShowcaseProps {
  partners: Partner[];
}

const PartnersShowcase: React.FC<PartnersShowcaseProps> = ({ partners }) => {
  const [activePartner, setActivePartner] = useState<Partner | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isExpanded) return;
    const container = scrollRef.current;
    if (!container) return;

    const scrollInterval = setInterval(() => {
      if (!isPaused) {
        container.scrollLeft += 1;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
    }, 30);

    return () => clearInterval(scrollInterval);
  }, [isPaused, isExpanded]);

  const manualScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      setIsPaused(true);
      const scrollAmount = 450;
      const target = direction === "left"
        ? scrollRef.current.scrollLeft - scrollAmount
        : scrollRef.current.scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({ left: target, behavior: "smooth" });
      setTimeout(() => setIsPaused(false), 2000);
    }
  };

  return (
    <div className="relative w-full py-10 font-['Montserrat']">

      {/* HEADER SECTION */}
      <div className="flex justify-between items-end mb-12 px-4">
        <div>
          <h2 className="text-[10px] font-black text-[#308667] uppercase tracking-[0.5em] mb-2">Network Protocol</h2>
          <p className="text-3xl font-black text-[#122C21] uppercase tracking-tighter">Strategic Partners</p>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#122C21] hover:text-[#308667] transition-all border-b-2 border-[#308667]/20 pb-1"
        >
          {isExpanded ? <><FaTimes /> Close Index</> : <><FaTh /> View All</>}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {!isExpanded ? (
          /* ================= CAROUSEL MODE (With Grayscale Effect) ================= */
          <motion.div key="carousel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative group">
            <button onClick={() => manualScroll("left")} className="absolute left-0 top-1/2 -translate-y-1/2 z-40 bg-white p-5 rounded-full opacity-0 group-hover:opacity-100 transition-all text-[#122C21] hover:bg-[#308667] hover:text-white border border-slate-100"><FaChevronLeft size={20} /></button>
            <button onClick={() => manualScroll("right")} className="absolute right-0 top-1/2 -translate-y-1/2 z-40 bg-white p-5 rounded-full opacity-0 group-hover:opacity-100 transition-all text-[#122C21] hover:bg-[#308667] hover:text-white border border-slate-100"><FaChevronRight size={20} /></button>

            <div ref={scrollRef} className="flex gap-8 overflow-x-hidden whitespace-nowrap scroll-smooth px-4 no-scrollbar" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
              {[...partners, ...partners].map((partner, i) => (
                <PartnerCard key={i} partner={partner} onClick={() => setActivePartner(partner)} />
              ))}
            </div>
          </motion.div>
        ) : (
          /* ================= GRID MODE (Full Color, No Grayscale) ================= */
          <motion.div key="grid" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {partners.map((partner, i) => (
                <PartnerCard key={i} partner={partner} onClick={() => setActivePartner(partner)} isGrid />
              ))}
            </div>
            <div className="flex justify-center mt-16">
              <button
                onClick={() => setIsExpanded(false)}
                className="bg-[#122C21] text-[#F9F2D6] px-10 py-4 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-[#308667] transition-all"
              >
                Return to Carousel
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {activePartner && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActivePartner(null)} className="absolute inset-0 bg-[#09140F]/90 backdrop-blur-md" />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              className="bg-[#F9F2D6] max-w-md w-full rounded-[2.5rem] p-8 md:p-12 relative text-center border-t-[10px] border-[#308667] overflow-y-auto max-h-[90vh]"
            >
              <button onClick={() => setActivePartner(null)} className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center bg-[#122C21]/10 hover:bg-[#122C21] hover:text-white rounded-full transition-all z-50">
                <FaTimes size={14} />
              </button>

              <div className="flex justify-center mb-6">
                {React.isValidElement(activePartner.icon) ?
                  React.cloneElement(activePartner.icon as React.ReactElement, { style: { width: '100px', height: '100px', objectFit: 'contain' } }) :
                  <span className="text-6xl">{activePartner.icon}</span>
                }
              </div>

              <h3 className="text-xl font-black text-[#122C21] uppercase mb-4 tracking-tighter">{activePartner.name}</h3>
              <p className="text-[#122C21]/80 font-bold mb-8 leading-relaxed italic text-sm px-2">
                "{activePartner.description}"
              </p>

              <div className="flex flex-col items-center gap-4">
                {activePartner.website && (
                  <a href={activePartner.website} target="_blank" rel="noreferrer"
                    className="bg-[#122C21] text-white px-8 py-3.5 rounded-xl font-black uppercase text-[9px] tracking-[0.2em] inline-flex items-center gap-3 hover:bg-[#308667] transition-all w-full justify-center">
                    Visit Portal <FaExternalLinkAlt />
                  </a>
                )}
                <button onClick={() => setActivePartner(null)} className="text-[#122C21]/60 font-black uppercase tracking-[0.3em] text-[8px] hover:text-[#122C21] transition-colors pt-2 underline underline-offset-4">
                  Close Window
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PartnerCard = ({ partner, onClick, isGrid = false }: { partner: Partner, onClick: () => void, isGrid?: boolean }) => (
  <motion.div
    onClick={onClick}
    whileHover={{ y: -5, borderColor: '#308667' }}
    className={`${isGrid ? 'w-full' : 'min-w-[280px]'} bg-white rounded-[2rem] p-8 flex flex-col items-center justify-center text-center border border-[#122C21]/15 cursor-pointer transition-all group snap-center whitespace-normal`}
  >
    <div className="mb-4 h-16 flex items-center justify-center">
      {typeof partner.icon === "string" ? (
        <span className="text-4xl block">{partner.icon}</span>
      ) : (
        React.isValidElement(partner.icon) ?
          React.cloneElement(partner.icon as React.ReactElement, {
            style: { width: '70px', height: '70px', objectFit: 'contain' },
            // CONDITION: In Grid Mode, show full color (grayscale-0 and opacity-100) instantly
            className: `transition-all duration-500 ${isGrid ? 'grayscale-0 opacity-100' : 'grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100'}`
          }) : "🤝"
      )}
    </div>

    <h3 className={`font-black text-[9px] uppercase tracking-[0.2em] mb-4 transition-all ${isGrid ? 'text-[#122C21]' : 'text-[#122C21]/80 group-hover:text-[#122C21]'}`}>
      {partner.name}
    </h3>

    <div className={`flex items-center gap-2 text-[7px] font-black uppercase tracking-[0.3em] px-3 py-1.5 rounded-full border transition-all duration-300 ${isGrid ? 'bg-[#308667] text-white border-transparent' : 'text-[#308667] bg-[#308667]/5 border-[#308667]/10 group-hover:bg-[#308667] group-hover:text-white'}`}>
      <FaPlus size={6} /> View Profile
    </div>
  </motion.div>
);

export default PartnersShowcase;