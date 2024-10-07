

import { Link, useParams } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { MdOutlineLibraryAddCheck, } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useGetSingleSubscribePlanQuery } from "../redux/Api/dashboardApi";






const SingleUserDetails = () => {
  const {id} = useParams()

  const { data : getSingleSubscriber } = useGetSingleSubscribePlanQuery(id);

  const userDetails = [
    { "label": "Name", "value": `${getSingleSubscriber?.data?.name}` },
    { "label": "Date of Birth", "value": `${getSingleSubscriber?.data?.date_of_birth?.split("T")[0]}` },
    { "label": "Place of Birth", "value": `${getSingleSubscriber?.data?.place_of_birth}` },
    { "label": "License No", "value": `${getSingleSubscriber?.data?.license_number}` },
    { "label": "Passport", "value": `${getSingleSubscriber?.data?.passport_number}` },

    { "label": "Email", "value": `${getSingleSubscriber?.data?.email}` },
    { "label": "Phone Number", "value": `${getSingleSubscriber?.data?.phone_number}`},
    { "label": "Profession", "value": `${getSingleSubscriber?.data?.profession}` },
    { "label": "What's your religion?", "value": `${getSingleSubscriber?.data?.religion || 'Not available'}` },
    { "label": "Do you have children?", "value": `${getSingleSubscriber?.data?.haveChildren}` },
    { "label": "Do you have pets?", "value": `${getSingleSubscriber?.data?.havePets}` },
    { "label": "Do you own a vehicle?", "value": `${getSingleSubscriber?.data?.haveVehicle}` },
    { "label": "Are you willing to swap your vehicles?", "value": `${getSingleSubscriber?.data?.willingVehicle}` },
    { "label": "Are you owning or leasing your property?", "value": `${getSingleSubscriber?.data?.ownerOfProperty}` },
    { "label": "Will you be able to provide approval from owner for temp swap?", "value": `${getSingleSubscriber?.data?.ableApproveForm}`},
    { "label": "Is your property insured?", "value": `${getSingleSubscriber?.data?.propertyInsured}`}
  ]

  const userDetails1 = [
    {
      "question": "Will your utilities be up to date for swap?",
      "answer": `${getSingleSubscriber?.data?.utilitiesUptoDate}`
    },
    {
      "question": "What do you want to swap and for how long?",
      "answer": `${getSingleSubscriber?.data?.aboutSwap}`
    },
    {
      "question": "Do you want to arrive on departure or depart on arrival?",
      "answer": `${getSingleSubscriber?.data?.departureArrival?.split('T')[0]}`
    },
    {
      "question": "Dates of travel?",
      "answer": `${getSingleSubscriber?.data?.datesOfTravel?.split('T')[0]}`
    },
    // {
    //   "question": "Travel Start",
    //   "destination": "New York",
    //   "state": "St. Celina",
    //   "county": "Rd. Santa Ana",
    //   "country": "USA"
    // },
    // {
    //   "question": "Travel End",
    //   "destination": "3891 Ranchview",
    //   "state": "California",
    //   "county": "Delaware",
    //   "country": "USA"
    // },
    // {
    //   "question": "Purpose of travel?",
    //   "answer": "Business"
    // }
  ]
  

  console.log(getSingleSubscriber?.data);
  return (

    // <div className="container mx-auto p-5">
    <div className="bg-white  rounded-lg shadow-md">
      <div className="flex justify-between items-center px-3 my-2 pt-5">
        <div className="flex items-center gap-2 mb-3">
          <Link
            to={-1}
            className=" py-1 rounded-md flex items-center gap-1 "
          >
            <IoArrowBackSharp />
          </Link>
          <p className="text-xl">Membership Application of {getSingleSubscriber?.data?.name}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 p-6">
        <div className="  border-r-2">
          <div className="w-[100%]">

            {
              userDetails.map((user, i) => <div key={i} className="grid grid-cols-2 items-center">
                <p className="text-[16px] mr-28 font-medium">
                  {user?.label}
                </p>
                <p className="">: {user?.value}</p>
              </div>)
            }

          </div>


        </div>

        {/* <div className="divider"></div> */}
        <div className="">
          {
            userDetails1.map((user, i) => <div key={i} className="grid grid-cols-12 items-center">
              <p className="text-[16px] mr-28 font-medium col-span-8">
                {user?.question}
              </p>
              <p className="col-span-4">: {user?.answer}</p>
            </div>)
          }
          <h1 className="text-xl font-medium py-5">Travel Start</h1>

          <div className="grid grid-cols-12 items-center py-1">
            <p className="text-[16px] mr-28 font-medium col-span-8">
              Destination
            </p>
            <p className="col-span-4">: {getSingleSubscriber?.data?.startDestination}</p>
          </div>
          <div className="grid grid-cols-12 items-center py-1">
            <p className="text-[16px] mr-28 font-medium col-span-8">
              State
            </p>
            <p className="col-span-4">: {getSingleSubscriber?.data?.startState}</p>
          </div>
          <div className="grid grid-cols-12 items-center py-1">
            <p className="text-[16px] mr-28 font-medium col-span-8">
              Country
            </p>
            <p className="col-span-4">: {getSingleSubscriber?.data?.travelStartCountry}</p>
          </div>
          
          <h1 className="text-xl font-medium py-5">Travel End</h1>

          <div className="grid grid-cols-12 items-center py-1">
            <p className="text-[16px] mr-28 font-medium col-span-8">
              Destination
            </p>
            <p className="col-span-4">: {getSingleSubscriber?.data?.endDestination}</p>
          </div>
          <div className="grid grid-cols-12 items-center py-1">
            <p className="text-[16px] mr-28 font-medium col-span-8">
              State
            </p>
            <p className="col-span-4">: {getSingleSubscriber?.data?.endState}</p>
          </div>
          
          <div className="grid grid-cols-12 items-center py-1">
            <p className="text-[16px] mr-28 font-medium col-span-8">
              Country
            </p>
            <p className="col-span-4">: {getSingleSubscriber?.data?.endCountry}</p>
          </div>
          <div className="grid grid-cols-12 items-center py-1">
            <p className="text-[16px] mr-28 font-medium col-span-8">
              Proposal Travel
            </p>
            <p className="col-span-4">: Business</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-4 pb-5">
        <button className="bg-blue-500 text-white py-1 px-4 rounded flex items-center gap-1 text-sm">
          <MdOutlineLibraryAddCheck /><span>Approved</span>
        </button>
        <button className="bg-red-500 text-white py-1 px-4 rounded flex items-center text-sm">
          <IoMdClose /> <span>Decline</span>
        </button>
      </div>
    </div>
  );
};

export default SingleUserDetails;
