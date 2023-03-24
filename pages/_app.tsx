import es6Promise from 'es6-promise';

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import type { AppContext, AppProps } from 'next/app'
import App from "next/app";
import Head from 'next/head'

es6Promise.polyfill();

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Next Blogs</title>
      </Head>

      <div className="wrapper-content">
        <Header />
        <Component {...pageProps} />
        <div className="spacing" />
        <Footer />
      </div>
    </>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  return {
    pageProps: {
      ...appProps.pageProps,
    },
  };
};

export default MyApp;