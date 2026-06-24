import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
    const textRefs = useRef([]);
    const cursorRef = useRef(null);
    const dotRef = useRef(null);

    const lines = [
        { text: "Hello," },
        { text: "do you" },
        { text: "want to" },
        { text: "work with one", linkText: "contact us", href: "/dummy-contact" },
        { text: "of the best" },
        { text: "creative agencies", linkText: "about us", href: "/dummy-about" },
        { text: "for outstanding" },
        { text: "digital marketing" },
        { text: "websites", linkText: "projects", href: "/dummy-projects" },
        { text: "apps" },
    ];

    useEffect(() => {
        const tl = gsap.timeline({ delay: 0.2 });

        tl.fromTo(textRefs.current,
            { yPercent: 120, opacity: 0, skewY: 5 },
            {
                yPercent: 0,
                opacity: 1,
                skewY: 0,
                stagger: 0.1,
                duration: 1.2,
                ease: 'power4.out',
            }
        );

        const moveCursor = (e) => {
            gsap.to(cursorRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.6,
                ease: 'power3.out'
            });
            gsap.to(dotRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: 'power3.out'
            });
        };

        if (typeof window !== 'undefined' && window.matchMedia("(pointer: fine)").matches) {
            window.addEventListener('mousemove', moveCursor);
        }

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return (
        <section className="relative min-h-screen bg-white flex flex-col justify-center pt-54 md:pt-72 pb-24 px-6 md:px-12 w-full max-w-[1400px] mx-auto overflow-hidden lg:cursor-none">

            <div
                ref={cursorRef}
                className="hidden lg:flex fixed top-0 left-0 w-10 h-10 border border-gray-400 rounded-full pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-1/2 justify-center items-center mix-blend-difference"
            ></div>
            <div
                ref={dotRef}
                className="hidden lg:block fixed top-0 left-0 w-1.5 h-1.5 bg-[#0d5f53] rounded-full pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-1/2"
            ></div>

            <div className="flex flex-col items-start justify-center w-full z-10">
                {lines.map((item, index) => (
                    <div key={index} className="overflow-hidden py-1 md:py-2">
                        <h1
                            ref={el => textRefs.current[index] = el}
                            className="text-[#1c1c1c] font-bold tracking-[-0.02em] leading-[1.05] text-[11vw] sm:text-[11vw] md:text-[8.5vw] lg:text-[100px] xl:text-[150px] whitespace-nowrap"
                        >
                            {item.linkText ? (
                                <a href={item.href} className="group relative inline-flex overflow-hidden lg:cursor-none">
                                    <span className="relative flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">

                                        <span className="underline decoration-[3px] md:decoration-[4px] underline-offset-[8px] md:underline-offset-[15px] decoration-black group-hover:decoration-transparent transition-colors duration-300">
                                            {item.text}
                                        </span>

                                        <span className="absolute top-full left-0 text-[#0d5f53] underline decoration-[3px] md:decoration-[4px] underline-offset-[8px] md:underline-offset-[15px] decoration-[#0d5f53]">
                                            {item.linkText}
                                        </span>

                                    </span>
                                </a>
                            ) : (
                                <span>{item.text}</span>
                            )}
                        </h1>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Hero;