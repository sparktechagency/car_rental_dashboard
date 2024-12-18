import React from 'react';
import JoinRequest from '../Components/Dashboard/JoinRequest';
import { Link } from 'react-router-dom';
import { IoArrowBackSharp } from 'react-icons/io5';
import { Pagination } from 'antd';
import { useGetAllNewHostQuery } from '../redux/Api/hostReq';

const TotalJoinRequest = () => {
  const { data, isLoading, isError } = useGetAllNewHostQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data?.data?.allAddCarReq) {
    return <div>Error loading data.</div>;
  }

  const allRequests = data.data.allAddCarReq;
  const totalItems = data.data.meta.total;
  const pageSize = data.data.meta.limit;

  // Map API data to tableData structure
  const tableData = allRequests.map((request, index) => ({
    key: index + 1,
    id: request._id,
    name: request.user.name,
    img: request.user.profile_image, // User profile image
    contact: request.user.phone_number,
    email: request.user.email,
    location: request.carAddress, // Car location from API
    car: `${request.make} ${request.model}`, // Combine car make and model
    carLocation: request.destination, // Car destination
    carImg: request.car_image[0], // Use first car image
    status: request.status, // Status (pending, approved, etc.)
  }));

  return (
    <div className="bg-white">
      <div className="between-center my-2 pt-5">
        <div className="start-center mb-3">
          <Link to={-1} className="py-1 px-2 rounded-md start-center gap-1">
            <IoArrowBackSharp />
          </Link>
          <p className="text-xl">New Host Request</p>
        </div>
      </div>
      <JoinRequest tableData={tableData} pagination={false} />
      <div
        className="mt-10 pb-5"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
      >
        <span style={{ color: '#0044B4' }}>
          Showing 1-{pageSize} out of {totalItems}
        </span>
        <Pagination
          total={totalItems}
          pageSize={pageSize}
          defaultCurrent={1}
          showSizeChanger={false}
          showQuickJumper={false}
          hideOnSinglePage
          style={{ display: 'flex', alignItems: 'center' }}
        />
      </div>
    </div>
  );
};

export default TotalJoinRequest;
