import "../styles/globals.css";
import { Provider } from "react-redux";
import { SessionProvider, useSession } from "next-auth/react";
import store from "../app/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  let persistor = persistStore(store);
  return (
    <SessionProvider  session={session}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
        {Component.auth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
}


function Auth({ children }) {
  const { status } = useSession({ required: true })

  if (status === "loading") {
    return <div>Loading...</div>
  }

  return children
}