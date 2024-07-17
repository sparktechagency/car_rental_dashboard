import { Form, Input, Modal, Select, Table } from 'antd';
import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci';
import { FaEdit, FaRegEye, FaStar } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa6';
import { IoArrowBackSharp } from 'react-icons/io5';
import { MdEdit, MdOutlineDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
const dataSource = [
    {
        id: '1',
        ProjectName: 'Mike',
        surveyName: 'Survey 2',
        totalQuestion: 635,
        date: '05/12/2024',
        totalSurveyDone: 526,
    }
]


const ManageCompany = () => {
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
            title: 'Survey Name',
            dataIndex: 'surveyName',
            key: 'surveyName  ',
        },
        {
            title: 'Total Question',
            dataIndex: 'totalQuestion',
            key: 'totalQuestion  ',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date  ',
        },
        {
            title: 'Total survey done',
            dataIndex: 'totalSurveyDone',
            key: 'totalSurveyDone  ',
        },
        {
            title: 'Actions',
            dataIndex: 'key',
            key: 'key',
            render: (_, record) => {
                return (<div className='start-center text-2xl gap-1'>
                    <Link to={`/project-details/id`}>
                        <FaRegEye className='cursor-pointer' />
                    </Link>
                    <Link to={`/add-project`}>
                        <FaEdit className='cursor-pointer' />
                    </Link>
                    {/* <MdEdit className='cursor-pointer' /> */}
                    <MdOutlineDelete className='cursor-pointer' />
                </div>)
            }
        },
    ];
    // const onFinish = (value) => {

    // }
    // const handleChange = (value) => {
    //     console.log(`selected ${value}`);
    // };
    return (
        <div className='bg-[var(--color-7)] rounded-md'>
            <div className='between-center px-3 my-2 pt-5'>
                <div className='start-center gap-2 mb-3 p-5'>
                    <Link to={-1} className='bg-[var(--color-2)] py-1 px-2 rounded-md start-center gap-1 text-white'><IoArrowBackSharp />back</Link>
                    <p className='text-xl'>Company Manage</p>
                </div>
                <div className='end-center gap-2'>
                    <Input className='max-w-[250px] h-10' prefix={<CiSearch className='text-2xl' />} placeholder="Search" />
                    <Link to={`/add-project`} className='bg-[var(--color-2)] px-4 rounded-md start-center gap-1 py-2 text-white flex justify-center items-center whitespace-nowrap'>
                        Add New Project
                        <FaPlus />
                    </Link>
                </div>
            </div>
            <Table dataSource={dataSource} columns={columns} />
            {/* <Modal
                centered
                footer={false}
                open={openAddModal}
                onCancel={() => setOpenAddModal(false)}
            >
                <div>
                    <p className='text-xl py-2 font-semibold'>Create new Project</p>
                    <Form className=''
                        layout='vertical'
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name={`projectName`}
                            label={`Project Name`}
                            rules={[
                                {
                                    message: 'Project Name is required',
                                    required: true
                                }
                            ]}
                        >
                            <Select className='w-full h-[42px]'
                                defaultValue="lucy"
                                onChange={handleChange}
                                options={[
                                    {
                                        value: 'jack',
                                        label: 'Jack',
                                    },
                                    {
                                        value: 'lucy',
                                        label: 'Lucy',
                                    },
                                    {
                                        value: 'Yiminghe',
                                        label: 'yiminghe',
                                    },
                                    {
                                        value: 'disabled',
                                        label: 'Disabled',
                                        disabled: true,
                                    },
                                ]}
                            />
                        </Form.Item>
                        <Form.Item
                            name={`survey`}
                            label={`survey`}
                            rules={[
                                {
                                    message: 'Survey Name is required',
                                    required: true
                                }
                            ]}
                        >
                            <Select className='w-full h-[42px]'
                                defaultValue="lucy"
                                onChange={handleChange}
                                options={[
                                    {
                                        value: 'jack',
                                        label: 'Jack',
                                    },
                                    {
                                        value: 'lucy',
                                        label: 'Lucy',
                                    },
                                    {
                                        value: 'Yiminghe',
                                        label: 'yiminghe',
                                    },
                                    {
                                        value: 'disabled',
                                        label: 'Disabled',
                                        disabled: true,
                                    },
                                ]}
                            />
                        </Form.Item>
                        <button className='w-full py-2 bg-[var(--color-2)] text-white font-semibold rounded-md'>
                            save
                        </button>
                    </Form>
                </div>
            </Modal> */}
        </div>
    )
}

export default ManageCompany
