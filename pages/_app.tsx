import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';

<Head>
  <title>DIBA PeSMKa</title>
  <link rel="shortcut icon" type="image/png" href="/public/disdikjabar.png" />
</Head>


function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
      delay: 150,
    });
  });
  return <Component {...pageProps} />
}

export default MyApp
