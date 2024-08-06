

import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { MdOutlineLibraryAddCheck, } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const userDetails = [
  { "label": "Name", "value": "Foysal Rahman" },
  { "label": "Date of Birth", "value": "24/04/2002" },
  { "label": "Place of Birth", "value": "Tokyo, Japan" },
  { "label": "License No", "value": "4546454675" },
  { "label": "Passport", "value": "658567899769" },
  { "label": "Email", "value": "williejennings@gmail.com" },
  { "label": "Phone Number", "value": "(702) 555-0122" },
  { "label": "Profession", "value": "Businessman" },
  { "label": "What's your religion?", "value": "Islam" },
  { "label": "Do you have children?", "value": "Yes" },
  { "label": "Do you have pets?", "value": "Yes" },
  { "label": "Do you own a vehicle?", "value": "Yes" },
  { "label": "Are you willing to swap your vehicles?", "value": "Yes" },
  { "label": "Are you owning or leasing your property?", "value": "Yes" },
  { "label": "Will you be able to provide approval from owner for temp swap?", "value": "Yes" },
  { "label": "Is your property insured?", "value": "Yes" }
]

const userDetails1 = [
  {
    "question": "Will your utilities be up to date for swap?",
    "answer": "Yes"
  },
  {
    "question": "What do you want to swap and for how long?",
    "answer": "I want to swap for anything from low to high-value products and want to swap for a long time, at least 2-5 years."
  },
  {
    "question": "Do you want to arrive on departure or depart on arrival?",
    "answer": "Arrive on departure"
  },
  {
    "question": "Dates of travel?",
    "answer": "12/01/23"
  },
  {
    "question": "Travel Start",
    "destination": "New York",
    "state": "St. Celina",
    "county": "Rd. Santa Ana",
    "country": "USA"
  },
  {
    "question": "Travel End",
    "destination": "3891 Ranchview",
    "state": "California",
    "county": "Delaware",
    "country": "USA"
  },
  {
    "question": "Purpose of travel?",
    "answer": "Business"
  }
]



const SingleUserDetails = () => {
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
          <p className="text-xl">Membership Application of Faysal Rahman</p>
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
            <p className="col-span-4">: New Work</p>
          </div>
          <div className="grid grid-cols-12 items-center py-1">
            <p className="text-[16px] mr-28 font-medium col-span-8">
              State
            </p>
            <p className="col-span-4">: St. selena</p>
          </div>
          <div className="grid grid-cols-12 items-center py-1">
            <p className="text-[16px] mr-28 font-medium col-span-8">
              Country
            </p>
            <p className="col-span-4">: Rd. Stanat ana</p>
          </div>
          <div className="grid grid-cols-12 items-center py-1">
            <p className="text-[16px] mr-28 font-medium col-span-8">
              Country
            </p>
            <p className="col-span-4">: Usa</p>
          </div>
          <h1 className="text-xl font-medium py-5">Travel End</h1>

          <div className="grid grid-cols-12 items-center py-1">
            <p className="text-[16px] mr-28 font-medium col-span-8">
              Destination
            </p>
            <p className="col-span-4">: New Work</p>
          </div>
          <div className="grid grid-cols-12 items-center py-1">
            <p className="text-[16px] mr-28 font-medium col-span-8">
              State
            </p>
            <p className="col-span-4">: St. selena</p>
          </div>
          <div className="grid grid-cols-12 items-center py-1">
            <p className="text-[16px] mr-28 font-medium col-span-8">
              Country
            </p>
            <p className="col-span-4">: Rd. Stanat ana</p>
          </div>
          <div className="grid grid-cols-12 items-center py-1">
            <p className="text-[16px] mr-28 font-medium col-span-8">
              Country
            </p>
            <p className="col-span-4">: Usa</p>
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
