// pages/_app.js or app/pages/_app.js
import '@/app/globals.css';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import Layout from '@/app/layout';
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <ChakraProvider>
          <Component {...pageProps} key={router.route} />
        </ChakraProvider>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
