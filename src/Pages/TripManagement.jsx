import React from 'react'
import { GoArrowLeft } from 'react-icons/go'
import { Link } from 'react-router-dom'
import { Table, Avatar, Tag, Space } from 'antd';
const TripManagement = () => {
    const data = [
        {
            key: '1',
            serialNo: '#12333',
            renterName: 'dindiniya',
            renterPhone: '08+ 123 456 789',
            renterAvatar: 'https://example.com/renterAvatar.jpg',
            hostName: 'Md.Nazmul Hoque',
            hostPhone: '08+ 123 456 789',
            hostAvatar: 'https://example.com/hostAvatar.jpg',
            price: '$120.00',
            carName: 'Volkswagen Beetle',
            location: 'Kent, Utah',
            status: 'PayNow',
        },
        {
            key: '2',
            serialNo: '#12333',
            renterName: 'dindiniya',
            renterPhone: '08+ 123 456 789',
            renterAvatar: 'https://example.com/renterAvatar.jpg',
            hostName: 'Farhanur Rahman',
            hostPhone: '08+ 123 456 789',
            hostAvatar: 'https://example.com/hostAvatar2.jpg',
            price: '$120.00',
            carName: 'Seat Tarraco',
            location: 'Great Falls, Maryland',
            status: 'OrderStart',
        },
        {
            key: '3',
            serialNo: '#12333',
            renterName: 'dindiniya',
            renterPhone: '08+ 123 456 789',
            renterAvatar: 'https://example.com/renterAvatar.jpg',
            hostName: 'Al-Amin',
            hostPhone: '08+ 123 456 789',
            hostAvatar: 'https://example.com/hostAvatar3.jpg',
            price: '$120.00',
            carName: 'Rolls Royce Wraith',
            location: 'Lansing, Illinois',
            status: 'Requested',
        },
        {
            key: '3',
            serialNo: '#12333',
            renterName: 'dindiniya',
            renterPhone: '08+ 123 456 789',
            renterAvatar: 'https://example.com/renterAvatar.jpg',
            hostName: 'Al-Amin',
            hostPhone: '08+ 123 456 789',
            hostAvatar: 'https://example.com/hostAvatar3.jpg',
            price: '$120.00',
            carName: 'Rolls Royce Wraith',
            location: 'Lansing, Illinois',
            status: 'canceled',
        },
        {
            key: '3',
            serialNo: '#12333',
            renterName: 'dindiniya',
            renterPhone: '08+ 123 456 789',
            renterAvatar: 'https://example.com/renterAvatar.jpg',
            hostName: 'Al-Amin',
            hostPhone: '08+ 123 456 789',
            hostAvatar: 'https://example.com/hostAvatar3.jpg',
            price: '$120.00',
            carName: 'Rolls Royce Wraith',
            location: 'Lansing, Illinois',
            status: 'ongoing',
        },
        {
            key: '3',
            serialNo: '#12333',
            renterName: 'dindiniya',
            renterPhone: '08+ 123 456 789',
            renterAvatar: 'https://example.com/renterAvatar.jpg',
            hostName: 'Al-Amin',
            hostPhone: '08+ 123 456 789',
            hostAvatar: 'https://example.com/hostAvatar3.jpg',
            price: '$120.00',
            carName: 'Rolls Royce Wraith',
            location: 'Lansing, Illinois',
            status: 'completed',
        },
    ];



    const columns = [
        {
            title: 'S no.',
            dataIndex: 'serialNo',
            key: 'serialNo',
        },
        {
            title: 'Renter Name',
            dataIndex: 'renterName',
            key: 'renterName',
            render: (text, record) => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src={record.renterAvatar} alt={record.renterName} />
                    <div style={{ marginLeft: '10px' }}>
                        <div>{record.renterName}</div>
                        <div style={{ color: 'gray', fontSize: '12px' }}>{record.renterPhone}</div>
                    </div>
                </div>
            ),
        },
        {
            title: 'Hosts Name',
            dataIndex: 'hostName',
            key: 'hostName',
            render: (text, record) => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src={record.hostAvatar} alt={record.hostName} />
                    <div style={{ marginLeft: '10px' }}>
                        <div>{record.hostName}</div>
                        <div style={{ color: 'gray', fontSize: '12px' }}>{record.hostPhone}</div>
                    </div>
                </div>
            ),
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            align: 'center',
        },
        {
            title: 'Car Name',
            dataIndex: 'carName',
            key: 'carName',
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => (
                // <Tag color={statusColors[status]} style={{ fontWeight: 'bold' }}>
                //     {status}
                // </Tag>
                <div>
                    {
                        status == "completed" && <button className='bg-[#34C759] text-white px-4 py-2 rounded-md'>Completed</button>
                    }
                    {
                        status == "ongoing" && <button className='bg-[#73A5C6] text-white px-5 py-2 rounded-md'>Ongoing</button>
                    }
                    {
                        status == "canceled" && <button className='bg-[#E3503E] text-white px-5 py-2 rounded-md'>Canceled</button>
                    }
                    {
                        status == "Requested" && <button className='bg-[#F3A638] text-white px-4 py-2 rounded-md' >Requested</button>
                    }
                    {
                        status == "OrderStart" && <button className='bg-[#007AFF] text-white px-4 py-2 rounded-md'>Order Start</button>
                    }
                    {
                        status == "PayNow" && <button className='bg-[#34C759] text-white px-6 py-2 rounded-md'>Pay Now</button>
                    }
                </div>
            ),
        },
    ];
    return (
        <div className='bg-white rounded-md  p-5'>

            <Link to={-1} className='flex items-center gap-2'> <GoArrowLeft />Trip Management</Link>

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
        </div>
    )
}

export default TripManagement