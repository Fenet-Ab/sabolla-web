import * as React from 'react';
import { motion, type Variants } from 'framer-motion';

interface AchievementProps {
  value: string;
  label: string;
  delay: number;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 20 
    }
  },
};

const AchievementCard: React.FC<AchievementProps> = ({ value, label, delay }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
      className="relative group bg-white p-10 rounded-[2.5rem] shadow-[0_15px_50px_-15px_rgba(18,44,33,0.1)] border border-[#122C21]/5 overflow-hidden transition-all duration-500 hover:bg-[#122C21] hover:shadow-[0_30px_60px_-10px_rgba(48,134,103,0.3)]"
    >
      {/* Vertical Stability Marker */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-[#308667] rounded-r-full transition-all duration-500 group-hover:h-full group-hover:rounded-none" />

      {/* Decorative Brand Pattern (Very subtle) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.07] transition-opacity" 
           style={{ backgroundImage: `url('/pattern.png')`, backgroundSize: '200px' }} />

      <div className="relative z-10">
        <h3 className="text-5xl md:text-6xl font-black text-[#122C21] mb-2 tracking-tighter group-hover:text-[#F9F2D6] transition-colors duration-500">
          {value}
        </h3>

        <div className="w-10 h-1 bg-[#308667] mb-4 transition-all duration-500 group-hover:w-full group-hover:bg-[#308667]/30" />

        <p className="text-[#308667] font-black uppercase tracking-[0.3em] text-[10px] group-hover:text-[#F9F2D6]/80 transition-colors duration-500">
          {label}
        </p>
      </div>
    </motion.div>
  );
};

export default AchievementCard;