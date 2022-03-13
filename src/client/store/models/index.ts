import { Models } from '@rematch/core';
// import auth from './auth';
import modals from './modals';

export interface RootModel extends Models<RootModel> {
    // auth: typeof auth;
    modals: typeof modals;
}

export const models: RootModel = { modals };
