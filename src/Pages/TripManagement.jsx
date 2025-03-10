import React, { useState } from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { Table, Avatar, Spin, Alert, Pagination } from 'antd';
import { useGetAllTripQuery } from '../redux/Api/tripApi';
import { imageUrl } from '../redux/Api/baseApi';

const TripManagement = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  // Fetch Data with Pagination
  const { data, isLoading, isError } = useGetAllTripQuery({
    page: currentPage,
    limit: pageSize,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <Spin size="large" />
      </div>
    );
  }

  if (isError || !data?.data?.trips) {
    return (
      <Alert
        message="Error"
        description="Failed to load trips. Please try again later."
        type="error"
        showIcon
      />
    );
  }

  const allTrips = data.data.trips;
  const totalItems = data.data.meta?.total || 0; // Ensure total count is correct

  const handlePageChange = (page) => {
    console.log("Page Changed to:", page);
    setCurrentPage(page);
  };

  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  // Transform API data to match the table format
  const transformedData = allTrips?.map((trip, index) => ({
    key: trip?._id || `temp-${index}`, // Ensure a unique key even if `_id` is missing
    serialNo: `#${startItem + index}`, // Generate serial numbers correctly across pages
    renterName: trip?.user?.name || "N/A",
    renterPhone: trip?.user?.phone_number || "N/A",
    renterAvatar: trip?.user?.profile_image ? `${imageUrl}/${trip?.user?.profile_image}` : null, 
    hostName: trip?.car?.hostFirstName && trip?.car?.hostLastName
        ? `${trip?.car?.hostFirstName} ${trip?.car?.hostLastName}`
        : "N/A",
    hostPhone: trip?.car?.user?.phone_number || "N/A",
    hostAvatar: trip?.car?.car_image?.length ? `${imageUrl}/${trip?.car?.car_image[0]}` : null, 
    price: trip?.tripPrice ? `£${trip?.tripPrice}` : "N/A",
    carName: trip?.car?.make && trip?.car?.model ? `${trip?.car?.make} ${trip?.car?.model}` : "N/A",
    location: trip?.returnLocation || "N/A",
    status: trip?.status || "Unknown",
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
          {/* <Avatar src={record.renterAvatar} alt={record.renterName} /> */}
          <img className='w-[50px]' src={`${record?.renterAvatar}`} alt="sdf" />
          <div style={{ marginLeft: '10px' }}>
            <div>{record?.renterName}</div>
            <div style={{ color: 'gray', fontSize: '12px' }}>{record?.renterPhone}</div>
          </div>
        </div>
      ),
    },
    {
      title: 'Hosts Name',
      dataIndex: 'hostName',
      key: 'hostName',
      render: (text, record) => {
        console.log("Renter Record:", record); // Logging the record object
    
        return (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* <Avatar src={record.renterAvatar} alt={record.renterName} /> */}
            <img className='w-[50px]' src={`${record?.hostAvatar}`} alt="sdf" />
            <div style={{ marginLeft: '10px' }}>
              <div>{record?.renterName}</div>
              <div style={{ color: 'gray', fontSize: '12px' }}>{record?.renterPhone}</div>
            </div>
          </div>
        );
      },
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
          <button className={`${statusColors[status.toLowerCase()]} text-white px-4 py-2 rounded-md`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        );
      },
    },
  ];

  return (
    <div className="bg-white rounded-md p-5">
      <Link to={-1} className="flex items-center gap-2 mb-4">
        <GoArrowLeft />
        Trip Management
      </Link>

      <Table
        columns={columns}
        dataSource={transformedData}
        rowKey="key"
        pagination={false} // Disable built-in pagination to use Ant Design's custom pagination
      />

      {/* Custom Pagination Controls */}
      <div className="mt-10 pb-5 flex items-center justify-end">
        
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={totalItems}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default TripManagement;
