import { NextRouter } from 'next/router';
import { createModel } from '@rematch/core';
import type { RootModel } from '../index';
import api from '@client/store/data-access';
import storage from '@client/store/data-access/storage';
import { LoadingType } from '../types';
import { AuthModelType, RestoreStatus, UserType } from './types';
import type { LoginRequest, PasswordRestoreRequest, VerifyPasswordRestoreRequest } from '@client/store/data-access/auth/types';

const initialLoading: LoadingType = {
    inProgress: false,
    status: 'initial',
};

const initialState: AuthModelType = {
    loading: initialLoading,
    restore: {
        status: 'initial',
    },
    user: {
        isAuth: false,
        email: '',
    },
};

const auth = createModel<RootModel>()({
    state: initialState,
    reducers: {
        setUserAuth(state, user: UserType) {
            return { ...state, user };
        },
        setLoading(state, loading: LoadingType) {
            return { ...state, loading };
        },
        startRequest(state) {
            return { ...state, loading: { ...state.loading, inProgress: true } };
        },
        setRestoreStatus(state, status: RestoreStatus) {
            return { ...state, restore: { status } };
        },
        cleanAuth(state) {
            const newRestoreStatus = state.restore.status === 'error' ? 'inProgress' : state.restore.status;
            return { ...state, loading: initialLoading, restore: { status: newRestoreStatus } };
        },
    },
    effects: (dispatch) => ({
        async login({ data, router }: { data: LoginRequest; router: NextRouter }) {
            try {
                dispatch.auth.startRequest();
                const {
                    data: { success },
                } = await api.auth.login(data);

                const status = success ? 'success' : 'error';
                dispatch.auth.setLoading({ inProgress: false, status });
                if (success) {
                    dispatch.auth.setUserAuth({
                        isAuth: true,
                        email: data.email,
                    });
                    storage.setItem('token', success.token);
                    storage.setItem('email', data.email);
                    dispatch.modals.hideModal();
                    await router.push('/cabinet');
                }
            } catch (error) {
                dispatch.auth.setLoading({
                    inProgress: false,
                    status: 'unavailable',
                });
            }
        },
        async restorePassword(data: PasswordRestoreRequest) {
            try {
                dispatch.auth.startRequest();
                const {
                    data: { success },
                } = await api.auth.passwordRestore(data);

                const status = success ? 'initial' : 'error';
                dispatch.auth.setLoading({ inProgress: false, status });
                if (success) {
                    dispatch.modals.showPublicModal('emailSent');
                }
            } catch (error) {
                dispatch.auth.setLoading({
                    inProgress: false,
                    status: 'unavailable',
                });
            }
        },
        async changePassword(data: VerifyPasswordRestoreRequest) {
            try {
                dispatch.auth.startRequest();
                const {
                    data: { success },
                } = await api.auth.verifyPasswordRestore(data);

                const status = success ? 'initial' : 'error';
                const restoreStatus = success ? 'success' : 'error';
                dispatch.auth.setLoading({ inProgress: false, status });
                dispatch.auth.setRestoreStatus(restoreStatus);
            } catch (error) {
                dispatch.auth.setLoading({
                    inProgress: false,
                    status: 'unavailable',
                });
                dispatch.auth.setRestoreStatus('error');
            }
        },

        startRestore() {
            dispatch.auth.setRestoreStatus('inProgress');
            dispatch.modals.showPublicModal('auth');
        },
    }),
});

export default auth;
