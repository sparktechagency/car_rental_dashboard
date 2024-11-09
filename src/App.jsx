
import { Link } from 'react-router-dom'
import './App.css'

import Overview from './Components/Dashboard/Overview'
import SubscriptionGrowth from './Components/Dashboard/SubscriptionGrowth'
import JoinRequest from './Components/Dashboard/JoinRequest'
import user from './assets/images/user.png'
import income from './assets/images/income.png'
import platinum from './assets/images/platinumn.png'
import gold from './assets/images/dollar_gold.png'
import diamond from './assets/images/daimond.png'
function App() {
  /** Get total user statistics API */



  // const tableData = getSubscriber?.data?.data?.slice(0,3).map((user, i) => (
  //   {
  //     key: i + 1,
  //     id : user?._id,
  //     name: user?.user_id?.name,
  //     img: user?.user_id?.profile_image,
  //     contact : user?.phone_number,
  //     email : user?.email,
  //     location : user?.place_of_birth

  //   }
  // ))

  const data = [
    {
      title: 'Total User',
      count: 18.6,
    },
    {
      title: 'Total Host',
      count: 18.6,
    },
    {
      title: 'Total Cars',
      count: 20.9,
    },
    {
      title: 'Total Earning',
      count: 20.9,
    },

  ]

  return (
    <>
      <div className='grid-4 '>
        {
          data?.map((item, index) => <div className='w-full h-full border-r-2 center-center flex-col gap-3  bg-[white]  ' key={index}>
            <div className='my-10 text-center space-y-4'>
              <p className='text-3xl font-semibold'>{item?.count}K</p>
              <p className=' text-[#B47000]'>{item?.title}</p>
            </div>
          </div>)
        }
      </div>
      <div className='grid-2 mt-3 gap-3'>
        <div className='w-full h-full bg-white p-4 rounded-md'>
          <SubscriptionGrowth />
        </div>
        <div className='w-full h-full bg-white p-4 rounded-md'>
          <Overview />
        </div>

      </div>
      <div className='mt-3 bg-white rounded-md'>
        <div className='between-center gap-2 mb-3 p-5'>
          <p className='text-xl'>New Membership Request</p> <Link to={`/total-join-request`}>
            View All
          </Link>
        </div>
        {/* <JoinRequest tableData={tableData} /> */}
      </div>
    </>
  )
}

export default App
