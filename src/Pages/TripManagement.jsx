import React from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { Table, Avatar, Spin, Alert } from 'antd';
import { useGetAllTripQuery } from '../redux/Api/tripApi';

const TripManagement = () => {
  const { data, isLoading, isError } = useGetAllTripQuery();

  // Transform API data to match the table format
  const transformedData = data?.data?.trips?.map((trip, index) => ({
    key: trip._id,
    serialNo: `#${index + 1}`, // Generate serial numbers
    renterName: trip.user.name,
    renterPhone: trip.user.phone_number,
    renterAvatar: trip.user.profile_image, // Assuming it's the avatar image
    hostName: `${trip.car.hostFirstName} ${trip.car.hostLastName}`,
    hostPhone: trip.car.user.phone_number, // Assuming phone number is present
    hostAvatar: trip.car.car_image[0], // Using the first car image for the host
    price: `$${trip.tripPrice}`,
    carName: `${trip.car.make} ${trip.car.model}`,
    location: trip.returnLocation,
    status: trip.status,
  }));

  // Define table columns
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
      render: (status) => {
        const statusColors = {
          completed: 'bg-[#34C759]',
          ongoing: 'bg-[#73A5C6]',
          canceled: 'bg-[#E3503E]',
          requested: 'bg-[#F3A638]',
        };
        return (
          <button
            className={`${statusColors[status.toLowerCase()]} text-white px-4 py-2 rounded-md`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        );
      },
    },
  ];

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <Spin size="large" />
      </div>
    );
  }

  if (isError) {
    return (
      <Alert
        message="Error"
        description="Failed to load trips. Please try again later."
        type="error"
        showIcon
      />
    );
  }

  return (
    <div className="bg-white rounded-md p-5">
      <Link to={-1} className="flex items-center gap-2">
        <GoArrowLeft />
        Trip Management
      </Link>

      <Table
        columns={columns}
        dataSource={transformedData}
        pagination={{
          pageSize: 10,
          showTotal: (total, range) => `Showing ${range[0]}-${range[1]} out of ${total}`,
          showSizeChanger: false,
        }}
        rowKey="key"
      />
    </div>
  );
};

export default TripManagement;
