import { Input, message } from 'antd';
import React, { useState } from 'react';
import { CiMail } from 'react-icons/ci';
import { FiPhone } from 'react-icons/fi';
import { GoArrowLeft } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { useAddContactMutation } from '../../redux/Api/dashboardApi';

const ContactUs = () => {
    const [contact, { isLoading }] = useAddContactMutation();
    const [formData, setFormData] = useState({
        callToUs: ["", ""],
        writeToUs: ["", ""]
    });

    // Handle Input Change
    const handleChange = (e, index, type) => {
        const updatedData = { ...formData };
        updatedData[type][index] = e.target.value;
        setFormData(updatedData);
    };

    // Handle Form Submission
    const handleSubmit = async () => {
        try {
            const response = await contact(formData).unwrap();
            message.success(response.message || "Contact details updated successfully!");
        } catch (error) {
            console.error("Error updating contact:", error);
            message.error(error?.data?.message || "Failed to update contact details!");
        }
    };

    return (
        <div className='bg-white p-5 rounded-md'>
            <div className='flex justify-between items-center'>
                <Link to={-1} className='flex items-center gap-2'>
                    <GoArrowLeft /> Contact Us
                </Link>
            </div>

            <div className='flex items-center justify-between max-w-5xl mx-auto mt-20'>
                {/* Call To Us Section */}
                <div className='space-y-5'>
                    <p className='flex items-center gap-2'><FiPhone size={22} /> Call To Us</p>
                    <Input
                        placeholder='+999999999'
                        value={formData.callToUs[0]}
                        onChange={(e) => handleChange(e, 0, "callToUs")}
                    />
                    <Input
                        placeholder='+999999999'
                        value={formData.callToUs[1]}
                        onChange={(e) => handleChange(e, 1, "callToUs")}
                    />
                </div>

                {/* Write To Us Section */}
                <div className='space-y-5'>
                    <p className='flex items-center gap-2'><CiMail size={22} /> Write To Us</p>
                    <Input
                        placeholder='example@gmail.com'
                        value={formData.writeToUs[0]}
                        onChange={(e) => handleChange(e, 0, "writeToUs")}
                    />
                    <Input
                        placeholder='example@gmail.com'
                        value={formData.writeToUs[1]}
                        onChange={(e) => handleChange(e, 1, "writeToUs")}
                    />
                </div>
            </div>

            {/* Save Button */}
            <div className='flex items-center justify-center mt-[45vh]'>
                <button
                    className='bg-black text-white px-10 py-3'
                    onClick={handleSubmit}
                    disabled={isLoading}
                >
                    {isLoading ? "Saving..." : "Save"}
                </button>
            </div>
        </div>
    );
};

export default ContactUs;
