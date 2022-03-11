import cn from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { ComponentPropsWithRef, ReactElement, ReactNode, useEffect } from 'react';

import useScrollbarSize from 'react-scrollbar-size';
import { useIsLarge } from '@client/hooks/useMediaQuery';
import { useToggle } from '@client/hooks/useToggle';

import ReactModal from 'react-modal';

import s from './Modal.module.scss';
import { ModalProps } from './Modal.props';

ReactModal.setAppElement('#__next');

export const Modal = ({ isOpen = false, className, children, ...props }: ModalProps): JSX.Element => {
    const { width } = useScrollbarSize();
    const isLarge = useIsLarge();
    const [isLoaded, setLoaded] = useToggle(false);

    useEffect(() => {
        setLoaded();
    }, []);

    if (!isLoaded) {
        return <></>;
    }

    const backdrop = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
        exit: { opacity: 0, transition: { duration: 1 } },
    };

    const content = {
        hidden: { x: '-100%', opacity: 1 },
        visible: { x: '0%', opacity: 1, transition: { duration: 1 } },
        exit: { x: '-100%', opacity: 1, transition: { duration: 1 } },
    };

    const contentLarge = {
        hidden: { top: '50%', y: '-60%', opacity: 0, x: '-50%' },
        visible: { top: '50%', y: '-50%', opacity: 1, transition: { duration: 1 } },
        exit: { top: '50%', y: '-60%', opacity: 0, transition: { duration: 1 } },
    };

    const afterOpenHandler = () => {
        if (document.documentElement.scrollHeight > document.documentElement.clientHeight) document.documentElement.style.marginRight = `${width}px`;
        document.documentElement.classList.add('modal-root');
    };

    const afterCloseHandler = () => {
        document.documentElement.style.marginRight = '0';
        document.documentElement.classList.remove('modal-root');
    };

    return (
        <AnimatePresence exitBeforeEnter>
            {isOpen && (
                <ReactModal
                    className={cn(s.modal, className)}
                    portalClassName={s.portal}
                    overlayClassName={s.overlay}
                    bodyOpenClassName='modal--open'
                    isOpen={isOpen}
                    onAfterOpen={afterOpenHandler}
                    onAfterClose={afterCloseHandler}
                    overlayElement={(props: ComponentPropsWithRef<any>, contentElement: ReactElement) => (
                        <motion.div animate='visible' initial='hidden' exit='exit' variants={backdrop} {...props}>
                            {contentElement}
                        </motion.div>
                    )}
                    contentElement={(props: ComponentPropsWithRef<any>, children: ReactNode) =>
                        <>
                            {isLarge && (
                                <motion.div animate='visible' initial='hidden' exit='exit' variants={contentLarge} {...props}>
                                    {children}
                                </motion.div>
                            )}

                            {!isLarge && (
                                <motion.div animate='visible' initial='hidden' exit='exit' variants={content} {...props}>
                                    {children}
                                </motion.div>
                            )}
                        </>

                    }
                    {...props}
                >
                    {children}
                </ReactModal>
            )}
        </AnimatePresence>
    );
};
