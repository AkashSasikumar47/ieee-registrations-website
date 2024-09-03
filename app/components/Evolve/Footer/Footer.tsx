import React from 'react'

const Footer = () => {
    return (
        <footer className="max-w-screen-xl mx-auto px-4 py-6 md:px-8 md:py-10">
            <div className="text-center flex flex-col items-center">
                    <a
                        className="flex-none text-sm font-head font-extrabold"
                        href="https://www.ieeesrmist.com/"
                        aria-label="Brand"
                    >
                        <img src="/assets/Evolve/ieee_logo_with_text_dark.svg" alt="protocol-Logo" className="w-36 h-16" />
                    </a>

                <div className="mt-3">
                    <p className="mb-2 font-sans font-base text-white text-base sm:text-lg">
                        We're part of the{' '}
                        <a
                            className="font-sans font-bold text-base sm:text-lg text-[#00F0FF] hover:text-[#FF00FF]"
                            href="https://www.ieee.org/"
                        >
                            IEEE
                        </a>{' '}
                        family.
                    </p>
                    <p className="font-sans font-base text-white text-xs sm:text-base">© 2024 IEEE SRM. All rights reserved.</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer