// import React from 'react'
// import { Input } from 'antd'
// import { CiSearch } from 'react-icons/ci'
// import { Link } from 'react-router-dom'
// import { IoArrowBackSharp } from 'react-icons/io5'

// const SingleUserDetails = () => {
//     return (
//         <div>
//             <div className='between-center px-3 my-2 pt-5'>
//                 <div className='start-center gap-2 mb-3 p-5'>
//                     <Link to={-1} className='bg-[var(--color-8)] py-1 px-2 rounded-md start-center gap-1 text-white'><IoArrowBackSharp />back</Link>
//                     <p className='text-xl'>New Membership Request</p>
//                 </div>

//                 <div className='grid-2'>
//                     <div>Table one</div>
//                     <div>Table two</div>
//                 </div>

//             </div>

//         </div>
//     )
// }

// export default SingleUserDetails

import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { MdPadding } from "react-icons/md";

const SingleUserDetails = () => {
  return (

    // <div className="container mx-auto p-5">
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center px-3 my-2 pt-5">
        <div className="flex items-center gap-2 mb-3 p-5">
          <Link
            to={-1}
            className="bg-blue-500 py-1 px-2 rounded-md flex items-center gap-1 text-white"
          >
            <IoArrowBackSharp /> back
          </Link>
          <p className="text-xl">New Membership Request</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="grid grid-cols-2">
          <div>
            <p>
              <strong>Name</strong>
            </p>
            <p>
              <strong>Date of Birth</strong>
            </p>
            <p>
              <strong>Place of Birth</strong>n
            </p>
            <p>
              <strong>License No</strong>
            </p>
            <p>
              <strong>Passport</strong>
            </p>
            <p>
              <strong>Email</strong>
            </p>
            <p>
              <strong>Phone Number</strong>
            </p>
            <p>
              <strong>Profession</strong>
            </p>
            <p>
              <strong>What's your religion?</strong>
            </p>
            <p>
              <strong>Do you have children?</strong>
            </p>
            <p>
              <strong>Do you have pets?</strong>
            </p>
            <p>
              <strong>Do you own a vehicle?</strong>
            </p>
            <p>
              <strong>Are you willing to swap your vehicles?</strong>
            </p>
            <p>
              <strong>Are you owner or leasing your property?</strong>
            </p>
            <p>
              <strong>
                Will you be able to provide approval from owner for temp swap?
              </strong>
            </p>
            <p>
              <strong>Is your property insured?</strong>
            </p>
          </div>

          <div>
            <p>
              <strong>:</strong> Foysal Rahman
            </p>
            <p>
              <strong>:</strong> 24/04/2002
            </p>
            <p>
              <strong>:</strong> Tokyo, Japan
            </p>
            <p>
              <strong>:</strong> 34546547675
            </p>
            <p>
              <strong>:</strong> 658567899769
            </p>
            <p>
              <strong>:</strong> williejenning@gmail.com
            </p>
            <p>
              <strong>:</strong> (702) 555-0122
            </p>
            <p>
              <strong>:</strong> Businessman
            </p>
            <p>
              <strong>:</strong> Islam
            </p>
            <p>
              <strong>:</strong> Yes
            </p>
            <p>
              <strong>:</strong> Yes
            </p>
            <p>
              <strong>:</strong> Yes
            </p>
            <p>
              <strong>:</strong> Yes
            </p>
            <p>
              <strong>:</strong> Yes
            </p>
            <p>
              <strong>:</strong> Yes
            </p>
            <p>
              <strong>:</strong> Yes
            </p>
          </div>
        </div>

        {/* <div className="divider"></div> */}
        <div className="grid grid-cols-2">
          <div>
            <p>
              <strong>Will your utilities be up to date for swap?</strong>
            </p>
            <p>
              <strong>What do you want to swap and for how long?</strong>
            </p>
            <p>
              <strong>
                Do you want to arrive on departure or depart on arrival?
              </strong>
            </p>
            <p>
              <strong>Dates of travel?</strong>
            </p>
            <p>
              <strong>Travel Start</strong>
            </p>
            <p>
              <strong>Destination</strong>
            </p>
            <p>
              <strong>State</strong>
            </p>
            <p>
              <strong>County</strong>
            </p>
            <p>
              <strong>Country</strong>
            </p>
            <p>
              <strong>Travel End</strong>
            </p>
            <p>
              <strong>Destination</strong>
            </p>
            <p>
              <strong>State</strong>
            </p>
            <p>
              <strong>County</strong>
            </p>
            <p>
              <strong>Country</strong>
            </p>
            <p>
              <strong>Purpose of travel?</strong>
            </p>
          </div>

          <div>
            <p>
              <strong>:</strong> Yes
            </p>
            <p>
              <strong>:</strong> I want to swap for anything from low to high
              value products and want to swap for a long time, at least 2-5
              years.
            </p>
            <p>
              <strong>:</strong> Arrive on departure
            </p>
            <p>
              <strong>:</strong>
            </p>
            <p>
              <strong>:</strong>
            </p>
            <p>
              <strong>:</strong> New York
            </p>
            <p>
              <strong>:</strong> St. Celina
            </p>
            <p>
              <strong>:</strong> Rd. Santa Ana
            </p>
            <p>
              <strong>:</strong> USA
            </p>
            <p>
              <strong></strong>
            </p>
            <p>
              <strong>:</strong> 3891 Ranchview
            </p>
            <p>
              <strong>:</strong> California
            </p>
            <p>
              <strong>:</strong> Delaware
            </p>
            <p>
              <strong>:</strong> USA
            </p>
            <p>
              <strong>:</strong> Business
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded">
          Approve
        </button>
        <button className="bg-red-500 text-white py-2 px-4 rounded">
          Decline
        </button>
      </div>
    </div>
  );
};

export default SingleUserDetails;
