import { useState } from 'react';
import ModalPopup from '../../Evolve/ModalPopup/ModalPopup';
import Confirmation from './Confirmation';
import { motion } from 'framer-motion';

const RecruitmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    registerNo: '',
    email: '',
    whatsappNo: '',
    degree: '',
    department: '',
    year: '',
    linkedIn: '',
    github: '',
    preferredDomains: [] as string[],
    experience: '',
    resumeDriveLink: '',
  });

  const [step, setStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;

    if (type === 'checkbox') {
      setFormData(prevData => {
        let updatedDomains = [...prevData.preferredDomains];
        if (checked) {
          if (updatedDomains.length < 3) {
            updatedDomains.push(value);
          }
        } else {
          updatedDomains = updatedDomains.filter(domain => domain !== value);
        }
        return { ...prevData, preferredDomains: updatedDomains };
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const verifyForm = () => {
    if (formData.name === '') {
      setErrorMessage('Name is required');
      setIsModalOpen(true);
      return false;
    }

    if (formData.registerNo === '') {
      setErrorMessage('Register number is required');
      setIsModalOpen(true);
      return false;
    }

    if (!/^RA\d{13}$/.test(formData.registerNo)) {
      setErrorMessage('Register number should match the pattern RA followed by 14 digits');
      setIsModalOpen(true);
      return false;
    }

    if (formData.email === '') {
      setErrorMessage('Email is required');
      setIsModalOpen(true);
      return false;
    }

    if (!/^[a-zA-Z0-9._-]+@srmist\.edu\.in$/.test(formData.email)) {
      setErrorMessage('Email should match the pattern [local-part]@srmist.edu.in');
      setIsModalOpen(true);
      return false;
    }

    if (formData.whatsappNo === '') {
      setErrorMessage('Contact number is required');
      setIsModalOpen(true);
      return false;
    }

    if (!/^\d{10}$/.test(formData.whatsappNo.trim())) {
      setErrorMessage('Contact number should be a 10 digit number');
      setIsModalOpen(true);
      return false;
    }

    if (formData.degree === '') {
      setErrorMessage('Degree is required');
      setIsModalOpen(true);
      return false;
    }

    if (formData.department === '') {
      setErrorMessage('Department is required');
      setIsModalOpen(true);
      return false;
    }

    if (formData.year === '') {
      setErrorMessage('Year of study is required');
      setIsModalOpen(true);
      return false;
    }

    if (formData.preferredDomains.length === 0) {
      setErrorMessage('At least one domain should be selected');
      setIsModalOpen(true);
      return false;
    }

    return true;
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };



  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (verifyForm()) {
      try {
        setIsLoading(true);

        const data = new FormData();
        data.append('name', formData.name);
        data.append('registerNo', formData.registerNo);
        data.append('email', formData.email);
        data.append('whatsappNo', formData.whatsappNo);
        data.append('degree', formData.degree);
        data.append('department', formData.department);
        data.append('year', formData.year);
        data.append('linkedin', formData.linkedIn);
        data.append('github', formData.github);
        data.append('preferredDomains', formData.preferredDomains.join(', '));
        data.append('experience', formData.experience);
        data.append('resumeDriveLink', formData.resumeDriveLink);

        console.log(data);

        try {
          const status = await fetch('https://script.google.com/macros/s/AKfycbxRN2rhCv9h2LH7kQn_oTfvmH3yBJwEnoadgDvG3EIqYIuC1JBajW1hgOLHG_C3DrzC9w/exec', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(data as any),
          });
          console.log(status);
          console.log(status.json());
        } catch (error) {
          console.error('Error submitting form1111:', error);
        }

        // const result = await response.json(); 
        await new Promise(resolve => setTimeout(resolve, 1000));

        console.log('Form submitted successfully');
        setIsDone(true);
        // setIsDone(status);
        // setIsDone(true);
      } catch (error) {
        console.error('Error submitting form:', error);
        setErrorMessage('An error occurred. Please try again.');
        setIsModalOpen(true);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-6 md:px-8 md:py-10">
      <div className="mx-auto mb-10 items-center justify-center text-center">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-2 sm:mb-4 font-sans font-semibold text-sky-800 text-xs lg:text-normal"
        >
          RECRUITMENT FORM
        </motion.h3>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-4 md:mb-6 font-sans font-bold text-black text-2xl sm:text-4xl"
        >
          Join the Future of Innovation with IEEE SRM
        </motion.h2>
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto font-sans font-base text-gray-400 text-sm sm:text-lg"
        >
          Join IEEE SRM to innovate, collaborate, and grow. Explore opportunities in research, development, and leadership while working on exciting projects.
        </motion.h4>
      </div>

      <div className="flex items-center justify-center p-4">
        {isDone
          ? <Confirmation
            name={formData.name}
            registerNo={formData.registerNo}
            email={formData.email}
            whatsappNo={formData.whatsappNo}
            preferredDomains={formData.preferredDomains}
          />
          : (<div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md lg:max-w-2xl">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Personal Details */}
              {step === 1 && (
                <div className="space-y-4">

                  <h1 className="text-md md:text-xl font-semibold text-center text-gray-800">Personal Details</h1>

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-sky-800">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border border-gray-300 rounded-lg bg-white text-black"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="registerNo" className="block text-sm font-medium text-sky-800">Register No</label>
                    <input
                      type="text"
                      name="registerNo"
                      id="registerNo"
                      value={formData.registerNo}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border border-gray-300 rounded-lg bg-white text-black"
                      placeholder="RAxxxxxxxxxxxxx"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-sky-800">Official Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border border-gray-300 rounded-lg bg-white text-black"
                      placeholder="ab1234@srmist.edu.in"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="whatsappNo" className="block text-sm font-medium text-sky-800">WhatsApp Number</label>
                    <input
                      type="tel"
                      name="whatsappNo"
                      id="whatsappNo"
                      value={formData.whatsappNo}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border border-gray-300 rounded-lg bg-white text-black"
                      placeholder="1234567890"
                      required
                    />
                  </div>

                  <div className="flex items-center justify-between space-x-2">
                    <div></div>
                    <button
                      className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
                      onClick={nextStep}
                    >
                      <span>Next</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                </div>
              )}

              {/* Step 2: Academic Details */}
              {step === 2 && (
                <div className="space-y-4">

                  <h1 className="text-md md:text-xl font-semibold text-center text-gray-800">Academic Details</h1>

                  <div className="mb-4">
                    <label htmlFor="degree" className="block text-sm font-medium text-sky-800">Degree</label>
                    <select
                      name="degree"
                      id="degree"
                      value={formData.degree}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 bg-white text-black"
                      required
                    >
                      <option value="">Select Degree</option>
                      <option value="BTech">B.Tech (Bachelor of Technology)</option>
                      <option value="BSc">B.Sc. (Bachelor of Science)</option>
                      <option value="BA">B.A. (Bachelor of Arts)</option>
                      <option value="BCom">B.Com (Bachelor of Commerce)</option>
                      <option value="BE">B.E. (Bachelor of Engineering)</option>
                      <option value="BArch">B.Arch (Bachelor of Architecture)</option>
                      <option value="BBA">B.B.A. (Bachelor of Business Administration)</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="department" className="block text-sm font-medium text-sky-800">Department</label>
                    <input
                      name="department"
                      id="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border border-gray-300 rounded-lg bg-white text-black"
                      placeholder="Your Department"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="year" className="block text-sm font-medium text-sky-800">Year of Study</label>
                    <select
                      name="year"
                      id="year"
                      value={formData.year}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border border-gray-300 rounded-lg bg-white text-black"
                      required
                    >
                      <option value="">Select Year</option>
                      <option value="1">1st Year</option>
                      <option value="2">2nd Year</option>
                      <option value="3">3rd Year</option>
                      <option value="4">4th Year</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="linkedIn" className="block text-sm font-medium text-sky-800">LinkedIn Profile (optional)</label>
                    <input
                      type="url"
                      name="linkedIn"
                      id="linkedIn"
                      value={formData.linkedIn}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border border-gray-300 rounded-lg bg-white text-black"
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>

                  <div>
                    <label htmlFor="github" className="block text-sm font-medium text-sky-800">GitHub Profile (optional)</label>
                    <input
                      type="url"
                      name="github"
                      id="github"
                      value={formData.github}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border border-gray-300 rounded-lg bg-white text-black"
                      placeholder="https://github.com/yourprofile"
                    />
                  </div>
                  <div className="flex items-center justify-between space-x-2">
                    <button
                      className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
                      onClick={prevStep}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      <span>Back</span>
                    </button>


                    <button
                      className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
                      onClick={nextStep}
                    >
                      <span>Next</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Additional Details */}
              {step === 3 && (

                <div className="space-y-4">

                  <h1 className="text-md md:text-xl font-semibold text-center text-gray-800">Additional Details</h1>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-sky-800">Preferred Domains (max up to 3)</label>
                    <div className="grid grid-cols-1 gap-2 text-black">
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="preferredDomains"
                          value="R&D"
                          checked={formData.preferredDomains.includes('R&D')}
                          onChange={handleChange}
                          className="form-checkbox"
                        />
                        <span className="ml-2 text-sm md:text-base">Research and Development (R&D)</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="preferredDomains"
                          value="RAS"
                          checked={formData.preferredDomains.includes('RAS')}
                          onChange={handleChange}
                          className="form-checkbox"
                        />
                        <span className="ml-2 text-sm md:text-base">Robotics and Automation Society (RAS)</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="preferredDomains"
                          value="IAS"
                          checked={formData.preferredDomains.includes('IAS')}
                          onChange={handleChange}
                          className="form-checkbox"
                        />
                        <span className="ml-2 text-sm md:text-base">Industrial Automation Society (IAS)</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="preferredDomains"
                          value="CES"
                          checked={formData.preferredDomains.includes('CES')}
                          onChange={handleChange}
                          className="form-checkbox"
                        />
                        <span className="ml-2 text-sm md:text-base">Consumer Electronics Society (CES)</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="preferredDomains"
                          value="PELS"
                          checked={formData.preferredDomains.includes('PELS')}
                          onChange={handleChange}
                          className="form-checkbox"
                        />
                        <span className="ml-2 text-sm md:text-base">Power Electronics Society (PELS)</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="preferredDomains"
                          value="WIE"
                          checked={formData.preferredDomains.includes('WIE')}
                          onChange={handleChange}
                          className="form-checkbox"
                        />
                        <span className="ml-2 text-sm md:text-base">Women in Engineering (WIE)</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="preferredDomains"
                          value="WAD"
                          checked={formData.preferredDomains.includes('WAD')}
                          onChange={handleChange}
                          className="form-checkbox"
                        />
                        <span className="ml-2 text-sm md:text-base">Web and App Development (WAD)</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="preferredDomains"
                          value="S&M"
                          checked={formData.preferredDomains.includes('S&M')}
                          onChange={handleChange}
                          className="form-checkbox"
                        />
                        <span className="ml-2 text-sm md:text-base">Sponsorship and Marketing (S&M)</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="preferredDomains"
                          value="M&C"
                          checked={formData.preferredDomains.includes('M&C')}
                          onChange={handleChange}
                          className="form-checkbox"
                        />
                        <span className="ml-2 text-sm md:text-base">Media and Content (M&C)</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="preferredDomains"
                          value="CLP"
                          checked={formData.preferredDomains.includes('CLP')}
                          onChange={handleChange}
                          className="form-checkbox"
                        />
                        <span className="ml-2 text-sm md:text-base">Corporate, Logistics and Publicity (CLP)</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-sky-800">Previous Work Experience (if any)</label>
                    <textarea
                      name="experience"
                      id="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border border-gray-300 rounded-lg bg-white text-black"
                      placeholder="Briefly describe your experience"
                    />
                  </div>

                  <div>
                    <label htmlFor="resumeDriveLink" className="block text-sm font-medium text-sky-800">Resume Drive Link (Optional)</label>
                    <label className="block text-sm font-medium text-black">Note: Make sure the file's access is set to "Anyone with link" or "SRM Institute of Science and Technology"</label>
                    <input
                      name="resumeDriveLink"
                      id="resumeDriveLink"
                      value={formData.resumeDriveLink}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border border-gray-300 rounded-lg bg-white text-black"
                      placeholder="Make sure the link is accessible to anyone with the link"
                    />
                  </div>
                  <div className="flex items-center justify-between space-x-2">
                    <button
                      className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
                      onClick={prevStep}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      <span>Back</span>
                    </button>

                    <button
                      className="flex items-center space-x-2 text-sky-800 hover:text-sky-500 transition-colors duration-300"
                      onClick={handleSubmit}
                    >
                      <span>{isLoading ? 'Submitting...' : 'Submit'}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}

              {isModalOpen && (
                <ModalPopup
                  message={errorMessage}
                  onClose={() => setIsModalOpen(false)}
                />
              )}

            </form>
          </div>)}
      </div>
    </section>
  );
};

export default RecruitmentForm;
