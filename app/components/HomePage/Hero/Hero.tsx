import React from 'react'

const Hero = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-4 py-4 md:px-8 md:py-4">
            <section className="relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 shadow-lg py-36 md:py-48">
                <img
                    src="/assets/IEEE/img/Hero_Baner.jpg"
                    loading="lazy"
                    alt="IEEE SRM SB"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="relative flex flex-col items-center lg:p-16">
                    <h1 className="mb-4 md:mb-12 font-sans font-bold text-white text-center text-4xl sm:text-5xl md:text-6xl">
                        Innovate. Edify. Experience. Excel
                    </h1>
                    <div className="animate-bounce text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero