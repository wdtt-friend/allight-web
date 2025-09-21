import { Footer } from '@/widgets/footer/Footer';
import { Header } from '@/widgets/header/Header';
import { Main } from '@/widgets/main/Main';

export const RootLayout = () => {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
};
