import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';


export default function App({ Component, pageProps }: AppProps) {
  return( <>
    <Head>
    <link rel="icon" href="./imagejson/LogoBlack.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link
      href="https://fonts.googleapis.com/css2?family=Babylonica&family=Gentium+Book+Plus&family=Open+Sans:wght@300;400;700&family=Raleway:wght@400;600;700;800&display=swap"
      rel="stylesheet"
    />
    <title>Livery Nextjs</title>
      </Head>
    <Component {...pageProps} />
  </>
) ;
 
}
