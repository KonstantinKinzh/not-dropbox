// Components
import Page from '@/app/layout';
import AllFiles from '@/pages/all-files';
import Subscriptions from '@/pages/subscriptions';
import SendingTracking from '@/pages/sending-tracking';
import Photo from '@/pages/photo';

// Modules React router
import { createBrowserRouter, RouterProvider} from "react-router-dom";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Page />,
        children: [
            { path: '/all-files', element: <AllFiles /> },
            { path: '/subscriptons', element: <Subscriptions /> },
            { path: '/sending-tracking', element: <SendingTracking /> },
            { path: '/photo', element: <Photo /> },
        ]
    },
]);

export default function Routing() {
    return (
        <RouterProvider router={routes} />
    );
};