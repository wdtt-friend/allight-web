import { GlobalStyles } from './app/styles/global';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/router/router';

function App() {
    return (
        <>
            <GlobalStyles />
            <RouterProvider router={router} />
        </>
    );
}

export default App;
