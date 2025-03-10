import React, { useState } from 'react';
import { Table } from 'antd';
import user1 from '../../assets/images/user01.png';
import user2 from '../../assets/images/user02.png';
import user3 from '../../assets/images/user03.png';
import { useGetAllTransactionQuery } from '../../redux/Api/transactionApi';

const TransactionTable = ({ pagination }) => {
  const { data, isLoading, isError } = useGetAllTransactionQuery();
  const [openModal, setOpenModal] = useState(false);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading transactions</p>;

  
  const transactions = data?.data?.result || [];
console.log(transactions)
  const columns = [
    {
      title: 'S no',
      dataIndex: 'key',
      key: 'key',
      render: (_, __, index) => index + 1, 
    },
    {
      title: 'Renter Name',
      dataIndex: 'user',
      key: 'renterName',
      render: (user) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={user1} alt="user" style={{ width: 30, height: 30, marginRight: 8 }} />
          <div>
            <p className="text-[18px]">{user?.name}</p>
            <p className="text-sm">{user?.phone_number}</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Host Name',
      dataIndex: 'host',
      key: 'hostName',
      render: (host) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={user2} alt="host" style={{ width: 30, height: 30, marginRight: 8 }} />
          <div>
            <p className="text-[18px]">{host?.name}</p>
            <p className="text-sm">{host?.phone_number}</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Id',
      dataIndex: 'payment_intent_id',
      key: 'payment_intent_id',
      render: (payment_intent_id) => `${payment_intent_id}`,
    },

    {
      title: 'Price',
      dataIndex: 'amount',
      key: 'price',
      render: (amount) => ` £${amount}`,
    },

    {
      title: 'Car Name',
      dataIndex: 'car',
      key: 'carName',
      render: (car) => `${car?.make} ${car?.model}`,
    },
    {
      title: 'Location',
      dataIndex: 'car',
      key: 'location',
      render: (car) => car?.carAddress,
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (status) => {
        if (status === "payable") {
          return (
            <button
              onClick={() => setOpenModal(true)}
              className="bg-[#34C759] text-white px-8 py-2 rounded-md"
            >
              Pay Now
            </button>
          );
        } else if (status === "orderStart") {
          return (
            <button className="bg-[#007AFF] text-white px-5 py-2 rounded-md">
              Order Start
            </button>
          );
        } else {
          return (
            <button className="bg-[#262626] text-white px-6 py-2 rounded-md">
              In Progress
            </button>
          );
        }
      },
    },
    {
      title: 'View Receipt',
      dataIndex: 'receipt_url',
      key: 'viewReceipt',
      render: (url) =>
        url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#262626] text-white px-6 py-2 rounded-md hover:text-white"
          >
            View Receipt
          </a>
        ) : (
          <span className="text-gray-500">No Receipt</span>
        ),
    },
  ];

  return (
    <div>
      <Table
        dataSource={transactions}
        columns={columns}
        pagination={pagination}
        rowKey={(record) => record._id} 
      />
    </div>
  );
};

export default TransactionTable;
