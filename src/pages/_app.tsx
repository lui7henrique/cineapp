import type { AppProps } from "next/app";
import Router from "next/router";
import { useState } from "react";
import ReactLoading from "react-loading";
import "../services/firebase";

import { Header } from "../components/Header";
import { AuthContextProvider } from "../contexts/AuthContext";
import { PlayerProvider } from "../hooks/usePlayer";
import { GlobalStyles } from "../styles/global";

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
          {isLoading ? (
            <ReactLoading
              type={"spin"}
              color="var(--primary)"
              height={150}
              width={75}
              className="loader"
            />
          ) : (
            <Component {...pageProps} />
          )}
        </AuthContextProvider>
      </PlayerProvider>
    </>
  );
}
export default MyApp;
