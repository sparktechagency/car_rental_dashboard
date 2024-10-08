import { Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { usePlanSubscriberQuery } from "../../redux/Api/dashboardApi";


const JoinRequest = () => {
  /** Get new member request */
  const { data: getSubscriber } = usePlanSubscriberQuery()
  const tableData = getSubscriber?.data?.data?.map((user, i) => (
    {
      key: i + 1,
      id : user?._id,
      name: user?.user_id?.name,
      img: user?.user_id?.profile_image,
      contact : user?.phone_number,
      email : user?.email,
      location : user?.place_of_birth

    }
  ))
  // console.log(tableData);
  // console.log(getSubscriber?.data?.data);
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
              <Link className="px-6 py-2 rounded-3xl text-black font-semibold bg-transparent border border-blue-500 hover:bg-blue-500 hover:text-white" to={`/single-user-details/${record?.id}`}>
                View
              </Link>
          </div>
        );
      },
    },
  ];
  return (
    <div className="bg-[var(--color-7)] rounded-md">
      <Table dataSource={tableData} columns={columns} className="custom-pagination" pagination={false
        //   {
        //   pageSize: 5,
        //   showTotal: (total, range) => `Showing ${range[0]}-${range[1]} out of ${total}`,
        //   locale: {
        //     items_per_page: '',
        //     prev_page: 'Previous',
        //     next_page: 'Next',
        //   },
        // }
      } />

    </div>
  );
};

export default JoinRequest;
