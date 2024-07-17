import React, { useState } from 'react'
import { IoArrowBackSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import {Input, Select} from "antd";
import {FaPlus} from "react-icons/fa6";
import {CiSearch} from "react-icons/ci";
import Chart from "../Pages/Chart.jsx"
const ProjectDetails = () => {
     const [tab, setTab] = useState('Project Details')

    return (

        <div className='bg-[var(--color-7)] p-4 rounded-md'>
            <div className='between-center px-3 my-2 pt-5 pb-5'>
                <div className='start-center gap-2 mb-3 p-5'>
                    <Link to={-1}
                          className='bg-[var(--color-2)] py-1 px-2 rounded-md start-center gap-1 text-white'><IoArrowBackSharp/>back</Link>
                    <p className='text-xl'>Project Details</p>
                </div>
                <div className='end-center gap-2'>
                    <Input className='max-w-[250px] h-10' prefix={<CiSearch className='text-2xl'/>}
                           placeholder="Search"/>
                    <Link to={`/add-project`}
                          className='bg-[var(--color-2)] px-4 rounded-md start-center gap-1 py-2 text-white flex justify-center items-center whitespace-nowrap'>
                        Add New Project
                        <FaPlus/>
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
                <div>
                    <h1 className='font-bold'>Project Name</h1>
                    <p>Employee Feedback</p>
                </div>
                <div>
                    <h1 className='font-bold'>Survey Name</h1>
                    <p>Survey 2</p>
                </div>
                <div>
                    <h1 className='font-bold'>Total Question</h1>
                    <p>30</p>
                </div>
                <div>
                    <h1 className='font-bold'>Total Survey Do</h1>
                    <p>150</p>
                </div>
            </div>
<Chart/>
        </div>
    )
}
export default ProjectDetails
