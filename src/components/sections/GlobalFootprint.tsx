import * as React from 'react';
import { motion } from "framer-motion";

const locations = [
  { name: "Ethiopia", top: "50%", left: "59%" },
  { name: "Germany", top: "29%", left: "50%" },
  { name: "France", top: "31%", left: "48%" },
  { name: "England", top: "27%", left: "47%" },
  { name: "Poland", top: "28%", left: "53%" },
  { name: "Spain", top: "34%", left: "47%" },
  { name: "Austria", top: "33%", left: "51%" },
  { name: "UAE", top: "43%", left: "60.5%" },
  { name: "India", top: "45%", left: "70%" },
  { name: "China", top: "35%", left: "72%" },
  { name: "USA", top: "34%", left: "18%" },
  { name: "Nigeria", top: "51%", left: "50%" },
];

const ethiopia = locations.find(l => l.name === "Ethiopia")!;

const routes = locations
  .filter(l => l.name !== "Ethiopia")
  .map(l => ({
    // We use the exact percentage values to define the line paths
    from: { x: parseFloat(ethiopia.left), y: parseFloat(ethiopia.top) },
    to: { x: parseFloat(l.left), y: parseFloat(l.top) },
  }));

const GlobalFootprint: React.FC = () => {
  return (
    <section className="py-24 bg-[#F9F2D6] overflow-hidden">
      <div className="container mx-auto px-6 text-center max-w-7xl">
        <h2 className="text-5xl md:text-7xl font-black text-[#122C21] mb-6 uppercase tracking-tighter">
          Our Global <span className="text-[#308667]">Footprint</span>
        </h2>
        <div className="w-20 h-1.5 bg-[#308667] mx-auto mb-16" />

        <div className="relative w-full">
          
          {/* WORLD MAP */}
          <motion.img
            src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
            alt="World Map"
            className="w-full h-auto select-none opacity-30 block"
            style={{ 
              filter: "invert(13%) sepia(21%) saturate(1008%) hue-rotate(110deg) brightness(95%) contrast(92%)",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
          />

          {/* RECALIBRATED SVG OVERLAY */}
          <svg
            // 1. Set to 100 100 to match HTML percentage logic (0% to 100%)
            viewBox="0 0 100 100"
            // 2. preserveAspectRatio="none" is the "secret sauce" 
            // It forces the SVG grid to stretch exactly to the image boundaries
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none z-20"
          >
            {routes.map((r, i) => (
              <motion.path
                key={i}
                d={`
                  M ${r.from.x} ${r.from.y}
                  Q ${(r.from.x + r.to.x) / 2}
                    ${Math.min(r.from.y, r.to.y) - 10}
                    ${r.to.x} ${r.to.y}
                `}
                fill="none"
                stroke="#308667"
                strokeWidth="0.7" 
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 2, delay: i * 0.1 }}
              />
            ))}
          </svg>

          {/* PIN LAYER */}
          {locations.map(loc => (
            <div
              key={loc.name}
              className="absolute group z-30"
              style={{ 
                // Using the exact same percentage values
                top: loc.top, 
                left: loc.left,
                // translate(-50%, -50%) aligns the CIRCLE CENTER with the line end
                transform: 'translate(-50%, -50%)' 
              }}
            >
              <div className="flex flex-col items-center justify-center relative">
                <div className="absolute w-8 h-8 bg-[#308667]/30 rounded-full animate-ping pointer-events-none" />

                <div className={`rounded-full border-2 border-white shadow-xl transition-transform duration-300 group-hover:scale-150
                  ${loc.name === "Ethiopia" ? "bg-[#308667] w-5 h-5" : "bg-[#122C21] w-3.5 h-3.5"}`} 
                />

                <div className="absolute top-full mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#F9F2D6] bg-[#122C21] px-3 py-1.5 rounded-sm shadow-2xl whitespace-nowrap">
                    {loc.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-2xl mx-auto border-t border-[#122C21]/10 pt-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] font-black text-[#308667]">
            Global Trade Network
          </p>
        </div>
      </div>
    </section>
  );
};

export default GlobalFootprint;