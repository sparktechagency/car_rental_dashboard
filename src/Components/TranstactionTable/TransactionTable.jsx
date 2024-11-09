import React from 'react';
import { Table } from 'antd';
import user1 from '../../assets/images/user01.png';
import user2 from '../../assets/images/user02.png';
import user3 from '../../assets/images/user03.png';

const columns = [
  {
    title: 'S no',
    dataIndex: 'key',
    key: 'key',
    className: "font-lora",
    rowScope: 'row',
  },
  {
    title: 'Renter Name',
    dataIndex: 'name',
    className: "font-lora",
    key: 'name',
    render: (text, record) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={user1} alt="user" style={{ width: 30, height: 30, marginRight: 8 }} />
        <div>
          <p className='text-[18px]'>{text}</p>
          <p className='text-sm'>{record?.rentContact}</p>
        </div>
      </div>
    ),
  },
  {
    className: "font-lora",
    title: 'Host Name',
    dataIndex: 'hostName',
    key: 'hostName',
    render: (text, record) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={user2} alt="user" style={{ width: 30, height: 30, marginRight: 8 }} />
        <div>
          <p className='text-[18px]'>{text}</p>
          <p className='text-sm'>{record?.hostContact}</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Car Name',
    dataIndex: 'carName',
    className: "font-lora",
    key: 'carName',
  },

  {
    title: 'Location',
    dataIndex: 'location',
    className: "font-lora",
    key: 'location',
  },
  {
    title: 'Status',
    className: "font-lora",
    dataIndex: 'status',
    key: 'status',
    render: (_, record) => {
      console.log(record?.status);
      return (
        <div>
          {
            record?.status === "payable" ? <button className="bg-[#34C759] text-white px-8 py-2 rounded-md">
              Pay Now
            </button> : record?.status === "orderStart" ? <button className="bg-[#007AFF] text-white px-5 py-2 rounded-md">
              Order Start
            </button> : <button className="bg-[#262626] text-white px-6 py-2 rounded-md">
              In Progress
            </button>
          }
        </div>
      )
    },
  },
];

const data = [
  {
    key: '#12333',
    name: 'John Brown',
    rentContact: '08+ 123 456 789',
    hostName: "Md. Nazrul ",
    hostImage: user1,
    hostContact: '08+ 123 456 789',
    carName: "Volkswagen Beetle",
    price: "$120.00",
    status: "payable",
    location: "Great Falls"
  },
  {
    key: '#12333',
    name: 'John Brown',
    rentContact: '08+ 123 456 789',
    hostName: "Md. Nazrul ",
    hostImage: user2,
    hostContact: '08+ 123 456 789',
    carName: "Volkswagen Beetle",
    price: "$120.00",
    status: "inProgress",
    location: "Great Falls"
  },
  {
    key: '#12333',
    name: 'John Brown',
    rentContact: '08+ 123 456 789',
    hostName: "Md. Nazrul ",
    hostImage: user3,
    hostContact: '08+ 123 456 789',
    carName: "Volkswagen Beetle",
    price: "$120.00",
    status: "orderStart",
    location: "Great Falls"
  },
  {
    key: '#12333',
    name: 'John Brown',
    rentContact: '08+ 123 456 789',
    hostName: "Md. Nazrul ",
    hostImage: user1,
    hostContact: '08+ 123 456 789',
    carName: "Volkswagen Beetle",
    price: "$120.00",
    status: "inProgress",
    location: "Great Falls"
  },



];

const TransactionTable = ({ pagination }) => <div className='pb-10'>
  <Table columns={columns} dataSource={data} pagination={false} className="custom-pagination py-10 bg-white" />
</div>;

export default TransactionTable;
