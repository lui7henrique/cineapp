import type { AppProps } from "next/app";
import Router from "next/router";
import { useState } from "react";
import ReactLoading from "react-loading";
import "../services/firebase";

import { Header } from "../components/Header";
import { AuthContextProvider } from "../contexts/AuthContext";
import { PlayerProvider } from "../hooks/usePlayer";
import { GlobalStyles } from "../styles/global";

import NextNprogress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    setIsLoading(true);
  });

  Router.events.on("routeChangeComplete", (url) => {
    setIsLoading(false);
  });

  return (
    <>
      <PlayerProvider>
        <AuthContextProvider>
          <GlobalStyles />
          <Header />
          <NextNprogress
            color="rgba(0,53,157,1)"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            showOnShallow={true}
          />
          <Component {...pageProps} />
        </AuthContextProvider>
      </PlayerProvider>
    </>
  );
}
export default MyApp;
