import { RootState } from '../../index';

export const getUser = (state: RootState) => state.auth.user;
export const getLoadingStatus = (state: RootState) => state.auth.loading;
export const getRestoreStatus = (state: RootState) => state.auth.restore.status;
