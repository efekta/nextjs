import { SetStateAction, useState } from 'react';
import {useIsLarge} from "@client/hooks/useMediaQuery";
import { ModalsMainTop } from '../ModalsMainTop/ModalsMainTop';
import { MainLogin } from './MainForm/MainLogin/MainLogin';
import { MainRegister } from './MainForm/MainRegister/MainRegister';
import {mainItems} from "./Main.data";
import { Button, Icon, Tab, Tabs } from "@/ui";
import s from './Main.module.scss';

export const Main = (): JSX.Element => {
    const [mode, setMode] = useState<'login' | 'register'>('register');
    const isLarge = useIsLarge();

    const renderBackBtn = () => {
        if (!isLarge && mode === 'login') {
            return (
                <button className={s.backButton} onClick={() => {
                    setMode('register');
                }}>
                    <Icon icon='arrow' width={24} height={24}/>
                </button>
            );
        }
    };

    const renderLoginBtn = () => {
        if (!isLarge && mode === 'register') {
            return (
                <Button className={s.loginButton} variant='ghost' type='button' onClick={() => {setMode('login');}}>
                    Уже есть аккаунт
                </Button>
            );
        }
    };

    return (
        <div className={s.main}>
            {renderBackBtn()}
            <ModalsMainTop title={mode === 'register' ? 'Регистрация' : 'Войти в кабинет'} />
            {
                isLarge && (
                    <Tabs className={s.tabs}>
                        {mainItems.map((i) => (
                            <Tab key={i.id} isSelected={mode === i.mode} onClick={() => setMode(i.mode as SetStateAction<'login' | 'register'>)}>
                                {i.text}
                            </Tab>
                        ))}
                    </Tabs>
                )
            }
            {mode === 'register' ? <MainRegister /> : <MainLogin />}
            {renderLoginBtn()}
        </div>
    );
};
