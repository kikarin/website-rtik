import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
      delay: 150,
    });

    // Load and initialize Flowbite
    const loadFlowbite = async () => {
      const flowbite = await import('flowbite');
      flowbite.initFlowbite();
    };
    
    loadFlowbite();

    // Re-initialize Flowbite on route changes
    router.events.on('routeChangeComplete', loadFlowbite);

    return () => {
      router.events.off('routeChangeComplete', loadFlowbite);
    };
  }, [router]);

  return (
    <>
      <Head>
        <title>RTIK Indonesia</title>
        <link rel="shortcut icon" type="image/png" href="/Logo-RTIK-Indonesia-Web-Berita-2023-1.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
