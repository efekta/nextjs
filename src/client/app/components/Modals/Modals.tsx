import { useSelector } from 'react-redux';
import { useTypedDispatch } from '@client/hooks/useTypedDispatch';

import { getPublicModal } from '@store/models/modals/selectors';

import { Modal } from '@/ui';
import { Feedback } from './Feedback/Feedback';

import { PublicModals } from './Modals.types';

export const Modals = (): JSX.Element => {
    const mode = useSelector(getPublicModal);

    const {
        modals: { hideModal },
    } = useTypedDispatch();

    const contentMap: Record<PublicModals, JSX.Element> = {
        feedback: <Feedback />,
    };

    return (
        <Modal isOpen={!!mode} onRequestClose={hideModal} shouldCloseOnEsc shouldCloseOnOverlayClick>
            {contentMap[mode]}
        </Modal>
    );
};
