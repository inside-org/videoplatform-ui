import { Provider } from 'react-redux';
import store from '../redux/store';

import 'Src/styles/globals.css'
import type { AppProps } from 'next/app'

import { makeServer } from 'Src/mirage';

const environment = process.env.NODE_ENV;

if (environment !== "production") {
  makeServer({ environment });
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
