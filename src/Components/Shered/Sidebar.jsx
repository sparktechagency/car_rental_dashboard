import React, { useEffect, useRef, useState } from 'react'
import { BsArchive } from 'react-icons/bs'
import { FaUserLarge, FaUsersLine } from 'react-icons/fa6'
import { GoProjectRoadmap } from 'react-icons/go'
import { IoIosArrowForward } from 'react-icons/io'
import { IoSettings } from 'react-icons/io5'
import { LuFilePlus } from 'react-icons/lu'
import { MdDashboard, MdEvent } from 'react-icons/md'
import { RiFeedbackLine } from 'react-icons/ri'
import { SiHomeassistantcommunitystore } from 'react-icons/si'
import { Link, NavLink } from 'react-router-dom'
import { RiBarChart2Line } from "react-icons/ri";
const Sidebar = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const contentRefs = useRef([]);
    const links = [
        {
            path: '/',
            label: 'Dashboard',
            icon: <MdDashboard />,
            sub_menu: false
        },
        {
            path: '/create-project',
            label: 'Create Project',
            icon: <GoProjectRoadmap />,
            sub_menu: false
        },
        {
            path: '/create-survey',
            label: 'Create Survey',
            icon: <LuFilePlus />,
            sub_menu: false
        },
        {
            path: '/manage-company',
            label: 'Manage Company',
            icon: <SiHomeassistantcommunitystore />,
            sub_menu: false
        },
        {
            path: '/manage-event',
            label: 'Manage Event',
            icon: <MdEvent />,
            sub_menu: false
        },

        {
            path: '/survey-result',
            label: 'Survey Result',
            icon: <RiBarChart2Line />,
            sub_menu: false
        },

        {
            path: '/archive',
            label: 'Archive',
            icon: <BsArchive />,
            sub_menu: false
        },
        {
            path: '#',
            label: 'Settings',
            icon: <IoSettings />,
            sub_menu: [
                {
                    path: '/privacy-policy',
                    label: 'Privacy Policy',
                    icon: <></>,
                },
                {
                    path: '/terms',
                    label: 'Terms & Condition',
                    icon: <></>,
                },
                {
                    path: '/profile',
                    label: 'Profile',
                    icon: <></>,
                },
            ]
        },
    ]
    const toggleAccordion = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    useEffect(() => {
        if (openIndex !== null && contentRefs.current[openIndex]) {
            contentRefs.current[openIndex].style.maxHeight = `${contentRefs.current[openIndex].scrollHeight}px`;
        }
        contentRefs.current.forEach((ref, index) => {
            if (ref && index !== openIndex) {
                ref.style.maxHeight = '0px';
            }
        });
    }, [openIndex]);
    return (
        <div id='sidebar' className=' w-full h-full mt-10'>
            <div className="log mb-5">
                <Link to={`/`}><img src="../../../src/assets/logo.png" alt="Logo" /></Link>
            </div>

            <div className='start-start flex-col gap-5 text-white'>
                {
                    links.map((item, index) => {
                        if (item?.sub_menu) {
                            return (<div onClick={() => {
                                toggleAccordion(index)
                            }} key={index} className='w-full'>
                                <div className='start-center gap-2 w-full py-2 bg-[var(--color-3)] px-4 cursor-pointer'>
                                    {item?.icon}
                                    {item?.label}
                                    <IoIosArrowForward />
                                </div>
                                <div ref={(el) => (contentRefs.current[index] = el)}
                                    className=' accordion-content overflow-hidden transition-max-height duration-300 ease-in-out cursor-pointer mt-1 bg-[var(--color-1)]'
                                    style={{
                                        maxHeight: openIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : '0px'
                                    }}
                                >
                                    {
                                        item?.sub_menu?.map((sub_item, index) => <NavLink to={sub_item?.path}
                                            key={index}
                                            className=' start-center px-4 gap-2 w-full py-2 bg-[var(--color-3)] cursor-pointer my-1'>
                                            {sub_item?.icon}
                                            {sub_item?.label}
                                        </NavLink>
                                        )
                                    }
                                </div>
                            </div>)
                        } else {
                            return (
                                <NavLink
                                    className='mt-4 start-center gap-2 w-full py-2 bg-[var(--color-3)] px-4 cursor-pointer'
                                    to={item?.path}>
                                    {item?.icon}
                                    {item?.label}
                                </NavLink>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default Sidebar
