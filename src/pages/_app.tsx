import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Router from "next/router";
import NextNprogress from "nextjs-progressbar";
import { useState } from "react";
import "../services/firebase";

import SEO from "../../next-seo.config";
import { Header } from "../components/Header";
import { AuthContextProvider } from "../contexts/AuthContext";
import { PlayerProvider } from "../hooks/usePlayer";
import { GlobalStyles } from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PlayerProvider>
        <AuthContextProvider>
          <GlobalStyles />
          <DefaultSeo {...SEO} />
          <Header />
          <NextNprogress
            color="linear-gradient(90deg, rgba(0,53,157,1) 5%, rgba(0,111,255,1) 50%, rgba(63,204,255,1) 100%)"
            startPosition={0.3}
            stopDelayMs={200}
            height={5}
            showOnShallow={true}
          />
          <Component {...pageProps} />
        </AuthContextProvider>
      </PlayerProvider>
    </>
  );
}
export default MyApp;
