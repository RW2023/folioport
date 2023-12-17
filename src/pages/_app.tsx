// pages/_app.js or app/pages/_app.js
import '@/app/globals.css';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import Layout from '@/app/layout';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
