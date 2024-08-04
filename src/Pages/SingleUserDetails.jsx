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
import { MdOutlineLibraryAddCheck, MdPadding } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

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
        <div className="grid grid-cols-2">
          <div>
            <p >
              Name
            </p>
            <p>
              Date of Birth
            </p>
            <p>
              Place of Birth
            </p>
            <p>
              License No
            </p>
            <p>
              Passport
            </p>
            <p>
              Email
            </p>
            <p>
              Phone Number
            </p>
            <p>
              Profession
            </p>
            <p>
              What's your religion?
            </p>
            <p>
              Do you have children?
            </p>
            <p>
              Do you have pets?
            </p>
            <p>
              Do you own a vehicle?
            </p>
            <p>
              Are you willing to swap your vehicles?
            </p>
            <p>
              Are you owner or leasing your property?
            </p>
            <p>

              Will you be able to provide approval from owner for temp swap?

            </p>
            <p>
              Is your property insured?
            </p>
          </div>

          <div>
            <p>
              : Foysal Rahman
            </p>
            <p>
              :  24/04/2002
            </p>
            <p>
              : Tokyo, Japan
            </p>
            <p>
              : 34546547675
            </p>
            <p>
              : 658567899769
            </p>
            <p>
              : williejenning@gmail.com
            </p>
            <p>
              : (702) 555-0122
            </p>
            <p>
              : Businessman
            </p>
            <p>
              : Islam
            </p>
            <p>
              : Yes
            </p>
            <p>
              : Yes
            </p>
            <p>
              : Yes
            </p>
            <p>
              : Yes
            </p>
            <p>
              :Yes
            </p>
            <p>
              : Yes
            </p>
            <p>
              : Yes
            </p>
          </div>
        </div>

        {/* <div className="divider"></div> */}
        <div className="grid grid-cols-2">
          <div>
            <p>
              Will your utilities be up to date for swap?
            </p>
            <p>
              What do you want to swap and for how long?
            </p>
            <p>
              Do you want to arrive on departure or depart on arrival?
            </p>
            <p>
              Dates of travel?
            </p>
            <p>
              Travel Start
            </p>
            <p>
              Destination
            </p>
            <p>
              State
            </p>
            <p>
              County
            </p>
            <p>
              Country
            </p>
            <p>
              Travel End
            </p>
            <p>
              Destination
            </p>
            <p>
              State
            </p>
            <p>
              Country
            </p>
            <p>
              Country
            </p>
            <p>
              Purpose of travel?
            </p>
          </div>

          <div>
            <p>
              : Yes
            </p>
            <p>
              : want to swap for anything from low to high
              value products and want to swap for a long time, at least 2-5
              years.
            </p>
            <p>
              : Arrive on departure
            </p>
            <p>
              :
            </p>
            <p>
              :
            </p>
            <p>
              New York
            </p>
            <p>
              : St. Celina
            </p>
            <p>
              : Rd. Santa Ana
            </p>
            <p>
              : USA
            </p>
            <p>
              <strong></strong>
            </p>
            <p>
              : 3891 Ranchview
            </p>
            <p>
              : California
            </p>
            <p>
              : Delaware
            </p>
            <p>
              : USA
            </p>
            <p>
              : Business
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-4 pb-5">
        <button className="bg-blue-500 text-white py-2 px-4 rounded flex items-center gap-1 text-sm">
        <MdOutlineLibraryAddCheck /><span>Approved</span>
        </button>
        <button className="bg-red-500 text-white py-2 px-4 rounded flex items-center text-sm">
          <IoMdClose /> <span>Decline</span>        
          </button>
      </div>
    </div>
  );
};

export default SingleUserDetails;
