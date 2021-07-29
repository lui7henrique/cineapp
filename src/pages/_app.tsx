import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import { GlobalStyles } from "../styles/Theme";
import { PlayerProvider } from "../hooks/usePlayer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PlayerProvider>
        <GlobalStyles />
        <Header />
        <Component {...pageProps} />
      </PlayerProvider>
    </>
  );
}
export default MyApp;
