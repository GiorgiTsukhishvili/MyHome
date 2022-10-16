import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import Nprogress from "nprogress";
import { Router } from "next/router";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  Nprogress.configure({ showSpinner: true });

  Router.events.on("routeChangeStart", () => {
    Nprogress.start();
  });

  Router.events.on("routeChangeComplete", () => {
    Nprogress.done();
  });

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
