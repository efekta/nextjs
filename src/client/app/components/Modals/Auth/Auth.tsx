import s from './Auth.module.scss';
import { useTypedDispatch } from '@client/hooks/useTypedDispatch';
import { Input, Icon } from '@/ui';
// import { FormInput } from "@/components";

export const Auth = (): JSX.Element => {
    const { modals: { hideModal } } = useTypedDispatch();
    return (
        <div className={s.registration}>
            <button className={s.close} aria-label='Закрыть модальное окно' onClick={hideModal}>
                <Icon icon='close' width={24} height={24} />
            </button>
            <h2 className={s.title}>Регистрация и получение виртуальной eSIM</h2>
            <Input full title='Электронная почта' name='email' inputMode='email' />
        </div>
    );
};
