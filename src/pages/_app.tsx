import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import { GlobalStyles } from "../styles/Theme";
import { PlayerProvider } from "../hooks/usePlayer";

import "../services/firebase";
import { AuthContextProvider } from "../contexts/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PlayerProvider>
        <AuthContextProvider>
          <GlobalStyles />
          <Header />
          <Component {...pageProps} />
        </AuthContextProvider>
      </PlayerProvider>
    </>
  );
}
export default MyApp;
