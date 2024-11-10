import { Input, Modal, } from 'antd';
import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci';
import { Table, Avatar, Space } from 'antd';
import { EyeOutlined, StopOutlined } from '@ant-design/icons';
import img from '../../assets/images/user01.png'
import img2 from '../../assets/images/user02.png'
import img3 from '../../assets/images/user03.png'

const UserTable = () => {
    const [openModal, setOpenModal] = useState(false);
    const [userData, setUserData] = useState()
    const columns = [
        {
            title: 'S no.',
            dataIndex: 'serialNo',
            key: 'serialNo',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => (
                <div className="flex items-center">
                    <img src={record.avatar} alt={record.name} />
                    <div className="ml-2">
                        <div>{record.name}</div>
                        <div style={{ color: 'gray', fontSize: '12px' }}>{record.phone}</div>
                    </div>
                </div>
            ),
        },
        {
            title: 'Car',
            dataIndex: 'car',
            key: 'car',
        },
        {
            title: 'Total Trip',
            dataIndex: 'totalTrip',
            key: 'totalTrip',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <EyeOutlined onClick={() => {
                        setOpenModal(true)
                        setUserData(record)
                    }} style={{ fontSize: '18px', cursor: 'pointer' }} />
                    <StopOutlined style={{ fontSize: '18px', cursor: 'pointer' }} />
                </Space>
            ),
        },
    ];



    const data = [
        {
            key: '1',
            serialNo: '#12333',
            name: 'Ashiqur Rahman',
            phone: '08+ 123 456 789',
            avatar: img,
            car: 10,
            totalTrip: 125,
            email: 'bockelboy@att.com',
            location: 'Kent, Utah',
        },
        {
            key: '2',
            serialNo: '#12333',
            name: 'Ashiqur Rahman',
            phone: '08+ 123 456 789',
            avatar: img3,
            car: 10,
            totalTrip: 125,
            email: 'bockelboy@att.com',
            location: 'Kent, Utah',
        },
        {
            key: '3',
            serialNo: '#12333',
            name: 'Ashiqur Rahman',
            phone: '08+ 123 456 789',
            avatar: img2,
            car: 10,
            totalTrip: 125,
            email: 'bockelboy@att.com',
            location: 'Kent, Utah',
        },
    ];
    console.log(userData);
    return (
        <div className=' rounded-md'>
            <div className='between-center px-3 my-2 pt-5'>
                <p className='text-xl'>New User</p> <Input className='max-w-[250px] h-10' prefix={<CiSearch className='text-2xl' />} placeholder="Search here..." />
            </div>
            <Table
                columns={columns}
                dataSource={data}
                pagination={{
                    pageSize: 10,
                    showTotal: (total, range) => `Showing ${range[0]}-${range[1]} out of ${total}`,
                    showSizeChanger: false,
                }}
                rowKey="key"
            />

            <Modal centered open={openModal} footer={false} onCancel={() => setOpenModal(false)} >
                <p className='text-center font-lora text-xl'>User Profile</p>
                <div className='flex flex-col items-center justify-center'>
                    <img src={userData?.avatar} className='mx-auto mt-5 rounded-full w-20' alt="" />
                    <p className='font-lora text-xl mt-5'>User Profile</p>
                    <div className='space-y-4 font-lora mt-5 text-xl'>
                        <p>User Name : {userData?.name}</p>
                        <p>Contact Number : {userData?.phone}</p>
                        <p>Email : {userData?.email} </p>
                        <p>Address : {userData?.location}</p>
                        <p>Driving License  Number : 123654478924 </p>
                    </div>
                </div>
            </Modal>

        </div>
    )
}

export default UserTable
