import { useState } from "react";
import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import { GlobalStyles } from "../styles/Theme";
import { PlayerProvider } from "../hooks/usePlayer";
import Router from "next/router";
import ReactLoading from "react-loading";

import "../services/firebase";
import { AuthContextProvider } from "../contexts/AuthContext";

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
