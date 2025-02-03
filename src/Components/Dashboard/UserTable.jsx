import { Input, message, Modal, Pagination } from "antd";
import  { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Table, Space } from "antd";
import { EyeOutlined, StopOutlined } from "@ant-design/icons";
import {
  useBlockUserHostMutation,
  useGetHostUserQuery,
} from "../../redux/Api/userApi";
import { imageUrl, placeImage } from "../../redux/Api/baseApi";

const UserTable = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const { data: getAllUser } = useGetHostUserQuery({
    user: "USER",
    page: page,
    search: search,
  });
  const [openModal, setOpenModal] = useState(false);
  const [userData, setUserData] = useState();

  const [blockUser] = useBlockUserHostMutation();

  const handleBlockUnblock = async (record) => {
    console.log(record);
  
    try {
      const isBlocking = !record.isBlocked; // Check if it's blocking or unblocking
      const response = await blockUser({
        authId: record._id,
        isBlocked: isBlocking,
      }).unwrap();
  
      console.log(response);
  
      if (response.success) {
        message.success(isBlocking ? "User Blocked Successfully!" : "User Unblocked Successfully!");
      } else {
        message.error(response.message || "Failed to update user status.");
      }
    } catch (error) {
      console.error("Error updating user status:", error);
      message.error("An error occurred. Please try again.");
    }
  };
  

  const columns = [
    {
      title: "S no.",
      dataIndex: "serialNo",
      key: "serialNo",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div className="flex items-center">
          <img
            src={record.avatar}
            className="h-12 rounded-md"
            alt={record.name}
          />
          <div className="ml-2">
            <div>{record.name}</div>
            <div style={{ color: "gray", fontSize: "12px" }}>
              {record.phone}
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },

    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <EyeOutlined
            onClick={() => {
              setOpenModal(true);
              setUserData(record);
            }}
            style={{ fontSize: "18px", cursor: "pointer" }}
          />

          <StopOutlined
            onClick={() => handleBlockUnblock(record)}
            style={{
              fontSize: "18px",
              cursor: "pointer",
              color: record.isBlocked ? "red" : "black",
            }}
          />
        </Space>
      ),
    },
  ];

  const formattedTableData = getAllUser?.data?.map((user, i) => {
    return {
      serialNo: i + 1,
      name: user?.name,
      avatar: user?.profile_image
        ? `${imageUrl}/${user?.profile_image}`
        : placeImage,
      email: user?.email,
      phone: user?.phone_number,
      location: user?.address,
      _id: user?.authId?._id,
      isBlocked: user?.authId?.isBlocked,
    };
  });

  return (
    <div className=" rounded-md bg-white p-4">
      <div className="between-center px-3 my-2 py-5 ">
        <p className="text-xl">New User</p>{" "}
        <Input
          className="max-w-[250px] h-10"
          onChange={(e) => setSearch(e.target.value)}
          prefix={<CiSearch className="text-2xl" />}
          placeholder="Search here..."
        />
      </div>
      <Table
        columns={columns}
        dataSource={formattedTableData}
        pagination={false}
        rowKey="key"
      />
      <div className="flex items-center justify-center mt-2">
        <Pagination
          total={getAllUser?.meta?.total}
          pageSize={getAllUser?.meta?.limit}
          onChange={(page) => setPage(page)}
        />
      </div>

      <Modal
        centered
        open={openModal}
        footer={false}
        onCancel={() => setOpenModal(false)}
      >
        <p className="text-center font-lora text-xl">User Profile</p>
        <div className="flex flex-col items-center justify-center">
          <img
            src={userData?.avatar}
            className="mx-auto mt-5 rounded-full w-20"
            alt=""
          />
          <p className="font-lora text-xl mt-5">User Profile</p>
          <div className="space-y-4 font-lora mt-5 text-xl ">
            <p>User Name : {userData?.name}</p>
            <p>Contact Number : {userData?.phone}</p>
            <p>Email : {userData?.email} </p>
            <p>Address : {userData?.location}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UserTable;
