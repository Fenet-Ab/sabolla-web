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
            'SABOLLA\'s deep understanding of the Ethiopian aviation sector was instrumental in our market entry. Their import facilitation and local coordination saved us weeks of work. A truly professional team.',
    },
    {
        id: 2,
        name: 'Clara Rodriguez',
        title: 'Procurement Director, Rosenbauer',
        avatarUrl: 'https://i.pravatar.cc/150?img=47',
        quote:
            'Navigating the regulations for fire safety equipment can be complex. SABOLLA handled everything flawlessly, from sourcing to compliance. They are a reliable and effective partner in Ethiopia.',
    },
    {
        id: 3,
        name: 'David Chen',
        title: 'Operations Manager, Jingshen International',
        avatarUrl: 'https://i.pravatar.cc/150?img=68',
        quote:
            'Their market insights were invaluable. They provided us with actionable data that shaped our entire strategy for the region. We couldn\'t have done it without their expert advisory services.',
    },
];

const TestimonialsSection = (): JSX.Element => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

    useEffect(() => {
        if (selectedTestimonial) return;
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [selectedTestimonial]);

    const goToPrevious = (): void => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const goToNext = (): void => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const slideVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    return (
        <section className="py-24 bg-white overflow-hidden font-['Montserrat']">
            <div className="container mx-auto px-6 max-w-5xl text-center">
                <h2 className="text-5xl md:text-7xl font-black text-[#122C21] uppercase tracking-tighter mb-6">
                    Partner <span className="text-[#308667]">Voice</span>
                </h2>
                <p className="text-lg text-[#122C21]/60 mb-16 max-w-2xl mx-auto font-medium">
                    Trusted by global leaders to navigate and lead in the Ethiopian marketplace.
                </p>

                <div className="relative flex items-center justify-center">
                    {/* Navigation Arrows - Using Brand Colors */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-0 md:-left-16 z-10 p-4 bg-[#F9F2D6] rounded-full text-[#122C21] hover:bg-[#308667] hover:text-white transition-all duration-300 shadow-md"
                    >
                        <FaChevronLeft size={18} />
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute right-0 md:-right-16 z-10 p-4 bg-[#F9F2D6] rounded-full text-[#122C21] hover:bg-[#308667] hover:text-white transition-all duration-300 shadow-md"
                    >
                        <FaChevronRight size={18} />
                    </button>

                    <div className="w-full">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                variants={slideVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ duration: 0.5 }}
                                onClick={() => setSelectedTestimonial(testimonials[currentIndex])}
                                className="bg-[#F9F2D6]/30 border border-[#122C21]/5 p-10 md:p-16 rounded-[2.5rem] text-left cursor-pointer hover:bg-[#F9F2D6]/50 transition-all group relative overflow-hidden"
                            >
                                <FaQuoteLeft className="text-4xl text-[#308667]/20 mb-8" />
                                
                                <p className="text-[#122C21] text-xl md:text-2xl mb-10 font-bold leading-relaxed italic">
                                    "{testimonials[currentIndex].quote}"
                                </p>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <img
                                            className="w-14 h-14 rounded-full object-cover mr-5 grayscale group-hover:grayscale-0 transition-all duration-500 border-2 border-[#308667]"
                                            src={testimonials[currentIndex].avatarUrl}
                                            alt={testimonials[currentIndex].name}
                                        />
                                        <div>
                                            <h4 className="font-black text-[#122C21] uppercase tracking-wider">
                                                {testimonials[currentIndex].name}
                                            </h4>
                                            <p className="text-[#308667] text-[10px] font-black uppercase tracking-[0.2em]">
                                                {testimonials[currentIndex].title}
                                            </p>
                                        </div>
                                    </div>
                                    <span className="hidden md:block text-[10px] font-black uppercase tracking-widest text-[#308667] opacity-0 group-hover:opacity-100 transition-opacity">
                                        Read Case Study +
                                    </span>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Indicators */}
                <div className="flex justify-center mt-12 space-x-3">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-1.5 transition-all duration-500 rounded-full ${index === currentIndex
                                ? 'bg-[#308667] w-12'
                                : 'bg-[#122C21]/10 w-4 hover:bg-[#122C21]/30'
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* ================= ELITE MODAL ================= */}
            <AnimatePresence>
                {selectedTestimonial && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedTestimonial(null)}
                        className="fixed inset-0 z-[100] bg-[#122C21]/95 flex items-center justify-center px-4 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[#F9F2D6] max-w-2xl w-full rounded-[3rem] p-10 md:p-16 relative shadow-2xl"
                        >
                            <button
                                onClick={() => setSelectedTestimonial(null)}
                                className="absolute top-8 right-8 text-[#122C21] hover:text-[#308667] transition-colors"
                            >
                                <span className="text-xs font-black uppercase tracking-widest">Close [x]</span>
                            </button>

                            <div className="flex flex-col items-center text-center">
                                <img
                                    src={selectedTestimonial.avatarUrl}
                                    alt={selectedTestimonial.name}
                                    className="w-28 h-28 rounded-full object-cover border-4 border-[#308667] mb-8 shadow-xl"
                                />
                                <h3 className="text-3xl font-black text-[#122C21] uppercase tracking-tighter mb-2">
                                    {selectedTestimonial.name}
                                </h3>
                                <p className="text-[#308667] font-black uppercase text-xs tracking-[0.3em] mb-10">
                                    {selectedTestimonial.title}
                                </p>

                                <div className="relative">
                                    <FaQuoteLeft className="absolute -top-6 -left-6 text-4xl text-[#308667]/10" />
                                    <p className="text-[#122C21] text-xl leading-relaxed font-bold italic">
                                        "{selectedTestimonial.quote}"
                                    </p>
                                </div>

                                <button
                                    onClick={() => setSelectedTestimonial(null)}
                                    className="mt-12 px-12 py-4 bg-[#122C21] text-[#F9F2D6] rounded-full hover:bg-[#308667] transition-all font-black uppercase text-[10px] tracking-[0.3em]"
                                >
                                    Dismiss
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default TestimonialsSection;