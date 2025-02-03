import { Link } from 'react-router-dom';
import './App.css';
import Overview from './Components/Dashboard/Overview';
import SubscriptionGrowth from './Components/Dashboard/SubscriptionGrowth';
import JoinRequest from './Components/Dashboard/JoinRequest';
import user from './assets/images/use4.png';
import car1 from './assets/images/car.png';
import car2 from './assets/images/car2.png';
import car3 from './assets/images/car3.png';
import { useTotalUserCountQuery } from './redux/Api/dashboardApi';
import { useGetAllNewHostQuery, useGetAllNewHostUserQuery } from './redux/Api/hostReq';

function App() {
  /** Get total user statistics API */
  const { data: dashboardInfo, isLoading: isDashboardLoading, isError: isDashboardError } = useTotalUserCountQuery();
  const { data: hostData, isLoading: isHostLoading, isError: isHostError } = useGetAllNewHostUserQuery();
console.log(hostData)
  if (isDashboardLoading || isHostLoading) {
    return <div>Loading...</div>;
  }

 

  const allRequests = hostData?.data?.allAddCarReq;
  console.log(allRequests)
  const tableData = allRequests?.slice(0,3).map((request, index) => ({
    key: index + 1,
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

  const statsData = [
    {
      title: 'Total User',
      count: dashboardInfo?.data?.totalUser || 0,
    },
    {
      title: 'Total Host',
      count: dashboardInfo?.data?.totalHost || 0,
    },
    {
      title: 'Total Cars',
      count: dashboardInfo?.data?.totalCar || 0,
    },
    {
      title: 'Total Earning',
      count: `$${dashboardInfo?.data?.totalEarning || 0}`,
    },
  ];

  return (
    <>
      <div className="grid-4 ">
        {statsData.map((item, index) => (
          <div
            className="w-full h-full border-r-2 center-center flex-col gap-3 bg-[white]"
            key={index}
          >
            <div className="my-10 text-center space-y-4">
              <p className="text-3xl font-semibold">{item.count}</p>
              <p className="text-[#B47000]">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid-2 mt-3 gap-3">
        <div className="w-full h-full bg-white p-4 rounded-md">
          <SubscriptionGrowth />
        </div>
        <div className="w-full h-full bg-white p-4 rounded-md">
          <Overview />
        </div>
      </div>
      <div className="mt-3 bg-white rounded-md">
        <div className="between-center gap-2 mb-3 p-5">
          <p className="text-xl">New Hosts Request</p>
          <Link to={`/total-join-request`}>View All</Link>
        </div>
        <JoinRequest tableData={tableData} pagination={false}/>
      </div>
    </>
  );
}

export default App;
