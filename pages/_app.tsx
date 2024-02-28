import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../app/globals.css";
import { Providers as NextUIProvider } from "../app/lib/providers";
import Header from "../app/components/Header";
import Head from "next/head";

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Timewave Challenge</title>
        <meta name="description" content="Timewave Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextUIProvider>
        <Header />
        <Component {...pageProps} />
      </NextUIProvider>
    </>
  );
}

export default MyApp;
