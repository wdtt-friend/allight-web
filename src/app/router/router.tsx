// src/app/router/router.tsx
import { createBrowserRouter } from 'react-router-dom';
import { Header } from '../../widgets/header/Header';
import { Main } from '../../widgets/main/Main';
import { Footer } from '../../widgets/footer/Footer';
import { HomePage } from '../../pages/home/HomePage';
import { SearchPage } from '../../pages/search/SearchPage';
import { CrewPage } from '../../pages/crew/CrewPage';
import { MessagePage } from '../../pages/message/MessagePage';
import { ProfilePage } from '../../pages/profile/ProfilePage';
import { ROUTES } from './routes';

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <Header />
                <Main />
                <Footer />
            </>
        ),
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