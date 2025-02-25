// import { Table } from 'antd'
// import React, { useState } from 'react'
// import { useGetAllTransactionQuery, useUpdateRefundMutation } from '../../redux/Api/transactionApi';
// import user1 from '../../assets/images/user01.png';
// import user2 from '../../assets/images/user02.png';
// export const Refund = ({ pagination }) => {
//   const { data, isLoading, isError } = useGetAllTransactionQuery();
//   const [updateRefund] = useUpdateRefundMutation();
//   const [openModal, setOpenModal] = useState(false);

//   if (isLoading) return <p>Loading...</p>;
//   if (isError) return <p>Error loading transactions</p>;
//   const transactions = data?.data?.result || [];
//   console.log(transactions)

//   const handleRefund = (record, payment_intent_id) => {
//     console.log('first', payment_intent_id.payment_intent_id);
//     console.log('first', payment_intent_id.amount);

//     const data = {
//         payment_intent_id: payment_intent_id.payment_intent_id,
//         amount: payment_intent_id.amount
//     };

//     updateRefund(data).then((response) => {
//         alert(response.error ? "Refund failed. Please try again." : "Refund successful!");
//     });
// };

//   const columns = [
//     {
//       title: 'S no',
//       dataIndex: 'key',
//       key: 'key',
//       render: (_, __, index) => index + 1,
//     },
//     {
//       title: 'Renter Name',
//       dataIndex: 'user',
//       key: 'renterName',
//       render: (user) => (
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <img src={user1} alt="user" style={{ width: 30, height: 30, marginRight: 8 }} />
//           <div>
//             <p className="text-[18px]">{user?.name}</p>
//             <p className="text-sm">{user?.phone_number}</p>
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: 'Host Name',
//       dataIndex: 'host',
//       key: 'hostName',
//       render: (host) => (
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <img src={user2} alt="host" style={{ width: 30, height: 30, marginRight: 8 }} />
//           <div>
//             <p className="text-[18px]">{host?.name}</p>
//             <p className="text-sm">{host?.phone_number}</p>
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: 'Transaction Id',
//       dataIndex: 'payment_intent_id',
//       key: 'payment_intent_id',
//       render: (payment_intent_id) => `${payment_intent_id}`,
//     },

//     {
//       title: 'Price',
//       dataIndex: 'amount',
//       key: 'price',
//       render: (amount) => `$${amount}`,
//     },

//     {
//       title: 'Car Name',
//       dataIndex: 'car',
//       key: 'carName',
//       render: (car) => `${car?.make} ${car?.model}`,
//     },
//     {
//       title: 'Location',
//       dataIndex: 'car',
//       key: 'location',
//       render: (record,payment_intent_id) =>
//       <button
//       onClick={() => handleRefund(record,payment_intent_id)}
//       className="bg-[#34C759] text-white px-8 py-2 rounded-md"
//     >
//       Refund
//     </button>,
//     },
//     {
//       title: "Status",
//       key: "status",
//       dataIndex: "status",
//       render: (status) => {
//         if (status === "payable") {
//           return (
//             <button
//               onClick={() => setOpenModal(true)}
//               className="bg-[#34C759] text-white px-8 py-2 rounded-md"
//             >
//               Pay Now
//             </button>
//           );
//         } else if (status === "orderStart") {
//           return (
//             <button className="bg-[#007AFF] text-white px-5 py-2 rounded-md">
//               Order Start
//             </button>
//           );
//         } else {
//           return (
//             <button className="bg-[#262626] text-white px-6 py-2 rounded-md">
//               In Progress
//             </button>
//           );
//         }
//       },
//     },
//     {
//       title: 'View Receipt',
//       dataIndex: 'receipt_url',
//       key: 'viewReceipt',
//       render: (url) =>
//         url ? (
//           <a
//             href={url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-[#262626] text-white px-6 py-2 rounded-md hover:text-white"
//           >
//             View Receipt
//           </a>
//         ) : (
//           <span className="text-gray-500">No Receipt</span>
//         ),
//     },
//   ];
//   return (
//     <div>
//       <div>
//       <Table
//         dataSource={transactions}
//         columns={columns}
//         pagination={pagination}
//         rowKey={(record) => record._id}
//       />
//     </div>
//     </div>
//   )
// }

import React, { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { Table, Input, message, Pagination, Modal } from "antd";

import user1 from "../../assets/images/user01.png";
import user2 from "../../assets/images/user02.png";
import {
  useGetAllRefundedQuery,

  useUpdateRefundMutation,
} from "../../redux/Api/transactionApi";
import { imageUrl } from "../../redux/Api/baseApi";
import { FaEyeLowVision } from "react-icons/fa6";

const Refund = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const [searchTerm, setSearchTerm] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [updateRefund] = useUpdateRefundMutation();
  const { data, isLoading, isError } = useGetAllRefundedQuery({
    status:'refunded',
    page: currentPage, 
    limit: pageSize,
    searchTerm: searchTerm,
  });

  console.log(data)
  if (isError) {
    message.error("Error loading transactions.");
  }

  const transactions = (data?.data?.result );
  

  console.log(transactions)
  const totalTransactions = data?.data?.meta?.total;
  console.log(totalTransactions); 

  // Handle page change
  const handlePageChange = (page) => {
    console.log("Page Changed to:", page);
    setCurrentPage(page);
  };

  const handleRefund = (record, payment_intent_id) => {
    console.log("first", payment_intent_id.payment_intent_id);
    console.log("first", payment_intent_id.amount);

    const data = {
      payment_intent_id: payment_intent_id.payment_intent_id,
      amount: payment_intent_id.amount,
    };

    updateRefund(data).then((response) => {
      alert(
        response.error
          ? "Refund failed. Please try again."
          : "Refund successful!"
      );
    });
  };

  const handleOpenModal = (record) => {
    setSelectedTransaction(record);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedTransaction(null);
  };

  // Table columns
  const columns = [
    {
      title: "S no",
      dataIndex: "key",
      key: "key",
      render: (_, __, index) => (currentPage - 1) * pageSize + index + 1,
    },
     {
          title: "Renter Name",
          dataIndex: "user",
          key: "renterName",
          render: (user) => (
            <div style={{ display: "flex", alignItems: "center" }}>
                
              <img  src={`${imageUrl}/${user?.profile_image}`} alt="user" style={{ width: 50, height: 50, marginRight: 8, }} />
              <div>
                <p className="text-[18px]">{user?.name}</p>
                <p className="text-sm">{user?.phone_number}</p>
              </div>
            </div>
          ),
        },
        {
          title: "Host Name",
          dataIndex: "host",
          key: "hostName",
          render: (host) => (
            <div style={{ display: "flex", alignItems: "center" }}>
              <img  src={`${imageUrl}/${host?.profile_image}`} alt="user" style={{ width: 50, height: 50, marginRight: 8, }} />
              <div>
                <p className="text-[18px]">{host?.name}</p>
                <p className="text-sm">{host?.phone_number}</p>
              </div>
            </div>
          ),
        },
    {
      title: "Transaction Id",
      dataIndex: "payment_intent_id",
      key: "payment_intent_id",
    },
    {
      title: "Price",
      dataIndex: "amount",
      key: "price",
      render: (amount) => `$${amount}`,
    },
    {
      title: "Car Name",
      dataIndex: "car",
      key: "carName",
      render: (car) => `${car?.make} ${car?.model}`,
    },
   
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (status) => {
        if (status === "succeeded") {
          return <button className="bg-[#34C759] text-white px-8 py-2 rounded-md">{status}</button>;
        } else if (status === "refunded") {
          return <button className="bg-[#007AFF] text-white px-5 py-2 rounded-md">{status}</button>;
        } else {
          return <button className="bg-[#262626] text-white px-6 py-2 rounded-md">{status}</button>;
        }
      },
    },
    {
      title: "View Receipt",
      dataIndex: "receipt_url",
      key: "viewReceipt",
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
    {
      title: "Details",
      dataIndex: "details",
      key: "details",
      render: (_, record) => (
        <button
          onClick={() => handleOpenModal(record)}
          className="text-[#34C759] text-lg"
        >
          <FaEyeLowVision />
        </button>
      ),
    },
  ];

  return (
    <div className="p-2 shadow-md">
      <div className="flex justify-between item-center pb-5">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-2">
            <Link to={-1}>
              <BsArrowLeftShort size={25} />
            </Link>
            Transaction
          </div>
          <Input
            className="max-w-[250px] h-10"
            prefix={<CiSearch className="text-2xl" />}
            placeholder="Search here..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {isLoading ? (
        <p>Loading transactions...</p>
      ) : (
        <div>
          <Table
            dataSource={transactions}
            columns={columns}
            rowKey={(record) => record._id}
            pagination={false}
          />
          <div className="mt-4 flex justify-end">
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={totalTransactions}
              onChange={handlePageChange}
              showSizeChanger={false}
            />
          </div>
        </div>
      )}

<Modal
        title="Transaction Details"
        visible={modalVisible}
        onCancel={handleCloseModal}
        footer={null}
      >
        {selectedTransaction && (
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Car Details</h3>
            <div className="flex gap-4">
              {/* <img
                src={selectedTransaction?.car?.car_image?.length ? `${imageUrl}/${selectedTransaction.car.car_image[0]}` : ""}
                alt="Car"
                className="w-32 h-32 object-cover rounded-md"
              /> */}
              <div>
                <p className="text-md font-semibold">
                  {selectedTransaction?.car?.make} {selectedTransaction?.car?.model}
                </p>
                <p>Year: {selectedTransaction?.car?.year}</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold mt-4">User Details</h3>
            <p>Renter: {selectedTransaction?.user?.name}</p>
            <p>Host: {selectedTransaction?.host?.name}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Refund;
