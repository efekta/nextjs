import { FunctionComponent, PropsWithChildren } from 'react';

import Head from 'next/head';
import { Main } from './Main/Main';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

import s from './Layout.module.scss';
import { LayoutProps } from './Layout.props';

export const Layout = ({ children, title }: PropsWithChildren<LayoutProps>): JSX.Element => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className={s.wrapper}>
                <Header className={s.header} />
                <Main className={s.main}>{children}</Main>
                <Footer/>
            </div>
        </>
    );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>): (props: T) => void => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout><Component {...props} /></Layout>
        );
    };
};
