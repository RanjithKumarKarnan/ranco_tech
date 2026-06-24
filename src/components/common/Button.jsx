import React from 'react';

const Button = ({ children, onClick, className = '' }) => {
    return (
        <button
            onClick={onClick}
            className={`relative overflow-hidden border border-black px-7 py-2.5 font-medium tracking-wide group transition-all duration-300 ${className}`}
        >
            {/* Dark green background that animates from left to right */}
            <span className="absolute inset-0 w-full h-full bg-[#0d5f53] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 z-0"></span>

            {/* Button text that turns white on hover */}
            <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300 ease-out whitespace-nowrap">
                {children}
            </span>
        </button>
    );
};

export default Button;