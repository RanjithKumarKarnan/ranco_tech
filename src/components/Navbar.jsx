import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import Button from './common/Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const menuRef = useRef(null);
    const linksRef = useRef([]);
    const contactRef = useRef([]);
    const tl = useRef(null);

    const navItems = ['Home', 'About Us', 'Services', 'Projects', 'Team', 'Contact Us'];

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (isOpen) return;

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY, isOpen]);

    useEffect(() => {
        tl.current = gsap.timeline({ paused: true });

        tl.current.to(menuRef.current, {
            yPercent: 100,
            duration: 0.8,
            ease: 'power4.inOut',
        })
            .to(linksRef.current, {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 0.6,
                ease: 'power3.out',
            }, "-=0.4")
            .to(contactRef.current, {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 0.6,
                ease: 'power3.out',
            }, "-=0.5");

        return () => {
            if (tl.current) tl.current.kill();
        };
    }, []);

    useEffect(() => {
        if (isOpen) {
            tl.current.play();
            document.body.style.overflow = 'hidden';
        } else {
            tl.current.reverse();
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-[70] bg-white pt-16 pb-6 transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] ${isVisible ? 'translate-y-0' : '-translate-y-full'
                    }`}
            >
                <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">

                    <div className="cursor-pointer relative z-[70] flex items-center">
                        <img
                            src="/logo.png"
                            alt="RancoTech Logo"
                            className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 hover:scale-105 rounded"
                        />
                    </div>

                    <div className="flex items-center gap-6 relative z-[70]">

                        <Button className="hidden md:block">
                            Start a Project
                        </Button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="w-12 h-12 flex flex-col justify-center items-center gap-[6px] group cursor-pointer"
                        >
                            <span
                                className={`block h-[1px] bg-black transition-all duration-500 ease-in-out ${isOpen ? 'w-6 rotate-45 translate-y-[3px]' : 'w-8 group-hover:w-6'
                                    }`}
                            />
                            <span
                                className={`block h-[1px] bg-black transition-all duration-500 ease-in-out ${isOpen ? 'w-6 -rotate-45 -translate-y-[4px]' : 'w-8 group-hover:w-10'
                                    }`}
                            />
                        </button>
                    </div>
                </div>
            </nav>

            <div
                ref={menuRef}
                className="fixed top-0 left-0 w-full h-[100vh] bg-white z-[60] transform -translate-y-full overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
                <div className="min-h-screen w-full max-w-[1440px] mx-auto px-6 md:px-12 pt-50 md:pt-56 pb-24 flex flex-col md:flex-row justify-start md:justify-center items-start md:items-center">

                    <div className="w-full md:w-[60%] flex flex-col justify-start md:justify-center items-start">
                        <ul className="flex flex-col items-start gap-4 md:gap-6 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-black">
                            {navItems.map((item, index) => (
                                <li key={index} className="overflow-visible py-2">
                                    <div
                                        ref={(el) => (linksRef.current[index] = el)}
                                        className="translate-y-[120%] opacity-0 cursor-pointer group transition-all duration-400 ease-out flex items-center"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <span className="relative inline-block hover:translate-x-6 hover:text-[#0d5f53] transition-all duration-300">
                                            {item}
                                            <span className="absolute left-0 -bottom-2 w-full h-[4px] bg-[#0d5f53] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="w-full md:w-[40%] flex flex-col justify-start md:justify-center items-start mt-10 md:mt-0 pt-8 md:pt-0 border-t border-gray-300 md:border-t-0 md:border-l md:pl-16 lg:pl-24 gap-8 md:gap-10">

                        <div className="overflow-hidden">
                            <div ref={el => contactRef.current[0] = el} className="translate-y-full opacity-0 flex flex-col gap-2">
                                <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500">Email Us</h3>
                                <a href="mailto:hello@rancotech.com" className="text-xl md:text-2xl lg:text-3xl font-medium text-black hover:text-[#0d5f53] hover:underline hover:decoration-2 hover:underline-offset-8 decoration-[#0d5f53] transition-all">
                                    hello@rancotech.com
                                </a>
                            </div>
                        </div>

                        <div className="overflow-hidden">
                            <div ref={el => contactRef.current[1] = el} className="translate-y-full opacity-0 flex flex-col gap-2">
                                <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500">Call Us</h3>
                                <a href="tel:+1234567890" className="text-xl md:text-2xl lg:text-3xl font-medium text-black hover:text-[#0d5f53] hover:underline hover:decoration-2 hover:underline-offset-8 decoration-[#0d5f53] transition-all">
                                    +1 (234) 567-890
                                </a>
                            </div>
                        </div>

                        <div className="overflow-hidden">
                            <div ref={el => contactRef.current[2] = el} className="translate-y-full opacity-0 flex flex-col gap-2">
                                <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500">Visit Us</h3>
                                <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                                    123 Tech Avenue, Suite 400<br />
                                    Silicon Valley, CA 94025
                                </p>
                            </div>
                        </div>

                        <div className="overflow-hidden">
                            <div ref={el => contactRef.current[3] = el} className="translate-y-full opacity-0 flex gap-6 md:gap-8 mt-4">
                                <a href="#" className="text-base md:text-lg text-black font-medium hover:text-[#0d5f53] hover:underline hover:decoration-2 hover:underline-offset-4 decoration-[#0d5f53] transition-all">LinkedIn</a>
                                <a href="#" className="text-base md:text-lg text-black font-medium hover:text-[#0d5f53] hover:underline hover:decoration-2 hover:underline-offset-4 decoration-[#0d5f53] transition-all">Twitter</a>
                                <a href="#" className="text-base md:text-lg text-black font-medium hover:text-[#0d5f53] hover:underline hover:decoration-2 hover:underline-offset-4 decoration-[#0d5f53] transition-all">Instagram</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;