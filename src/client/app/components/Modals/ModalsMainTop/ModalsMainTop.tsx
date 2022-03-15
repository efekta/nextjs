import cn from 'classnames';

import { useIsLarge } from '@client/hooks/useMediaQuery';
import { useTypedDispatch } from '@client/hooks/useTypedDispatch';

import { Icon, Title } from '@/ui';

import s from './ModalsMainTop.module.scss';
import { ModalsMainTopProps } from './ModalsMainTop.props';

export const ModalsMainTop = ({title, className}: ModalsMainTopProps): JSX.Element => {
    const isLarge = useIsLarge();
    const { modals: { hideModal } } = useTypedDispatch();

    return (
        <>
            {
                !isLarge && (
                    <div className={cn(s.top, className)}>
                        <button className={s.backButton}>
                            <Icon icon='arrow' width={24} height={24}/>
                        </button>
                        <Title>{'title'}</Title>
                        <button onClick={hideModal} aria-label='Закрыть модальное окно'>
                            <Icon icon='close' width={32} height={32}/>
                        </button>
                    </div>
                )
            }
        </>
    );
};

