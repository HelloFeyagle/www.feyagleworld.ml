import Header from '../components/Static/Header'
import '../../public/styles/globals.css'
import Head from 'next/head';
import 'tippy.js/animations/shift-away.css';
import Footer from '../components/Static/Footer';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Progress from '../libraries/progress';
import config from '../../config';

function MyApp({ Component, pageProps }) {

  const betters = [
    'İnsanlara iyi davranmaya',
    'Dürüst olmaya',
    'En iyisini yapmaya'
  ];
  let [better, setBetter] = useState(betters[Math.floor(Math.random() * betters.length)]);
  useEffect(() => { setBetter(better) }, [better]);
  const router = useRouter();
  return <>
  <Head>
    <title>
      {router.asPath ? (
        config?.titles[router?.asPath] ? (
          config?.titles[router?.asPath] + ' | ' + config?.titleSuffix
        ) : 'Blank | feyagleworld.ml'
      ) : 'Loading... | feyagleworld.ml'}
    </title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Head>
    <Header />
    <Progress />
    <main style={{ zIndex: 2 }} className="pt-36 relative min-h-screen">
      <Component better={better} {...pageProps} />
    </main>
    {router.asPath === '/' && (
      <>
        <div style={{ zIndex: 1 }} className="hidden lg:block absolute layout-colored-background" />
        <div style={{ zIndex: 1 }} className="hidden lg:block bottom-0 rotate-[96deg] fixed layout-colored-background" />
      </>
    )}
    
    <Footer better={better} />
  </>
}

export default MyApp
