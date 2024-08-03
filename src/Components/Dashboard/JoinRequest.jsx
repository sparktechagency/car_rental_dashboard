import { Input, Modal, Table } from "antd";
import { Button } from "antd";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaEdit, FaRegEye, FaStar } from "react-icons/fa";
import { MdEdit, MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
const dataSource = [
  {
    key: "1",
    name: "Mike",
    img: "https://i.ibb.co/F3jcwjJ/artworks-YCx-Rfx-OOf-T5l-Dm-J9-K5q-X2-A-t500x500.jpg",
    contact: 324189454648487,
    email: "gmail@gmail.com",
    location: "xyz road, y house",
  },
  {
    key: "2",
    name: "Mike",
    img: "https://i.ibb.co/F3jcwjJ/artworks-YCx-Rfx-OOf-T5l-Dm-J9-K5q-X2-A-t500x500.jpg",
    contact: 324189454648487,
    email: "gmail@gmail.com",
    location: "xyz road, y house",
  },
  {
    key: "3",
    name: "Mike",
    img: "https://i.ibb.co/F3jcwjJ/artworks-YCx-Rfx-OOf-T5l-Dm-J9-K5q-X2-A-t500x500.jpg",
    contact: 324189454648487,
    email: "gmail@gmail.com",
    location: "xyz road, y house",
  },
  {
    key: "4",
    name: "Mike",
    img: "https://i.ibb.co/F3jcwjJ/artworks-YCx-Rfx-OOf-T5l-Dm-J9-K5q-X2-A-t500x500.jpg",
    contact: 324189454648487,
    email: "gmail@gmail.com",
    location: "xyz road, y house",
  },
];
const sarvayData = [
  { name: "Customer Feedback", id: "1" },
  { name: "Customer Feedback", id: "2" },
  { name: "Customer Feedback", id: "3" },
  { name: "Customer Feedback", id: "4" },
  { name: "Customer Feedback", id: "5" },
  { name: "Customer Feedback", id: "6" },
  { name: "Customer Feedback", id: "7" },
  { name: "Customer Feedback", id: "8" },
  { name: "Customer Feedback", id: "9" },
];
const JoinRequest = () => {
  const [openAllowModal, setOpenAllowModal] = useState(false);
  const [selectedID, setSelectedID] = useState([]);
  // console.log(openAllowModal)
  const columns = [
    {
      title: "Sl No.",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_, record) => {
        return (
          <div className="start-center gap-2">
            <img
              src={record?.img}
              className="w-[40px] h-[40px] rounded-[8px]"
              alt=""
            />
            <p className="font-medium">{record?.name}</p>
          </div>
        );
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email  ",
    },

    {
      title: "Contact Number",
      dataIndex: "contact",
      key: "contact  ",
    },

    {
      title: "Location",
      dataIndex: "location",
      key: "location  ",
    },

    {
      title: "Actions",
      dataIndex: "key",
      key: "key",
      render: (_, record) => {
        return (
          <div className="start-center gap-1">
            {/* <button className='px-4 py-2 rounded-3xl text-black font-semibold bg-green-600'> View </button> */}
            <button className="px-6 py-2 rounded-3xl text-black font-semibold bg-transparent border border-blue-500 hover:bg-blue-500 hover:text-white">
               <Link to={`/single-user-details/id`}>
               View
               </Link>
            </button>
          </div>
        );
        //px-4 py-2 rounded-3xl text-white font-semibold bg-green-600
      },
    },
  ];
  return (
    <div className="bg-[var(--color-7)] rounded-md">
      <Table dataSource={dataSource} columns={columns} />
      <Modal
        centered
        footer={false}
        open={openAllowModal}
        onCancel={() => setOpenAllowModal(false)}
      >
        <div className=" capitalize">
          <p className="mb-5 text-left text-xl my-2">Assign Project</p>
          <div className="grid grid-cols-3 gap-4 justify-start items-center ">
            {sarvayData?.map((item) => (
              <div
                key={item?.id}
                onClick={() => {
                  const findId = selectedID.find((id) => item?.id === id);
                  if (findId) {
                    const filterID = selectedID.filter((id) => item?.id !== id);
                    setSelectedID(filterID);
                  } else {
                    setSelectedID([...selectedID, item?.id]);
                  }
                }}
                className={`w-full p-4 py-6 rounded-md text-white font-semibold text-center cursor-pointer select-none ${
                  selectedID.includes(item?.id)
                    ? "bg-[#BD8E05]"
                    : "bg-[var(--color-2)]"
                }`}
              >
                <p className="text-base">{item?.name}</p>
              </div>
            ))}
          </div>
          <button className="p-2 mt-5 w-full bg-[var(--color-2)]">save</button>
        </div>
      </Modal>
    </div>
  );
};

export default JoinRequest;
