import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '@/shared/constants/routes';
import { RootLayout } from '@/widgets/root/RootLayout';
import { PageErrorFallback } from '@/shared/ui/error/ErrorFallback';
import { RouterLoader } from '@/shared/ui/loader/RouterLoader';
import { HomePage } from '@/pages/home/HomePage';
import { SearchPage } from '@/pages/search/SearchPage';
import { CrewPage } from '@/pages/crew/CrewPage';
import { MessagePage } from '@/pages/message/MessagePage';
import { ProfilePage } from '@/pages/profile/ProfilePage';

export const router = createBrowserRouter([
    {
        element: <RootLayout />,
        errorElement: <PageErrorFallback />,
        hydrateFallbackElement: <RouterLoader />,
        children: [
            {
                path: ROUTES.HOME,
                element: <HomePage />,
            },
            {
                path: ROUTES.SEARCH,
                element: <SearchPage />,
            },
            {
                path: ROUTES.CREW,
                element: <CrewPage />,
            },
            {
                path: ROUTES.MESSAGE,
                element: <MessagePage />,
            },
            {
                path: ROUTES.PROFILE,
                element: <ProfilePage />,
            },
        ],
    },
]);
