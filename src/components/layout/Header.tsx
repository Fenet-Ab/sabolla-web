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

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    const timeout = setTimeout(updateUnderline, 50);
    window.addEventListener('resize', updateUnderline);
    return () => {
      window.removeEventListener('resize', updateUnderline);
      clearTimeout(timeout);
    };
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        // REDUCED PADDING: Changed py-6 to py-3 and py-2 to py-1
        className={`fixed top-0 z-[80] w-full font-['Montserrat'] transition-all duration-700 bg-[#0B1A13] 
          ${hasScrolled ? "py-1" : "py-3"}`}
      >
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 flex items-center justify-between">

          {/* LOGO - Slightly reduced size to allow a thinner header */}
          <Link to="/" className="relative z-[90] transition-transform hover:scale-105 shrink-0">
            <img
              src={SabollaLogo}
              alt="Sabolla"
              className={`w-auto object-contain transition-all duration-500 origin-left
                ${hasScrolled ? "h-14 md:h-16" : "h-20 md:h-24"}`}
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center">
            {/* Added items-end if you want text to sit lower, but default is items-center for symmetry */}
            <nav ref={navRef} className="flex items-center space-x-10 relative">
              {navItems.map((item) => {
                if (item.isPrimary) {
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      // Reduced py-3 to py-2 to make the button slimmer
                      className="ml-4 px-8 py-2 rounded-full bg-[#308667] text-white text-[11px] font-black uppercase tracking-[0.2em] hover:bg-[#F9F2D6] hover:text-[#0B1A13] transition-all"
                    >
                      {item.name}
                    </Link>
                  );
                }
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 py-1 text-[#39ad83] hover:text-[#F9F2D6]"
                  >
                    {item.name}
                  </Link>
                );
              })}

              <motion.span
                className="absolute bottom-[-4px] h-0.5 bg-[#308667] rounded-full"
                animate={{ left: underline.left, width: underline.width }}
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            </nav>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="lg:hidden">
            <button
              className="relative z-[90] flex items-center gap-3 group"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="text-[10px] font-black text-[#F9F2D6] uppercase tracking-[0.3em] opacity-60 group-hover:opacity-100 transition-opacity">
                {menuOpen ? "Close" : "Menu"}
              </span>
              <div className="w-6 flex flex-col gap-1.5 items-end">
                <span className={`h-[2px] bg-[#F9F2D6] transition-all duration-500 ${menuOpen ? "w-6 rotate-45 translate-y-2 bg-[#308667]" : "w-6"}`} />
                <span className={`h-[2px] bg-[#F9F2D6] transition-all duration-500 ${menuOpen ? "opacity-0" : "w-4"}`} />
                <span className={`h-[2px] bg-[#F9F2D6] transition-all duration-500 ${menuOpen ? "w-6 -rotate-45 -translate-y-2 bg-[#308667]" : "w-5"}`} />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU OVERLAY - Unchanged */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[75] bg-[#0B1A13] flex flex-col p-8 pt-40"
          >
            <div className="absolute bottom-10 left-0 text-[8rem] font-black text-white/[0.03] select-none pointer-events-none tracking-tighter leading-none uppercase">
              Sabolla
            </div>
            <div className="flex flex-col space-y-6 relative z-10">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className="block text-5xl font-black uppercase tracking-tighter transition-all text-[#F9F2D6] hover:text-[#308667]"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;