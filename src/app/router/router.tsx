import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../../pages/home/HomePage';
import { ProfilePage } from '../../pages/profile/ProfilePage';
import { SettingsPage } from '../../pages/settings/SettingsPage';
import { ROUTES } from './routes';

export const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <HomePage />,
    },
    {
        path: ROUTES.PROFILE,
        element: <ProfilePage />,
    },
    {
        path: ROUTES.SETTINGS,
        element: <SettingsPage />,
    },
]);
