import React from 'react';
import { Provider as StoreProvider } from 'react-redux';

import { store } from '@store/index';

import '@/styles';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element =>
    <StoreProvider store={store}>
        <Component {...pageProps} />
    </StoreProvider>;

export default MyApp;
