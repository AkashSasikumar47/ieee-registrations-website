import React from 'react';

const Navbar = () => {
    return (
        <div>
            <header className="flex justify-between items-center bg-white text-sm py-4 px-6">
                {/* Logo */}
                <a href="hacktrix.ieeesrmist.com" className="flex-none">
                    <img src="/Assets/Hacktrix_Logo.svg" alt="Hacktrix-Logo" className="w-36 h-16" />
                </a>

                {/* IEEE Logo */}
                <a href="#" className="flex-none">
                    <img src="/Assets/IEEE_Logo.png" alt="ieee-srm" className="w-36 h-14" />
                </a>
            </header>
        </div>
    );
};

export default Navbar;