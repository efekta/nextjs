import { SetStateAction, useState } from 'react';

import { Tab, Tabs } from '@/ui';
import { ModalsTop } from '../ModalsTop/ModalsTop';
import { AuthLogin } from './AuthForm/AuthLogin/AuthLogin';
import { AuthRegister } from './AuthForm/AuthRegister/AuthRegister';

import s from './Auth.module.scss';
import { tabsItems } from './Auth.data';

export const Auth = (): JSX.Element => {
    const [mode, setMode] = useState<'login' | 'register'>('login');

    return (
        <div className={s.auth}>
            <ModalsTop title={mode === 'register' ? 'Регистрация' : 'Войти в кабинет'} />
            <Tabs className={s.tabs}>
                {tabsItems.map((i) => (
                    <Tab key={i.id} isSelected={mode === i.mode} onClick={() => setMode(i.mode as SetStateAction<'login' | 'register'>)}>
                        {i.text}
                    </Tab>
                ))}
            </Tabs>
            {mode === 'register' ? <AuthRegister /> : <AuthLogin />}
        </div>
    );
};
