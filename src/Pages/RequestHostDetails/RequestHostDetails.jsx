import { ArrowLeftOutlined } from "@ant-design/icons";
import React from "react";
import { Link, useParams } from "react-router-dom";
import img from "../../assets/images/car.png";
import img2 from "../../assets/images/car4.png";
import { GrLocation } from "react-icons/gr";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineDirectionsCar, MdOutlineDoorBack } from "react-icons/md";
import { RiBriefcase3Line } from "react-icons/ri";

import { useGetSingleHostreqQuery } from "../../redux/Api/hostReq";
const RequestHostDetails = () => {
  const { id: carId } = useParams();

  const { data, isLoading, isError } = useGetSingleHostreqQuery({ carId });
  console.log(data);

  const user = data?.data?.user || [];
  const cars = data?.data || [];

  return (
    <div>
      <p>
        {" "}
        <Link to={-1}>
          <ArrowLeftOutlined />
        </Link>{" "}
        Host Details
      </p>
      <div className="mt-10 flex items-center gap-5">
        <img src={img} className="rounded-full w-20 h-20" alt="" />
        <div>
          <p className="text-xl font-lora">{user?.name}</p>
          <div className="text-sm space-y-1 mt-4">
            <p>Contact Number : {user?.phone_number}</p>
            <p>Email : {user?.email}</p>
            <p>Location : {user?.address}K</p>
            {/* <p>Location : London , UK</p> */}
          </div>
        </div>
      </div>

      <div className="mt-10">
        <p>Total Cars</p>
        <div className="flex items-center justify-between bg-[#F6F6F6]  hover:bg-[#EBEBEB] p-4 mt-5 rounded-md">
          <p>S.n 01</p>
          <img src={img2} alt="" />
          <div>
            <p>
              {cars.make} {cars.model} {cars.year}
            </p>
            <p>{cars.carType} car</p>
          </div>
          <p className="flex items-center gap-2">
            <GrLocation />
            {cars.destination}
          </p>
          <p>Total Trip: {cars.trip || 0}</p>
          <div className="text-[#1E3F66]">
            <p>Price</p>
            <p>£{cars.pricePerDay || 0}/per day</p>
          </div>
          <p
            onClick={() => setOpenModal(true)}
            className="flex items-center gap-2 bg-white px-4 py-2 cursor-pointer"
          >
            <CiImageOn />
            View {cars.car_image?.length || 0} photos
          </p>
        </div>

        <div className=" grid grid-cols-2 items-center mt-20 px-5">
          <div className="">
            <p className="font-medium text-xl">
              {cars.make} {cars.model} {cars.year}
            </p>
            <div className="mt-10 flex items-center gap-10">
              <p className="bg-[#EBEBEB] inline-block px-5 py-2 rounded-full">
                {cars.carType} car
              </p>
              <p className="flex items-center gap-1">
                <GrLocation />
                {cars.destination}
              </p>
            </div>
            <p className="mt-5">Discount: {cars.discountAmount || 0}%</p>
            <p className="mt-5">Total Trip: {cars.trip }</p>
            <p className="mt-5">£{cars.pricePerDay}/day</p>
            <div className="flex  gap-5 mt-10">
              <p className="flex items-center gap-1">
                <MdOutlineDirectionsCar /> {cars.seats} Passenger
              </p>
              <p className="flex items-center gap-1">
                <MdOutlineDoorBack />
                {cars.doors} Door
              </p>
              <p className="flex items-center gap-1">
                <RiBriefcase3Line />
                {cars.bags} Bags
              </p>
              <p className="flex items-center gap-1">
                <RiBriefcase3Line />
                {cars.transmission}
              </p>
            </div>
            <p className="my-8 font-medium text-xl">Description:</p>
            <p className="max-w-[50%]">{cars.description}</p>
            <p className="py-8">Delivery Location:</p>
            <p>{cars.carAddress}</p>
          </div>

          <div className=" w-full text-[#272121]">
            <div className="font-normal tex-[16px] space-y-2">
              <p>Driver’s license number</p>
              <p>{cars.hostLicenseNumber}</p>
            </div>
            <div className="flex items-center gap-10 mt-10">
              <div>
                <p>maximum travel distance for one day</p>
                <p className="text-sm">{cars.maxTravelDistancePerDay}Km</p>
              </div>
              <div>
                <p>Per kilometer charge after crossing maximum distance </p>
                <p className="text-sm">£{cars.finePerKm}</p>
              </div>
            </div>
            <div className="mt-10">
              <p>User Name </p>
              <p className="text-sm">
                {cars.hostFirstName} {cars.hostLastName}
              </p>
            </div>
            <div className="mt-10">
              <p>License Expiration date</p>
              <p className="text-sm">{cars.hostLicenseExpiryDate}</p>
            </div>
            <div className="mt-10">
              <p>License Date of birth</p>
              <p className="text-sm">{cars.hostLicenseDateOfBirth}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestHostDetails;
