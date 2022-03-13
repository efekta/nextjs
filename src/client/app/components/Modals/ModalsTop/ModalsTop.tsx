import cn from 'classnames';

import { useIsLarge } from '@client/hooks/useMediaQuery';
import { useTypedDispatch } from '@client/hooks/useTypedDispatch';

import { Icon, Title } from '@/ui';

import s from './ModalsTop.module.scss';
import { ModalsTopProps } from './ModalsTop.props';

export const ModalsTop = ({title, className}: ModalsTopProps): JSX.Element => {
    const isLarge = useIsLarge();
    const { modals: { hideModal } } = useTypedDispatch();

    return (
        <>
            {
                !isLarge && (
                    <div className={cn(s.top, className)}>
                        <Title>{title}</Title>
                        <button onClick={hideModal} aria-label='Закрыть модальное окно'>
                            <Icon icon='close' width={32} height={32}/>
                        </button>
                    </div>
                )
            }
        </>
    );
};
