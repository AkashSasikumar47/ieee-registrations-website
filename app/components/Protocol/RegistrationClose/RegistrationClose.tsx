import React from 'react'
import { motion } from 'framer-motion';

const RegistrationClose = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-white max-w-screen-xl mx-auto px-4 py-4 md:px-8 md:py-4"
        >
            <div className="grid sm:gap-8 lg:grid-cols-2 py-6">
                <div className="flex flex-col justify-center mx-auto mb-10">
                    <h3 className="mb-2 sm:mb-4 font-sans font-semibold text-blue-800 text-xs lg:text-normal">
                        NOTIFICATION
                    </h3>
                    <h2 className="mb-4 md:mb-6 font-sans font-bold text-black text-2xl sm:text-4xl">
                        Registration Closed
                    </h2>
                    <p className="max-w-2xl mx-auto font-sans font-base text-gray-400 text-xs sm:text-base text-justify">
                        We're thrilled by the overwhelming response to PROTOCOL 1.0! Registrations are now closed. Thank you to everyone who signed up.
                    </p>
                    <p className="max-w-2xl mx-auto font-sans font-base text-gray-400 text-xs sm:text-base text-justify">
                        Stay tuned for updates on the event. Follow us on social media and join our Discord community to stay connected!
                    </p>
                    <a
                        href="/"
                        className="mt-4 md:mt-6 inline-block text-blue-500 underline text-sm font-semibold hover:text-blue-700 md:text-base"
                    >
                        Go to Home
                    </a>
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                    <img
                        src="/assets/Protocol/img/Registration_Closed.png"
                        loading="lazy"
                        alt="Protocol_Registration_Closed"
                        className="absolute inset-0 aspect-square h-full w-full object-cover object-center"
                    />
                </div>
            </div>
        </motion.div>
    )
}

export default RegistrationClose