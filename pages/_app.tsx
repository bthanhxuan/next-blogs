import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { getTokenSSRAndCSR } from '@/helpers';
import menuService from '@/services/menuService';
import postService from '@/services/postService';
import userService from '@/services/userService';
import { useGlobalState } from '@/state';
import es6Promise from 'es6-promise';
import Cookies from 'js-cookie';
import type { AppContext, AppProps } from 'next/app';
import App from "next/app";
import Head from 'next/head';
import { useEffect, useMemo } from 'react';

es6Promise.polyfill();

function MyApp({ Component, pageProps, router }: AppProps) {

  const [token, setToken] = useGlobalState('token');
  const [currentUser, setCurrentUser] = useGlobalState('currentUser');
  const [menus, setMenus] = useGlobalState('menus');
  const [categories, setCategories] = useGlobalState('categories');

  useMemo(() => {
    setToken(pageProps.token)
    setCurrentUser(pageProps.userInfo)
    setMenus(pageProps.menus)
    setCategories(pageProps.categories)
  }, [])

  const tokenFetchMe = Cookies.get('token') as string;
  // console.log("tokenFetchMe", tokenFetchMe);

  useEffect(() => {
    userService.getUser(tokenFetchMe)
      .then(data => {
        // console.log("data", data);
        if (data.id) {
          setCurrentUser(data);
        }
      })
  }, [tokenFetchMe])

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
  let categoriesPos = null;

  const [token, userToken] = getTokenSSRAndCSR(appContext.ctx);

  // if (typeof window === 'undefined' && userToken) {
  //   userRes = await userService.getUser(token);
  // }
  // console.log('test');

  if (typeof window === 'undefined') {

    if (userToken) {
      userPos = userService.getUser(token);
    }
    menuPos = menuService.getMenu();
    categoriesPos = postService.getCategories();
  }

  const [userRes, menuRes, categoriesRes] = await Promise.all([userPos, menuPos, categoriesPos]);

  return {
    pageProps: {
      ...appProps.pageProps,
      token,
      menus: menuRes?.items || [],
      categories: categoriesRes || [],
      userInfo: userRes || null,
    },
  };
};

export default MyApp;