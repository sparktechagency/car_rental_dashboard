// import React from 'react'
// import { Navigate, useLocation } from 'react-router-dom'
// import { useGetProfileQuery } from '../redux/Api/userApi';
// import { Skeleton } from 'antd';
// import { useSelector } from 'react-redux';

import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
//     const location = useLocation()
//     const { data: getUserInfo,isError, isLoading  , isFetching} = useGetProfileQuery();
//     if(isLoading || isFetching){
//         return <div className="flex items-center justify-center"><Skeleton active /></div>;
//     }
//     if(isError || !getUserInfo?.data?.email || getUserInfo?.data?.authId?.role !== 'ADMIN' ){
//         return <Navigate to={'/auth/login'}  state={{ from: location }} />
//     }
//   return children
const {token} = useSelector((state) => state.logInUser)
  console.log(token)
  const { pathname } = useLocation();

  if (!token) {
      return <Navigate to="/auth/login" state={{ path: pathname }}></Navigate>;
  }
  return children;
}

export default PrivateRoute;