import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './routes';
import { RootLayout } from '../../widgets/root/RootLayout';
import { RouteErrorFallback } from '../../shared/ui/error/RouteErrorFallback';
import { RouterLoader } from '../../shared/ui/loader/RouterLoader';
import { HomePage } from '../../pages/home/HomePage';
import { SearchPage } from '../../pages/search/SearchPage';
import { CrewPage } from '../../pages/crew/CrewPage';
import { MessagePage } from '../../pages/message/MessagePage';
import { ProfilePage } from '../../pages/profile/ProfilePage';

export const router = createBrowserRouter([
    {
        element: <RootLayout />,
        // Router 레벨 에러 UI(인증)
        errorElement: <RouteErrorFallback />,
        // Router 레벨 로딩 UI(인증)
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
