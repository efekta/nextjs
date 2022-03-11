import { createModel } from '@rematch/core';

import type { RootModel } from '../index';
import { ModalsModelType, ModalsPrivateType, ModalsPublicType } from './types';

const initialState: ModalsModelType = {
    public: '',
    private: '',
};

const modals = createModel<RootModel>()({
    state: initialState,
    reducers: {
        hideModal() {
            return initialState;
        },

        showPublicModal(state, type: ModalsPublicType) {
            return { ...state, public: type };
        },

        showPrivateModal(state, type: ModalsPrivateType) {
            return { ...state, private: type };
        },
    },
});

export default modals;
