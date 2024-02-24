import React from 'react'

const RegistrationForm = () => {
    return (
        <div>

            <div className="max-w-[85rem] lg:rounded-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-10 mx-auto bg-white font-body">
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-4 lg:py-6 mx-auto">
                    <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">

                        {/* Hero */}
                        <div>
                            <div className="mt-4 md:mb-12 max-w-2xl">
                                <h1 className="mb-4 font-bold text-black text-4xl lg:text-5xl">
                                    Hacking makes you lose CTRL: Register for HackTrix-24
                                </h1>
                                <p className="text-gray-600">
                                    Embark on a journey of innovation and collaboration by registering for HackTrix-24! This is your chance to be part of a dynamic hackathon where brilliant minds come together to push the boundaries of technology. Whether you're a coding maestro, a design virtuoso, or a visionary with big ideas, HackTrix-24 welcomes you to showcase your talents and contribute to the future of tech.
                                </p>
                            </div>
                        </div>

                        {/* Form */}
                        <div>
                            <form>
                                <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
                                    <div className="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-xl">
                                        <div className="text-center">
                                            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                                                HackTrix-24 Registration Form
                                            </h1>
                                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                                Form teams, make new friends, and collaborate with like-minded peers.
                                            </p>
                                        </div>

                                        <div className="mt-5">

                                            {/* Input Field */}
                                            <div>
                                                <div className="lg:grid gap-4 lg:grid-cols-2 font-body font-normal">
                                                    <input type="text" className="py-3 px-5 block w-full xs:mb-4 lg:mb-0 border border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-full text-sm text-black disabled:opacity-50 disabled:pointer-events-none" placeholder="Squad Name" />
                                                    <input type="text" className="py-3 px-5 block w-full xs:mb-4 lg:mb-0 border border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-full text-sm text-black disabled:opacity-50 disabled:pointer-events-none" placeholder="Squad Size (Max 5)" />
                                                    <input type="text" className="py-3 px-5 block w-full xs:mb-4 lg:mb-0 border border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-full text-sm text-black disabled:opacity-50 disabled:pointer-events-none" placeholder="Squad Master" />
                                                    <input type="text" className="py-3 px-5 block w-full xs:mb-4 lg:mb-0 border border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-full text-sm text-black disabled:opacity-50 disabled:pointer-events-none" placeholder="Contact Number" />
                                                    <input type="text" className="py-3 px-5 block w-full xs:mb-4 lg:mb-0 border border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-full text-sm text-black disabled:opacity-50 disabled:pointer-events-none" placeholder="SquadMaster@srmist.edu.in" />
                                                    <input type="text" className="py-3 px-5 block w-full xs:mb-4 lg:mb-0 border border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-full text-sm text-black disabled:opacity-50 disabled:pointer-events-none" placeholder="Department" />
                                                </div>
                                                <div className="py-3 flex items-center xs:mb-4 lg:mb-0 font-body font-semibold text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6">
                                                    SQUAD MEMBERS
                                                </div>
                                                <div className="lg:grid gap-4 lg:grid-cols-2 font-body font-semibold">
                                                    <input type="text" className="py-3 px-5 block w-full xs:mb-4 lg:mb-0 border border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-full text-sm text-black disabled:opacity-50 disabled:pointer-events-none" placeholder="Squad Member 2" />
                                                    <input type="text" className="py-3 px-5 block w-full xs:mb-4 lg:mb-0 border border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-full text-sm text-black disabled:opacity-50 disabled:pointer-events-none" placeholder="Squad Member 3" />
                                                    <input type="text" className="py-3 px-5 block w-full xs:mb-4 lg:mb-0 border border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-full text-sm text-black disabled:opacity-50 disabled:pointer-events-none" placeholder="Squad Member 4" />
                                                    <input type="text" className="py-3 px-5 block w-full xs:mb-4 lg:mb-0 border border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-full text-sm text-black disabled:opacity-50 disabled:pointer-events-none" placeholder="Squad Member 5" />
                                                </div>
                                            </div>

                                            {/* Register Button */}
                                            <div className="mt-6">
                                                <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-body font-semibold rounded-lg border border-transparent bg-orange text-white hover:bg-black disabled:opacity-50 disabled:pointer-events-none">
                                                    REGISTER
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RegistrationForm