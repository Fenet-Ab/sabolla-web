import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaFileContract, FaArrowLeft } from 'react-icons/fa';

const mockContent = {
  privacy: {
    title: "Privacy Policy",
    subtitle: "Data Protection & Intelligence Security",
    body: "SABOLLA INTERNATIONAL TRADING PLC is committed to protecting the integrity and privacy of your corporate data. This policy outlines our rigorous handling of personal and business information collected via our digital infrastructure. We maintain a zero-sharing policy with third parties unless explicitly authorized by the client or mandated by the regulatory frameworks of the Federal Democratic Republic of Ethiopia."
  },
  terms: {
    title: "Terms and Conditions",
    subtitle: "Digital Usage & Engagement Framework",
    body: "These Terms and Conditions govern the engagement with the SABOLLA INTERNATIONAL TRADING PLC digital portal. By accessing this site, you acknowledge and agree to the professional engagement standards set herein. All content—including market insights, representative imagery, and technical code—is protected intellectual property of Sabolla International Trading PLC."
  }
};

const LegalPage: React.FC = () => {
  const { type } = useParams<{ type: 'privacy' | 'terms' }>();
  const pageType = type === 'privacy' ? 'privacy' : 'terms';
  const data = mockContent[pageType];

  return (
    <div className="bg-[#F9F2D6] min-h-screen pt-40 pb-24 font-['Montserrat']">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Navigation Back */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[#308667] font-black uppercase text-[10px] tracking-[0.2em] mb-8 hover:translate-x-[-5px] transition-transform"
        >
          <FaArrowLeft /> Back to Command Center
        </Link>

        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-[#122C21]/5 flex flex-col md:flex-row">
          
          {/* Sidebar Accent */}
          <div className="bg-[#122C21] w-full md:w-20 flex items-center justify-center py-8 md:py-0">
            <div className="md:-rotate-90 whitespace-nowrap">
              <span className="text-[#308667] font-black uppercase tracking-[0.5em] text-xs">
                SABOLLA LEGAL FRAMEWORK 2024
              </span>
            </div>
          </div>

          <div className="flex-1 p-10 md:p-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#F9F2D6] rounded-xl text-[#308667]">
                  {pageType === 'privacy' ? <FaShieldAlt size={24} /> : <FaFileContract size={24} />}
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-black text-[#122C21] uppercase tracking-tighter">
                    {data.title}
                  </h1>
                  <p className="text-[#308667] font-bold text-sm uppercase tracking-widest mt-1">
                    {data.subtitle}
                  </p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none">
                <p className="text-[#09140F] text-lg leading-relaxed font-medium mb-12 border-l-4 border-[#308667] pl-6 py-2">
                  {data.body}
                </p>

                <h2 className="text-xl font-black text-[#122C21] uppercase tracking-widest mt-12 mb-4">
                  1.0 Data Integrity & Security
                </h2>
                <p className="text-[#09140F]/70 font-medium leading-relaxed mb-8">
                  Sabolla utilizes advanced encryption and secure CMS protocols (Sanity) to ensure that 
                  all inquiries, tender documents, and communication logs are stored within a high-security environment. 
                  Access to this data is restricted to authorized personnel managing specific trade relationships.
                </p>

                <h2 className="text-xl font-black text-[#122C21] uppercase tracking-widest mt-12 mb-4">
                  2.0 Compliance with Ethiopian Law
                </h2>
                <p className="text-[#09140F]/70 font-medium leading-relaxed mb-8">
                  All operations, digital or physical, are conducted in full compliance with the commercial 
                  codes and data protection guidelines established by the Ethiopian Communications Authority 
                  and the Ministry of Trade and Regional Integration.
                </p>

                <h2 className="text-xl font-black text-[#122C21] uppercase tracking-widest mt-12 mb-4">
                  3.0 Representative Contact
                </h2>
                <div className="bg-[#F9F2D6] p-8 rounded-2xl border border-[#308667]/20">
                  <p className="text-[#122C21] font-bold mb-2">Legal Department Inquiry:</p>
                  <a 
                    href="mailto:info@sabolla-trading.com" 
                    className="text-[#308667] font-black text-xl hover:underline"
                  >
                    info@sabolla-trading.com
                  </a>
                  <p className="mt-4 text-[10px] text-[#122C21]/50 uppercase tracking-widest font-black">
                    Response ETA: 24-48 Business Hours
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center mt-12 text-[#122C21]/40 text-xs font-bold uppercase tracking-widest">
          Sabolla International Trading PLC &copy; {new Date().getFullYear()} &mdash; All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default LegalPage;