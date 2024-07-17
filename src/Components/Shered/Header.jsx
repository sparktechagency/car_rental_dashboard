import { Badge } from 'antd'
// import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {IoIosNotificationsOutline} from "react-icons/io";

const Header = () => {
    const navigate = useNavigate()
    return (
        <div className='w-full py-4 bg-[var(--color-7)] end-center  gap-4'>
            <div onClick={()=>navigate('/notification')}>
            <Link to="/feedback" style={{boxShadow: "0px 0px 10px 2px rgba(0,0,0,0.24)"}} className=' bg-[#F2F2F2] h-10 w-10 rounded-full p-2'>
                <Badge color="#C30303" count={1}>
                    <IoIosNotificationsOutline color="#6A6A6A" size={24} />
                </Badge>
            </Link>
            </div>
            <div onClick={()=>navigate('/profile')} className='end-center gap-1 border-gray-400 p-[2px] px-4 rounded-md cursor-pointer'>
                <img className='h-10 w-10 rounded-full' src="https://i.ibb.co/NsQSrWd/images-15.jpg" alt="" />
                <p className='font-medium'>Mohammad Jusef</p>
            </div>
        </div>
    )
}

export default Header
