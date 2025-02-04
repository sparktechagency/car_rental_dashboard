import React, { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { Table, Input, message, Pagination, Modal } from "antd";

import user1 from "../assets/images/user01.png";
import user2 from "../assets/images/user02.png";
import {
  useGetAllTransactionQuery,
  useUpdateRefundMutation,
  useUpdateTransferRefundMutation,
} from "../redux/Api/transactionApi";
import { FaEyeLowVision } from "react-icons/fa6";
import { imageUrl } from "../redux/Api/baseApi";

const TransactionHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const [searchTerm, setSearchTerm] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [updateTransfer] = useUpdateTransferRefundMutation();

  const [updateRefund] = useUpdateRefundMutation();
  const { data, isLoading, isError } = useGetAllTransactionQuery({
    page: currentPage,
    limit: pageSize,
    searchTerm: searchTerm,
  });

  if (isError) {
    message.error("Error loading transactions.");
  }

  const transactions = data?.data?.result || [];
  const totalTransactions = data?.data?.meta?.total;
  console.log(totalTransactions);

  const handlePageChange = (page) => {
    console.log("Page Changed to:", page);
    setCurrentPage(page);
  };

  const handleRefund1 = (record, payment_intent_id) => {
    console.log(payment_intent_id._id);
  
    const data = {
      paymentId: payment_intent_id._id,
    };
  
    updateTransfer(data)
      .then((response) => {
        console.log(response?.data?.message);
        message.success(response.data.message);
      })
      .catch((error) => {
        console.error("Error during refund:", error); // Log the error to the console
        message.error("Already Transfer.");
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

  const handleRefund = (record, payment_intent_id) => {
    try {
      console.log("Payment Intent ID:", payment_intent_id.payment_intent_id);
      console.log("Amount:", payment_intent_id.amount);
  
      const data = {
        payment_intent_id: payment_intent_id.payment_intent_id,
        amount: payment_intent_id.amount,
      };
  
      updateRefund(data)
        .then((response) => {
          message.success(response.data.message);
        })
        .catch((error) => {
          console.error("Refund Error:", error);
          message.error("Already Payment");
        });
    } catch (error) {
      console.error("Unexpected Error:", error);
      message.error("An unexpected error occurred. Please contact support.");
    }
  };
  
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
          <img
            src={`${imageUrl}/${user.profile_image}`}
            alt="user"
            style={{ width: 50, height: 50, marginRight: 8 }}
          />
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
          <img
            src={`${imageUrl}/${host.profile_image}`}
            alt="user"
            style={{ width: 50, height: 50, marginRight: 8 }}
          />
          <div>
            <p className="text-[18px]">{host?.name}</p>
            <p className="text-sm">{host?.phone_number}</p>
          </div>
        </div>
      ),
    },
    {
      title: "Id",
      dataIndex: "payment_intent_id",
      key: "payment_intent_id",
    },
    {
      title: "Price",
      dataIndex: "amount",
      key: "price",
      render: (amount) =>
        amount ? `$${amount}` : <span className="text-gray-500">Not</span>,
    },
    {
      title: "Refund Amount",
      dataIndex: "refund_amount",
      key: "refund_amount",
      render: (refund_amount) =>
        refund_amount ? (
          `$${refund_amount}`
        ) : (
          <span className="text-gray-500">Not</span>
        ),
    },

    {
      title: "Transferred Amount",
      dataIndex: "transferred_amount",
      key: "transferred_amount",
      render: (transferred_amount) =>
        transferred_amount ? (
          `$${transferred_amount}`
        ) : (
          <span className="text-gray-500">Not</span>
        ),
    },
    {
      title: "Location",
      dataIndex: "car",
      key: "location",
      render: (record, payment_intent_id) => (
        <button
          onClick={() => handleRefund1(record, payment_intent_id)}
          className="bg-[#970b4d] text-white px-8 py-2 rounded-md"
        >
          Transfer
        </button>
      ),
    },
    {
      title: "Location",
      dataIndex: "car",
      key: "location",
      render: (record, payment_intent_id) => (
        <button
          onClick={() => handleRefund(record, payment_intent_id)}
          className="bg-[#34C759] text-white px-8 py-2 rounded-md"
        >
          Refund
        </button>
      ),
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (status) => {
        if (status === "succeeded") {
          return (
            <button className=" cursor-text text-green-500 px-8 py-2 rounded-md">
              {status}
            </button>
          );
        } else if (status === "refunded") {
          return (
            <button className=" cursor-text text-blue-600 px-5 py-2 rounded-md">
              {status}
            </button>
          );
        } else {
          return (
            <button className=" cursor-text text-black px-6 py-2 rounded-md">
              {status}
            </button>
          );
        }
      },
    },
    {
      title: "View Receipt",
      dataIndex: "receipt_url",
      key: "viewReceipt",
      render: (url, record) => (
        <div className="flex items-center space-x-2">
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#262626] text-white px-1 py-2 text-sm rounded-md hover:text-white"
            >
              View Receipt
            </a>
          ) : (
            <span className="text-gray-500">No Receipt</span>
          )}
          <button
            onClick={() => handleOpenModal(record)}
            className="text-[#34C759] text-lg"
          >
            <FaEyeLowVision />
          </button>
        </div>
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
    <div className="p-4 space-y-6">
      {/* Car Details Section */}
      <div className="border-b pb-4">
        <h3 className="text-lg font-semibold mb-3">🚗 Car Details</h3>
        <div className="flex gap-4">
          <img
            src={`${imageUrl}/${selectedTransaction.car.car_image[0]}`}
            alt="Car"
            className="w-40 h-28 object-cover rounded-md border"
          />
          <div>
            <p className="text-md font-semibold">
              {selectedTransaction.car.make} {selectedTransaction.car.model} ({selectedTransaction.car.year})
            </p>
            <p>📍 Location: {selectedTransaction.car.carAddress}</p>
            <p>💰 Price per Day: ${selectedTransaction.car.pricePerDay}</p>
            <p>⛽ Fuel Type: {selectedTransaction.car.fuelType}</p>
            <p>🛠 Features: {selectedTransaction.car.features.slice(0, 5).join(", ")}...</p>
          </div>
        </div>
      </div>

      {/* Host Details Section */}
      <div className="border-b pb-4">
        <h3 className="text-lg font-semibold mb-3">🏠 Host Details</h3>
        <div className="flex gap-4">
          <img
            src={`${imageUrl}/${selectedTransaction.host.profile_image}`}
            alt="Host"
            className="w-20 h-20 object-cover rounded-full border"
          />
          <div>
            <p className="text-md font-semibold">{selectedTransaction.host.name}</p>
            <p>📧 {selectedTransaction.host.email}</p>
            <p>📞 {selectedTransaction.host.phone_number}</p>
            <p>⭐ Rating: {selectedTransaction.host.rating}</p>
            <p>🚗 Total Cars: {selectedTransaction.host.carCount}</p>
          </div>
        </div>
      </div>

      {/* User (Renter) Details Section */}
      <div>
        <h3 className="text-lg font-semibold mb-3">👤 Renter Details</h3>
        <div className="flex gap-4">
          <img
            src={`${imageUrl}/${selectedTransaction.user.profile_image}`}
            alt="User"
            className="w-20 h-20 object-cover rounded-full border"
          />
          <div>
            <p className="text-md font-semibold">{selectedTransaction.user.name}</p>
            <p>📧 {selectedTransaction.user.email}</p>
            <p>📞 {selectedTransaction.user.phone_number}</p>
            <p>⭐ Rating: {selectedTransaction.user.rating}</p>
          </div>
        </div>
      </div>
    </div>
  )}
</Modal>
    </div>
  );
};

export default TransactionHistory;
