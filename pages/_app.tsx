import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import Nprogress from "nprogress";
import { Router } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  Nprogress.configure({ showSpinner: true });

  Router.events.on("routeChangeStart", () => {
    Nprogress.start();
  });

  Router.events.on("routeChangeComplete", () => {
    Nprogress.done();
  });

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
