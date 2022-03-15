import { FC } from 'react';
import { Layout } from '@/layouts/Layout';

import { About } from './About/About';
import { Modals } from '@/components';

export const Index: FC = (): JSX.Element => {
    return (
        <Layout title='__ProjectName__ | Главная'>
            <About/>
            <Modals/>
        </Layout>
    );
};
