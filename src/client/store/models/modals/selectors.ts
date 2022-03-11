import { RootState } from '../../index';

export const getPrivateModal = (state: RootState) => state.modals.private;
export const getPublicModal = (state: RootState) => state.modals.public;
