import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect } from 'react';
import * as gtag from '../lib/gtag';
import '../styles/globals.css';
import Head from 'next/head';

export default function ContraHacker({ Component, pageProps }) {

    const router = useRouter();

    useEffect(() => {

        const handleRouteChange = url => {
            gtag.pageview(url);
        };

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return (
        <>
            <Head>
                <meta name = 'viewport' content = 'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
            </Head>
            <Script
                strategy = "afterInteractive"
                src = { `https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}` }
            />
            <Script
                id = "gtag-init"
                strategy = "afterInteractive"
                dangerouslySetInnerHTML = { {
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${gtag.GA_TRACKING_ID}', {
                        page_path: window.location.pathname
                        });
                    `
                } }
            />
            <div className = 'flexLayout'>
                <Component { ...pageProps } />
            </div>
        </>
    );
}
