import React from 'react'
import { useState, ChangeEvent } from 'react';

const RegistrationForm = () => {

    interface SquadDetails {
        squadName: string;
        squadSize: string;
        squadMaster: {
            name?: string;
            registerNumber?: string;
            email?: string;
            department?: string;
            contactNumber?: string;
        };
        squadMember2?: {
            name?: string;
            registerNumber?: string;
            email?: string;
            department?: string;
        };
        squadMember3?: {
            name?: string;
            registerNumber?: string;
            email?: string;
            department?: string;
        };
        squadMember4?: {
            name?: string;
            registerNumber?: string;
            email?: string;
            department?: string;
        };
        squadMember5?: {
            name?: string;
            registerNumber?: string;
            email?: string;
            department?: string;
        };

        [key: string]: any;

    }

    const [squadDetails, setSquadDetails] = useState<SquadDetails>({
        squadName: '',
        squadSize: '',
        squadMaster: {},
        squadMember2: {},
        squadMember3: {},
        squadMember4: {},
        squadMember5: {},
    });
    const handleInputChange = (field: string, value: any) => {
        setSquadDetails((prev) => ({
          ...prev,
          [field]: value,
        }));
    };
    const handleMemberInputChange = (memberNo: number, field: string, value: string) => {
        setSquadDetails((prev) => ({
          ...prev,
          [`squadMember${memberNo}`]: {
            ...prev[`squadMember${memberNo}`],
            [field]: value,
          },
        }));
      };

    const [selectedMembers, setSelectedMembers] = useState<number | ''>('');
    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        const parsedValue = value !== '' ? parseInt(value, 10) : '';

        setSelectedMembers(parsedValue);
        if (typeof parsedValue === 'number') {
          handleInputChange('squadSize', (parsedValue + 1).toString());
        }
    };

    const validateForm = () => {

        if (!squadDetails.squadName.trim()) {
          alert('Squad Name is required');
          return false;
        }
    
        if (!squadDetails.squadSize.trim()) {
          alert('Select the number of squad members');
          return false;
        }

        if (!squadDetails.squadMaster?.name?.trim()) {
          alert('Squad Master name is required');
          return false;
        }

        if (!squadDetails.squadMaster?.registerNumber?.trim()) {
          alert('Squad Master register number is required');
          return false;
        }

        if (!squadDetails.squadMaster?.email?.trim()) {
          alert('Squad Master email is required');
          return false;
        }

        if (!squadDetails.squadMaster?.department?.trim()) {
          alert('Squad Master department is required');
          return false;
        }

        if (!squadDetails.squadMaster?.contactNumber?.trim()) {
          alert('Squad Master contact number is required');
          return false;
        }

        if (selectedMembers) {
          for (let i = 2; i <= selectedMembers + 1; i++) {
            if (!validateMember(i)) {
              return false;
            }
          }
        }
    
        return true;
    };

    const validateMember = (memberNo: number) => {
        if (!squadDetails[`squadMember${memberNo}`]?.name?.trim()) {
          alert(`Squad Member ${memberNo} name is required`);
          return false;
        }
    
        if (!squadDetails[`squadMember${memberNo}`]?.registerNumber?.trim()) {
          alert(`Squad Member ${memberNo} register number is required`);
          return false;
        }
    
        if (!squadDetails[`squadMember${memberNo}`]?.email?.trim()) {
          alert(`Squad Member ${memberNo} email is required`);
          return false;
        }
    
        if (!squadDetails[`squadMember${memberNo}`]?.department?.trim()) {
          alert(`Squad Member ${memberNo} department is required`);
          return false;
        }
        return true;
    };
    

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (validateForm()) {
            // Perform form submission logic here
            console.log('Form submitted successfully!', squadDetails);
        }
    };

    return (
        <div>

            <div className="max-w-[85rem] lg:rounded-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-10 mx-auto bg-white font-body">
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-4 lg:py-6 mx-auto">
                    <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">

                        {/* Hero */}
                        <div>
                            <div className="mt-4 md:mb-12 max-w-2xl">
                            <h1 className="mb-4 font-bold text-black text-4xl lg:text-5xl">
                                Hacking makes you lose CTRL: Register for <span className="text-orange">HackTrix-24</span>
                            </h1>
                                <p className="text-gray-600">
                                    Embark on a journey of innovation and collaboration by registering for HackTrix-24! This is your chance to be part of a dynamic hackathon where brilliant minds come together to push the boundaries of technology. Whether you're a coding maestro, a design virtuoso, or a visionary with big ideas, HackTrix-24 welcomes you to showcase your talents and contribute to the future of tech.
                                </p>
                            </div>
                        </div>

                        {/* Form */}
                        <div>
                            <form onSubmit={handleSubmit}>
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
                                                <div className="lg:grid gap-4 lg:grid-cols-2 font-body font-semibold">
                                                    <input 
                                                        type="text" 
                                                        className="py-3 px-5 block w-full xs:mb-4 lg:mb-0 border border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-full text-sm text-black disabled:opacity-50 disabled:pointer-events-none" 
                                                        placeholder="Squad Name" 
                                                        value={squadDetails.squadName} 
                                                        onChange={(e) => handleInputChange('squadName', e.target.value.toUpperCase())} 
                                                    />
                                                    
                                                    <select 
                                                        className="py-3 px-5 block w-full xs:mb-4 lg:mb-0 border border-gray-200 focus:border-orange rounded-full text-sm text-grey disabled:opacity-50 disabled:pointer-events-none hover:bg-orange-500"
                                                        onChange={handleSelectChange}
                                                        value={selectedMembers}
                                                    >
                                                        <option value="" disabled selected hidden>Squad members (2-5)</option>
                                                        <option value="1">2</option>
                                                        <option value="2">3</option>
                                                        <option value="3">4</option>
                                                        <option value="4">5</option>
                                                    </select>
                                                    
                                                    <input 
                                                        type="text" 
                                                        className="py-3 px-5 block w-full xs:mb-4 lg:mb-0 border border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-full text-sm text-black disabled:opacity-50 disabled:pointer-events-none" 
                                                        placeholder="Squad Master"  
                                                        value={squadDetails.squadMaster.name} 
                                                        onChange={(e) => handleInputChange('squadMaster', { ...squadDetails.squadMaster, name: e.target.value })}
                                                    />

                                                    <input 
                                                        type="text" 
                                                        className="py-3 px-5 block w-full xs:mb-4 lg:mb-0 border border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-full text-sm text-black disabled:opacity-50 disabled:pointer-events-none" 
                                                        placeholder="Register Number" 
                                                        value={squadDetails.squadMaster.registerNumber} 
                                                        onChange={(e) => handleInputChange('squadMaster', { ...squadDetails.squadMaster, registerNumber: e.target.value })}
                                                    />

                                                    <input 
                                                        type="text" 
                                                        className="py-3 px-5 block w-full xs:mb-4 lg:mb-0 border border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-full text-sm text-black disabled:opacity-50 disabled:pointer-events-none" 
                                                        placeholder="SquadMaster@srmist.edu.in" 
                                                        value={squadDetails.squadMaster.email} 
                                                        onChange={(e) => handleInputChange('squadMaster', { ...squadDetails.squadMaster, email: e.target.value })}
                                                    />

                                                    <input 
                                                        type="text" 
                                                        className="py-3 px-5 block w-full xs:mb-4 lg:mb-0 border border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-full text-sm text-black disabled:opacity-50 disabled:pointer-events-none" 
                                                        placeholder="Department" 
                                                        value={squadDetails.squadMaster.department} 
                                                        onChange={(e) => handleInputChange('squadMaster', { ...squadDetails.squadMaster, department: e.target.value })}
                                                    />

                                                    <input 
                                                        type="text" 
                                                        pattern='[0-9]{10}'
                                                        title="10-digit phone number required"
                                                        className="py-3 px-5 block w-full xs:mb-4 lg:mb-0 border border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-full text-sm text-black disabled:opacity-50 disabled:pointer-events-none"
                                                        placeholder="Contact Number" 
                                                        value={squadDetails.squadMaster.contactNumber} 
                                                        onChange={(e) => handleInputChange('squadMaster', { ...squadDetails.squadMaster, contactNumber: e.target.value })}
                                                    />

                                                </div>
                                                <div className="font-body font-semibold">
                                                    {[...Array(selectedMembers)].map((_, index) => (
                                                        <SquadMember 
                                                            key={index + 1}
                                                            memberNo={index + 2} 
                                                            details={squadDetails[`squadMember${index + 2}`]}
                                                            onChange={handleMemberInputChange}
                                                        />
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Register Button */}
                                            <div className="mt-6">
                                                <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-body font-semibold rounded-lg border border-transparent bg-orange text-white transform transition-transform hover:scale-105 disabled:opacity-50 disabled:pointer-events-none">
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

interface SquadMemberProps {
    memberNo: number;
    details: {
        [key: string]: string;
    };
    onChange: (memberNo: number, field: string, value: string) => void;
}
  
const SquadMember: React.FC<SquadMemberProps> = ({ memberNo, details, onChange }) => {

    const handleFieldChange = (field: string, value: string) => {
        onChange(memberNo, field, value);
    };

    return (
        <>
            <div className="py-3 flex items-center xs:mb-4 lg:mb-0 font-body font-semibold text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6">
                SQUAD MEMBER #{memberNo}
            </div>
            <div className="lg:grid gap-4 lg:grid-cols-2 ">

                <input 
                    type="text" 
                    className="py-3 px-5 block w-full border border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-full text-sm text-black disabled:opacity-50 disabled:pointer-events-none" 
                    placeholder={`Squad Member ${memberNo}`} 
                    value={details.name} 
                    onChange={(e) => handleFieldChange('name', e.target.value)}
                />

                <input 
                    type="text" 
                    className="py-3 px-5 block w-full xs:mb-4 lg:mb-0 border border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-full text-sm text-black disabled:opacity-50 disabled:pointer-events-none" 
                    placeholder="Register Number" 
                    value={details.registerNumber} 
                    onChange={(e) => handleFieldChange('registerNumber', e.target.value)}
                />

                <input 
                    type="text" 
                    className="py-3 px-5 block w-full border border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-full text-sm text-black disabled:opacity-50 disabled:pointer-events-none" 
                    placeholder={`SquadMaster${memberNo}@srmist.edu.in`} 
                    value={details.email} 
                    onChange={(e) => handleFieldChange('email', e.target.value)}
                />

                <input 
                    type="text" 
                    className="py-3 px-5 block w-full xs:mb-4 lg:mb-0 border border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-full text-sm text-black disabled:opacity-50 disabled:pointer-events-none" 
                    placeholder="Department" 
                    value={details.department} 
                    onChange={(e) => handleFieldChange('department', e.target.value)}
                />

            </div>
        </>
    );
}

export default RegistrationForm