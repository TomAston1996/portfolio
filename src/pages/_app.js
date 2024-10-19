import Theme from '../styles/theme';
import Script from 'next/script'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tom Aston</title>
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-BZVWYZBHVE"></Script>
        <Script id='google-analytics'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'G-BZVWYZBHVE');
          `}
      </Script>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
