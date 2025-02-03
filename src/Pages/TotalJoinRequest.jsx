import React, { useState } from "react";
import JoinRequest from "../Components/Dashboard/JoinRequest";
import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { Pagination } from "antd";
import { useGetAllNewHostQuery } from "../redux/Api/hostReq";

const TotalJoinRequest = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  // Fetch Data with Pagination
  const { data, isLoading, isError } = useGetAllNewHostQuery({
    page: currentPage,
    limit: pageSize,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data?.data?.allAddCarReq) {
    return <div>Error loading data.</div>;
  }

  const allRequests = data.data.allAddCarReq;
  const totalItems = data.data.meta.total; // Corrected total items for pagination

  const handlePageChange = (page) => {
    console.log("Page Changed to:", page);
    setCurrentPage(page);
  };

  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  const tableData = allRequests.map((request, index) => ({
    key: startItem + index,
    id: request._id,
    name: request.user.name,
    img: request.user.profile_image,
    contact: request.user.phone_number,
    email: request.user.email,
    location: request.carAddress,
    car: `${request.make} ${request.model}`,
    carLocation: request.destination,
    carImg: request.car_image[0],
    status: request.status,
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

      {/* Pass Table Data */}
      <JoinRequest tableData={tableData} pagination={false} />

      {/* Pagination Section */}
      <div className="mt-10 pb-5 flex items-center justify-end gap-2">
        
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

export default TotalJoinRequest;
