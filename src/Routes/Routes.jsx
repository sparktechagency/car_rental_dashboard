import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import App from "../App";
import TotalSurveyRequest from "../Pages/TotalSurveyRequest";
import DriverProfile from "../Pages/DriverProfile";
import UserTable from "../Components/Dashboard/UserTable";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import Terms from "../Pages/Terms";
import Profile from "../Pages/Profile";
import FeedBack from "../Pages/FeedBack";
import CreateProject from "../Pages/CreateProject";
import CreateSurvey from "../Pages/CreateSurvey";
import ManageCompany from "../Pages/ManageCompany";
import AddProject from "../Pages/AddProject";
import ManageEvent from "../Pages/ManageEvent";
import ArchiveProject from "../Pages/ArchiveProject";
import SurveyResult from "../Pages/SurveyResult";
import Notification from "../Pages/Notification.jsx";
import ProjectDetails from "../Pages/ProjectDetails.jsx";
import SurveyComment from "../Pages/SurveyComment.jsx";
import ProjectUsers from "../Pages/ProjectUsers.jsx";


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
                path: '/total-survey-request',
                element: <TotalSurveyRequest />,
            },
            {
                path: '/driver-details/:id',
                element: <DriverProfile />,
            },
            {
                path: '/total-user',
                element: <UserTable />,
            },
            {
                path: '/privacy-policy',
                element: <PrivacyPolicy />,
            },
            {
                path: '/terms',
                element: <Terms />,
            },
            {
                path: '/profile',
                element: <Profile />,
            }, 
            {
                path: '/create-project',
                element: <CreateProject />,
            },
            {
                path: '/create-survey',
                element: <CreateSurvey />,
            },
            {
                path: '/manage-company',
                element: <ManageCompany />,
            },
            {
                path: '/manage-event',
                element: <ManageEvent />,
            },
            {
                path: '/archive',
                element: <ArchiveProject />,
            },
            {
                path: '/add-project',
                element: <AddProject />,
            },

            {
                path: '/survey-result',
                element: <SurveyResult />,
            },

            {
                path: '/notification',
                element: <Notification />,
            },

            {
                path: '/project-details/:id',
                element: <ProjectDetails />,
            },

            {
                path: '/project-users/:id',
                element: <ProjectUsers/>,
            },
            {
                path: '/survey-comments/:id',
                element: <SurveyComment/>,
            },

            // {
            //     path: '/line-chart/:id',
            //     element: <Chart/>,
            // },
        ]
    },
]);