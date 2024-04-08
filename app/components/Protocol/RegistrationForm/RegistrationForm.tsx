import React from 'react'

const RegistrationForm = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-4 py-4 md:px-8 md:py-4 mt-16">
            <div className="mx-auto mb-10 text-center">
                <h3 className="mb-2 sm:mb-4 font-sans font-semibold text-blue-800 text-xs lg:text-base">
                    REGISTER
                </h3>
                <h2 className="mb-4 md:mb-6 font-sans font-bold text-black text-2xl sm:text-4xl">
                    Register for PROTOCOL 1.0
                </h2>
            </div>
            <form className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
                <div>
                    <label htmlFor="team-name" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Team Name*</label>
                    <input name="team-name" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                </div>
                <div>
                    <label htmlFor="team-size" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Team Size (Max-2)*</label>
                    <input type="number" name="team-size" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" max="2" min="1" />
                </div>
                <div>
                    <label htmlFor="members-name" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Member's Name*</label>
                    <input name="members-name" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                </div>
                <div>
                    <label htmlFor="registration-no" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Registration No*</label>
                    <input name="registration-no" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="srm-email" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">SRM Email ID*</label>
                    <input type="email" name="srm-email" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                </div>
                <div>
                    <label htmlFor="contact-number" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Contact Number*</label>
                    <input type="tel" name="contact-number" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                </div>
                <div>
                    <label htmlFor="department" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Department</label>
                    <input name="department" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                </div>
                <div>
                    <label htmlFor="member2-name" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Second Member's Name</label>
                    <input name="member2-name" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                </div>
                <div>
                    <label htmlFor="member2-registration-no" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Second Member's Registration No</label>
                    <input name="member2-registration-no" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="member2-srm-email" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Second Member's SRM Email ID</label>
                    <input type="email" name="member2-srm-email" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                </div>
            </form>
            <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center mt-12">
                <a href="https://registrations.ieeesrmist.com/" className="relative inline-block text-lg text-center group">
                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-sans font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-xl group-hover:text-white">
                        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-xl bg-gray-50" />
                        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease" />
                        <span className="relative">REGISTER</span>
                    </span>
                    <span
                        className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-xl group-hover:mb-0 group-hover:mr-0"
                        data-rounded="rounded-xl"
                    />
                </a>
            </div>
        </div>
    )
}

export default RegistrationForm