import { Form, Input, Modal, Table } from 'antd';
import React, { useState } from 'react'
import { CgLayoutGrid } from 'react-icons/cg';
import { CiSearch } from 'react-icons/ci';
import { FaEdit, FaRegEye, FaStar } from 'react-icons/fa';
import { FaArrowLeftLong, FaPlus } from 'react-icons/fa6';
import { GoArrowLeft } from 'react-icons/go';
import { IoArrowBackSharp } from 'react-icons/io5';
import { MdOutlineDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
const dataSource = [
    {
        id: '1',
        ProjectName: 'Mike',
        date: '05/12/2024',
    }
]

const ManageItems = () => {
    const [openAddModal, setOpenAddModal] = useState(false)
    const [category, setCategory ] = useState(false)
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
    console.log(category)
    return (
        <div className='rounded-md'>
            <div className='  my-2 pt-5'>
                <div className='start-center gap-2 mb-3 p-5'>

                    <p className='flex items-center gap-2'> <GoArrowLeft />Manage Items</p>
                </div>
                <div className='flex justify-between items-center'>
                    {/* <Input className='max-w-[250px] h-10' prefix={<CiSearch className='text-2xl' />} placeholder="Search" /> */}
                    <div className='flex items-center gap-5'>
                        <button onClick={()=>setCategory(true)} className={` ${category ? 'bg-[#3475F1] text-white' : 'border border-[#3475F1] text-[#3475F1]'} px-4 rounded-sm start-center gap-1 py-2  flex justify-center items-center whitespace-nowrap`}>

                            Category
                        </button>
                        <button onClick={()=>setCategory(false)} className={` ${category ? 'border border-[#3475F1] text-[#3475F1]' : 'bg-[#3475F1] text-white'}  px-4 rounded-sm start-center gap-1 py-2  flex justify-center items-center whitespace-nowrap`}>

                            Items
                        </button>
                    </div>
                    <button onClick={() => setOpenAddModal(true)} className='bg-[#3475F1] px-4 rounded-sm start-center gap-1 py-2 text-white flex justify-center items-center whitespace-nowrap'>
                        <FaPlus />
                        Add Item
                    </button>
                </div>
            </div>
            {
                category  ? <p>shukumar</p> : <Table dataSource={dataSource} columns={columns} />
            }
            
            <Modal
                open={openAddModal}
                centered
                footer={false}
                onCancel={() => setOpenAddModal(false)}
            >
                <div>
                    <p className='text-xl py-2 font-semibold'>Create new Project</p>
                    <Form className=''
                        layout='vertical'
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name={`surveyName`}
                            label={`Survey Name`}
                            rules={[
                                {
                                    message: 'Survey Name is required',
                                    required: true
                                }
                            ]}
                        >
                            <Input className='pb-8 pt-2 border outline-none' placeholder='Type survey name here...' />
                        </Form.Item>
                        <button className='w-full py-2 bg-[var(--color-2)] text-white font-semibold rounded-md'>
                            save
                        </button>
                    </Form>
                </div>
            </Modal>
        </div>
    )
}

export default ManageItems;
