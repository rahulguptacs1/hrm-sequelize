import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CommerceProvider } from "@bigcommerce/storefront-data-hooks";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CommerceProvider locale={"en-US"}>
      <Component {...pageProps} />
    </CommerceProvider>
  );
}
export default MyApp;
