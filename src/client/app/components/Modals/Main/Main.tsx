import { SetStateAction, useState } from 'react';
import {Button, Form, Icon, Title} from '@/ui';
import { yupResolver } from '@hookform/resolvers/yup';

import { FormProvider, useForm } from 'react-hook-form';

import Link from 'next/link';

import s from './Main.module.scss';
import {FormInput} from "@/components";
import {RegisterValidation} from "@client/utils/schemas/register.validation";
import {useTypedDispatch} from "@client/hooks/useTypedDispatch";
import cn from "classnames";
import { ModalsMainTop } from '../ModalsMainTop/ModalsMainTop';



export const Main = (): JSX.Element => {
    const form = useForm({
        mode: 'onTouched',
        resolver: yupResolver(RegisterValidation),
    });


    const [mode, setMode] = useState<'login' | 'register'>('register');

    return (
        <div className={s.main}>
            <ModalsMainTop title={'Регистрация'} />

            <FormProvider {...form}>
                <Form>
                    <p>На данный email мы отправим письмо с QR-кодом для автоматической настройки виртуальной eSIM на Вашем устройстве. Так же мы создадим создадим Личный кабинет, привязанный к указанному e-mail.</p>
                    <FormInput full title='Электронная почта' name='email' inputMode='email' />
                    <FormInput full type='password' title='Пароль' name='password' />
                    <FormInput full type='password' title='Повторите пароль' name='passwordConfirm' />
                    <Button>
                        Создать аккаунт
                    </Button>
                    <Button variant={'ghost'}>Уже есть аккаунт</Button>
                </Form>
            </FormProvider>

        </div>
    );
};
