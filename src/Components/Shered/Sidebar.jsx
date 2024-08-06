import  { useEffect, useRef, useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { IoSettings } from 'react-icons/io5'
import { MdOutlineCategory } from 'react-icons/md'
import { RiBarChartGroupedFill,  } from 'react-icons/ri'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { CiLogout } from "react-icons/ci";
import { HiOutlineUser } from 'react-icons/hi'
import { FaArrowTrendUp } from 'react-icons/fa6'
import { CgNotes } from 'react-icons/cg'
import { WiTime2 } from 'react-icons/wi'
import media from '../../assets/images/media.png'
import sub from '../../assets/images/sub.png'
import dash from '../../assets/images/dashboard.png'
import income1 from '../../assets/images/income1.png'
import user from '../../assets/images/userSide.png'
import category from '../../assets/images/category.png'
import setting from '../../assets/images/setting.png'


const Sidebar = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const contentRefs = useRef([]);

    // const admin = false;

    const links = [
        {
            path: '/',
            label: 'Dashboard',
            icon:<img src={dash}  style={{ fill: 'black' }} /> ,
            sub_menu: false
        },

        {
            path: '/income', 
            label: 'Income',
            icon: <img src={income1}  />,
            sub_menu: false
        },
        {
            path: '/subscription',
            label: 'Subscription',
            icon: <img src={sub}  />,
            sub_menu: false
        },
        {
            path: '/user-details',
            label: 'User Details',
            icon: <img src={user}  />,
            sub_menu: false
        },

        {
            path: '/manage-items',
            label: 'Manage Items',
            icon: <img src={category}  />,
            sub_menu: false
        },
        {
            path: '/media-settings',
            label: 'Media Settings',
            icon: <img src={media}  />,
            sub_menu: false
        },

        // {
        //     path: '/create-project',
        //     label: 'Create Project',
        //     icon: <GoProjectRoadmap />,
        //     sub_menu: false
        // },
        // {
        //     path: '/create-survey',
        //     label: 'Create Survey',
        //     icon: <LuFilePlus />,
        //     sub_menu: false
        // },
        // {
        //     path: '/manage-company',
        //     label: 'Manage Company',
        //     icon: <SiHomeassistantcommunitystore />,
        //     sub_menu: false
        // },

        // {
        //     path: '/survey-result',
        //     label: 'Survey Result',
        //     icon: <RiBarChart2Line />,
        //     sub_menu: false
        // },

        // {
        //     path: '/archive',
        //     label: 'Archive',
        //     icon: <BsArchive />,
        //     sub_menu: false
        // },
        {
            path: '#',
            label: 'Settings',
            icon: <img src={setting}  />,
            sub_menu: [
                {
                    path: '/profile',
                    label: 'Profile',
                    icon: <></>,
                },
                {
                    path: '/terms',
                    label: 'About Us',
                    icon: <></>,
                },
                {
                    path: '/rules-regulation',
                    label: 'Rules & Regulations',
                    icon: <></>,
                },
                {
                    path: '/facts',
                    label: 'Facts',
                    icon: <></>,
                },
                

            ]
        },


    ]

    const navigate = useNavigate();
    const handleLogOut = () => {
        navigate("/auth/login")
    }
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

            <div className='start-start flex-col gap-5 mt-5 text-black'>
                {
                    links.map((item, index) => {
                        if (item?.sub_menu) {
                            return (<div onClick={() => {
                                toggleAccordion(index)
                            }} key={index} className='w-full'>
                                <div className='start-center gap-2 w-full py-2 bg-[var(--color-7)] px-4 cursor-pointer'>
                                    {item?.icon}
                                    {item?.label}
                                    <IoIosArrowForward />
                                </div>
                                <div ref={(el) => (contentRefs.current[index] = el)}
                                    className=' accordion-content overflow-hidden transition-max-height duration-300 ease-in-out cursor-pointer mt-1 bg-[var(--color-8)]'
                                    style={{
                                        maxHeight: openIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : '0px'
                                    }}
                                >
                                    {
                                        item?.sub_menu?.map((sub_item, index) => <NavLink to={sub_item?.path}
                                            key={index}
                                            className=' start-center px-4 gap-2 w-full py-2 bg-[var(--color-7)] cursor-pointer my-1'>
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
                                    className='mt-4 start-center gap-2 w-full py-2 bg-[var(--color-7)] px-4 cursor-pointer'
                                    to={item?.path}>
                                    {item?.icon}
                                    {item?.label}
                                </NavLink>
                            )
                        }
                    })
                }
            </div>


            <div
                onClick={handleLogOut}
                className="flex text-[#FDFDFD] items-center gap-3 cursor-pointer px-6 hover:bg-white-500 py-2 mt-10 transition-all"
            >
                <CiLogout size={24} color="#FDFDFD" />
                Log Out
            </div>


        </div>
    )
}

export default Sidebar
