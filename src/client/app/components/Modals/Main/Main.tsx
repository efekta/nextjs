import { SetStateAction, useState } from 'react';

import { ModalsMainTop } from '../ModalsMainTop/ModalsMainTop';
import { MainLogin } from './MainForm/MainLogin/MainLogin';
import { MainRegister } from './MainForm/MainRegister/MainRegister';
import s from './Main.module.scss';
import {useTypedDispatch} from "@client/hooks/useTypedDispatch";
import {useSelector} from "react-redux";
import {getPublicModal} from "@store/models/modals/selectors";
import {Button, Icon} from "@/ui";
import { useForm, FormProvider } from 'react-hook-form';
import { PublicModals } from '../../Modals/Modals.types';
import {useIsLarge} from "@client/hooks/useMediaQuery";


export const Main = (): JSX.Element => {
    const { modals: { showPublicModal, hideModal } } = useTypedDispatch();
    const [mode, setMode] = useState<'login' | 'register'>('register');
    const isLarge = useIsLarge();
    // const { modals: { hideModal } } = useTypedDispatch();
    // const bla = (() => {
    //     showPublicModal('login');
    // });
    return (
        <div className={s.main}>
            <button className={s.backButton} onClick={() => {setMode('register')}}>
                <Icon icon='arrow' width={24} height={24}/>
            </button>

            <ModalsMainTop title={mode === 'register' ? 'Регистрация' : 'Войти в кабинет'} />

            {mode === 'register' ? <MainRegister /> : <MainLogin />}

            <Button variant='ghost' type='button' onClick={() => {setMode('login')}}>
                Уже есть аккаунт
            </Button>

        </div>
    );
};
