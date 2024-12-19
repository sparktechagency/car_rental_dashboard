import React, { useState } from "react";
import { Table, Space, Input, Pagination } from "antd";
import { EyeOutlined, StopOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { BsArrowLeftShort } from "react-icons/bs";
import { useBlockHostMutation, useGetAllTotalHostQuery } from "../redux/Api/totalHost";
import profile from "../assets/images/profile.png";

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
    console.log(record);

    // console.log("id", authId);

    try {
      const response = await blocHost({
        authId: record._id,
        isBlocked: !record.isBlocked,
      }).unwrap();
      console.log(response);
      if (response.success) {
        message.success(response.message);
      } else {
        message.error(response.message || "Failed to update user status.");
      }
    } catch (error) {
      console.log("tr5tgr");
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
      render: (text, record) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={profile} className="h-10" alt={record.name} />
          <div style={{ marginLeft: "10px" }}>
            <div>{record.name}</div>
            <div style={{ color: "gray", fontSize: "12px" }}>
              {record.phone_number}
            </div>
          </div>
        </div>
      ),
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
