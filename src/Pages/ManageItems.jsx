import { Form, Input, Modal, Table } from 'antd';
import React, { useState } from 'react'
import { CgLayoutGrid } from 'react-icons/cg';
import { CiSearch } from 'react-icons/ci';
import { FaEdit, FaRegEye, FaStar } from 'react-icons/fa';
import { FaArrowLeftLong, FaPlus } from 'react-icons/fa6';
import { GoArrowLeft } from 'react-icons/go';
import { MdOutlineDelete } from 'react-icons/md';
import { Select } from 'antd'
import { TbCopyCheck } from 'react-icons/tb';
import { RxCross2 } from 'react-icons/rx';
import ManageItemTable from '../Components/ManageItemTable.jsx/ManageItemTable';
import ManageCategoryTable from '../Components/ManageCategoryTable/ManageCategoryTable';

const ManageItems = () => {
    const [openAddModal, setOpenAddModal] = useState(false)
    const [category, setCategory] = useState(false)
    const columns = [
        {
            title: 'Serial No',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Projects Name',
            dataIndex: 'ProjectName',
            key: 'ProjectName ',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date  ',
        },
        {
            title: 'Actions',
            dataIndex: 'key',
            key: 'key',
            render: (_, record) => {
                return (<div className='start-center text-2xl gap-1 text-red-600'>
                    {/* <MdEdit className='cursor-pointer' /> */}
                    <MdOutlineDelete className='cursor-pointer' />
                </div>)
            }
        },
    ];
    const onFinish = (value) => {

    }


    const handleCategoryChange = (value) => {
        console.log(value);
    };
    const handleEligibleSwapChange = (value) => {
        console.log(value);
    };


    return (
        <div className='rounded-md'>
            <div className='  my-2 pt-5'>
                <div className='start-center gap-2 mb-3 p-5'>

                    <p className='flex items-center gap-2'> <GoArrowLeft />Manage Items</p>
                </div>
                <div className='flex justify-between items-center'>
                    {/* <Input className='max-w-[250px] h-10' prefix={<CiSearch className='text-2xl' />} placeholder="Search" /> */}
                    <div className='flex items-center gap-5'>
                        <button onClick={() => setCategory(true)} className={` ${category ? 'bg-[#3475F1] text-white' : 'border border-[#3475F1] text-[#3475F1]'} px-4 rounded-sm start-center gap-1 py-2  flex justify-center items-center whitespace-nowrap`}>

                            Category
                        </button>
                        <button onClick={() => setCategory(false)} className={` ${category ? 'border border-[#3475F1] text-[#3475F1]' : 'bg-[#3475F1] text-white'}  px-4 rounded-sm start-center gap-1 py-2  flex justify-center items-center whitespace-nowrap`}>

                            Items
                        </button>
                    </div>
                    <button onClick={() => setOpenAddModal(true)} className='bg-[#3475F1] px-4 rounded-sm start-center gap-1 py-2 text-white flex justify-center items-center whitespace-nowrap'>
                        <FaPlus />
                        Add Item
                    </button>
                </div>
            </div>


            {/* Category section */}

            <div className='flex justify-between item-center my-5'>
                <div>
                    <p className=''>Category</p>

                </div>
                <div>
                    <p>Sub Category</p>
                </div>
                <div>
                    <p>Eligible Swap Member</p>
                </div>
            </div>

            {
                category ? <ManageCategoryTable/> : <ManageItemTable/>
            }

            <Modal
                open={openAddModal}
                centered
                footer={false}
                onCancel={() => setOpenAddModal(false)}
            >
                <div>
                    <p className='text-xl text-center py-2 font-semibold'>Add Item</p>
                    <Form className=''
                        layout='vertical'
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name={`Item Name`}
                            label={`Item Name`}
                            rules={[
                                {
                                    message: 'Item Name is required',

                                }
                            ]}
                        >
                            <Input className=' border outline-none' placeholder='' />
                        </Form.Item>
                        <Form.Item
                            name={`Category`}
                            label={`Category`}
                            rules={[
                                {
                                    message: 'Category is required',

                                }
                            ]}
                        >
                            <Select
                                labelInValue
                                defaultValue={{
                                    value: 'lucy',
                                    label: 'Lucy (101)',
                                }}
                                style={{
                                    // width: ,
                                }}
                                onChange={handleCategoryChange}
                                options={[
                                    {
                                        value: 'jack',
                                        label: 'Jack (100)',
                                    },
                                    {
                                        value: 'lucy',
                                        label: 'Lucy (101)',
                                    },
                                ]}
                            />
                        </Form.Item>
                        <Form.Item
                            name={`Eligible Swap Level`}
                            label={`Eligible swap level`}
                            rules={[
                                {
                                    message: 'Eligible swap level is required',

                                }
                            ]}
                        >
                            <Select
                                labelInValue
                                defaultValue={{
                                    value: 'lucy',
                                    label: 'Lucy (101)',
                                }}
                                style={{
                                    // width: ,
                                }}
                                onChange={handleEligibleSwapChange}
                                options={[
                                    {
                                        value: 'jack',
                                        label: 'Jack (100)',
                                    },
                                    {
                                        value: 'lucy',
                                        label: 'Lucy (101)',
                                    },
                                ]}
                            />
                        </Form.Item>
                        <div className='flex items-center gap-2'>
                            <button className='flex items-center gap-1 py-2 px-4 bg-[#3475F1]  text-white font-semibold rounded-sm'>
                                <TbCopyCheck /> save
                            </button>
                            <button className='py-2 px-4 flex items-center gap-1 bg-red-600 text-white font-semibold rounded-sm'>
                                <RxCross2 /> Cancel
                            </button>
                        </div>

                    </Form>
                </div>
            </Modal>
        </div>
    )
}

export default ManageItems;
