import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Dashboard from '../pages/dashboard/dashboard/Dashboard';
import Login from '../pages/authentication/Login';
import ErrorPage from '../pages/error/ErrorPage';
import TermsCondition from '../pages/dashboard/settings/TermsCondition';

import Notification from '../pages/dashboard/Notification';
import ForgetPassword from '../pages/authentication/ForgetPassword';
import VerifyOtp from '../pages/authentication/VerifyOtp';
import NewPassword from '../pages/authentication/NewPassword';
import Profile from '../pages/dashboard/profile/Profile';

import SubscriptionPackages from '../pages/dashboard/settings/SubscriptionPackages';
import UserAgreement from '../pages/dashboard/settings/UserAgreement';

import SpaceSeeker from '../pages/dashboard/SpaceSeeker';
import SpacePosts from '../pages/dashboard/SpacePosts';
import SubscribedUsers from '../pages/dashboard/SubscribedUsers';
import DealingDetails from '../pages/dashboard/DealingDetails';
import Analytics from '../pages/Analytics';
import Details from '../pages/Details/Details';
import Subscriptation from '../pages/Subscriptation/Subscriptation';
import Personal from '../pages/PersonalInformation/Personal';
import ChangeInfo from '../pages/PersonalInformation/ChangeInfo';
import Return from '../pages/PersonalInformation/Return';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: '', element: <Dashboard /> },
            // { path: 'space-provider', element: <SpaceProvider /> },
            { path: 'analytics', element: <Analytics /> },
            { path: 'space-seeker', element: <SpaceSeeker /> },
            { path: 'details/:id', element: <Details /> },
            //
            { path: 'subscription', element: <Subscriptation /> },
            // personal information
            { path: 'personal', element: <Personal /> },
            { path: 'chnage-password', element: <ChangeInfo /> },
            { path: 'retrun-policy', element: <Return /> },
            //
            { path: 'space-post', element: <SpacePosts /> },
            { path: 'subscribed-users', element: <SubscribedUsers /> },
            { path: 'dealing-details', element: <DealingDetails /> },

            //    for settings section
            { path: 'subscriptions', element: <SubscriptionPackages /> },

            { path: 'terms', element: <TermsCondition /> },
            { path: 'agreement', element: <UserAgreement /> },

            // others sections
            { path: 'profile', element: <Profile /> },
            { path: 'notification', element: <Notification /> },
        ],
    },

    // ? for authentication sections
    { path: '/login', element: <Login /> },
    { path: '/forget-password', element: <ForgetPassword /> },
    { path: '/verify-otp', element: <VerifyOtp /> },
    { path: '/new-password', element: <NewPassword /> },
]);

export default router;
