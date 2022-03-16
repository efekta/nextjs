import cn from 'classnames';
import { useIsLarge } from '@client/hooks/useMediaQuery';
import { useTypedDispatch } from '@client/hooks/useTypedDispatch';
import { Icon, Title } from '@/ui';
import { ModalsMainTopProps } from './ModalsMainTop.props';
import s from './ModalsMainTop.module.scss';

export const ModalsMainTop = ({title, className}: ModalsMainTopProps): JSX.Element => {
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

