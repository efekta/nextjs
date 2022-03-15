import { useSelector } from 'react-redux';
import { useTypedDispatch } from '@client/hooks/useTypedDispatch';

import { getPublicModal } from '@store/models/modals/selectors';

import { Modal } from '@/ui';
import { Auth } from './Auth/Auth';
import { Main } from './Main/Main';

import { PublicModals } from './Modals.types';

export const Modals = (): JSX.Element => {
    const mode = useSelector(getPublicModal);

    const {
        modals: { hideModal },
    } = useTypedDispatch();

    const contentMap: Record<PublicModals, JSX.Element> = {
        auth: <Auth />,
        main: <Main />
    };

    return (
        <Modal isOpen={!!mode} onRequestClose={hideModal} shouldCloseOnEsc shouldCloseOnOverlayClick>
            {contentMap[mode]}
        </Modal>
    );
};
