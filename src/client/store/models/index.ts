import { Models } from '@rematch/core';

import auth from './auth';
import user from './user';
import modals from './modals';

export interface RootModel extends Models<RootModel> {
    auth: typeof auth;
    modals: typeof modals;
    user: typeof user;
}

export const models: RootModel = { auth, user, modals };
