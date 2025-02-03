import  { useState } from "react";
import { Table, Space, Input, Pagination, message } from "antd";
import { EyeOutlined, StopOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { BsArrowLeftShort } from "react-icons/bs";
import { useBlockHostMutation, useGetAllTotalHostQuery } from "../redux/Api/totalHost";
import profile from "../assets/images/profile.png";
import { imageUrl } from "../redux/Api/baseApi";

const TotalHost = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const { data } = useGetAllTotalHostQuery({
    host: "HOST",
    page: page,
    search: search,
  });


  const [blocHost] = useBlockHostMutation();

  const handleBlockUnblock = async (record) => {
    console.log("Blocking/Unblocking Host:", record);
  
    try {
      const isBlocking = !record.isBlocked; // Check if blocking or unblocking
      const response = await blocHost({
        authId: record._id,
        isBlocked: isBlocking,
      }).unwrap();
  
      console.log("Response:", response);
  
      if (response.success) {
        message.success(isBlocking ? "Host Blocked Successfully!" : "Host Unblocked Successfully!");
      } else {
        message.error(response.message || "Failed to update host status.");
      }
    } catch (error) {
      console.error("Error updating host status:", error);
      message.error("An error occurred. Please try again.");
    }
  };
  

  const users = data?.data || [];
  console.log("user hosf ", users);

  const columns = [
    {
      title: "S no.",
      dataIndex: "serialNo",
      key: "serialNo",
      render: (text) => <span style={{ fontWeight: "bold" }}>{text}</span>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => {
        console.log("Record Data:", record); // Logging the record object
    
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={`${imageUrl}/${record?.profile_image}`} className="h-[60px] w-[60px]" alt={record?.name || "User"} />
            <div style={{ marginLeft: "10px" }}>
              <div>{record?.name || "N/A"}</div>
              <div style={{ color: "gray", fontSize: "12px" }}>
                {record?.phone_number || "N/A"}
              </div>
            </div>
          </div>
        );
      },
    },
    {
      title: "Car",
      dataIndex: "carCount",
      key: "carCount",
      align: "center",
    },
    {
      title: "Totla Trip",
      dataIndex: "trip",
      key: "trip",
      align: "center",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      align: "center",
      render: (text) => (
        <span>
          {text} <i className="fa fa-star" style={{ color: "gold" }} />
        </span>
      ),
    },
    {
      title: "Action",
      key: "_id",
      render: (text, record) => {
        console.log(record);
        return (
          <Space size="middle">
            <Link to={`/total-host/${record.key}`}>
              {/* Use the record's _id */}
              <EyeOutlined style={{ fontSize: "18px", cursor: "pointer" }} />
            </Link>
            <StopOutlined
              onClick={() => handleBlockUnblock(record)}
              style={{
                fontSize: "18px",
                cursor: "pointer",
                color: record.isBlocked ? "red" : "black",
              }}
            />
          </Space>
        );
      },
    },
  ];

  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex justify-between items-center w-full pb-8">
        <div className="flex items-center gap-2">
          <Link to={-1}>
            <BsArrowLeftShort size={25} />
          </Link>
          Total Host
        </div>
        <Input
          className="max-w-[250px] h-10"
          onChange={(e) => setSearch(e.target.value)}
          prefix={<CiSearch className="text-2xl" />}
          placeholder="Search here..."
        />
      </div>

      <Table
        columns={columns}
        dataSource={users.map((user, index) => ({
          key: user._id,
          serialNo: `#${index + 1}`,
          name: user.name,
          phone_number: user.phone_number,
          profile_image: user.profile_image,
          carCount: user.carCount,
          trip: user.trip,
          email: user.email,
          rating: user.rating || "Not Rated",
          _id: user?.authId?._id,
          isBlocked: user?.authId?.isBlocked,
        }))}
        rowKey="key"
      />

      <div className="flex items-center justify-center mt-2">
        <Pagination
          total={data?.meta?.total}
          pageSize={data?.meta?.limit}
          onChange={(page) => setPage(page)}
        />
      </div>
    </div>
  );
};

export default TotalHost;
