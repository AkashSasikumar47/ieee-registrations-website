import React from 'react';

const Navbar = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-4 py-4 md:px-8 md:py-4">
            <div className="mx-auto flex items-center justify-between">
                <a href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
                    <img src="/assets/Evolve/E-VOLVE.svg" alt="E-VOLVE logo" className="h-6 md:h-8" />
                </a>
                <a href="https://www.ieeesrmist.com/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
                    <img src="/assets/IEEE/Logo/IEEE-LOGO-White.png" alt="IEEE SRM SB Logo" className="h-8 md:h-12" />
                </a>
            </div>
        </div>
    );
};

export default Navbar;