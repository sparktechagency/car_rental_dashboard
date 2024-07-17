import React from 'react'
import SurveyRequest from '../Components/Dashboard/SurveyRequest'
import { Input } from 'antd'
import { CiSearch } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { IoArrowBackSharp } from 'react-icons/io5'

const TotalSurveyRequest = () => {
    return (
        <div>
            <div className='between-center px-3 my-2 pt-5'>
                <div className='start-center gap-2 mb-3 p-5'>
                    <Link to={-1} className='bg-[var(--color-2)] py-1 px-2 rounded-md start-center gap-1 text-white'><IoArrowBackSharp />back</Link>
                    <p className='text-xl'>Survey Request</p>
                </div>
                <Input className='max-w-[250px] h-10' prefix={<CiSearch className='text-2xl' />} placeholder="Search" />
            </div>
            <SurveyRequest />
        </div>
    )
}

export default TotalSurveyRequest
