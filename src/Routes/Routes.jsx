import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import App from "../App";
import TotalJoinRequest from "../Pages/TotalJoinRequest.jsx";
// import DriverProfile from "../Pages/DriverProfile";
import UserTable from "../Components/Dashboard/UserTable";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import Terms from "../Pages/Terms";
import Profile from "../Pages/Profile";
import Notification from "../Pages/Notification.jsx";
import Login from "../Pages/Auth/Login.jsx";
import ForgotPassword from "../Pages/Auth/ForgotPassword.jsx";
import Otp from "../Pages/Auth/Otp.jsx";
import UpdatePassword from "../Pages/Auth/UpdatePassword.jsx";
import Subscription from "../Pages/Subscription.jsx";
import UserDetails from "../Pages/UserDetails.jsx";
import ManageItems from "../Pages/ManageItems.jsx";
import MediaSettings from "../Pages/MediaSettings/MediaSettings.jsx";
import RulesAndRegulation from "../Pages/RulesAndRegulation.jsx";
import Facts from "../Pages/Facts.jsx";
import TransactionHistory from "../Pages/TransactionHistory.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import PrivateLogin from "./PrivateLogin.jsx";
import TotalHost from "../Pages/TotalHost.jsx";
import ContactUs from "../Pages/ContactUs/ContactUs.jsx";
import TripManagement from "../Pages/TripManagement.jsx";
import HostDetails from "../Pages/HostDetails.jsx";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        //   errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <App />,
            },
            {
                path: '/total-join-request',
                element: <TotalJoinRequest />,
            },
            {
                path : "/transaction",
                element : <TransactionHistory/>
            },
            {
                path : "/total-host",
                element : <TotalHost/>
            },
            {
                path : "/total-host/:id",
                element : <HostDetails/>
            },
            {
                path : "/contact-us",
                element : <ContactUs/>
            },
            {
                path : "/trip-management",
                element : <TripManagement/>
            },

           
            {
                path : '/subscription',
                element : <Subscription/>
            },
            {
                path : '/user-details',
                element : <UserDetails/>
            },
            {
                path : '/manage-items',
                element : <ManageItems/>
            },
            {
                path : '/destination',
                element : <MediaSettings/>
            },

            // {
            //     path: '/driver-details/:id',
            //     element: <DriverProfile />,
            // },
            {
                path: '/total-user',
                element: <UserTable />,
            },
            {
                path: '/privacy-policy',
                element: <PrivacyPolicy />,
            },
            {
                path: '/faqs',
                element: <Facts />,
            },
            {
                path: '/terms',
                element: <Terms />,
            },
            {
                path: '/rules-regulation',
                element: <RulesAndRegulation />,
            },
            {
                path: '/profile',
                element: <Profile />,
            }, 
            

            {
                path: '/notification',
                element: <Notification />,
            }, 

        ]
    },
    {
        path: '/auth/login',
        element: <PrivateLogin><Login/></PrivateLogin>
    },
    {
        path: '/auth/forgot-password',
        element: <ForgotPassword/>
    },

    {
        path: '/auth/otp',
        element: <Otp/>
    },
    {
        path: '/auth/update-password',
        element: <UpdatePassword/>
    }
]);