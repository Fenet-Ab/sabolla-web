import { type JSX } from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Testimonial {
    id: number;
    name: string;
    title: string;
    avatarUrl: string;
    quote: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Hans Mueller',
        title: 'CEO, INDRA AVITECH GmbH',
        avatarUrl: 'https://i.pravatar.cc/150?img=32',
        quote:
            'SABOLLA\'s deep understanding of the Ethiopian aviation sector was instrumental in our market entry. Their import facilitation and local coordination saved us weeks of work.',
    },
    {
        id: 2,
        name: 'Clara Rodriguez',
        title: 'Procurement Director, Rosenbauer',
        avatarUrl: 'https://i.pravatar.cc/150?img=47',
        quote:
            'Navigating the regulations for fire safety equipment can be complex. SABOLLA handled everything flawlessly. They are a reliable and effective partner in Ethiopia.',
    },
    {
        id: 3,
        name: 'David Chen',
        title: 'Operations Manager, Jingshen International',
        avatarUrl: 'https://i.pravatar.cc/150?img=68',
        quote:
            'Their market insights were invaluable. They provided us with actionable data that shaped our entire strategy for the region. We couldn\'t have done it without their expert advisory.',
    },
];

const TestimonialsSection = (): JSX.Element => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const slideVariants: Variants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 },
    };

    return (
        <section className="relative py-24 bg-[#FCFAF2] overflow-hidden font-['Montserrat'] border-t border-black/5">
            {/* Background Watermark - Matching Milestone/Partners Style */}
            <div className="absolute top-10 right-0 text-[12rem] font-black text-[#0B1A13]/[0.02] select-none pointer-events-none tracking-tighter leading-none uppercase">
                VOICE
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left Side: Header (Following the Who We Are / Milestone Layout) */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-4 mb-4"
                        >
                            <div className="h-[1px] w-10 bg-[#308667]" />
                            <span className="text-[10px] font-black text-[#308667] uppercase tracking-[0.4em]">Testimonials</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-black text-[#0B1A13] uppercase tracking-tighter leading-[0.95] mb-8">
                            Global <br /> <span className="text-[#308667]">Perspectives</span>
                        </h2>
                        <p className="text-sm text-[#0B1A13]/60 max-w-sm font-medium leading-relaxed">
                            Trusted by industry leaders to engineer sustainable growth and navigate complex market entries within the Ethiopian economic landscape.
                        </p>

                        {/* Navigation Controls moved to the side for a more "Dashboard" look */}
                        <div className="flex gap-3 mt-10">
                            <button
                                onClick={() => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                                className="p-4 rounded-full border border-[#0B1A13]/10 text-[#0B1A13] hover:bg-[#0B1A13] hover:text-white transition-all duration-300"
                            >
                                <FaChevronLeft size={14} />
                            </button>
                            <button
                                onClick={() => setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                                className="p-4 rounded-full border border-[#0B1A13]/10 text-[#0B1A13] hover:bg-[#0B1A13] hover:text-white transition-all duration-300"
                            >
                                <FaChevronRight size={14} />
                            </button>
                        </div>
                    </div>

                    {/* Right Side: The Testimonial Card */}
                    <div className="lg:col-span-7">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                variants={slideVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="bg-[#0B1A13] rounded-[3rem] p-10 md:p-14 relative overflow-hidden"
                            >
                                {/* Decorative elements inside the card */}
                                <FaQuoteLeft className="text-5xl text-[#308667]/20 mb-8" />

                                <p className="text-white text-xl md:text-2xl mb-12 font-bold leading-relaxed italic relative z-10">
                                    "{testimonials[currentIndex].quote}"
                                </p>

                                <div className="flex items-center justify-between relative z-10 pt-8 border-t border-white/10">
                                    <div className="flex items-center">
                                        <img
                                            className="w-14 h-14 rounded-2xl object-cover mr-5 border-2 border-[#308667]/30"
                                            src={testimonials[currentIndex].avatarUrl}
                                            alt={testimonials[currentIndex].name}
                                        />
                                        <div>
                                            <h4 className="font-black text-white uppercase tracking-wider text-sm">
                                                {testimonials[currentIndex].name}
                                            </h4>
                                            <p className="text-[#308667] text-[10px] font-black uppercase tracking-[0.2em] mt-1">
                                                {testimonials[currentIndex].title}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Indicator inside the card */}
                                    <div className="hidden md:flex gap-2">
                                        {testimonials.map((_, index) => (
                                            <div
                                                key={index}
                                                className={`h-1 rounded-full transition-all duration-500 ${index === currentIndex ? 'w-6 bg-[#308667]' : 'w-2 bg-white/10'}`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Subtle background gradient for the card */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#308667]/5 blur-[80px] rounded-full -mr-20 -mt-20" />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;