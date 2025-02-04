import { ArrowLeftOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import img from "../assets/images/car4.png";
import img2 from "../assets/images/car6.png";
import img7 from "../assets/images/car8.png";
import img8 from "../assets/images/car9.png";
import img9 from "../assets/images/car12.png";
import img10 from "../assets/images/car13.png";
import img11 from "../assets/images/car11.png";
import img12 from "../assets/images/car10.png";
import { GrLocation } from "react-icons/gr";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineDirectionsCar, MdOutlineDoorBack } from "react-icons/md";
import { RiBriefcase3Line } from "react-icons/ri";
import { Modal } from "antd";
import { useGetSingleHostQuery } from "../redux/Api/totalHost";
import { imageUrl } from "../redux/Api/baseApi";

const HostDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetSingleHostQuery({
    userId: id,
    host: "HOST",
  });

  console.log(data);

  const [openModal, setOpenModal] = useState(false);

  const host = data?.data?.host || {};

  const cars = data?.data?.cars || [];

  console.log(cars);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading host details</div>;

  return (
    <div className="bg-white p-5  rounded-md">
      <p>
        {" "}
        <Link to={-1}>
          <ArrowLeftOutlined />
        </Link>{" "}
        Host Details
      </p>
      <div className="mt-10 flex items-center gap-5">
        <img src={`${imageUrl}/${host?.profile_image}`} className="rounded-full w-20 h-20" alt="" />
        <div>
          <p className="text-xl font-lora">{host?.name}</p>
          <div className="text-sm space-y-1 mt-4">
            <p>Contact Number : {host?.phone_number}</p>
            <p>Email : {host?.email}</p>
            <p>Location : N</p>
            {/* <p>Location : London , UK</p> */}
          </div>
        </div>
      </div>
      <div className="mt-10">
        <p>Total Cars: {cars.length}</p>
        {cars.map((car, index) => (
  <div
    key={car._id}
    className="flex items-center justify-between bg-[#F6F6F6] hover:bg-[#EBEBEB] p-4 mt-5 rounded-md"
  >
    <p>S.n {index + 1}</p>

    {/* Display the first image of the car */}
    {car.car_image && car.car_image.length > 0 ? (
      <img
        src={`${imageUrl}/${car.car_image[0]}`} // Use the first image URL in the car_image array
        alt={`Car image ${index + 1}`}
        className="w-20 h-20 object-cover rounded-md"
      />
    ) : (
      <img src={img} alt="No image available" className="w-20 h-20 object-cover rounded-md" />
    )}

    <div>
      <p>
        {car.make} {car.model} {car.year}
      </p>
      <p>{car.carType} car</p>
    </div>
    <p className="flex items-center gap-2">
      <GrLocation />
      {car.destination}
    </p>
    <p>Total Trip: {car.trip || 0}</p>
    <div className="text-[#1E3F66]">
      <p>Price</p>
      <p>£{car.pricePerDay || 0}/per day</p>
    </div>
    <p
      onClick={() => setOpenModal(true)}
      className="flex items-center gap-2 bg-white px-4 py-2 cursor-pointer"
    >
      <CiImageOn />
      View {car.car_image?.length || 0} photos
    </p>
  </div>
))}


        {cars.length > 0 && (
          <div className=" grid grid-cols-2 items-center mt-20 px-5">
            <div className="">
              <p className="font-medium text-xl">
                {cars[0].make} {cars[0].model} {cars[0].year}
              </p>
              <div className="mt-10 flex items-center gap-10">
                <p className="bg-[#EBEBEB] inline-block px-5 py-2 rounded-full">
                  {cars[0].carType} car
                </p>
                <p className="flex items-center gap-1">
                  <GrLocation />
                  {cars[0].destination}
                </p>
              </div>
              <p className="mt-5">Discount: {cars[0].discountAmount || 0}%</p>
              <p className="mt-5">Total Trip: {cars[0].trip || 0}</p>
              <p className="mt-5">£{cars[0].pricePerDay}/day</p>
              <div className="flex  gap-5 mt-10">
                <p className="flex items-center gap-1">
                  <MdOutlineDirectionsCar /> {cars[0].seats} Passenger
                </p>
                <p className="flex items-center gap-1">
                  <MdOutlineDoorBack />
                  {cars[0].doors} Door
                </p>
                <p className="flex items-center gap-1">
                  <RiBriefcase3Line />
                  {cars[0].bags} Bags
                </p>
                <p className="flex items-center gap-1">
                  <RiBriefcase3Line />
                  {cars[0].transmission}
                </p>
              </div>
              <p className="my-8 font-medium text-xl">Description:</p>
              <p className="max-w-[50%]">{cars[0].description}</p>
              <p className="py-8">Delivery Location:</p>
              <p>{cars[0].carAddress}</p>
            </div>

            <div className=" w-full text-[#272121]">
              <div className="font-normal tex-[16px] space-y-2">
                <p>Driver’s license number</p>
                <p>{cars[0].hostLicenseNumber}</p>
              </div>
              <div className="flex items-center gap-10 mt-10">
                <div>
                  <p>maximum travel distance for one day</p>
                  <p className="text-sm">{cars[0].maxTravelDistancePerDay}Km</p>
                </div>
                <div>
                  <p>Per kilometer charge after crossing maximum distance </p>
                  <p className="text-sm">£{cars[0].finePerKm}</p>
                </div>
              </div>
              <div className="mt-10">
                <p>User Name </p>
                <p className="text-sm">
                  {cars[0].hostFirstName} {cars[0].hostLastName}
                </p>
              </div>
              <div className="mt-10">
                <p>License Expiration date</p>
                <p className="text-sm">{cars[0].hostLicenseExpiryDate}</p>
              </div>
              <div className="mt-10">
                <p>License Date of birth</p>
                <p className="text-sm">{cars[0].hostLicenseDateOfBirth}</p>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center gap-5 mt-5 px-5 mb-10">
          <div className="border border-gray-100 p-4">
            <p>New York City, USA</p>
            <p>Population: 8.4 million</p>
            <p>
              Known for: Statue of Liberty, Times Square, Central Park, Empire
              State Building
            </p>
          </div>
          <div className="border border-gray-100 p-4">
            <p>Tokyo, japan</p>
            <p>Population: 8.4 million</p>
            <p>
              Known for: Statue of Liberty, Times Square, Central Park, Empire
              State Building
            </p>
          </div>
          <div className="border border-gray-100 p-4">
            <p>Paris France</p>
            <p>Population: 8.4 million</p>
            <p>
              Known for: Statue of Liberty, Times Square, Central Park, Empire
              State Building
            </p>
          </div>
        </div>
      </div>

      <Modal
        width={800}
        centered
        footer={false}
        open={openModal}
        onCancel={() => setOpenModal(false)}
      >
        <p className="text-center font-medium text-xl mb-5">All Images</p>
        <div className="grid grid-cols-2 gap-5">
          <div className="space-y-5">
            {cars[0]?.car_image?.slice(0, 3).map((image, index) => (
              <div key={index} className="flex items-center gap-3">
                <img
                  src={`${imageUrl}/${image}`}
                  className="h-52 w-full"
                  alt={`Car image ${index + 1}`}
                />
                
                {/* Display image URL next to the image */}
              </div>
            ))}
          </div>
          <div className="space-y-5">
            {cars[0]?.car_image?.slice(3, 6).map((image, index) => (
              <div key={index} className="flex items-center gap-3">
                <img
                  src={`${imageUrl}/${image}`}
                  className="h-52 w-full"
                  alt={`Car image ${index + 4}`}
                />
        
                {/* Display image URL next to the image */}
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default HostDetails;
