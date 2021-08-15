import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";
import NextNprogress from "nextjs-progressbar";
import "../services/firebase";

import SEO from "../../next-seo.config";
import { Header } from "../components/Header";
import { AuthContextProvider } from "../contexts/AuthContext";
import { PlayerProvider } from "../hooks/usePlayer";
import { GlobalStyles } from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/img/movie.png" />
        <link rel="apple-touch-icon" href="/img/movie.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#141620" />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <NextNprogress
        color="linear-gradient(90deg, rgba(0,53,157,1) 5%, rgba(0,111,255,1) 50%, rgba(63,204,255,1) 100%)"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
        showOnShallow={true}
      />

      <PlayerProvider>
        <AuthContextProvider>
          <Header />
          <Component {...pageProps} />
        </AuthContextProvider>
      </PlayerProvider>
    </>
  );
}
export default MyApp;
