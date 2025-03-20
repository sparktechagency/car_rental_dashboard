import { ArrowLeftOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import img from "../../assets/images/car.png";
import img2 from "../../assets/images/car4.png";
import { GrLocation } from "react-icons/gr";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineDirectionsCar, MdOutlineDoorBack } from "react-icons/md";
import { RiBriefcase3Line } from "react-icons/ri";

import { useGetSingleHostreqQuery } from "../../redux/Api/hostReq";
import { imageUrl } from "../../redux/Api/baseApi";
import { Modal } from "antd";
const RequestHostDetails = () => {
  const { id: carId } = useParams();
  const [openModal, setOpenModal] = useState(false);
  const { data, isLoading, isError } = useGetSingleHostreqQuery({ carId });
  console.log(data);

  const user = data?.data?.user || [];
  const cars = data?.data || [];

   const [carData,setCarData] = useState({});
    console.log(cars?.description)
    
    console.log("card data",carData)
  
    const handleModalOpen = (item)=>{
      setCarData(item);
      setOpenModal(true)
    }

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
        <img src={`${imageUrl}/${user?.profile_image}`} className="rounded-full w-20 h-20 object-cover" alt="" />
        <div>
          <p className="text-xl font-lora">{user?.name}</p>
          <div className="text-sm space-y-1 mt-4">
            <p>Contact Number : {user?.phone_number}</p>
            <p>Email : {user?.email}</p>
            
            {/* <p>Location : London , UK</p> */}
          </div>
        </div>
      </div>

       <div className="mt-10">
            

        <div
          
          className="flex items-center justify-between bg-[#F6F6F6] hover:bg-[#EBEBEB] p-4 mt-5 rounded-md"
        >
          <p></p>
      
         
          {cars.car_image && cars.car_image.length > 0 ? (
          <img
             src={`${imageUrl}/${cars.car_image[0]}`}
              alt={`Car image `}
              className="w-20 h-20 object-cover rounded-md"
            />
         ) : (
            <img src={img} alt="No image available" className="w-20 h-20 object-cover rounded-md" />
          )}
      
          <div>
            <p>
              {cars.make} {cars.model} {cars.year}
            </p>
            <p>{cars.carType} cars</p>
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
            onClick={()=>handleModalOpen(cars)}
            className="flex items-center gap-2 bg-white px-4 py-2 cursor-pointer"
          >
            <CiImageOn />
            View {cars.car_image?.length || 0} photos
          </p>
        </div>
      
  <div className=" mt-11">
         <div className="">
          <p className="font-semibold">Host Name:</p>
          {user?.name}
         
          <p className="font-semibold">Rating:</p>
          {user?.rating}
  
  
         </div>
         <div>
         <div className="font-normal tex-[16px] space-y-2">
                  <p className="font-medium text-xl">Host license Image</p>
                  <div className="grid grid-cols-2 gap-4">
                  <div>
                  <p className="font-semibold"> Back Image:</p>
                  <img className="w-full object-cover" src={`${imageUrl}/${user.licenseBackImage}`} alt="" />
                  </div>
                  <div>
                  <p className="font-semibold">Front Image</p>
                  <img className="w-full object-cover" src={`${imageUrl}/${user.licenseFrontImage}`} alt="" />
                  </div>
                  </div>
                </div>
         </div>
         </div>
  
      
              
            </div>

            <Modal
        width={1000}
        centered
        footer={false}
        open={openModal}
        onCancel={() => setOpenModal(false)}
      >
        <p className="text-center font-medium text-xl mb-5">All Images</p>
        <div className="">
        <div>
  

  <div className=" grid grid-cols-2  ">
            <div className="">
              <p className="font-medium text-xl">
                {carData.make} {carData.model} {carData.year}
              </p>
              <div className="mt-5 flex items-center gap-10">
                <p className="bg-[#EBEBEB] inline-block px-5 py-2 rounded-full">
                  {carData.carType} car
                </p>
                <p className="flex items-center gap-1">
                  <GrLocation />
                  {carData.destination}
                </p>
              </div>
              <p className="mt-5"><span className="font-semibold">Discount:</span> {carData.discountAmount || 0}%</p>
              <p className=""><span className="font-semibold"> Total Trip:</span> {carData.trip || 0}</p>
              <p className="">£{carData.pricePerDay}/day</p>
              <div className="flex  gap-5 mt-5 text-base mb-2">
                <p className="flex items-center gap-1">
                  <MdOutlineDirectionsCar /> {carData.seats} Passenger
                </p>
                <p className="flex items-center gap-1">
                  <MdOutlineDoorBack />
                  {carData.doors} Door
                </p>
                <p className="flex items-center gap-1">
                  <RiBriefcase3Line />
                  {carData.bags} Bags
                </p>
                <p className="flex items-center gap-1">
                  <RiBriefcase3Line />
                  {carData.transmission}
                </p>
              </div>
              <p className="font-medium text-xl">Description:</p>
              <p className="max-w-[50%]">{carData.description}</p>
              <p className="font-semibold mt-5">Delivery Location:</p>
              <p className="mb-3">{carData.carAddress}</p>
            </div>

            <div className=" w-full text-[#272121]">
              <div className="font-normal tex-[16px] space-y-2">
                <p className="font-medium text-xl">Driver’s license Image</p>
                <p className="font-semibold"> Back Image:</p>
                <img className="w-[200px] object-cover" src={`${imageUrl}/${carData.hostLicenseBackImage}`} alt="" />
                <p className="font-semibold">Front Image</p>
                <img className="w-[200px] object-cover" src={`${imageUrl}/${carData.hostLicenseFrontImage}`} alt="" />
              </div>
              
             
            </div>
          </div>
</div>
          <div className="grid grid-cols-2 gap-5">
          {/* {cars?.map((item, carIndex) => (
  item.car_image?.map((image, index) => {
    // console.log(`Car ${carIndex + 1}, Image ${index + 1}:`, image); // Console log each image
    
    return (
      <div key={`${carIndex}-${index}`} className="flex items-center gap-3">
        <img
          src={`${imageUrl}/${image}`}
          className="h-52 w-full"
          alt={`Car ${carIndex + 1} Image ${index + 1}`}
        />
      </div>
    );
  })
))} */}


{
  carData?.car_image?.map((image,index)=>

<div key={index} className="flex items-center gap-3">
  
        <img
          src={`${imageUrl}/${image}`}
          className="h-52 w-full object-cover"
          alt={`Car ${index + 1} Image ${index + 1}`}
        />
      </div>
 )
}


          </div>
          
        </div>
      </Modal>
    </div>
  );
};

export default RequestHostDetails;
