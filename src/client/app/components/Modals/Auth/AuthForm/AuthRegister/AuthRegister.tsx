import { yupResolver } from '@hookform/resolvers/yup';

import { FormProvider, useForm } from 'react-hook-form';

import Link from 'next/link';
import { Button, Form } from '@/ui';

import { FormInput } from '@/components';

import { RegisterValidation } from '@client/utils/schemas/register.validation';

import s from './AuthRegister.module.scss';

export const AuthRegister = (): JSX.Element => {
    const form = useForm({
        mode: 'onTouched',
        resolver: yupResolver(RegisterValidation),
    });

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
                <Button variant={'ghost'}>Уже есть аккаунт</Button>
                <p className={s.agreement}>
                    <span>Нажимая на кнопку «Создать аккаунт» вы принимаете условия </span>
                    <Link href='/user-agreement'>
                        <a>пользовательского соглашения</a>
                    </Link>
                </p>
            </Form>
        </FormProvider>
    );
};
