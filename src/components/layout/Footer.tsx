import * as React from 'react'; 
// Or simply remove it if you aren't using the 'React' keyword in your code.
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { CONTACT_INFO } from "../../data/mockData";
import SabollaLogo from "../../assets/logo/sabolla_logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#122C21] text-[#F9F2D6] font-['Montserrat'] border-t border-[#308667]/30 pt-24 pb-12 relative overflow-hidden">
      {/* Background Brand Pattern Accent */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `url('/pattern.png')`, backgroundSize: '400px' }} 
      />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* ================= BRAND COLUMN (Span 5) ================= */}
          <div className="lg:col-span-5 space-y-8">
            <Link to="/" className="inline-block transform transition-transform hover:scale-105">
              <img
                src={SabollaLogo}
                alt="Sabolla International Trading"
                className="h-24 md:h-32 w-auto object-contain origin-left"
                style={{ filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.3))" }}
              />
            </Link>
            <p className="text-lg font-medium leading-relaxed text-[#F9F2D6]/70 max-w-md">
              A premier Ethiopian gateway for global industrial leaders, driving 
              national growth through strategic synergy and mission-critical technology.
            </p>
            <div className="flex gap-4">
              {[FaLinkedin, FaTwitter].map((Icon, idx) => (
                <a key={idx} href="#" className="w-12 h-12 rounded-full border border-[#F9F2D6]/20 flex items-center justify-center hover:bg-[#308667] hover:border-[#308667] transition-all text-[#F9F2D6]">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* ================= NAVIGATION COLUMN (Span 3) ================= */}
          <div className="lg:col-span-3">
            <h5 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#308667] mb-8">
              Corporate Intelligence
            </h5>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Products', 'Partners'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`} 
                    className="text-sm font-bold uppercase tracking-widest text-[#F9F2D6]/60 hover:text-[#308667] transition-colors flex items-center gap-3 group"
                  >
                    <span className="w-0 h-0.5 bg-[#308667] transition-all group-hover:w-4" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= CONTACT COLUMN (Span 4) ================= */}
          <div className="lg:col-span-4 bg-white/5 p-8 rounded-[2rem] border border-white/10">
            <h5 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#308667] mb-8">
              Global Command Center
            </h5>
            <div className="space-y-6">
              <div className="flex gap-4">
                <FaMapMarkerAlt className="text-[#308667] shrink-0 mt-1" />
                <p className="text-sm font-medium leading-relaxed text-[#F9F2D6]/80">
                  {CONTACT_INFO.address}
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <FaEnvelope className="text-[#308667] shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm font-bold hover:text-[#308667] transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex gap-4 items-center">
                <FaPhoneAlt className="text-[#308667] shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-sm font-bold hover:text-[#308667] transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM LEGAL BAR ================= */}
        <div className="pt-12 border-t border-[#F9F2D6]/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#F9F2D6]/40">
            © {new Date().getFullYear()} Sabolla International Trading PLC. Engineered for Excellence.
          </p>
          <div className="flex gap-8">
            <Link to="/privacy-terms/privacy" className="text-[10px] font-black uppercase tracking-[0.2em] text-[#F9F2D6]/40 hover:text-[#308667]">
              Privacy Policy
            </Link>
            <Link to="/privacy-terms/terms" className="text-[10px] font-black uppercase tracking-[0.2em] text-[#F9F2D6]/40 hover:text-[#308667]">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;