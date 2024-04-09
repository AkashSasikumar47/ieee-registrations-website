import React from 'react'

const Register = () => {
    return (
        <section className="max-w-screen-xl mx-auto px-4 py-6 md:px-8 md:py-10">
            <div className="mx-auto mb-10 items-center justify-center text-center">
                <h3 className="mb-2 sm:mb-4 font-sans font-semibold text-purple-800 text-xs lg:text-normal">
                    REGISTER
                </h3>
                <h2 className="mb-4 md:mb-6 font-sans font-bold text-black text-2xl sm:text-4xl">
                    Register for our Events
                </h2>
                <h4 className="max-w-2xl mx-auto font-sans font-base text-gray-400 text-sm sm:text-lg">
                    Explore our exciting lineup of events designed to foster innovation, learning, and collaboration within the tech community.
                </h4>
            </div>
            <div className="mt-16 grid gap-x-4 gap-y-10 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-4">
                <div>
                    <a
                        href="https://registrations.ieeesrmist.com/protocol"
                        className="group mb-2 block h-120 overflow-hidden bg-gray-100 lg:mb-3"
                    >
                        <img
                            src="/assets/IEEE/img/Protocol_Poster.svg"
                            loading="lazy"
                            alt=" PROTOCOL 1.0"
                            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                        />
                    </a>
                    <div className="text-center mt-6">
                        <h1 className="mb-1 font-sans font-bold text-black text-normal sm:text-xl">
                            PROTOCOL 1.0
                        </h1>
                        <div className="mb-2 font-sans font-base text-black text-xs sm:text-normal">
                            Hackathon
                        </div>
                    </div>
                </div>
                <div>
                    <a
                        href="https://registrations.ieeesrmist.com/hacktrix"
                        className="group mb-2 block h-120 overflow-hidden bg-gray-100 lg:mb-3"
                    >
                        <img
                            src="/assets/IEEE/img/HackTrix_Poster.jpeg"
                            loading="lazy"
                            alt="HackTrix-24"
                            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                        />
                    </a>
                    <div className="text-center mt-6">
                        <h1 className="mb-1 font-sans font-bold text-black text-normal sm:text-xl">
                            HackTrix-24
                        </h1>
                        <div className="mb-2 font-sans font-base text-black text-xs sm:text-normal">
                            Hackathon
                        </div>
                    </div>
                </div>
                <div>
                    <a
                        href="https://techtrek.ieeesrmist.com/"
                        className="group mb-2 block h-120 overflow-hidden bg-gray-100 lg:mb-3"
                    >
                        <img
                            src="/assets/IEEE/img/TechTreck 2024.png"
                            loading="lazy"
                            alt="TechTrek"
                            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                        />
                    </a>
                    <div className="text-center mt-6">
                        <h1 className="mb-1 font-sans font-bold text-black text-normal sm:text-xl">
                            TechTrek
                        </h1>
                        <div className="mb-2 font-sans font-base text-black text-xs sm:text-normal">
                            Hackathon
                        </div>
                    </div>
                </div>
                <div>
                    <a
                        href="#"
                        className="group mb-2 block h-120 overflow-hidden bg-gray-100 lg:mb-3"
                    >
                        <img
                            src="/assets/IEEE/img/Concepto_Poster.jpeg"
                            loading="lazy"
                            alt="Concepto-23"
                            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                        />
                    </a>
                    <div className="text-center mt-6">
                        <h1 className="mb-1 font-sans font-bold text-black text-normal sm:text-xl">
                            Concepto-23
                        </h1>
                        <div className="mb-2 font-sans font-base text-black text-xs sm:text-normal">
                            Ideathon
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register