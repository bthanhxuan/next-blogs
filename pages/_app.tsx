import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { getTokenSSRAndCSR } from '@/helpers';
import menuService from '@/services/menuService';
import userService from '@/services/userService';
import { useGlobalState } from '@/state';
import es6Promise from 'es6-promise';
import type { AppContext, AppProps } from 'next/app';
import App from "next/app";
import Head from 'next/head';
import { useMemo } from 'react';

es6Promise.polyfill();

function MyApp({ Component, pageProps, router }: AppProps) {

  const [token, setToken] = useGlobalState('token');
  const [currentUser, serCurrentUser] = useGlobalState('currentUser');
  const [menus, setMenus] = useGlobalState('menus');

  useMemo(() => {
    setToken(pageProps.token)
    serCurrentUser(pageProps.userInfo)
    setMenus(pageProps.menus)
  }, [])

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

  let userPos = null;
  let menuPos = null;

  const [token, userToken] = getTokenSSRAndCSR(appContext.ctx);

  // if (typeof window === 'undefined' && userToken) {
  //   userRes = await userService.getUser(token);
  // }

  if (typeof window === 'undefined') {

    if (userToken) {
      userPos = userService.getUser(token);
    }
    menuPos = menuService.getMenu();
  }

  const [userRes, menuRes] = await Promise.all([userPos, menuPos]);

  return {
    pageProps: {
      ...appProps.pageProps,
      token,
      menus: menuRes?.items || [],
      userInfo: userRes || null,
    },
  };
};

export default MyApp;