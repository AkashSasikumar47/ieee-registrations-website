import React from 'react';

const Navbar = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-4 py-4 md:px-8 md:py-4">
            <div className="mx-auto flex items-center justify-between">
                <a href="https://www.ieeesrmist.com" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
                    <img src="/assets/Evolve/ieee_logo_with_text_dark.svg" alt="IEEE logo" className="h-16" />
                </a>

                <a
                    className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#00F0FF] text-black font-medium text-md rounded-full focus:outline-none"
                    href="https://evolve.ieeesrmist.com/"
                    >
                    Visit Event Page
                </a>
                
            </div>
        </div>
    );
};

export default Navbar;