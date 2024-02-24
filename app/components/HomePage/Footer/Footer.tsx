import React from 'react';

const Footer = () => {
    return (

        <footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto bg-white text-black font-body">
            <div className="text-center">

                <div>
                    <a
                        className="flex-none text-4xl font-head font-extrabold text-orange"
                        href="#"
                        aria-label="Brand"
                    >
                        HACKTRIX
                    </a>
                </div>

                <div className="mt-3">
                    <p className="text-black font-body">
                        We're part of the{' '}
                        <a
                            className="font-semibold text-orange hover:text-lightOrange"
                            href="https://www.ieee.org/"
                        >
                            IEEE
                        </a>{' '}
                        family.
                    </p>
                    <p className="text-black font-semibold">© 2024 IEEE SRM. All rights reserved.</p>
                </div>

            </div>
        </footer>

    );
};

export default Footer;