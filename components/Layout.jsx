import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';

const Layout = ({ children }) => (
    <>
        <Head>
            <title>Real Estate</title>
        </Head>
        <Box>
            <header>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
            <footer>
                footer
            </footer>
        </Box>
    </>
);

export default Layout;