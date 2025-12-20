import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SabollaLogo from "../../assets/logo/sabolla_logo.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "Partners", path: "/partners" },
  { name: "Contact", path: "/contact", isPrimary: true },
];

const Header: React.FC = () => {
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [underline, setUnderline] = useState({ left: 0, width: 0 });

  // Handle Scroll
  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Handle Underline
  useLayoutEffect(() => {
    const updateUnderline = () => {
      if (!navRef.current) return;
      const activeLink = navRef.current.querySelector<HTMLAnchorElement>(
        `a[href='${location.pathname}']`
      );
      if (activeLink) {
        setUnderline({ left: activeLink.offsetLeft, width: activeLink.offsetWidth });
      } else {
        setUnderline({ left: 0, width: 0 });
      }
    };
    updateUnderline();
    window.addEventListener('resize', updateUnderline);
    return () => window.removeEventListener('resize', updateUnderline);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 z-[60] w-full font-['Montserrat'] transition-all duration-700
          ${hasScrolled 
            ? "bg-[#122C21] py-3 shadow-2xl" 
            : "bg-gradient-to-b from-[#122C21]/80 to-transparent py-8"}`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          
          <Link to="/" className="relative z-[70] transition-transform hover:scale-105">
            <img
              src={SabollaLogo}
              alt="Sabolla International Trading"
              className={`w-auto object-contain transition-all duration-500 origin-left
                ${hasScrolled ? "h-14 md:h-16" : "h-20 md:h-24"}`}
            />
          </Link>

          <nav ref={navRef} className="hidden lg:flex items-center space-x-12 relative">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              if (item.isPrimary) {
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`ml-4 px-10 py-4 rounded-full text-[12px] font-black uppercase tracking-[0.2em] transition-all duration-300 shadow-xl
                      ${isActive || hasScrolled 
                        ? "bg-[#308667] text-white hover:bg-[#F9F2D6] hover:text-[#122C21]" 
                        : "bg-[#F9F2D6] text-[#122C21] hover:bg-[#308667] hover:text-white"}`}
                  >
                    {item.name}
                  </Link>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-[12px] font-black uppercase tracking-[0.2em] transition-all duration-300 py-2
                    ${isActive ? "text-[#308667]" : "text-[#F9F2D6] hover:text-[#308667]"}`}
                >
                  {item.name}
                </Link>
              );
            })}

            <motion.span
              className="absolute bottom-0 h-1 bg-[#308667] rounded-full"
              animate={{ left: underline.left, width: underline.width }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            />
          </nav>

          <button
            className="lg:hidden relative z-[70] p-4 text-[#F9F2D6]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-8 flex flex-col items-end gap-2">
              <span className={`h-1 bg-current transition-all ${menuOpen ? "w-8 rotate-45 translate-y-3" : "w-8"}`} />
              <span className={`h-1 bg-current transition-all ${menuOpen ? "opacity-0" : "w-6"}`} />
              <span className={`h-1 bg-current transition-all ${menuOpen ? "w-8 -rotate-45 -translate-y-3" : "w-4"}`} />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[65] bg-[#122C21] flex flex-col justify-center items-center p-12"
          >
            <div className="space-y-8 text-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="block text-4xl font-black text-[#F9F2D6] uppercase tracking-tighter"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;