import { createModel } from '@rematch/core';
import type { RootModel } from '../index';
import { LoadingType } from '../types';
import { UserType } from './types';
import api from '../../data-access';

const defaultUser = {
    email: {
        address: '',
        confirmed: true,
    },
    document: {
        completelyFilled: true,
        name: '',
        surname: '',
        patronymic: '',
        phone: '',
        birthday: '',
        address: {
            country: '',
            city: '',
            street: '',
            house: '',
            flat: '',
        },
        sn: '',
        issueDate: '',
    },
};

const initialState: {
    data: UserType;
    loadStatus: LoadingType;
} = {
    data: defaultUser,
    loadStatus: {
        inProgress: false,
        status: 'initial',
    },
};

const user = createModel<RootModel>()({
    state: initialState,
    reducers: {
        setUser(state, data: UserType) {
            return { ...state, data };
        },
        setLoadStatus(state, loadStatus) {
            return { ...state, loadStatus: { ...state.loadStatus, ...loadStatus } };
        },
    },
    effects: (dispatch) => ({
        async getUser() {
            try {
                const {
                    data: { success },
                } = await api.user.get();
                if (success) {
                    dispatch.user.setUser(success);
                    dispatch.user.setLoadStatus({
                        inProgress: false,
                    });
                }
            } catch (error) {
                console.log(error);
                dispatch.user.setLoadStatus({
                    inProgress: false,
                    error,
                });
            }
        },
    }),
});

export default user;
