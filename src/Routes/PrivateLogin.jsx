import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useGetProfileQuery } from '../redux/Api/userApi';

const PrivateLogin = ({ children }) => {
    const location = useLocation()
    const { data: getUserInfo, isError, isLoading, isFetching } = useGetProfileQuery();
    if (getUserInfo?.data?.role === 'ADMIN') {
        return <Navigate to={'/'} state={{ from: location }} />
    }
    return children
}

export default PrivateLogin