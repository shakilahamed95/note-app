import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <SessionProvider session={pageProps.session}>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <>
              <Component {...pageProps} />
              <ToastContainer />
            </>
          </QueryClientProvider>
        </Provider>
      </SessionProvider>
    </Theme>
  );
}
