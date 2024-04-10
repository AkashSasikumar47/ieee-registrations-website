import React from 'react';

const RegistrationClose = () => {
    return (
        <div>

            <div className="relative overflow-hidden">
                <div className="relative z-10">
                    <div className="max-w-[85rem] mt-8 mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
                        <div className="max-w-2xl text-center mx-auto">
                            <p className="inline-block text-sm font-body bg-white text-orange font-bold">
                                REGISTRATIONS CLOSED
                            </p>
                            <div className="mt-5 max-w-2xl">
                                <h1 className="block font-body font-bold text-black text-4xl md:text-6xl lg:text-6xl">
                                    Thank You for 255+ Teams!
                                </h1>
                            </div>
                            <div className="mt-5 max-w-3xl">
                                <p className="text-base lg:text-lg font-body text-gray-600">
                                    Stay Tuned for the Unleashing of HackTrix-24
                                </p>
                            </div>
                            <div className="mt-8 gap-3 flex justify-center">
                                <div className="mt-6 gap-3 flex justify-center">
                                    <a
                                        href="mailto:ieee@srmist.edu.in"
                                        className="py-4 px-6 inline-flex items-center gap-x-2 text-md font-bold rounded-full border border-transparent bg-orange-500 text-white hover:bg-black transform transition-transform duration-300 hover:scale-105 disabled:opacity-50 disabled:pointer-events-none"
                                    >
                                        Contact Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RegistrationClose;