import { LoadingType } from '../types';

export type LoginErrors = 'error' | 'unavailable';

export type RestorePasswordStates = 'error' | 'unavailable' | 'initial';

export type SetNewPasswordMessages = 'error' | 'inProgress';

export type UserType = {
    email: string;
    isAuth: boolean;
};

export type RestoreStatus = 'initial' | 'inProgress' | 'error' | 'success';

export type AuthModelType = {
    loading: LoadingType;
    user: UserType;
    restore: { status: RestoreStatus };
};
