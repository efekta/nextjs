import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import {Button, Form} from '@/ui';

import { FormInput } from '@/components';

import { RegisterValidation } from '@client/utils/schemas/register.validation';

import s from './MainRegister.module.scss';
import { MainLogin } from '../MainLogin/MainLogin';
import {SetStateAction, useState} from "react";
import {mainItems} from "@client/app/components/Modals/Main/Main.data";

export const MainRegister = (): JSX.Element => {
    const form = useForm({
        mode: 'onTouched',
        resolver: yupResolver(RegisterValidation),
    });
    const [mode, setMode] = useState<'login' | 'register'>('register');

    const onSubmit = form.handleSubmit((data) => console.log(data));

    return (
    <FormProvider {...form}>
        <Form>
            <p>На данный email мы отправим письмо с QR-кодом для автоматической настройки виртуальной eSIM на Вашем устройстве. Так же мы создадим создадим Личный кабинет, привязанный к указанному e-mail.</p>
            <FormInput full title='Электронная почта' name='email' inputMode='email' />
            <FormInput full type='password' title='Пароль' name='password' />
            <FormInput full type='password' title='Повторите пароль' name='passwordConfirm' />
            <Button disabled={!form.formState.isValid} onClick={onSubmit}>
                Создать аккаунт
            </Button>
        </Form>

    </FormProvider>

    );
};
